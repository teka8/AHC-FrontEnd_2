import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useGetLeaderQuery } from "../features/leaders/leadersApi";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import LeaderHero from "../components/about/LeaderHero";

export default function AhcLeaderDetail() {
  const { id } = useParams();
  const { data: leader, isLoading, isError } = useGetLeaderQuery(Number(id));
  const analytics = useAnalytics();

  // Track leader view when data is loaded
  useEffect(() => {
    if (leader && id) {
      analytics.trackLeaderView(id, leader.name);
    }
  }, [leader, id, analytics]);

  if (isLoading) {
    return (
      <>
        <LeaderHero />
        <div className="flex justify-center py-20 bg-[rgb(255,253,246)] dark:bg-slate-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ahc-green"></div>
        </div>
      </>
    );
  }

  if (isError || !leader) {
    return (
      <>
        <LeaderHero />
        <div className="text-center py-20 bg-[rgb(255,253,246)] dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Leader not found
          </h2>
          <Link
            to="/ahcleaders"
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 mt-4 inline-block"
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

      <LeaderHero />

      <div className="bg-[rgb(255,253,246)] dark:bg-slate-900 py-12 md:py-16">
        <div className="container mx-auto px-6 md:flex md:gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src={leader.image || '/images/placeholder.png'}
              alt={leader.name}
              className="rounded-2xl shadow-xl bg-white dark:bg-slate-800 p-6 w-full h-auto object-contain border border-gray-200 dark:border-slate-700"
            />
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white mb-4">
              {leader.name}
            </h2>
            <p className="text-lg text-ahc-green dark:text-ahc-green-light mb-2">{leader.position}</p>
            
            {leader.linkedin_url && (
              <a
                href={leader.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackLinkedInClick(leader.name)}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-lg transition-colors shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                View LinkedIn Profile
              </a>
            )}
            
            <div 
              className="text-gray-600 dark:text-gray-300 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: leader.description || '' }}
            />
            <Link
              to={leader.type === 'team' ? "/ahc-team" : "/ahcleaders"}
              className="mt-8 inline-block btn bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-full px-6 py-3 transition-colors shadow-md"
            >
              ← Back to {leader.type === 'team' ? 'Team' : 'Leaders'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
