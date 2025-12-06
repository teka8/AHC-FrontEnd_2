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
import LocalPartnersStrip from "../components/ui/LocalPartnersStrip";

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
        <meta
          name="description"
          content="Welcome to the Africa Health Collaborative (AHC) at Addis Ababa University. Discover our mission to advance health professions education and research across Africa through collaboration, innovation, and community engagement."
        />
        <meta
          name="keywords"
          content="Africa Health Collaborative, AHC, Addis Ababa University, Health Professions Education, Health Research Africa, Primary Healthcare Africa, Health Collaboration, African Health Initiatives"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta property="og:title" content="AHC – Home" />
        <meta
          property="og:description"
          content="Welcome to the Africa Health Collaborative (AHC) at Addis Ababa University. Discover our mission to advance health professions education and research across Africa through collaboration, innovation, and community engagement."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahc.tewostechsolutions.com/" />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AHC – Home" />
        <meta
          name="twitter:description"
          content="Welcome to the Africa Health Collaborative (AHC) at Addis Ababa University. Discover our mission to advance health professions education and research across Africa through collaboration, innovation, and community engagement."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <Hero />

      {/* About AHC */}
      <section className="py-12 md:py-16 animate-page bg-white dark:bg-slate-900">
        <div className="container">
          <SectionHeader
            eyebrow="Who we are"
            title="Advancing Primary Health Care in Ethiopia & Africa"
            centerTitle={true}
          />
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <img
                src="/images/aheia.jpg"
                alt="Advancing Health Education in Africa"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  Africa Health Collaborative (AHC) is one of the flagship programs to transform primary healthcare service in Africa, in partnership with the Mastercard Foundation. The Collaborative is designed within the plan of “preparing diverse young people, for the meaningful work of transforming health and well-being in Africa through contextually appropriate, equitable and sustainable primary healthcare”.
                </p>
                <p>
                  The AHC is a multi-stakeholder partnership dedicated to transforming primary health care (PHC) systems across Africa. It brings together eight African higher education institutions (AAU-Ethiopia; African Institute for Mathematical Sciences (AIMS)-Rwanda; African Leadership University (ALU)-Rwanda; Amref International University (AMIU)- Kenya; Ashesi University-Ghana; Kwame Nkrumah University of Science and Technology (KNUST)-Ghana; MOi University- Kenya; University of Cape Town (UCT)-South Africa); and the University of Toronto (U of T)-Canada, in partnership with the Mastercard Foundation. Through a networked, cross-border approach, AHC enables collaboration across institutions and sectors to collectively address the continent’s most pressing health-sector challenges.
                </p>

              </div>

            </div>
          </div>
          <div className="prose max-w-none dark:prose-invert mt-6">
            <p>
              As part of the Collaborative, Africa Health Collaborative -Addis Ababa University (AHC-AAU) was formally launched on February 25, 2025 to advance health-sector transformation in Ethiopia. The collaborative operates with three strategic pillars: Health Employment (HEMP), Health Entrepreneurship (HENT), and Health Ecosystem (HECO).
            </p>
            <p>
              The three pillars work to drive meaningful change in primary healthcare by creating pathways that are relevant, equitable, and sustainable for Ethiopian and African youth. The Collaborative strategic objectives have been cascaded down through engagement of local implementing partners such as Wollo, Wolkite, and Debre Berhan Universities. In addition, Woldia University will participate in some of the Collaborative activities, for example, through the AHC-AAU faculty Scholarship Scheme, and regional faculty exchange programs.
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          {/* Section Title */}
          <h2 className="text-5xl font-bold mb-4">Explore our Pillars</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            To advance primary health care and strengthen the national and regional health system through transformative education and innovation, the AHC–AAU within the College of Health Sciences is structured around three strategic pillars. These pillars are designed to drive meaningful progress in health education, foster innovation and entrepreneurship, enhance the quality of health care, and support sustainable, system-wide improvements.
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

      <section className="py-12 md:py-16 animate-page bg-white dark:bg-slate-900">
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

      <section className="py-12 md:py-16 animate-page bg-slate-50 dark:bg-slate-800">
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

      {/* Focus Areas */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <SectionHeader
            eyebrow="Our Priorities"
            title="Key Focus Areas"
            centerTitle={true}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Health Education",
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
                t: "Health Policy & Advocacy",
                d: "Advocating for evidence-based health policies and influencing decision-makers to improve public health outcomes and promote well-being.",
                i: <Landmark className="w-8 h-8" />,
              },
              {
                t: "Health Employment",
                d: "Expanding workforce opportunities and strengthening pathways to meaningful employment in the health sector.",
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
      <LocalPartnersStrip />
    </div>
  );
}
