import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { leaders } from "../data/ahcLeaders";
import Hero from "../components/partners/Hero";

export default function AhcLeaderDetail() {
  const { id } = useParams();
  const leader = leaders.find((l) => l.id === Number(id));

  if (!leader) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Leader not found
        </h2>
        <Link
          to="/ahc-leaders"
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          ← Back to Leaders
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{leader.name} – AHC Leader</title>
      </Helmet>

      <Hero />

      <div className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-6 md:flex md:gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src={leader.image}
              alt={leader.name}
              className="rounded-2xl shadow-xl bg-white p-6 w-full h-auto object-contain"
            />
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-white mb-4">
              {leader.name}
            </h2>
            <p className="text-lg text-ahc-green mb-6">{leader.position}</p>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
              {leader.description}
            </p>
            <Link
              to="/ahcleaders"
              className="mt-8 inline-block btn bg-ahc-green hover:bg-ahc-green-dark font-semibold rounded-full px-6 py-3 transition-colors "
            >
              ← Back to All Leaders
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
