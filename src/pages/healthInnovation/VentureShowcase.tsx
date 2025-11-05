import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetVenturesQuery,
  useVoteVentureMutation,
} from "../../features/healthInnovation/venturesApi";
import type { Venture } from "../../features/healthInnovation/types";
import { ThumbsUp, MapPin, Users, TrendingUp } from "lucide-react";
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

export default function VentureShowcase() {
  const [selectedFocus, setSelectedFocus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <>
      <Helmet>
        <title>Venture Showcase - Health Innovation & Entrepreneurship</title>
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Venture Showcase</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover innovative health startups transforming healthcare across
              Africa
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search ventures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ahc-green"
            />
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            {focusAreas.map((area) => (
              <button
                key={area.value}
                onClick={() => setSelectedFocus(area.value)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedFocus === area.value
                    ? "bg-ahc-green text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {area.label}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && <Loader />}

          {/* Ventures Grid */}
          {!isLoading && ventures.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventures.map((venture) => (
                <Link
                  key={venture.id}
                  to={`/health-innovation/ventures/${venture.id}`}
                  className="border rounded-lg p-6 hover:shadow-lg transition group"
                >
                  {/* Logo */}
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {venture.logo ? (
                      <img
                        src={venture.logo}
                        alt={venture.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-gray-400">
                        {venture.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Badge */}
                  {venture.featured && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded mb-2">
                      ⭐ Featured
                    </span>
                  )}

                  {/* Name & Tagline */}
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-ahc-green transition">
                    {venture.name}
                  </h3>
                  {venture.tagline && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">
                      {venture.tagline}
                    </p>
                  )}

                  {/* Focus Area */}
                  <div className="text-sm text-ahc-green font-medium mb-3 capitalize">
                    {venture.focus_area.replace("-", " ")}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {venture.description || "Innovative healthcare solution"}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {venture.country && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{venture.country}</span>
                      </div>
                    )}
                    {venture.team_size && (
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{venture.team_size} team</span>
                      </div>
                    )}
                    {venture.patients_impacted && (
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>
                          {venture.patients_impacted.toLocaleString()} patients
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-medium text-ahc-green">
                      Learn More →
                    </span>
                    <button
                      onClick={(e) => handleVote(venture.id, e)}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-ahc-green transition"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{venture.votes_count || 0}</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && ventures.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No ventures found
              </p>
              <p className="text-sm text-gray-500">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
