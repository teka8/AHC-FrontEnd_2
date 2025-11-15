import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/partners/Hero";

const partners = [
  {
    name: "Addis Ababa University",
    country: "Ethiopia",
    logo: "/images/partners/addis-ababa-university.png",
  },
  {
    name: "African Institute for Mathematical Sciences",
    country: "Rwanda",
    logo: "/images/partners/aims.png",
  },
  {
    name: "African Leadership University",
    country: "Mauritius, Rwanda",
    logo: "/images/partners/alu.png",
  },
  {
    name: "Amref International University (Amref Health Africa)",
    country: "Kenya",
    logo: "/images/partners/amref.png",
  },
  {
    name: "Ashesi University",
    country: "Ghana",
    logo: "/images/partners/ashesi-university.png",
  },
  {
    name: "Kwame Nkrumah University of Science and Technology",
    country: "Ghana",
    logo: "/images/partners/knust.png",
  },
  {
    name: "Mastercard Foundation",
    country: "Canada",
    logo: "/images/partners/mastercard-foundation.png",
  },
  {
    name: "Moi University",
    country: "Kenya",
    logo: "/images/partners/moi-university.png",
  },
  {
    name: "University of Cape Town",
    country: "South Africa",
    logo: "/images/partners/uct.png",
  },
  {
    name: "University of Toronto",
    country: "Canada",
    logo: "/images/partners/utoronto.png",
  },
];

export default function Partners() {
  const [filter, setFilter] = useState("");

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(filter.toLowerCase()) ||
      partner.country.toLowerCase().includes(filter.toLowerCase())
  );

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
        <meta
          property="og:title"
          content="AHC Partners – Africa Health Collaborative"
        />
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
        <meta
          name="twitter:title"
          content="AHC Partners – Africa Health Collaborative"
        />
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
      <div className="bg-white dark:bg-ahc-dark">
        <section className="py-24 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex justify-center">
              <input
                type="text"
                placeholder="Search partners by name or country..."
                className="w-full max-w-lg p-4 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredPartners.map((partner) => (
                <Link
                  to={partner.name}
                  key={partner.name}
                  className="bg-white dark:bg-ahc-dark-secondary rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-24 object-contain mb-4"
                    />
                    <h3 className="font-bold font-display text-xl text-ahc-dark dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      {partner.country}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
