import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "../components/about/TeamHero";
import { useGetLeadersQuery } from "../features/leaders/leadersApi";

export default function AhcTeam() {
  const { data: team = [], isLoading, isError } = useGetLeadersQuery({ type: 'team' });

  return (
    <>
      <Helmet>
        <title>AHC Team – Africa Health Collaborative</title>
        <meta
          name="description"
          content="Meet the dedicated team members of the Africa Health Collaborative at Addis Ababa University, working together to drive transformative health initiatives across the continent."
        />
        <meta
          name="keywords"
          content="AHC Team, Africa Health Collaborative, Addis Ababa University, Health Team, African Health Initiatives, AHC-AAU Team Members"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta property="og:title" content="AHC-AAU Team" />
        <meta
          property="og:description"
          content="Meet the dedicated team members of the Africa Health Collaborative at Addis Ababa University."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/ahc-team"
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AHC-AAU Team" />
        <meta
          name="twitter:description"
          content="Meet the dedicated team members of the Africa Health Collaborative at Addis Ababa University."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>

      <Hero />

      <section className="bg-white dark:bg-slate-900 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ahc-dark dark:text-white mb-2">
            Meet our Team
          </h1>
          <div className="flex items-center mb-12">
            <div className="w-24 h-1 bg-ahc-green rounded-full"></div>
            <div className="w-12 h-1 bg-ahc-blue rounded-full ml-2"></div>
          </div>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300 mb-12">
            Our dedicated team members work tirelessly to support the Africa Health 
            Collaborative's mission of advancing health initiatives across the continent. 
            Together, we strive to create lasting impact in healthcare delivery and research.
          </p>

          {isLoading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ahc-green"></div>
            </div>
          )}

          {isError && (
            <div className="text-center py-12 text-red-500 dark:text-red-400">
              Failed to load team members. Please try again later.
            </div>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <Link
                  to={`/ahc-leaders/${member.id}`}
                  key={member.id}
                  className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || '/images/placeholder.png'}
                      alt={member.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {member.linkedin_url && (
                      <a
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 p-2 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] transition-colors shadow-lg"
                        title="View LinkedIn Profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-ahc-green dark:text-ahc-green-light mt-1">
                      {member.position}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-ahc-blue hover:text-ahc-blue-dark dark:text-ahc-blue-light dark:hover:text-white transition-colors">
                      View Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Back to Leaders Button */}
          <div className="mt-16 text-center">
            <Link
              to="/ahcleaders"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to AHC Leaders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
