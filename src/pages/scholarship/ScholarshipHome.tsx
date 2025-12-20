import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useGetScholarshipsQuery } from "../../features/scholarship/scholarshipsApi";
import Loader from "../../components/Loader";
import ScholarshipCard from "../../components/cards/ScholarshipCard";
import React, { useState } from "react";

export default function ScholarshipHome() {
  const { data: scholarships = [], isLoading } = useGetScholarshipsQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const openScholarships = scholarships.filter((s) => s.status === "open");

  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Scholarship Portal - AHC</title>
        <meta
          name="description"
          content="Apply for health innovation scholarships"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}

        <section className="relative bg-gradient-to-r from-ahc-green to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Scholarship Application Portal
              </h1>
              <p className="text-xl mb-8">
                Empowering the next generation of health innovators through
                education and support
              </p>
              {openScholarships.length > 0 && (
                <Link
                  to="/scholarship/apply"
                  className="inline-block bg-white text-ahc-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Apply for Scholarship
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Active Scholarships */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Available Scholarships</h2>
              <div className="w-1/3">
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  className="w-full px-4 py-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search scholarships"
                />
              </div>
            </div>

            {isLoading && <Loader />}

            {!isLoading && filteredScholarships.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredScholarships.map((scholarship) => (
                  <ScholarshipCard
                    key={scholarship.id}
                    scholarship={scholarship}
                  />
                ))}
              </div>
            )}

            {!isLoading && filteredScholarships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No scholarships found for your search query.
                </p>
                <p className="text-sm text-gray-500">
                  Try searching for something else.
                </p>
              </div>
            )}

            {!isLoading && scholarships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No scholarships available at the moment
                </p>
                <p className="text-sm text-gray-500">
                  Check back later for new opportunities
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ahc-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Register Account</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create your account and verify your email
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ahc-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Complete Application</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fill out forms and upload required documents
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ahc-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Review Process</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team evaluates your application
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ahc-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Results</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receive notification of decision
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
