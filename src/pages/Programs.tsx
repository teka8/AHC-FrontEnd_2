import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetProgramsQuery, type ProgramItem } from '../features/healthPillars/programsApi';
import ProgramCard from '../components/cards/ProgramCard';

const CATEGORY_SECTIONS: Array<{
  value: string;
  title: string;
  description: string;
}> = [
  {
    value: 'health_employment',
    title: 'Health Employment',
    description:
      'Programs focused on building and sustaining a skilled health workforce across the continent.',
  },
  {
    value: 'health_entrepreneurship',
    title: 'Health Entrepreneurship',
    description:
      'Initiatives supporting health innovators and startups that are transforming access to care.',
  },
  {
    value: 'health_ecosystems',
    title: 'Health Ecosystems',
    description:
      'Collaborations strengthening systems, infrastructure, and leadership within health sectors.',
  },
  {
    value: 'uncategorized',
    title: 'Uncategorized Programs',
    description:
      'Programs still being classified or spanning multiple focus areas of the collaborative.',
  },
];

const Programs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category')?.toLowerCase() ?? null;
  const { data: programs = [], isLoading } = useGetProgramsQuery(undefined);

  const groupedPrograms = useMemo(() => {
    const initial = CATEGORY_SECTIONS.reduce<Record<string, ProgramItem[]>>((acc, section) => {
      acc[section.value] = [];
      return acc;
    }, {});

    programs.forEach((program) => {
      const categories = program.categories && program.categories.length > 0
        ? program.categories
        : ['uncategorized'];

      categories.forEach((category) => {
        const key = CATEGORY_SECTIONS.some((section) => section.value === category)
          ? category
          : 'uncategorized';

        initial[key].push(program);
      });
    });

    return initial;
  }, [programs]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    const el = document.getElementById(`program-category-${selectedCategory}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ahc-green/20 via-transparent to-ahc-blue/20 dark:from-ahc-green-dark/30 dark:to-ahc-blue/30" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-ahc-green/10 text-ahc-green-dark">
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Discover Programs Across Every Health Pillar
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Explore all active, upcoming, and flagship programs led by the Africa Health Collaborative.
              Filter by focus area to find initiatives aligned with your interests.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/programs"
              className={`px-5 py-2 rounded-full border transition-colors font-semibold ${
                selectedCategory === null
                  ? 'bg-ahc-green text-white border-ahc-green'
                  : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-ahc-green hover:text-ahc-green'
              }`}
            >
              All Programs
            </Link>
            {CATEGORY_SECTIONS.map((section) => (
              <Link
                key={section.value}
                to={`/programs?category=${section.value}`}
                className={`px-5 py-2 rounded-full border transition-colors font-semibold ${
                  selectedCategory === section.value
                    ? 'bg-ahc-green text-white border-ahc-green'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-ahc-green hover:text-ahc-green'
                }`}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        {CATEGORY_SECTIONS.map((section) => {
          const items = groupedPrograms[section.value] ?? [];

          return (
            <div key={section.value} id={`program-category-${section.value}`}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                    {section.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {items.length} {items.length === 1 ? 'program' : 'programs'}
                </div>
              </div>

              {isLoading ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={`program-skeleton-${index}`}
                      className="animate-pulse rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-72"
                    />
                  ))}
                </div>
              ) : items.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((program) => (
                    <ProgramCard key={program.id} item={program} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-10 text-center text-gray-500 dark:text-gray-400">
                  No programs are currently published under this category. Please check back soon.
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Programs;
