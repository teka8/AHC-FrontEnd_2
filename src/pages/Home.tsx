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
import PillarsAccordion from "../components/sections/PillarsAccordion";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import { localPartners } from "../data/localPartners";
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
      <section className="py-12 md:py-16 animate-page dark:bg-slate-900" style={{ backgroundColor: 'rgb(255, 253, 246)' }}>
        <div className="container">
          <SectionHeader
            eyebrow="Who we are"
            title="Advancing Health Education in Africa"
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
                  The Africa Health Collaborative (AHC) is a network of health
                  professionals, educators, and institutions dedicated to
                  advancing health professions education and research in Africa.
                  We foster collaboration, knowledge exchange, and scholarship
                  to address the continent's pressing health challenges.
                </p>
                <p>
                  Our work is guided by a commitment to excellence, equity, and
                  innovation. We believe that by working together, we can build
                  a healthier future for all Africans.
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
      {/* Discovering pillars */}
      <PillarsAccordion />
      <section className="py-12 md:py-16 animate-page dark:bg-slate-800" style={{ backgroundColor: 'rgb(255, 253, 246)' }}>
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

      <section className="py-12 md:py-16 animate-page bg-[#FFF9E9] dark:bg-slate-800">
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

      {/* Local Partners - New Design */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Our Valued Collaborators"
            title="In Partnership With Local Universities"
            centerTitle={true}
          />
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We are proud to collaborate with leading local universities, fostering innovation, education, and community health initiatives across Ethiopia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {localPartners.map((partner) => (
              <div className="logo-card" key={partner.name}>
                <div className="logo-card-inner">
                  <div className="logo-card-front">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  <div className="logo-card-back">
                    <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                    <p className="text-sm mb-4">{partner.description.descriptionTitle}</p>
                    <Link to={`/local-partners/${partner.name.replace(/\s+/g, "").toLowerCase()}`} className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 md:py-16 bg-[#FFF9E9] dark:bg-slate-900">
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
