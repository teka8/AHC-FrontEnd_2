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

      <div className="bg-white dark:bg-ahc-dark py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            AHC Leaders
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <Link
                to={`/ahc-leaders/${leader.id}`}
                key={leader.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-contain bg-gray-50 p-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 line-clamp-2"></p>
                  <div className="mt-4 text-ahc-green hover:text-blue-900 font-medium">
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
