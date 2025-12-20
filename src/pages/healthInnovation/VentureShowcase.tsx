import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetVenturesQuery,
  useVoteVentureMutation,
} from "../../features/healthInnovation/venturesApi";
import { ThumbsUp, MapPin, Users, TrendingUp, Rocket, Search, ChevronLeft, ChevronRight } from "lucide-react";
import Loader from "../../components/Loader";

const focusAreas = [
  { value: "all", label: "All" },
  { value: "mental-health", label: "Mental Health" },
  { value: "telemedicine", label: "Telemedicine" },
  { value: "pharmaceuticals", label: "Pharmaceuticals" },
  { value: "biotech", label: "Biotech" },
  { value: "medtech", label: "MedTech" },
  { value: "diagnostics", label: "Diagnostics" },
];

const ITEMS_PER_PAGE = 9;

export default function VentureShowcase() {
  const [selectedFocus, setSelectedFocus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: ventures = [], isLoading } = useGetVenturesQuery({
    focus_area: selectedFocus as any,
    search: searchQuery || undefined,
    sort_by: "popular",
  });

  const [voteVenture] = useVoteVentureMutation();

  const handleVote = async (ventureId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await voteVenture(ventureId).unwrap();
    } catch (error) {
      console.error("Failed to vote:", error);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(ventures.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentVentures = ventures.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (focus: string) => {
    setSelectedFocus(focus);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Venture Showcase - Health Innovation & Entrepreneurship</title>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Center Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Decorative Triangles */}
            <div className="absolute top-10 left-10 w-16 h-16 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Venture Showcase
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Discover innovative health startups transforming healthcare across Africa
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="bg-white dark:bg-gray-900 py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="mb-6 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search ventures by name, focus area, or location..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                  aria-label="Search ventures"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {focusAreas.map((area) => (
                <button
                  key={area.value}
                  onClick={() => handleFilterChange(area.value)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                    selectedFocus === area.value
                      ? "bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {area.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Loading State */}
          {isLoading && <Loader />}

          {/* Ventures Grid */}
          {!isLoading && ventures.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentVentures.map((venture) => (
                <Link
                  key={venture.id}
                  to={`/health-pillars/health-entrepreneurship/ventures/${venture.id}`}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                >
                  {/* Gradient accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                  
                  {/* Badge */}
                  {venture.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-semibold rounded-full shadow-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl mb-4 flex items-center justify-center overflow-hidden shadow-md">
                    {venture.logo ? (
                      <img
                        src={venture.logo}
                        alt={venture.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                        {venture.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {venture.name}
                  </h3>
                  {venture.tagline && (
                    <p className="text-sm text-teal-600 dark:text-teal-400 mb-3 font-medium">
                      {venture.tagline}
                    </p>
                  )}

                  {/* Focus Area */}
                  <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full mb-4 capitalize">
                    {venture.focus_area.replace("-", " ")}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {venture.description || "Innovative healthcare solution"}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    {venture.country && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-teal-500" aria-hidden="true" />
                        <span>{venture.country}</span>
                      </div>
                    )}
                    {venture.team_size && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-teal-500" aria-hidden="true" />
                        <span>{venture.team_size} team</span>
                      </div>
                    )}
                    {venture.patients_impacted && (
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-teal-500" aria-hidden="true" />
                        <span>
                          {venture.patients_impacted.toLocaleString()} patients
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn More →
                    </span>
                    <button
                      onClick={(e) => handleVote(venture.id, e)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                    >
                      <ThumbsUp className="w-4 h-4" aria-hidden="true" />
                      <span className="font-medium">{venture.votes_count || 0}</span>
                    </button>
                  </div>
                </Link>
              ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center gap-6">
                  {/* Page Info */}
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      Showing <span className="font-semibold text-teal-600 dark:text-teal-400">{startIndex + 1}</span> to{" "}
                      <span className="font-semibold text-teal-600 dark:text-teal-400">{Math.min(endIndex, ventures.length)}</span> of{" "}
                      <span className="font-semibold text-teal-600 dark:text-teal-400">{ventures.length}</span> ventures
                    </p>
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                        currentPage === 1
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        const showPage = 
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1);
                        
                        const showEllipsis = 
                          (page === currentPage - 2 && currentPage > 3) ||
                          (page === currentPage + 2 && currentPage < totalPages - 2);

                        if (showEllipsis) {
                          return (
                            <span key={page} className="px-2 text-gray-400 dark:text-gray-600">
                              ...
                            </span>
                          );
                        }

                        if (!showPage) return null;

                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                              currentPage === page
                                ? "bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg"
                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 border border-gray-200 dark:border-gray-700"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                        currentPage === totalPages
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!isLoading && ventures.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-6">
                <Rocket className="w-10 h-10 text-gray-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No ventures found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Try adjusting your filters or search query to discover more innovative healthcare startups
              </p>
              <button
                onClick={() => {
                  setSelectedFocus("all");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
