import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Hero from "../components/partners/Hero";

export default function ValuesandPrinciples() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showFullVision, setShowFullVision] = useState(false);

  const accordionData = [
    {
      title: "Our Mission",
      content:
        "To cultivate a future where Africa’s diverse youth lead the transformation of health and well-being across the continent. We envision a generation equipped with the knowledge, skills, and opportunities to shape primary healthcare systems that are equitable, resilient, and responsive to local realities. By fostering inclusive, community-centered, and sustainable approaches, we aim to support young people—especially those historically underrepresented—to become driving forces in creating healthier, thriving African societies.",
    },
    {
      title: "Our Goal",
      content:
        "To empower Africa’s next generation of health leaders by strengthening primary healthcare through transformative education, innovation, and entrepreneurship fostering a vibrant ecosystem that advances equitable health and employment opportunities.",
    },
    {
      title: "Principles of Partnership",
      content: `All members of the Collaborative share a commitment to partnership building, 
        identifying areas of fruitful collaboration, and co-creating programs to maximize impact. 
        Inspired by the African Ubuntu philosophy (community, solidarity, interconnectedness) and the Harambee spirit.`,
    },
  ];

  const partners = [
    { name: "AIMS", logo: "/images/partners/aims.png" },
    { name: "ALU", logo: "/images/partners/alu.png" },
    { name: "Amref", logo: "/images/partners/amref.png" },
    { name: "Ashesi", logo: "/images/partners/moi-university.png" },
    { name: "University of Toronto", logo: "/images/partners/utoronto.png" },
  ];

  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const visionText = [
    "To cultivate a future where Africa’s diverse youth lead the transformation of health and well-being across the continent. We envision a generation equipped with the knowledge, skills, and opportunities to shape primary healthcare systems that are equitable, resilient, and responsive to local realities. By fostering inclusive, community-centered, and sustainable approaches, we aim to support young people, especially those historically underrepresented, to become driving forces in creating healthier, thriving African societies.",
  ];

  const maxVisible = 2;
  return (
    <>
      <Helmet>
        <title>Partners – Africa Health Collaborative</title>
        <meta
          name="description"
          content="Discover the esteemed partners of the Africa Health Collaborative (AHC) at Addis Ababa University. Learn about our collaborations with leading institutions across Africa and beyond, working together to strengthen primary healthcare and empower youth in the health sector."
        />
        <meta
          name="keywords"
          content="AHC Partners, Africa Health Collaborative Partners, Health Collaborations Africa, Addis Ababa University Partners, AHC Partnerships, African Health Collaborations"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta property="og:title" content="AHC Partners" />
        <meta
          property="og:description"
          content="Discover the esteemed partners of the Africa Health Collaborative (AHC) at Addis Ababa University. Learn about our collaborations with leading institutions across Africa and beyond, working together to strengthen primary healthcare and empower youth in the health sector."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/partners"
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AHC Partners" />
        <meta
          name="twitter:description"
          content="Discover the esteemed partners of the Africa Health Collaborative (AHC) at Addis Ababa University. Learn about our collaborations with leading institutions across Africa and beyond, working together to strengthen primary healthcare and empower youth in the health sector."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <Hero />

      <section className="relative -mt-20 z-10 py-6 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ahc-dark dark:text-white mb-6 text-start text-2xl text-gray-400 dark:text-white ">
              Vision
            </h1>

            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              {visionText.map((para, idx) => {
                if (idx === 0) {
                  return (
                    <p
                      key={idx}
                      className="font-semibold text-gray-800 dark:text-white leading-relaxed"
                    >
                      {para}
                    </p>
                  );
                }
                if (showFullVision || idx < maxVisible) {
                  return (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  );
                }
                return null;
              })}

              {visionText.length > maxVisible && (
                <div className="text-end mt-4">
                  <button
                    onClick={() => setShowFullVision(!showFullVision)}
                    className="text-ahc-green hover:text-blue-900 dark:text-blue-400 font-semibold "
                  >
                    {showFullVision ? "Read Less" : "Read More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-ahc-dark px-20 py-24">
        <div className="container mx-auto px-6 lg:px-0 lg:flex lg:gap-12">
          <div className="lg:w-2/3 space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden transition hover:shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <span className=" text-gray-800 dark:text-white text-2x3">
                    {item.title}
                  </span>

                  <span className="text-gray-500 dark:text-gray-300 text-2xl ">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-6 py-4  dark:bg-gray-900 text-gray-500 dark:text-gray-300  ">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-400 dark:text-white mb-6">
              Our Partners
            </h3>
            <p className=" text-gray-500 dark:text-white">
              This Partnership Agreement is made and entered into by and between
              the following parties:{" "}
            </p>
            <br />
            <p className=" text-gray-500 dark:text-white">
              All members of the Collaborative share a commitment to partnership
              building, with the goals of identifying areas of fruitful
              collaboration and together co-creating programs to maximize impact
              in Africa. The essence of the Collaborative embodies the African
              Ubuntu philosophy (community, solidarity, and interconnectedness)
              and is inspired by the Harambee spirit of collaboration (Swahili:
              all pulling together). We will be guided by the following
              principles: .{" "}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition transform"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
