
import { Link } from "react-router-dom";
import { Calendar, DollarSign, GraduationCap } from "lucide-react";
import dayjs from "dayjs";
import { Scholarship } from "../../features/scholarship/types";

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

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export default function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <div
      key={scholarship.id}
      className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img src={scholarship.image_url ?? 'https://placehold.co/600x400/000000/FFFFFF/png'} alt={scholarship.title} className="rounded-t-xl h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold mb-2">{scholarship.title}</h3>
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              statusStyles[scholarship.status]
            }`}
          >
            {statusLabels[scholarship.status]}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
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
    </div>
  );
}
