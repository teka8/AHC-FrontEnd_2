import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useGetScholarshipsQuery } from "../../features/scholarship/scholarshipsApi";
import { Calendar, DollarSign, GraduationCap } from "lucide-react";
import dayjs from "dayjs";
import Loader from "../../components/Loader";

const statusStyles = {
  open: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  upcoming:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  closed: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
};

const statusLabels = {
  open: "Open",
  upcoming: "Upcoming",
  closed: "Closed",
};

export default function ScholarshipHome() {
  const { data: scholarships = [], isLoading } = useGetScholarshipsQuery();

  const openScholarships = scholarships.filter((s) => s.status === "open");
  const upcomingScholarships = scholarships.filter(
    (s) => s.status === "upcoming"
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
            <h2 className="text-3xl font-bold mb-8">Available Scholarships</h2>

            {isLoading && <Loader />}

            {!isLoading && scholarships.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scholarships.map((scholarship) => (
                  <div
                    key={scholarship.id}
                    className="border rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">
                        {scholarship.title}
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          statusStyles[scholarship.status]
                        }`}
                      >
                        {statusLabels[scholarship.status]}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {scholarship.description}
                    </p>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Deadline:{" "}
                          {dayjs(scholarship.deadline).format("MMMM D, YYYY")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{scholarship.coverage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="capitalize">
                          {scholarship.program_type}
                        </span>
                      </div>
                      {scholarship.available_slots && (
                        <div className="text-xs text-blue-600 dark:text-blue-400">
                          {scholarship.available_slots} slots available
                        </div>
                      )}
                    </div>

                    {scholarship.status === "open" ? (
                      <Link
                        to={`/scholarship/apply?id=${scholarship.id}`}
                        className="block text-center bg-ahc-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                      >
                        Apply Now
                      </Link>
                    ) : scholarship.status === "upcoming" ? (
                      <button
                        disabled
                        className="block w-full text-center bg-gray-300 dark:bg-gray-700 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                      >
                        Not Yet Open
                      </button>
                    ) : (
                      <button
                        disabled
                        className="block w-full text-center bg-gray-300 dark:bg-gray-700 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                      >
                        Applications Closed
                      </button>
                    )}
                  </div>
                ))}
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
