import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetScholarshipQuery } from '../../features/scholarship/scholarshipsApi';
import Loader from '../../components/Loader';
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import SectionHeader from '../../components/ui/SectionHeader';

const ScholarshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetScholarshipQuery(id!);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <div>Error loading scholarship details.</div>;
  }

  const { title, description, eligibility_criteria, deadline, image_url, program_type, coverage, available_slots, status } = data;

  return (
    <>
      <Helmet>
        <title>{title} – Scholarship Details</title>
      </Helmet>
      <div className="container pt-24 pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-8">
              <a
                href="/scholarship"
                className="text-sm font-medium text-ahc-green-dark hover:underline"
              >
                &larr; All scholarships
              </a>
            </div>
            <SectionHeader eyebrow="Scholarship" title={title} />
            {image_url && (
              <img
                src={image_url}
                alt={title}
                className="w-full rounded-xl border dark:border-slate-800 mb-8 shadow-lg"
              />
            )}
            <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-headings:font-display prose-headings:text-ahc-dark dark:prose-headings:text-white">
              <div
                className="break-words whitespace-normal overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: description ?? "" }}
              />
              <h2 className="text-2xl font-bold mt-8 mb-4">Eligibility</h2>
              <div
                className="break-words whitespace-normal overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: eligibility_criteria ?? "" }}
              />
            </article>
          </div>
          <aside className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="font-display text-xl font-bold mb-4">Details</h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
                <li>
                  <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                    Deadline:
                  </strong>{" "}
                  {deadline
                    ? dayjs(deadline).format("MMMM DD, YYYY")
                    : "TBA"}
                </li>
                {program_type && (
                  <li>
                    <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                      Program Type:
                    </strong>{" "}
                    <span className="capitalize">{program_type}</span>
                  </li>
                )}
                {coverage && (
                  <li>
                    <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                      Coverage:
                    </strong>{" "}
                    {coverage}
                  </li>
                )}
                {available_slots && (
                  <li>
                    <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                      Available Slots:
                    </strong>{" "}
                    {available_slots}
                  </li>
                )}
                {status && (
                  <li>
                    <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                      Status:
                    </strong>{" "}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        status === "open"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {status}
                    </span>
                  </li>
                )}
              </ul>
              {status === "open" && (
                <Link
                  to={`/scholarship/apply?id=${id}`}
                  className="btn bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-full px-8 py-3 transition-colors w-full mt-6 text-center"
                >
                  Apply Now
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ScholarshipDetail;
