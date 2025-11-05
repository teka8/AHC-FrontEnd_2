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
      <Helmet>
        <title>AHC – Home</title>
      </Helmet>

      <Hero />

      {/* About AHC */}
      <section className="py-16 md:py-24 animate-page bg-slate-100 dark:bg-slate-900">
        <div className="container">
          <SectionHeader
            eyebrow="Who we are"
            title="Advancing Health Education in Africa"
            centerTitle={true}
          />
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="prose max-w-none dark:prose-invert">
              <p>
                The Africa Health Collaborative (AHC) is a network of health professionals, educators, and institutions dedicated to advancing health professions education and research in Africa. We foster collaboration, knowledge exchange, and scholarship to address the continent's pressing health challenges.
              </p>
              <p>
                Our work is guided by a commitment to excellence, equity, and innovation. We believe that by working together, we can build a healthier future for all Africans.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-ahc-blue-light dark:bg-ahc-blue-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-ahc-blue-dark dark:text-ahc-blue-light">Our Reach</div>
                <div className="mt-1 text-3xl font-bold font-display text-ahc-blue-dark dark:text-white">12+ Universities</div>
                <p className="mt-2 text-sm text-ahc-blue-dark dark:text-ahc-blue-light">
                  A growing network of institutions across Africa.
                </p>
              </div>
              <div className="bg-ahc-green-light dark:bg-ahc-green-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-ahc-green-dark dark:text-ahc-green-light">Resources</div>
                <div className="mt-1 text-3xl font-bold font-display text-ahc-green-dark dark:text-white">500+ Items</div>
                <p className="mt-2 text-sm text-ahc-green-dark dark:text-ahc-green-light">
                  A rich library of educational materials and research.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-slate-500 dark:text-slate-400">Community</div>
                <div className="mt-1 text-3xl font-bold font-display">3k+ Members</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  A vibrant community of health professionals and educators.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-slate-500 dark:text-slate-400">Impact</div>
                <div className="mt-1 text-3xl font-bold font-display">Pan-African</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Driving positive change in health education across the continent.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/about"
              className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-page bg-white dark:bg-slate-800">
        <div className="container">
          <SectionHeader
            eyebrow="Stay Informed"
            title="Latest News & Updates"
            centerTitle={true}
          />
          {loadingNews ? (
            <Loader />
          ) : newsArray.length === 0 ? (
            <div className="text-sm text-slate-600 dark:text-slate-400 text-center">No news yet.</div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <Link to={`/news/${newsArray[0].id}`} className="group">
                  <img
                    src={newsArray[0].featured_image || (newsArray[0].content.match(/<img[^>]+src=["']([^"']+)["']/) ? newsArray[0].content.match(/<img[^>]+src=["']([^"']+)["']/)[1] : '')}
                    alt={newsArray[0].title}
                    className="w-full aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <h3 className="mt-4 text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">
                    {newsArray[0].title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 line-clamp-3">
                    {newsArray[0].excerpt ?? newsArray[0].content.replace(/<[^>]+>/g, '').slice(0, 280)}
                  </p>
                </Link>
              </div>
              <div className="lg:col-span-1 grid gap-6">
                {newsArray.slice(1, 4).map((n: any) => (
                  <Link key={n.id} to={`/news/${n.id}`} className="group flex items-center gap-4">
                    <img
                      src={n.featured_image || (n.content.match(/<img[^>]+src=["']([^"']+)["']/) ? n.content.match(/<img[^>]+src=["']([^"']+)["']/)[1] : '')}
                      alt={n.title}
                      className="w-24 h-24 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-lg leading-tight text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">
                        {n.title}
                      </h4>
                      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {dayjs(n.published_at).format("MMM DD, YYYY")}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-center mt-8">
            <Link to="/news" className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors">
              View all news
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-page bg-white dark:bg-slate-800">
        <div className="container">
          <SectionHeader
            eyebrow="Join Us"
            title="Upcoming Events & Opportunities"
            centerTitle={true}
          />
          {loadingEvents ? (
            <Loader />
          ) : eventsArray.length === 0 ? (
            <div className="text-sm text-slate-600 dark:text-slate-400 text-center">
              No upcoming events yet. Please check back soon.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {eventsArray.slice(0, 3).map((e) => (
                <EventCard key={e.id} item={e} />
              ))}
            </div>
          )}
          <div className="flex justify-center mt-8">
            <a href="/events" className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors">
              View all
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-ahc-blue-light dark:bg-ahc-blue-dark transition-colors duration-300">
        <div className="container">
          <SectionHeader eyebrow="Our Purpose" title="Our Mission & Vision" centerTitle={true} />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <svg
                  className="w-8 h-8 text-ahc-green"
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
                <h3 className="text-2xl font-bold font-display">Mission</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                To be a leading catalyst for transformative and sustainable health professions education and research in Africa.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <svg
                  className="w-8 h-8 text-ahc-green"
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
                <h3 className="text-2xl font-bold font-display">Vision</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                To foster a dynamic and collaborative ecosystem that empowers health professionals to address Africa's unique health challenges through innovation and excellence in education and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 animate-page bg-white dark:bg-slate-800">
        <div className="container">
          <SectionHeader eyebrow="Our Priorities" title="Key Focus Areas" centerTitle={true} />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Curriculum Innovation" },
              { t: "Faculty Development" },
              { t: "Research & Scholarship" },
              { t: "Technology & Simulation" },
              { t: "Regional Collaboration" },
              { t: "Policy & Advocacy" },
            ].map((f) => (
              <div key={f.t} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-ahc-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <h4 className="font-bold font-display text-lg">{f.t}</h4>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  Advancing health education through innovative approaches and cutting-edge research.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip />
    </div>
  );
}
