import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "../components/about/LeaderHero";
import { leaders } from "../data/ahcLeaders";

export default function AhcLeaders() {
  return (
    <>
      <Helmet>
        <title>AHC Leaders – Africa Health Collaborative</title>
      </Helmet>

      <Hero />

      <div className="bg-slate-50 dark:bg-ahc-dark py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ahc-dark dark:text-white mb-2">
            Meet our Leaders
          </h1>
          <div className="flex items-center mb-12">
            <div className="w-24 h-1 bg-ahc-green rounded-full"></div>
            <div className="w-12 h-1 bg-ahc-blue rounded-full ml-2"></div>
          </div>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300 mb-12">
            From its earliest days as a university college to its present position as Ethiopia’s first autonomous public university, AAU has been shaped by its presidents. AAU's current President is Dr Samuel Kifle who has been entrusted with the historic task of leading the university's transition to autonoms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <Link
                to={`/ahc-leaders/${leader.id}`}
                key={leader.id}
                className="bg-white dark:bg-ahc-dark-secondary rounded-lg shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-ahc-green dark:text-ahc-green-light mt-1">
                    {leader.position}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-ahc-blue hover:text-ahc-blue-dark dark:text-ahc-blue-light dark:hover:text-white transition-colors">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
