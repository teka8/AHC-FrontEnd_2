import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VisionGoalsValues() {
  const [openSection, setOpenSection] = useState("goals");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <Helmet>
        <title>
          Vision, Goals, Values and Principles of Partnership – Africa Health
          Collaborative
        </title>
        <meta
          name="description"
          content="Discover the vision, goals, values, and principles of partnership that guide the Africa Health Collaborative (AHC) in empowering young people and advancing health sectors across Africa."
        />
        <meta
          name="keywords"
          content="AHC Vision, Africa Health Collaborative Goals, AHC Values, Principles of Partnership, Health Empowerment Africa, Youth in Health Sector, African Health Collaboration"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta
          property="og:title"
          content="Vision, Goals, Values and Principles of Partnership – Africa Health Collaborative"
        />
        <meta
          property="og:description"
          content="Discover the vision, goals, values, and principles of partnership that guide the Africa Health Collaborative (AHC) in empowering young people and advancing health sectors across Africa."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/vision-goals-values"
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vision, Goals, Values and Principles of Partnership – Africa Health Collaborative"
        />
        <meta
          name="twitter:description"
          content="Discover the vision, goals, values, and principles of partnership that guide the Africa Health Collaborative (AHC) in empowering young people and advancing health sectors across Africa."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <div className="bg-white dark:bg-ahc-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="/images/about-hero.jpg"
              alt="About us hero background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content Section */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-display text-white">
              Vision, Goals, Values and Principles of Partnership
            </h1>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-ahc-dark">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h3 className="font-display text-3xl font-bold text-ahc-dark dark:text-white mb-4">
                    Vision
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    Guided by a unified vision, the partners of the Africa
                    Health Collaborative strive to empower young people,
                    equipping them with the skills to advance and sustain the
                    growth of African health sectors and meet the diverse health
                    needs of their respective countries.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <button
                      className="w-full flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-left font-display text-xl font-bold text-ahc-dark dark:text-white"
                      onClick={() => toggleSection("goals")}
                    >
                      Goals
                      <ChevronDown
                        className={`transform transition-transform ${
                          openSection === "goals" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSection === "goals" && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-b-lg">
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                          <li>
                            Enhance capacity of partner institutions to produce
                            an adequate number of skilled, diverse, and
                            compassionate primary healthcare workers.
                          </li>
                          <li>
                            Optimize entrepreneurial ecosystems to support the
                            development and growth of health startups and
                            employment-generating enterprises.
                          </li>
                          <li>
                            Enable acquisition of advanced skills to ensure
                            sustainable growth of the health sector and to
                            address emerging health challenges.
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      className="w-full flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-left font-display text-xl font-bold text-ahc-dark dark:text-white"
                      onClick={() => toggleSection("values")}
                    >
                      Values
                      <ChevronDown
                        className={`transform transition-transform ${
                          openSection === "values" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSection === "values" && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-b-lg">
                        <p className="text-slate-600 dark:text-slate-300">
                          The Health Collaborative is anchored in the following
                          values: respect, inclusivity, equity, reciprocity,
                          ethics, dynamism, and stewardship.
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      className="w-full flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-left font-display text-xl font-bold text-ahc-dark dark:text-white"
                      onClick={() => toggleSection("principles")}
                    >
                      Principles of Partnership
                      <ChevronDown
                        className={`transform transition-transform ${
                          openSection === "principles" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSection === "principles" && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-b-lg">
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                          <li>Africa-Centric</li>
                          <li>Employability</li>
                          <li>Network of Networks</li>
                          <li>Impact</li>
                          <li>Scale</li>
                          <li>Sustainability and Indigeneity</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                  <img
                    src="/images/value-partnership.jpg"
                    alt="Principles of Partnership"
                    className="rounded-md mb-4"
                  />
                  <p className="text-slate-600 dark:text-slate-300">
                    This agreement sets out the shared vision, goals, guiding
                    principles, values, and joint governance of the
                    Collaborative to guide our collective work. This agreement
                    is not legally binding.
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-ahc-dark dark:text-white mb-4">
                    Partners
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/images/partners/addis-ababa-university.png"
                      alt="Addis Ababa University"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/aims.png"
                      alt="African Institute for Mathematical Sciences"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/alu.png"
                      alt="African Leadership University"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/amref.png"
                      alt="Amref International University"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/ashesi-university.png"
                      alt="Ashesi University"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/knust.png"
                      alt="Kwame Nkrumah University of Science and Technology"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/mastercard-foundation.png"
                      alt="Mastercard Foundation Scholars Program"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/moi-university.png"
                      alt="Moi University"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/uct.png"
                      alt="University of Cape Town"
                      className="h-16 object-contain"
                    />
                    <img
                      src="/images/partners/utoronto.png"
                      alt="University of Toronto"
                      className="h-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
