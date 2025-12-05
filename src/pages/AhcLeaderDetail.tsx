import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetLeaderQuery } from "../features/leaders/leadersApi";
import Hero from "../components/partners/Hero";

export default function AhcLeaderDetail() {
  const { id } = useParams();
  const { data: leader, isLoading, isError } = useGetLeaderQuery(Number(id));

  if (isLoading) {
    return (
      <>
        <Hero />
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ahc-green"></div>
        </div>
      </>
    );
  }

  if (isError || !leader) {
    return (
      <>
        <Hero />
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Leader not found
          </h2>
          <Link
            to="/ahcleaders"
            className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
          >
            ← Back to Leaders
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{leader.name} – AHC Leader</title>
      </Helmet>

      <Hero />

      <div className="dark:bg-slate-900 py-12 md:py-16" style={{backgroundColor: 'rgb(255, 253, 246)'}}>
        <div className="container mx-auto px-6 md:flex md:gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src={leader.image || '/images/placeholder.png'}
              alt={leader.name}
              className="rounded-2xl shadow-xl bg-white p-6 w-full h-auto object-contain"
            />
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-white mb-4">
              {leader.name}
            </h2>
            <p className="text-lg text-ahc-green mb-6">{leader.position}</p>
            <div 
              className="text-gray-500 dark:text-gray-300 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: leader.description || '' }}
            />
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
