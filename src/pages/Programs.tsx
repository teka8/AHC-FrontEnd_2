import React, { useMemo, useState } from "react";
import { useGetProgramsQuery } from "../features/healthPillars/programsApi";
import ProgramCard from "../components/cards/ProgramCard";
import { Search, X, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";

const Programs: React.FC = () => {
  const { data: programs = [], isLoading } = useGetProgramsQuery(undefined);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPillars, setSelectedPillars] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { pillars, countries, partners } = useMemo(() => {
    const pillars = [...new Set(programs.flatMap(p => p.category_labels))];
    const countries = [...new Set(programs.map(p => p.country).filter(Boolean) as string[])];
    
    const partnerSet = new Set<string>();
    programs.forEach(p => {
      if (p.host) partnerSet.add(p.host);
      if (p.partners_involved) {
        try {
          const parsed = JSON.parse(p.partners_involved);
          if (Array.isArray(parsed)) {
            parsed.forEach(partner => partnerSet.add(partner));
          }
        } catch (e) {
          p.partners_involved.split(/, ?/).forEach(partner => partnerSet.add(partner.trim()));
        }
      }
    });

    return { pillars, countries, partners: [...partnerSet] };
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const searchTermMatch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            program.description.toLowerCase().includes(searchTerm.toLowerCase());
      const pillarMatch = selectedPillars.length === 0 || program.category_labels.some(c => selectedPillars.includes(c));
      const countryMatch = selectedCountries.length === 0 || (program.country && selectedCountries.includes(program.country));
      
      const programPartners = new Set<string>([program.host]);
      if (program.partners_involved) {
        try {
          const parsed = JSON.parse(program.partners_involved);
          if (Array.isArray(parsed)) {
            parsed.forEach(partner => programPartners.add(partner));
          }
        } catch (e) {
            program.partners_involved.split(/, ?/).forEach(partner => programPartners.add(partner.trim()));
        }
      }
      const partnerMatch = selectedPartners.length === 0 || [...programPartners].some(p => selectedPartners.includes(p));

      const statusMatch = selectedStatus.length === 0 || selectedStatus.includes(program.state);

      return searchTermMatch && pillarMatch && countryMatch && partnerMatch && statusMatch;
    });
  }, [programs, searchTerm, selectedPillars, selectedCountries, selectedPartners, selectedStatus]);

  const statusOptions = ["active", "upcoming", "paused", "archived"];

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const paginatedPrograms = filteredPrograms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const FilterCheckbox: React.FC<{label: string, group: string[], setGroup: React.Dispatch<React.SetStateAction<string[]>>}> = ({ label, group, setGroup }) => (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green"
        checked={group.includes(label)}
        onChange={() => {
          setGroup(
            group.includes(label)
              ? group.filter((item) => item !== label)
              : [...group, label]
          );
        }}
      />
      <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
    </label>
  );

  const hasActiveFilters = selectedPillars.length > 0 || selectedCountries.length > 0 || selectedPartners.length > 0 || selectedStatus.length > 0;

  const renderFilters = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Pillars</h3>
        <div className="space-y-2">
          {pillars.map(p => <FilterCheckbox key={p} label={p} group={selectedPillars} setGroup={setSelectedPillars} />)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Countries</h3>
        <div className="space-y-2">
          {countries.map(c => <FilterCheckbox key={c} label={c} group={selectedCountries} setGroup={setSelectedCountries} />)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Partners</h3>
        <div className="space-y-2">
          {partners.map(p => <FilterCheckbox key={p} label={p} group={selectedPartners} setGroup={setSelectedPartners} />)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Status</h3>
        <div className="space-y-2">
          {statusOptions.map(s => <FilterCheckbox key={s} label={s} group={selectedStatus} setGroup={setSelectedStatus} />)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <section className="relative isolate overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/pillars/health-entrepreneurship-hero.jpg"
            alt="Programs hero"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-ahc-green/40" />
        </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-xl">
                      Discover Our Programs
                    </h1>
                    <p className="mt-4 text-lg text-white/80">
                      Explore initiatives shaping the future of health in Africa. Use the filters to find programs aligned with your interests.
                    </p>
                  </div>
                </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-h-[calc(100vh-theme(spacing.24)*2)] overflow-y-auto">
              {renderFilters()}
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-ahc-green focus:border-ahc-green bg-white dark:bg-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 h-80" />
                ))}
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Showing {paginatedPrograms.length} of {filteredPrograms.length} programs.
                </div>
                {filteredPrograms.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {paginatedPrograms.map((program) => (
                      <ProgramCard key={program.id} item={program} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-semibold">No programs found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                  </div>
                )}
              </>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-4">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md disabled:opacity-50"
                >
                  <ChevronLeft />
                </button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md disabled:opacity-50"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {/* Floating Filter Button for Mobile */}
      <button
        className="lg:hidden fixed bottom-6 left-6 z-40 bg-ahc-green hover:bg-ahc-green-dark text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 font-semibold"
        onClick={() => setIsSidebarOpen(true)}
      >
        <SlidersHorizontal className="h-5 w-5" />
        <span className="text-sm">Filters</span>
        {hasActiveFilters && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full min-w-[22px] h-5.5 px-1.5 flex items-center justify-center">
            {selectedPillars.length + selectedCountries.length + selectedPartners.length + selectedStatus.length}
          </span>
        )}
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 h-full overflow-y-auto overflow-x-hidden">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="px-6">
              <h2 className="text-xl font-bold">Filters</h2>
            </div>
            <div className="mt-5 px-6">
              {renderFilters()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
