import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type PillarProgramsSectionProps = {
  category: string;
  title: string;
};

const PillarProgramsSection: React.FC<PillarProgramsSectionProps> = ({ category, title }) => {
  const { data: programsData = [], isLoading } = useGetProgramsQuery({ category });

  const extractCountries = React.useCallback((value?: string | null) => {
    if (!value) {
      return [] as string[];
    }

    return Array.from(
      new Set(
        value
          .split(/[\n,|]/)
          .map((item) => item.trim())
          .filter(Boolean)
      )
    );
  }, []);

  const toPlainText = React.useCallback((value?: string | null) => {
    if (!value) {
      return '';
    }

    return value
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  const programs = programsData
    .filter((p) => p.state === 'active' || p.state === 'paused')
    .map((p) => ({
      id: p.id,
      title: p.title,
      description: toPlainText(p.description),
      branch: p.host,
      image: p.image_thumb || p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      state: p.state,
      countries: extractCountries(p.country),
    }));

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (
    direction: 'left' | 'right',
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mb-20 max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
        <h2 className="text-4xl font-bold text-ahc-black text-center md:text-left">
          {title}
        </h2>
        <Link
          to={`/programs?category=${category}`}
          className="text-ahc-green hover:text-ahc-green-dark font-semibold inline-flex items-center"
        >
          See All Programs <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="relative px-2">
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('left', scrollRef)}
            className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto space-x-8 pb-8 scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {isLoading ? (
            <div className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="animate-pulse">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ) : programs.length > 0 ? (
            programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-t-xl h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {program.branch}
                    </p>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        program.state === 'active'
                          ? 'text-green-800 bg-green-200'
                          : program.state === 'paused'
                            ? 'text-orange-800 bg-orange-200'
                            : 'text-blue-800 bg-blue-200'
                      }`}
                    >
                      {program.state}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{program.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 break-words">
                    {program.description || 'A short description of the program.'}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex-shrink-0 w-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No programs available at the moment.
              </p>
            </div>
          )}
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('right', scrollRef)}
            className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PillarProgramsSection;
