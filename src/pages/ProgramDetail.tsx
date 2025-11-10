import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Globe2,
  Home,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from 'lucide-react';
import { useGetProgramQuery } from '../features/healthPillars/programsApi';

const CONTACT_PLACEHOLDER = '/images/placeholders/contact-avatar.svg';

const formatStatus = (state?: string | null) =>
  state ? state.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()) : '';

const statusTone: Record<string, { bg: string; text: string }> = {
  active: { bg: 'bg-green-100', text: 'text-green-700' },
  paused: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  archived: { bg: 'bg-slate-200', text: 'text-slate-700' },
  upcoming: { bg: 'bg-blue-100', text: 'text-blue-700' },
};

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: program, isLoading, isError } = useGetProgramQuery(id ?? '');

  const contacts = React.useMemo(() => {
    if (!program) {
      return [] as Array<{ name: string; bio: string; contact: string; image: string }>;
    }

    const normalized = Array.isArray(program.contact_people)
      ? program.contact_people
          .map((person) => ({
            name: (person.name ?? '').trim(),
            bio: (person.bio ?? '').trim(),
            contact: (person.contact ?? '').trim(),
            image: (person.image ?? '').trim(),
          }))
          .filter((person) => person.name || person.bio || person.contact)
      : [];

    if (normalized.length > 0) {
      return normalized;
    }

    if (program.contact_name || program.contact_bio || program.contact_details) {
      return [
        {
          name: (program.contact_name ?? '').trim(),
          bio: (program.contact_bio ?? '').trim(),
          contact: (program.contact_details ?? '').trim(),
          image: '',
        },
      ];
    }

    return [] as Array<{ name: string; bio: string; contact: string; image: string }>;
  }, [program]);

  const countryChips = React.useMemo(() => {
    if (!program?.country) return [] as string[];

    return program.country
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }, [program?.country]);

  const partnerInstitutions = React.useMemo(() => {
    const raw = program?.partners_involved;

    if (!raw) {
      return [] as string[];
    }

    const tryParseArray = (input: unknown): string[] => {
      if (Array.isArray(input)) {
        return input
          .map((item) => (typeof item === 'string' ? item.trim() : ''))
          .filter(Boolean);
      }

      return [];
    };

    if (raw.trim().startsWith('[')) {
      try {
        return tryParseArray(JSON.parse(raw));
      } catch (error) {
        // continue with text parsing
      }
    }

    return raw
      .split(/,|\n{2,}|\r?\n|\|/)
      .map((entry) => entry.replace(/^[-•\s]+/, '').trim())
      .filter(Boolean);
  }, [program?.partners_involved]);

  React.useEffect(() => {
    if (isError) {
      navigate('/programs', { replace: true });
    }
  }, [isError, navigate]);

  if (isLoading || !program) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-ahc-green border-t-transparent" />
      </div>
    );
  }

  const imageSrc = program.image || program.image_thumb || '/images/pillars/power-of-partnership.jpg';
  const statusStyle = statusTone[program.state] ?? statusTone.upcoming;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: program.title, href: null },
  ];

  const categories = program.category_labels?.length ? program.category_labels : program.categories;
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ahc-green/15 via-transparent to-ahc-blue/25" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <nav className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-ahc-green transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-700">{crumb.label}</span>
                )}
                {index !== breadcrumbs.length - 1 && <span className="text-gray-400">•</span>}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid lg:grid-cols-11 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}>
                {statusLabel}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                {program.title}
              </h1>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <Home className="w-5 h-5 text-ahc-green" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Host Organisation</p>
                    <p className="font-semibold text-gray-900">{program.host}</p>
                  </div>
                </div>
                {program.created_at && (
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <Calendar className="w-5 h-5 text-ahc-green" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">Published</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(program.created_at).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {categories?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((label) => (
                    <span
                      key={`${program.id}-${label}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-ahc-green/10 text-ahc-green-dark"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
              {countryChips.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {countryChips.map((country) => (
                    <span
                      key={`${program.id}-${country}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      <Globe2 className="w-4 h-4 text-ahc-green" />
                      {country}
                    </span>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ahc-green hover:text-ahc-green-dark transition"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Programs
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-200">
                <img src={imageSrc} alt={program.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <article className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: program.description || '' }} />
            </article>

            <article className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Partner Institutions</h2>
                <p className="mt-2 text-gray-600">
                  Discover the universities and organisations collaborating to deliver this program.
                </p>
              </div>

              {partnerInstitutions.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {partnerInstitutions.map((partner, index) => (
                    <div
                      key={`${program.id}-partner-${index}`}
                      className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow hover:shadow-lg transition-all p-6"
                    >
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,#16a34a,transparent_60%)]" />
                      <div className="relative space-y-2">
                        <p className="text-lg font-semibold text-gray-900 leading-snug">
                          {partner}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">
                  Partner universities will be announced soon. Check back for future updates.
                </p>
              )}
            </article>

            <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 space-y-8">
              <header className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ahc-green/10">
                  <UserRound className="w-6 h-6 text-ahc-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ahc-green uppercase tracking-wide">Get in contact</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet the program contacts</h2>
                </div>
              </header>

              {contacts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {contacts.map((contact, index) => (
                    <div
                      key={`${contact.name}-${index}`}
                      className="group rounded-2xl border border-gray-100 hover:border-ahc-green/40 bg-white shadow hover:shadow-xl transition-all overflow-hidden"
                    >
                      {(() => {
                        const trimmed = contact.contact?.trim() ?? '';
                        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
                        const isUrl = /^https?:\/\//.test(trimmed);
                        const contactHref = isEmail ? `mailto:${trimmed}` : isUrl ? trimmed : undefined;
                        const contactTarget = isUrl ? '_blank' : undefined;
                        const contactRel = isUrl ? 'noreferrer' : undefined;
                        const avatarSrc = contact.image && contact.image.trim()
                          ? contact.image.trim()
                          : CONTACT_PLACEHOLDER;

                        const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = CONTACT_PLACEHOLDER;
                        };

                        return (
                          <>
                            <div className="relative h-40 w-full bg-gray-100">
                              <img
                                src={avatarSrc}
                                alt={contact.name || 'Program contact'}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                                onError={handleImageError}
                              />
                            </div>
                            <div className="p-6 space-y-4">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">{contact.name || 'Program Contact'}</h3>
                                <p className="text-xs uppercase tracking-wide text-gray-500">Program Contact</p>
                              </div>
                              <p className="text-sm text-gray-600 whitespace-pre-line">
                                {contact.bio || 'Bio information will be provided soon.'}
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
                                    Reach out to the host organisation for contact details.
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
                <p className="text-gray-500">Contact information will be provided soon.</p>
              )}
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white/90 backdrop-blur rounded-3xl border border-gray-100 shadow-xl p-8 space-y-6 sticky top-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Explore the program</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Stay informed on the most recent updates, application deadlines, and additional details.
                </p>
              </div>
              <div className="space-y-6 text-sm text-gray-600">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Program Status</p>
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                    {statusLabel}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Pillars</p>
                  {categories?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {categories.map((label) => (
                        <span key={`${program.id}-aside-${label}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                          {label}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">Pillar information coming soon.</p>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">Country</p>
                  {countryChips.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {countryChips.map((country) => (
                        <span key={`${program.id}-aside-country-${country}`} className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                          <MapPin className="w-4 h-4 text-ahc-green" />
                          {country}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">Global</p>
                  )}
                </div>
                {primaryContact && (
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">Primary Contact</p>
                    <img
                      src={primaryContact.image && primaryContact.image.trim() ? primaryContact.image.trim() : CONTACT_PLACEHOLDER}
                      alt={primaryContact.name || 'Primary contact'}
                      className="h-14 w-14 rounded-full object-cover border"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = CONTACT_PLACEHOLDER;
                      }}
                    />
                    <p className="text-gray-700 font-medium">{primaryContact.name || 'Not specified'}</p>
                    {primaryContact.contact && (
                      contactLink ? (
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
                      )
                    )}
                    {primaryContact.bio && <p className="text-sm text-gray-500 whitespace-pre-line">{primaryContact.bio}</p>}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
