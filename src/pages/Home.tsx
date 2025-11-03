import { Helmet } from "react-helmet-async";
import { useGetPagesBySectionQuery } from "../features/pages/pagesApi";
import { useGetEventsQuery } from "../features/events/eventsApi";
import Loader from "../components/Loader";
import Hero from "../components/ui/Hero";
import SectionHeader from "../components/ui/SectionHeader";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import EventCard from "../components/cards/EventCard";
import PartnersStrip from "../components/ui/PartnersStrip";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";

export default function Home() {
  const { data: homeBlocks, isLoading: loadingPages } =
    useGetPagesBySectionQuery("home");
  const { data: posts, isLoading: loadingNews } = useGetPublicPostsQuery();
  const { data: events, isLoading: loadingEvents } = useGetEventsQuery();
  const homeArray = Array.isArray((homeBlocks as any)?.data)
    ? (homeBlocks as any).data
    : Array.isArray(homeBlocks)
    ? (homeBlocks as any)
    : [];
  const eventsArray = Array.isArray((events as any)?.data)
    ? (events as any).data
    : Array.isArray(events as any)
    ? (events as any)
    : [];
  const newsArray = Array.isArray(posts as any) ? (posts as any) : [];

  return (
    <div>
      <Helmet>
        <title>AHC – Home</title>
      </Helmet>

      {/* Scoped styles for the "sunshine edge" hover effect */}
      <style>{`
        /* sunshine-edge: blurred, warm light that rotates edge-to-edge then holds */
        .sunshine-edge,
        button,
        input[type="button"],
        input[type="submit"],
        a[class*="btn"],
        a.btn,
        .btn,
        .button {
          position: relative;
          overflow: hidden;
          border-radius: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        /* Pseudo element that creates the blurred sunshine stripe */
        .sunshine-edge::before,
        button::before,
        input[type="button"]::before,
        input[type="submit"]::before,
        a[class*="btn"]::before,
        a.btn::before,
        .btn::before,
        .button::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 250%;
          left: -10%;
          top: -75%;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,223,77,0.95) 50%, rgba(255,255,255,0) 100%);
          filter: blur(14px);
          transform: rotate(-45deg);
          transform-origin: 50% 50%;
          opacity: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          transition: opacity .18s ease;
        }

        /* Trigger on hover and keyboard focus */
        .sunshine-edge:hover::before,
        .sunshine-edge:focus-visible::before,
        button:hover::before,
        button:focus-visible::before,
        input[type="button"]:hover::before,
        input[type="button"]:focus-visible::before,
        input[type="submit"]:hover::before,
        input[type="submit"]:focus-visible::before,
        a[class*="btn"]:hover::before,
        a[class*="btn"]:focus-visible::before,
        a.btn:hover::before,
        a.btn:focus-visible::before,
        .btn:hover::before,
        .btn:focus-visible::before,
        .button:hover::before,
        .button:focus-visible::before {
          opacity: 1;
          animation: sunshine-rotate 1s cubic-bezier(.22,.9,.33,1) forwards;
        }

        /* don't show on disabled controls */
        button[disabled]::before,
        input[disabled]::before {
          display: none;
        }

        @keyframes sunshine-rotate {
          0%   { transform: rotate(-45deg); }
          70%  { transform: rotate(60deg); }
          100% { transform: rotate(60deg); } /* hold at the end so glow stays on stopped edge */
        }

        /* ---------- Social links animation ---------- */
        /* Common containers: .social, .socials, .social-links, .hero-social, .social-icons */
        .social,
        .socials,
        .social-links,
        .hero-social,
        .social-icons {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        /* Target anchor/icon elements typically used for social links */
        .social a,
        .socials a,
        .social-links a,
        .hero-social a,
        .social-icon,
        .social-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          transition: transform .28s cubic-bezier(.2,.9,.3,1), filter .28s, box-shadow .28s;
          color: inherit;
          text-decoration: none;
          background: transparent;
          z-index: 0;
          -webkit-tap-highlight-color: transparent;
        }

        /* radial warm glow pseudo-element */
        .social a::after,
        .socials a::after,
        .social-links a::after,
        .hero-social a::after,
        .social-icon::after,
        .social-link::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 30% 20%, rgba(255,223,77,0.95) 0%, rgba(255,223,77,0.16) 18%, rgba(255,223,77,0.06) 34%, transparent 60%);
          filter: blur(8px);
          opacity: 0;
          transform: scale(0.6) rotate(-30deg);
          transition: opacity .25s ease, transform .6s cubic-bezier(.22,.9,.33,1);
          pointer-events: none;
          mix-blend-mode: screen;
          z-index: -1; /* keep icon on top */
        }

        /* Hover / keyboard focus — lift, brighten and play glow animation */
        .social a:hover,
        .socials a:hover,
        .social-links a:hover,
        .hero-social a:hover,
        .social-icon:hover,
        .social-link:hover,
        .social a:focus-visible,
        .socials a:focus-visible,
        .social-links a:focus-visible,
        .hero-social a:focus-visible,
        .social-icon:focus-visible,
        .social-link:focus-visible {
          transform: translateY(-4px) scale(1.06);
          filter: brightness(1.04) saturate(1.05);
          outline: none;
        }

        .social a:hover::after,
        .socials a:hover::after,
        .social-links a:hover::after,
        .hero-social a:hover::after,
        .social-icon:hover::after,
        .social-link:hover::after,
        .social a:focus-visible::after,
        .socials a:focus-visible::after,
        .social-links a:focus-visible::after,
        .hero-social a:focus-visible::after,
        .social-icon:focus-visible::after,
        .social-link:focus-visible::after {
          opacity: 1;
          animation: social-glow 600ms cubic-bezier(.2,.9,.3,1) forwards;
        }

        @keyframes social-glow {
          0% { transform: scale(0.6) rotate(-30deg); opacity: 0; }
          60% { transform: scale(1.05) rotate(20deg); opacity: 1; }
          100% { transform: scale(1) rotate(10deg); opacity: 1; } /* settle on a small rotated glow */
        }

        /* disabled / aria-disabled */
        .social a[aria-disabled="true"],
        .social a[disabled] {
          transform: none;
          filter: none;
        }
        .social a[aria-disabled="true"]::after,
        .social a[disabled]::after {
          display: none;
        }

        /* respect reduced motion users */
        @media (prefers-reduced-motion: reduce) {
          .sunshine-edge::before,
          button::before,
          input[type="button"]::before,
          input[type="submit"]::before,
          a[class*="btn"]::before,
          .btn::before,
          .button::before,
          .social a::after,
          .socials a::after,
          .social-links a::after,
          .hero-social a::after,
          .social-icon::after,
          .social-link::after {
            transition: none;
            animation: none;
            opacity: 1;
            transform: scale(1) rotate(10deg);
            filter: blur(6px);
          }
        }
      `}</style>

      <Hero />

      {/* About AHC */}
      <section className="container py-12 animate-page">
        <SectionHeader
          eyebrow="Who we are"
          title="About AHC"
          cta={
            <a
              href="/about"
              className="text-sm text-ahc-green link-underline sunshine-edge"
            >
              Learn more
            </a>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dictum, mauris at ultricies ultricies, urna sapien molestie
              lectus, nec hendrerit nunc nisi nec arcu. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere.
            </p>
            <p>
              Curabitur a augue nec ipsum blandit posuere. Donec imperdiet, leo
              et cursus mattis, orci enim congue leo, vel convallis arcu justo
              et mi. Sed nec lacinia nibh. Suspendisse potenti. Pellentesque
              habitant morbi tristique senectus et netus.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card card-hover p-5 sunshine-edge">
              <div className="text-sm text-slate-600">Our Reach</div>
              <div className="mt-1 text-2xl font-bold">12+ Universities</div>
              <p className="mt-2 text-sm text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card card-hover p-5 sunshine-edge">
              <div className="text-sm text-slate-600">Resources</div>
              <div className="mt-1 text-2xl font-bold">500+ Items</div>
              <p className="mt-2 text-sm text-slate-600">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="card card-hover p-5 sunshine-edge">
              <div className="text-sm text-slate-600">Community</div>
              <div className="mt-1 text-2xl font-bold">3k+ Members</div>
              <p className="mt-2 text-sm text-slate-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="card card-hover p-5 sunshine-edge">
              <div className="text-sm text-slate-600">Impact</div>
              <div className="mt-1 text-2xl font-bold">Pan‑African</div>
              <p className="mt-2 text-sm text-slate-600">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
        <SectionHeader
          eyebrow="Highlights"
          title="Latest News"
          cta={
            <a href="/news" className="text-sm text-ahc-green sunshine-edge">
              View all
            </a>
          }
        />
        {loadingNews ? (
          <Loader />
        ) : newsArray.length === 0 ? (
          <div className="text-sm text-slate-600">No news yet.</div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {newsArray.slice(0, 3).map((n: any) => {
              const firstImgMatch = (n.content ?? "").match(
                /<img[^>]+src=["']([^"']+)["']/i
              );
              const galleryFirst =
                n.gallery && Array.isArray(n.gallery) && n.gallery.length > 0
                  ? n.gallery[0].original || n.gallery[0].url
                  : "";
              const imgUrl =
                n.featured_image ||
                galleryFirst ||
                (firstImgMatch ? firstImgMatch[1] : "");
              return (
                <Link
                  key={n.id}
                  to={`/news/${n.id}`}
                  className="group card card-hover overflow-hidden transition sunshine-edge"
                >
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt=""
                      className="w-full aspect-[16/9] object-cover"
                    />
                  ) : (
                    <div className="aspect-[16/9] bg-slate-200" />
                  )}
                  <div className="p-5">
                    {n.published_at && (
                      <div className="text-xs uppercase tracking-wider text-slate-500">
                        {dayjs(n.published_at).format("MMM DD, YYYY")}
                      </div>
                    )}
                    <h3 className="mt-1 font-semibold group-hover:text-slate-900">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                      {n.excerpt ??
                        (n.content ?? "").replace(/<[^>]+>/g, "").slice(0, 160)}
                    </p>
                    <span className="mt-3 inline-block text-sm text-slate-700 group-hover:text-ahc-green">
                      Read more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="container py-12 animate-page">
        <SectionHeader
          eyebrow="What’s Next"
          title="Upcoming Events"
          cta={
            <a href="/events" className="text-sm text-ahc-green sunshine-edge">
              View all
            </a>
          }
        />
        {loadingEvents ? (
          <Loader />
        ) : eventsArray.length === 0 ? (
          <div className="text-sm text-slate-600">
            No upcoming events yet. Please check back soon.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {eventsArray.slice(0, 3).map((e) => (
              <EventCard key={e.id} item={e} />
            ))}
          </div>
        )}
      </section>

      {/* Mission & Vision */}
      <section className="container py-12 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
        <SectionHeader eyebrow="Our Direction" title="Mission & Vision" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card card-hover p-6 sunshine-edge">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-ahc-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20l9-5-9-5-9 5 9 5z" />
                <path d="M12 12l9-5-9-5-9 5 9 5z" />
              </svg>
              <h3 className="font-semibold">Mission</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dictum mauris at ultricies ultricies.
            </p>
          </div>
          <div className="card card-hover p-6 sunshine-edge">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-ahc-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 0 20" />
              </svg>
              <h3 className="font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container py-12 animate-page">
        <SectionHeader eyebrow="What we focus on" title="Focus Areas" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Curriculum Innovation" },
            { t: "Faculty Development" },
            { t: "Research & Scholarship" },
            { t: "Technology & Simulation" },
            { t: "Regional Collaboration" },
            { t: "Policy & Advocacy" },
          ].map((f) => (
            <div key={f.t} className="card card-hover p-5 sunshine-edge">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-ahc-green"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h4 className="font-semibold text-sm">{f.t}</h4>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      <PartnersStrip />
    </div>
  );
}
