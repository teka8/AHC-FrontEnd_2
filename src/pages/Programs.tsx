import React, { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  useGetProgramsQuery,
  type ProgramItem,
} from "../features/healthPillars/programsApi";
import ProgramCard from "../components/cards/ProgramCard";

const CATEGORY_SECTIONS: Array<{
  value: string;
  title: string;
  description: string;
}> = [
  {
    value: "health_employment",
    title: "Health Employment",
    description:
      "Programs focused on building and sustaining a skilled health workforce across the continent.",
  },
  {
    value: "health_entrepreneurship",
    title: "Health Entrepreneurship",
    description:
      "Initiatives supporting health innovators and startups that are transforming access to care.",
  },
  {
    value: "health_ecosystems",
    title: "Health Ecosystems",
    description:
      "Collaborations strengthening systems, infrastructure, and leadership within health sectors.",
  },
  {
    value: "uncategorized",
    title: "Uncategorized Programs",
    description:
      "Programs still being classified or spanning multiple focus areas of the collaborative.",
  },
];

const Programs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category")?.toLowerCase() ?? null;
  const { data: programs = [], isLoading } = useGetProgramsQuery(undefined);

  const stats = useMemo(() => {
    const total = programs.length;
    const active = programs.filter(
      (program) => program.state === "active"
    ).length;
    const upcoming = programs.filter(
      (program) => program.state === "upcoming"
    ).length;
    const paused = programs.filter(
      (program) => program.state === "paused"
    ).length;

    return {
      total,
      active,
      upcoming,
      paused,
    };
  }, [programs]);

  const groupedPrograms = useMemo(() => {
    const initial = CATEGORY_SECTIONS.reduce<Record<string, ProgramItem[]>>(
      (acc, section) => {
        acc[section.value] = [];
        return acc;
      },
      {}
    );

    programs.forEach((program) => {
      const categories =
        program.categories && program.categories.length > 0
          ? program.categories
          : ["uncategorized"];

      categories.forEach((category) => {
        const key = CATEGORY_SECTIONS.some(
          (section) => section.value === category
        )
          ? category
          : "uncategorized";

        initial[key].push(program);
      });
    });

    return initial;
  }, [programs]);

  const featuredPrograms = useMemo(() => {
    const active = programs.filter((program) => program.state === "active");
    if (active.length >= 3) {
      return active.slice(0, 3);
    }

    const upcoming = programs.filter((program) => program.state === "upcoming");
    return [...active, ...upcoming, ...programs].slice(0, 3);
  }, [programs]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    const el = document.getElementById(`program-category-${selectedCategory}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pillars/health-entrepreneurship-hero.jpg"
            alt="Programs hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-ahc-green/40" />
          <div className="absolute -left-32 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-ahc-green/20 blur-3xl lg:block" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-4xl space-y-8 text-white">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-white/15">
                Our Programs
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                Africa Health Collaborative
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight drop-shadow-xl">
              Discover Flagship Initiatives Across Every Health Pillar
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-3xl">
              Explore all active, upcoming, and visionary programs shaping the
              future of health in Africa. Filter by focus area to uncover
              initiatives aligned with your interests.
            </p>

            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Total Programs
                </p>
                <p className="text-3xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Active
                </p>
                <p className="text-3xl font-bold text-white">{stats.active}</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Upcoming
                </p>
                <p className="text-3xl font-bold text-white">
                  {stats.upcoming}
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Paused
                </p>
                <p className="text-3xl font-bold text-white">{stats.paused}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/programs"
              className={`px-5 py-2 rounded-full border transition-colors font-semibold backdrop-blur bg-white/20 text-white border-white/40 hover:bg-white/30 ${
                selectedCategory === null ? "ring-2 ring-white/70" : ""
              }`}
            >
              All Programs
            </Link>
            {CATEGORY_SECTIONS.map((section) => (
              <Link
                key={section.value}
                to={`/programs?category=${section.value}`}
                className={`px-5 py-2 rounded-full transition-colors font-semibold backdrop-blur border ${
                  selectedCategory === section.value
                    ? "bg-white text-ahc-green border-white"
                    : "border-white/40 text-white/80 hover:text-white hover:border-white/60"
                }`}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-ahc-green/5 dark:from-gray-900 dark:via-gray-900 dark:to-ahc-green-dark/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
          {CATEGORY_SECTIONS.map((section, index) => {
            const items = groupedPrograms[section.value] ?? [];

            return (
              <div
                key={section.value}
                id={`program-category-${section.value}`}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl dark:bg-slate-900/70 dark:border-slate-700/60 p-8 space-y-8"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-ahc-green/5 via-transparent to-ahc-blue/5" />
                <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-ahc-green/10 text-ahc-green-dark text-xs font-semibold uppercase tracking-wide">
                      {section.title}
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {section.description}
                    </p>
                  </div>
                  <div className="self-start md:self-end rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 backdrop-blur bg-white/80 dark:bg-gray-800/70">
                    {items.length} {items.length === 1 ? "program" : "programs"}
                  </div>
                </div>

                {isLoading ? (
                  <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, skeletonIndex) => (
                      <div
                        key={`program-skeleton-${index}-${skeletonIndex}`}
                        className="animate-pulse rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-80"
                      />
                    ))}
                  </div>
                ) : items.length > 0 ? (
                  <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((program) => (
                      <ProgramCard key={program.id} item={program} />
                    ))}
                  </div>
                ) : (
                  <div className="relative rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-10 text-center text-gray-500 dark:text-gray-400">
                    No programs are currently published under this category.
                    Please check back soon.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Programs;
