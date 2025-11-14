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
import {
  BookOpenCheck,
  Users,
  FlaskConical,
  Laptop,
  Globe,
  Landmark,
} from "lucide-react";

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
  const newsArray = Array.isArray(posts?.data) ? posts.data : [];

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
            <div>
              <img src="/public/images/aheia.jpg" alt="Advancing Health Education in Africa" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
            <div>
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  The Africa Health Collaborative (AHC) is a network of health
                  professionals, educators, and institutions dedicated to
                  advancing health professions education and research in Africa.
                  We foster collaboration, knowledge exchange, and scholarship to
                  address the continent's pressing health challenges.
                </p>
                <p>
                  Our work is guided by a commitment to excellence, equity, and
                  innovation. We believe that by working together, we can build a
                  healthier future for all Africans.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/about"
                  className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sm text-ahc-green-dark dark:text-ahc-green-light">
                Our Reach
              </div>
              <div className="mt-1 text-3xl font-bold font-display text-ahc-green-dark dark:text-white">
                12+ Universities
              </div>
              <p className="mt-2 text-sm text-ahc-green-dark dark:text-ahc-green-light">
                A growing network of institutions across Africa.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Resources
              </div>
              <div className="mt-1 text-3xl font-bold font-display">
                500+ Items
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A rich library of educational materials and research.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Community
              </div>
              <div className="mt-1 text-3xl font-bold font-display">
                3k+ Members
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A vibrant community of health professionals and educators.
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Impact
              </div>
              <div className="mt-1 text-3xl font-bold font-display">
                Pan-African
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Driving positive change in health education across the
                continent.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Discovering pillars*/}
      <section>
        {/* Discovering Pillars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            {/* Section Title */}
            <h2 className="text-5xl font-bold mb-4">Explore our Pillars</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Preparing diverse youth for the meaningful work of transforming
              health and wellbeing in Africa through contextually appropriate
              and sustainable primary healthcare.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Pillar Card */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <a
                  href="https://africahealthcollaborative.org/health-pillars/health-employment/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/HEMP.jpg"
                    alt="Health"
                    className="w-full h-[500px] object-cover"
                  />
                </a>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-extrabold drop-shadow-lg">
                    Health Employment (HEMP)
                  </h3>
                  <p className="text-sm mt-2 max-w-xs mx-auto">
                    Expand capacity to train primary health care workers to meet
                    growing demand.
                  </p>
                </div>

                {/* Learn More Button */}
                <a
                  href="health-pillars/health-employment"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
                >
                  Learn More
                </a>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <a
                  href="https://africahealthcollaborative.org/health-pillars/health-entrepreneurship/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/HENT.jpg"
                    alt="Education"
                    className="w-full h-[500px] object-cover"
                  />
                </a>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-extrabold drop-shadow-lg">
                    Health Entrepreneurship (HENT)
                  </h3>
                  <p className="text-sm mt-2 max-w-xs mx-auto">
                    Implement and sustain entrepreneurial ecosystems that launch
                    health start-ups, generate revenue, and create meaningful
                    employment.
                  </p>
                </div>
                {/* Learn More Button */}
                <a
                  href="health-pillars/health-entrepreneurship"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
                >
                  Learn More
                </a>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <a
                  href="https://africahealthcollaborative.org/health-pillars/health-ecosystem/"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/HECO.jpg"
                    alt="Innovation"
                    className="w-full h-[500px] object-cover"
                  />
                </a>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-extrabold drop-shadow-lg">
                    Health Ecosystems (HECO)
                  </h3>
                  <p className="text-sm mt-2 max-w-xs mx-auto">
                    Enabling the growth and transformation of Africa’s health
                    sector.
                  </p>
                </div>

                {/* Learn More Button */}
                <a
                  href="health-pillars/health-ecosystems"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
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
            <div className="text-sm text-slate-600 dark:text-slate-400 text-center">
              No news yet.
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <Link to={`/news/${newsArray[0].id}`} className="group">
                  <img
                    src={
                      newsArray[0].featured_image ||
                      (newsArray[0].content.match(
                        /<img[^>]+src=["']([^"']+)["']/
                      )
                        ? newsArray[0].content.match(
                            /<img[^>]+src=["']([^"']+)["']/
                          )[1]
                        : "")
                    }
                    alt={newsArray[0].title}
                    className="w-full aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <h3 className="mt-4 text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">
                    {newsArray[0].title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 line-clamp-3">
                    {newsArray[0].excerpt ??
                      newsArray[0].content
                        .replace(/<[^>]+>/g, "")
                        .slice(0, 280)}
                  </p>
                </Link>
              </div>
              <div className="lg:col-span-1 grid gap-6">
                {newsArray.slice(1, 4).map((n: any) => (
                  <Link
                    key={n.id}
                    to={`/news/${n.id}`}
                    className="group flex items-center gap-4"
                  >
                    <img
                      src={
                        n.featured_image ||
                        (n.content.match(/<img[^>]+src=["']([^"']+)["']/)
                          ? n.content.match(/<img[^>]+src=["']([^"']+)["']/)[1]
                          : "")
                      }
                      alt={n.title}
                      className="w-42 h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
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
            <Link
              to="/news"
              className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
            >
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
            <a
              href="/events"
              className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
            >
              View all
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-green-50 dark:bg-slate-950 transition-colors duration-300 bg-green-50/50">
        <div className="container">
          <SectionHeader
            eyebrow="Our Purpose"
            title="Our Mission & Vision"
            centerTitle={true}
          />
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
                To leverage the power of higher education institutions as
                centres of innovation, knowledge exchange, and community
                collaboration, driving inclusive transformation of primary
                healthcare in Ethiopia and beyond.
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
                To prepare diverse youth for meaningful work in transforming
                health and well-being in Africa through contextually
                appropriate, equitable, and sustainable primary healthcare
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container">
          <SectionHeader
            eyebrow="Our Priorities"
            title="Key Focus Areas"
            centerTitle={true}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Scholarship",
                d: "Fostering academic excellence and supporting students in health-related fields through various scholarship programs.",
                i: <BookOpenCheck className="w-8 h-8" />,
              },
              {
                t: "Health Entrepreneurship",
                d: "Promoting innovative health solutions and supporting entrepreneurs in developing sustainable healthcare ventures.",
                i: <FlaskConical className="w-8 h-8" />,
              },
              {
                t: "Regional and local Collaboration",
                d: "Building strong partnerships and fostering collaboration among regional and local stakeholders to address health challenges.",
                i: <Globe className="w-8 h-8" />,
              },
              {
                t: "Policy",
                d: "Advocating for evidence-based health policies to improve public health outcomes.",
                i: <Landmark className="w-8 h-8" />,
              },
              {
                t: "Health Advocacy",
                d: "Influencing decision-makers and raising awareness to promote health and well-being.",
                i: <Users className="w-8 h-8" />,
              },
              {
                t: "Faculty Development",
                d: "Enhancing the skills and knowledge of faculty members to deliver high-quality health education and research.",
                i: <Users className="w-8 h-8" />,
              },
            ].map((f) => (
              <div
                key={f.t}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ahc-green-light dark:bg-ahc-green-dark text-ahc-green-dark dark:text-white mb-6">
                  {f.i}
                </div>
                <h4 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">
                  {f.t}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.d}
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
