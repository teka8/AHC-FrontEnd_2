import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGetProgramsQuery } from "../../features/healthPillars/programsApi";
import CountryBadge from "../../components/CountryBadge";
import PillarNewsSection from "../../components/sections/PillarNewsSection";
import PillarProgramsSection from "../../components/sections/PillarProgramsSection";

const HealthEcosystems: React.FC = () => {
  const { data: programsData = [], isLoading } = useGetProgramsQuery({ category: "health_ecosystems" });

  const extractCountries = React.useCallback((value?: string | null) => {
    if (!value) {
      return [] as string[];
    }

    return Array.from(
      new Set(
        value
          .split(/[\n,|]/)
          .map((item) => item.trim())
          .filter(Boolean)
      )
    );
  }, []);

  // Filter active and paused programs
  const programs = programsData
    .filter((p) => p.state === "active" || p.state === "paused")
    .map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description || "",
      branch: p.host,
      image: p.image_thumb || p.image || "https://placehold.co/600x400/000000/FFFFFF/png",
      state: p.state,
      countries: extractCountries(p.country),
    }));

  // Filter upcoming programs only (coming soon)
  const comingSoon = programsData
    .filter((p) => p.state === "upcoming")
    .map((p) => ({
      title: p.title,
      description: p.description || "",
      branch: p.host,
      image: p.image_thumb || p.image || "https://placehold.co/600x400/000000/FFFFFF/png",
      active: false,
      countries: extractCountries(p.country),
    }));

  const programsScrollRef = React.useRef<HTMLDivElement>(null);
  const comingSoonScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/pillars/health-ecosystem-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-extrabold tracking-tight">
              Health Ecosystems
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Enabling professionals with advanced skills for sustainable health
              sector growth and transformation in Africa.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Goal Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-ahc-green-dark mb-6">
              Our Goal
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Health Ecosystems Pillar (HECO) focuses on increasing the
              number of primary healthcare workers with stable employment by
              assembling essential building blocks for the African health
              sectors. Our goal is to train professionals across various
              disciplines to drive equitable and inclusive growth in Africa.
            </p>
            <a
              href="#programs"
              className="bg-ahc-green hover:bg-ahc-green-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore Our Programs
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/pillars/health-ecosystem-goal.jpg"
              alt="Health Ecosystem Goal"
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Programs Section */}
        <PillarProgramsSection
          category="health_ecosystems"
          title="Programs"
        />

        {/* News and Events Section */}
        <div className="bg-ahc-blue-light dark:bg-ahc-blue-dark text-white p-12 rounded-2xl shadow-xl mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">News & Events</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                2026-2027 Graduate Scholarships
              </h3>
              <p className="mb-4">University of Toronto</p>
              <a
                href="#"
                className="text-ahc-green hover:underline font-semibold"
              >
                Learn More
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                ALU Public Sector Fellowship
              </h3>
              <p className="mb-4">
                Join the next cohort of public sector leaders.
              </p>
              <a
                href="#"
                className="text-ahc-green hover:underline font-semibold"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <PillarNewsSection
          pillar="health_ecosystems"
          title="Health Ecosystems In Focus"
          description="Read the most recent developments strengthening health ecosystems across Africa."
        />

        {/* Key Contacts Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-ahc-green-dark mb-8">
            Key Contacts
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <img
                src="/images/pillars/tak-koguchi.jpg"
                alt="Tak Koguchi"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold">Tak Koguchi</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Senior Regional Lead
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/pillars/suying-hugh.jpg"
                alt="Suying Hugh"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold">Suying Hugh</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Program Manager, Mastercard Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthEcosystems;
