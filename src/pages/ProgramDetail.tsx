import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Home, Mail, Phone, UserRound } from "lucide-react";
import { useGetProgramQuery } from "../features/healthPillars/programsApi";
import CountryBadge from "../components/CountryBadge";
import { Helmet } from "react-helmet-async";

const CONTACT_PLACEHOLDER = "/images/placeholders/contact-avatar.svg";

const formatStatus = (state?: string | null) =>
  state
    ? state.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "";

const statusTone: Record<string, { bg: string; text: string }> = {
  active: { bg: "bg-green-100", text: "text-green-700" },
  paused: { bg: "bg-yellow-100", text: "text-yellow-700" },
  archived: { bg: "bg-slate-200", text: "text-slate-700" },
  upcoming: { bg: "bg-blue-100", text: "text-blue-700" },
};

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: program, isLoading, isError } = useGetProgramQuery(id ?? "");

  const contacts = React.useMemo(() => {
    if (!program) {
      return [] as Array<{
        name: string;
        bio: string;
        contact: string;
        image: string;
      }>;
    }

    const normalized = Array.isArray(program.contact_people)
      ? program.contact_people
          .map((person) => ({
            name: (person.name ?? "").trim(),
            bio: (person.bio ?? "").trim(),
            contact: (person.contact ?? "").trim(),
            image: (person.image ?? "").trim(),
          }))
          .filter((person) => person.name || person.bio || person.contact)
      : [];

    if (normalized.length > 0) {
      return normalized;
    }

    if (
      program.contact_name ||
      program.contact_bio ||
      program.contact_details
    ) {
      return [
        {
          name: (program.contact_name ?? "").trim(),
          bio: (program.contact_bio ?? "").trim(),
          contact: (program.contact_details ?? "").trim(),
          image: "",
        },
      ];
    }

    return [] as Array<{
      name: string;
      bio: string;
      contact: string;
      image: string;
    }>;
  }, [program]);

  const countryChips = React.useMemo(() => {
    if (!program?.country) return [] as string[];

    const splitCountries = program.country
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return Array.from(new Set(splitCountries));
  }, [program?.country]);

  const partnerInstitutions = React.useMemo(() => {
    const raw = program?.partners_involved;

    if (!raw) {
      return [] as string[];
    }

    const tryParseArray = (input: unknown): string[] => {
      if (Array.isArray(input)) {
        return input
          .map((item) => (typeof item === "string" ? item.trim() : ""))
          .filter(Boolean);
      }

      return [];
    };

    if (raw.trim().startsWith("[")) {
      try {
        return tryParseArray(JSON.parse(raw));
      } catch (error) {
        // continue with text parsing
      }
    }

    return raw
      .split(/,|\n{2,}|\r?\n|\|/)
      .map((entry) => entry.replace(/^[-•\s]+/, "").trim())
      .filter(Boolean);
  }, [program?.partners_involved]);

  const heroSummary = React.useMemo(() => {
    const shortDescription =
      typeof (program as any)?.short_description === "string"
        ? (program as any).short_description.trim()
        : "";

    if (shortDescription) {
      return shortDescription;
    }

    const descriptionHtml = program?.description ?? "";
    if (!descriptionHtml) {
      return "";
    }

    const plain = descriptionHtml
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return plain.length > 220 ? `${plain.slice(0, 217).trimEnd()}…` : plain;
  }, [program]);

  const partnerCount = partnerInstitutions.length;
  const contactCount = contacts.length;

  const highlightCards = React.useMemo(
    () => [
      {
        title: "Regional impact",
        description: countryChips.length
          ? `Active across ${countryChips.length} ${
              countryChips.length === 1 ? "country" : "countries"
            }${
              countryChips.length <= 3 ? ` (${countryChips.join(", ")})` : ""
            }.`
          : "Reaching partners and communities across Africa and beyond.",
        gradient: "from-emerald-500/15 via-transparent to-emerald-500/5",
      },
      {
        title: "Collaborative strength",
        description: partnerCount
          ? `Powered by ${partnerCount} strategic partner${
              partnerCount === 1 ? "" : "s"
            } driving shared outcomes.`
          : "New institutional collaborators are being onboarded.",
        gradient: "from-indigo-500/15 via-transparent to-indigo-500/5",
      },
      {
        title: "Guided support",
        description: contactCount
          ? `${contactCount} dedicated contact${
              contactCount === 1 ? "" : "s"
            } ready to assist applicants and stakeholders.`
          : "Dedicated contact points will be announced soon.",
        gradient: "from-amber-500/15 via-transparent to-amber-500/5",
      },
    ],
    [countryChips, partnerCount, contactCount]
  );

  const statusNarrative = React.useMemo(() => {
    switch (program?.state) {
      case "active":
        return "Now enrolling partners and participants.";
      case "upcoming":
        return "Launching soon—register your interest to stay ahead.";
      case "paused":
        return "Temporarily paused while enhancements are introduced.";
      case "archived":
        return "Preserved as a reference for future collaborative efforts.";
      default:
        return "Stay tuned for the latest lifecycle updates.";
    }
  }, [program?.state]);

  React.useEffect(() => {
    if (isError) {
      navigate("/programs", { replace: true });
    }
  }, [isError, navigate]);

  if (isLoading || !program) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-ahc-green border-t-transparent" />
      </div>
    );
  }

  const imageSrc =
    program.image ||
    program.image_thumb ||
    "/images/pillars/power-of-partnership.jpg";
  const statusStyle = statusTone[program.state] ?? statusTone.upcoming;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: program.title, href: null },
  ];

  const categories = program.category_labels?.length
    ? program.category_labels
    : program.categories;
  const statusLabel = formatStatus(program.state);
  const primaryContact = contacts[0] ?? null;

  const contactLink = primaryContact?.contact
    ? (() => {
        const value = primaryContact.contact.trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return `mailto:${value}`;
        }
        if (/^https?:\/\//.test(value)) {
          return value;
        }
        return null;
      })()
    : null;

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>{program.title} – AHC Program</title>
        <meta
          name="description"
          content={
            heroSummary || `Learn more about the ${program.title} program.`
          }
        />
        <meta property="og:title" content={`${program.title} – AHC Program`} />
        <meta
          property="og:description"
          content={
            heroSummary || `Learn more about the ${program.title} program.`
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://ahc.tewostechsolutions.com/programs/${program.id}`}
        />
        <meta
          property="og:image"
          content={
            imageSrc.startsWith("http")
              ? imageSrc
              : `https://ahc.tewostechsolutions.com${imageSrc}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${program.title} – AHC Program`} />
        <meta
          name="twitter:description"
          content={
            heroSummary || `Learn more about the ${program.title} program.`
          }
        />
        <meta
          name="twitter:image"
          content={
            imageSrc.startsWith("http")
              ? imageSrc
              : `https://ahc.tewostechsolutions.com${imageSrc}`
          }
        />
      </Helmet>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={program.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-ahc-green/40" />
          <div className="absolute -right-40 top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-ahc-green/30 blur-3xl lg:block" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-24 lg:py-32">
          <nav className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-10">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index !== breadcrumbs.length - 1 && (
                  <span className="text-white/50">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-4xl space-y-8 text-white">
            <div className="inline-flex items-center gap-3">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${statusStyle.bg} ${statusStyle.text}`}
              >
                {statusLabel}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                Program Spotlight
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-xl">
              {program.title}
            </h1>

            <p className="max-w-3xl text-base md:text-lg text-white/80">
              {heroSummary ||
                "Discover how this initiative is transforming health outcomes across the continent through collaborative innovation and bold partnerships."}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    Host Organisation
                  </p>
                  <p className="font-semibold text-white text-lg">
                    {program.host}
                  </p>
                </div>
              </div>

              {countryChips.length > 0 && (
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-2">
                  {countryChips.map((country) => (
                    <CountryBadge
                      key={`${program.id}-hero-country-${country}`}
                      country={country}
                      className="bg-white/90 text-gray-800 border-transparent"
                    />
                  ))}
                </div>
              )}
            </div>

            {categories?.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {categories.map((label) => (
                  <span
                    key={`${program.id}-hero-${label}`}
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-ahc-green/8" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <article className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl">
                <div className="absolute -left-32 -top-32 h-56 w-56 bg-ahc-green/15 blur-3xl" />
                <div className="absolute -right-24 -bottom-32 h-64 w-64 bg-ahc-blue/15 blur-3xl" />
                <div className="relative p-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ahc-green/15 text-ahc-green-dark text-xs font-semibold uppercase tracking-wide">
                    Program overview
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    A deeper look into the initiative
                  </h2>
                  <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: program.description || "",
                    }}
                  />
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl space-y-8 p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="pl-2 border-l-4 border-ahc-green">
                    <p className="text-xs uppercase tracking-[0.3em] text-ahc-green-dark">
                      Collaborators
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Partner institutions
                    </h2>
                  </div>
                  <span className="text-sm font-semibold text-ahc-green-dark">
                    {partnerCount
                      ? `${partnerCount} active partner${
                          partnerCount === 1 ? "" : "s"
                        }`
                      : "Partner list coming soon"}
                  </span>
                </div>

                {partnerInstitutions.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {partnerInstitutions.map((partner, index) => (
                      <div
                        key={`${program.id}-partner-${index}`}
                        className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-ahc-green/10 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-start gap-4 p-6">
                          <span className="text-lg font-bold text-ahc-green/80">
                            #{String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="space-y-2">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ahc-green-dark">
                              Strategic partner
                            </span>
                            <p className="text-lg font-semibold text-gray-900 leading-snug">
                              {partner}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    Partner universities will be announced soon. Check back for
                    future updates.
                  </p>
                )}
              </article>

              <section
                id="program-contacts"
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl p-10 space-y-8"
              >
                <header className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ahc-green/10">
                    <UserRound className="w-6 h-6 text-ahc-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ahc-green uppercase tracking-wide">
                      Get in contact
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Meet the program contacts
                    </h2>
                  </div>
                </header>

                {contacts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {contacts.map((contact, index) => (
                      <div
                        key={`${contact.name || "contact"}-${index}`}
                        className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
                      >
                        {(() => {
                          const trimmed = contact.contact?.trim() ?? "";
                          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                            trimmed
                          );
                          const isUrl = /^https?:\/\//.test(trimmed);
                          const contactHref = isEmail
                            ? `mailto:${trimmed}`
                            : isUrl
                            ? trimmed
                            : undefined;
                          const contactTarget = isUrl ? "_blank" : undefined;
                          const contactRel = isUrl ? "noreferrer" : undefined;
                          const avatarSrc =
                            contact.image && contact.image.trim()
                              ? contact.image.trim()
                              : CONTACT_PLACEHOLDER;

                          const handleImageError = (
                            event: React.SyntheticEvent<HTMLImageElement>
                          ) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = CONTACT_PLACEHOLDER;
                          };

                          return (
                            <>
                              <div className="relative h-40 w-full bg-gray-100">
                                <img
                                  src={avatarSrc}
                                  alt={contact.name || "Program contact"}
                                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                  onError={handleImageError}
                                />
                              </div>
                              <div className="p-6 space-y-4">
                                <div className="space-y-1">
                                  <p className="text-xs uppercase tracking-wide text-ahc-green-dark">
                                    Program contact
                                  </p>
                                  <h3 className="text-lg font-bold text-gray-900">
                                    {contact.name || "Program contact"}
                                  </h3>
                                </div>
                                <p className="text-sm text-gray-600 whitespace-pre-line">
                                  {contact.bio ||
                                    "Bio information will be provided soon."}
                                </p>
                                <div className="flex flex-col gap-2 text-sm text-ahc-green">
                                  {trimmed ? (
                                    <a
                                      href={contactHref}
                                      target={contactTarget}
                                      rel={contactRel}
                                      className="inline-flex items-center gap-2 font-semibold text-ahc-green hover:text-ahc-green-dark break-words"
                                    >
                                      <Mail className="w-4 h-4" />
                                      {trimmed}
                                    </a>
                                  ) : (
                                    <span className="inline-flex items-center gap-2 text-gray-500">
                                      <Phone className="w-4 h-4" />
                                      Reach out to the host organisation for
                                      contact details.
                                    </span>
                                  )}
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Contact information will be provided soon.
                  </p>
                )}
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-8 space-y-6">
                <div className="rounded-3xl border border-white/70 bg-white shadow-xl backdrop-blur p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Program at a glance
                  </h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">Status</p>
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${statusStyle.bg} ${statusStyle.text}`}
                      >
                        {statusLabel}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {statusNarrative}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">
                        Host organisation
                      </p>
                      <p>{program.host}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">Countries</p>
                      {countryChips.length ? (
                        <div className="flex flex-wrap gap-2">
                          {countryChips.map((country) => (
                            <CountryBadge
                              key={`${program.id}-aside-country-${country}`}
                              country={country}
                            />
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Global</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">Pillars</p>
                      {categories?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {categories.map((label) => (
                            <span
                              key={`${program.id}-aside-${label}`}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">
                          Pillar information coming soon.
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">
                        Partner network
                      </p>
                      <p>
                        {partnerCount
                          ? `${partnerCount} partner${
                              partnerCount === 1 ? "" : "s"
                            }`
                          : "To be announced"}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#program-contacts"
                    className="inline-flex items-center justify-center rounded-full bg-ahc-green text-white font-semibold px-4 py-2 text-sm hover:bg-ahc-green-dark transition"
                  >
                    Contact programme team
                  </a>
                </div>

                {primaryContact && (
                  <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-ahc-green/10 via-white to-ahc-blue/10 shadow-xl p-8 space-y-4 text-sm text-gray-700">
                    <h4 className="text-lg font-bold text-gray-900">
                      Primary contact
                    </h4>
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          primaryContact.image && primaryContact.image.trim()
                            ? primaryContact.image.trim()
                            : CONTACT_PLACEHOLDER
                        }
                        alt={primaryContact.name || "Primary contact"}
                        className="h-12 w-12 rounded-full object-cover border"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = CONTACT_PLACEHOLDER;
                        }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {primaryContact.name || "Not specified"}
                        </p>
                        {primaryContact.contact &&
                          (contactLink ? (
                            <a
                              href={contactLink}
                              className="inline-flex items-center gap-2 text-ahc-green font-semibold break-words"
                            >
                              <Mail className="w-4 h-4" />
                              {primaryContact.contact}
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-gray-600 break-words">
                              <Phone className="w-4 h-4 text-ahc-green" />
                              {primaryContact.contact}
                            </span>
                          ))}
                      </div>
                    </div>
                    {primaryContact.bio && (
                      <p className="text-xs text-gray-600 whitespace-pre-line">
                        {primaryContact.bio}
                      </p>
                    )}
                  </div>
                )}

                <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-ahc-green/10 via-white to-ahc-blue/10 shadow-xl p-8 space-y-4 text-sm text-gray-700">
                  <h4 className="text-lg font-bold text-gray-900">
                    Looking to collaborate?
                  </h4>
                  <p>
                    Share your interest to co-design research, placements, or
                    learning journeys aligned with this programme.
                  </p>
                  <p className="text-xs text-gray-500">
                    We’ll connect you with the relevant contact to explore next
                    steps.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
