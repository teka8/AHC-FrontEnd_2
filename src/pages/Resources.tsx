import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import SectionHeader from "../components/ui/SectionHeader";
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  FileText,
  Calendar,
  User,
  Search,
  Filter,
  X,
  SlidersHorizontal,
} from "lucide-react";
import {
  useGetDocumentsQuery,
  useGetEducationalQuery,
  useGetOthersQuery,
  useIncrementDocumentDownloadMutation,
  useIncrementEducationalDownloadMutation,
  useIncrementOthersDownloadMutation,
  type DocumentItem,
  type EducationalItem,
  type OthersItem,
} from "../features/resources/resourcesApi";

import Hero from "../components/resource/Hero";

type SortOption =
  | "date-newest"
  | "date-oldest"
  | "title-asc"
  | "title-desc"
  | "downloads";

type UnifiedResource = {
  id: number;
  title: string;
  abstract?: string | null;
  description?: string | null;
  author?: string | null;
  creator?: string | null;
  category?: string | null;
  subject_area?: string | null;
  document_type?: string | null;
  resource_type?: string | null;
  publication_date?: string | null;
  published_at?: string | null;
  file_url?: string | null;
  download_count?: number;
  view_count?: number;
  is_featured?: boolean;
  tags?: string[];
  sourceType: "documents" | "educational" | "others";
  sourceTypeName: string;
};

const RESOURCE_TYPE_NAMES = {
  documents: "Document Repository",
  others: "Other Resources",
};

// Hardcoded document types
const DOCUMENT_TYPES = [
  "Research Paper",
  "Policy Brief",
  "Report",
  "Guideline",
  "Educational Content",
  "Other",
];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [selectedResourceTypes, setSelectedResourceTypes] = useState<string[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("date-newest");

  const { data: docs, isLoading: docsLoading } = useGetDocumentsQuery({
    search,
    perPage: 200,
    page: 1,
  });
  const { data: edu, isLoading: eduLoading } = useGetEducationalQuery({
    search,
    perPage: 200,
    page: 1,
  });
  const { data: oth, isLoading: othLoading } = useGetOthersQuery({
    search,
    perPage: 200,
    page: 1,
  });

  const [incrementDocumentDownload] = useIncrementDocumentDownloadMutation();
  const [incrementEducationalDownload] =
    useIncrementEducationalDownloadMutation();
  const [incrementOthersDownload] = useIncrementOthersDownloadMutation();

  // Combine all resources into unified format
  const allResources = useMemo(() => {
    const unified: UnifiedResource[] = [];

    // Add documents
    if (docs) {
      docs.forEach((doc: DocumentItem) => {
        unified.push({
          ...doc,
          sourceType: "documents",
          sourceTypeName: RESOURCE_TYPE_NAMES.documents,
        });
      });
    }

    // Add educational (not displayed in filters but kept in data)
    if (edu) {
      edu.forEach((item: EducationalItem) => {
        unified.push({
          ...item,
          sourceType: "educational",
          sourceTypeName: "Educational Resource Hub",
        });
      });
    }

    // Add others
    if (oth) {
      oth.forEach((item: OthersItem) => {
        unified.push({
          ...item,
          sourceType: "others",
          sourceTypeName: RESOURCE_TYPE_NAMES.others,
        });
      });
    }

    return unified;
  }, [docs, edu, oth]);

  // Extract unique categories, tags, and authors (document types are hardcoded)
  const { categories, othersTypes, tags, authors } = useMemo(() => {
    const catSet = new Set<string>();
    const othTypeSet = new Set<string>();
    const tagSet = new Set<string>();
    const authorSet = new Set<string>();

    allResources.forEach((resource) => {
      const cat = resource.category || resource.subject_area;
      if (cat) catSet.add(cat);

      // Extract others resource types only
      if (resource.sourceType === "others" && resource.resource_type) {
        othTypeSet.add(resource.resource_type);
      }

      // Extract tags
      if (resource.tags && Array.isArray(resource.tags)) {
        resource.tags.forEach((tag) => tagSet.add(tag));
      }

      // Extract authors/creators
      const authorName = resource.author || resource.creator;
      if (authorName) authorSet.add(authorName);
    });

    return {
      categories: Array.from(catSet).sort(),
      othersTypes: Array.from(othTypeSet).sort(),
      tags: Array.from(tagSet).sort(),
      authors: Array.from(authorSet).sort(),
    };
  }, [allResources]);

  // Get types to display based on selected resource types
  const displayedTypes = useMemo(() => {
    // Always show hardcoded document types (they are the main filter)
    if (selectedResourceTypes.length === 0) {
      return DOCUMENT_TYPES;
    }

    const types: string[] = [];
    if (selectedResourceTypes.includes(RESOURCE_TYPE_NAMES.documents)) {
      types.push(...DOCUMENT_TYPES);
    }
    if (selectedResourceTypes.includes(RESOURCE_TYPE_NAMES.others)) {
      types.push(...othersTypes);
    }

    return Array.from(new Set(types)).sort();
  }, [selectedResourceTypes, othersTypes]);

  // Get dynamic label for types filter
  const typesLabel = useMemo(() => {
    if (selectedResourceTypes.length === 0) return "Document Type";
    if (selectedResourceTypes.length === 1) {
      if (selectedResourceTypes.includes(RESOURCE_TYPE_NAMES.documents))
        return "Document Type";
      if (selectedResourceTypes.includes(RESOURCE_TYPE_NAMES.others))
        return "Resource Type";
    }
    return "Document/Resource Type";
  }, [selectedResourceTypes]);

  // Clear invalid type selections when resource types change
  useEffect(() => {
    if (selectedResourceTypes.length === 0 || selectedTypes.length === 0)
      return;

    // Remove types that are no longer in displayedTypes
    const newSelectedTypes = selectedTypes.filter((t) =>
      displayedTypes.includes(t)
    );
    if (newSelectedTypes.length !== selectedTypes.length) {
      setSelectedTypes(newSelectedTypes);
    }
  }, [displayedTypes, selectedResourceTypes]);

  // Apply filters
  const filteredResources = useMemo(() => {
    let filtered = [...allResources];

    // Filter by resource source type (Documents, Educational, Others)
    if (selectedResourceTypes.length > 0) {
      filtered = filtered.filter((r) =>
        selectedResourceTypes.includes(r.sourceTypeName)
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((r) => {
        const cat = r.category || r.subject_area;
        return cat && selectedCategories.includes(cat);
      });
    }

    // Filter by types
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((r) => {
        const type = r.document_type || r.resource_type;
        return type && selectedTypes.includes(type);
      });
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((r) => {
        if (!r.tags || !Array.isArray(r.tags)) return false;
        return selectedTags.some((tag) => r.tags!.includes(tag));
      });
    }

    // Filter by authors
    if (selectedAuthors.length > 0) {
      filtered = filtered.filter((r) => {
        const authorName = r.author || r.creator;
        return authorName && selectedAuthors.includes(authorName);
      });
    }

    // Filter by date range
    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter((r) => {
        const dateStr = r.publication_date || r.published_at;
        if (!dateStr) return false;

        const resourceDate = dateStr.split("T")[0]; // Get YYYY-MM-DD part

        if (dateRange.start && resourceDate < dateRange.start) return false;
        if (dateRange.end && resourceDate > dateRange.end) return false;

        return true;
      });
    }

    return filtered;
  }, [
    allResources,
    selectedResourceTypes,
    selectedCategories,
    selectedTypes,
    selectedTags,
    selectedAuthors,
    dateRange,
  ]);

  // Sort resources
  const sortedResources = useMemo(() => {
    const sorted = [...filteredResources];

    switch (sortBy) {
      case "date-newest":
        return sorted.sort((a, b) => {
          const dateA = a.publication_date || a.published_at || "";
          const dateB = b.publication_date || b.published_at || "";
          return dateB.localeCompare(dateA);
        });
      case "date-oldest":
        return sorted.sort((a, b) => {
          const dateA = a.publication_date || a.published_at || "";
          const dateB = b.publication_date || b.published_at || "";
          return dateA.localeCompare(dateB);
        });
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "downloads":
        return sorted.sort(
          (a, b) => (b.download_count || 0) - (a.download_count || 0)
        );
      default:
        return sorted;
    }
  }, [filteredResources, sortBy]);

  const isLoading = docsLoading || eduLoading || othLoading;

  const toggleResourceType = (typeName: string) => {
    setSelectedResourceTypes((prev) =>
      prev.includes(typeName)
        ? prev.filter((t) => t !== typeName)
        : [...prev, typeName]
    );
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleType = (typeName: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeName)
        ? prev.filter((t) => t !== typeName)
        : [...prev, typeName]
    );
  };

  const toggleTag = (tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((t) => t !== tagName)
        : [...prev, tagName]
    );
  };

  const toggleAuthor = (authorName: string) => {
    setSelectedAuthors((prev) =>
      prev.includes(authorName)
        ? prev.filter((a) => a !== authorName)
        : [...prev, authorName]
    );
  };

  const clearFilters = () => {
    setSelectedResourceTypes([]);
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedTags([]);
    setSelectedAuthors([]);
    setDateRange({ start: "", end: "" });
  };

  const hasActiveFilters =
    selectedResourceTypes.length > 0 ||
    selectedCategories.length > 0 ||
    selectedTypes.length > 0 ||
    selectedTags.length > 0 ||
    selectedAuthors.length > 0 ||
    dateRange.start !== "" ||
    dateRange.end !== "";

  const handleDownload = async (resource: UnifiedResource) => {
    if (!resource.file_url) return;

    try {
      if (resource.sourceType === "documents") {
        await incrementDocumentDownload(resource.id).unwrap();
      } else if (resource.sourceType === "educational") {
        await incrementEducationalDownload(resource.id).unwrap();
      } else {
        await incrementOthersDownload(resource.id).unwrap();
      }
    } catch (error) {
      console.error("Error tracking download:", error);
    }

    try {
      const link = document.createElement("a");
      link.href = resource.file_url;
      link.download =
        resource.title || resource.file_url.split("/").pop() || "download";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      window.open(resource.file_url, "_blank");
    }
  };

  const renderFilterSidebar = (isMobile: boolean = false) => (
    <div className={isMobile ? "p-6" : "card p-6 sticky top-4"}>
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </h3>
          <button
            onClick={() => setShowFiltersMobile(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {!isMobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-ahc-green hover:underline"
            >
              <X className="h-3 w-3" />
              Clear All
            </button>
          )}
        </div>
      )}

      {isMobile && hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full mb-4 px-4 py-2 text-sm font-medium text-ahc-green border border-ahc-green rounded-lg hover:bg-ahc-green/10 transition"
        >
          Clear All Filters
        </button>
      )}

      <div
        className={`space-y-6 ${
          isMobile ? "" : "max-h-[calc(100vh-200px)] overflow-y-auto pr-2"
        }`}
      >
        {/* Resource Type Filter */}
        <div>
          <h4 className="font-medium mb-3 text-sm">Resource Type</h4>
          <div className="space-y-2">
            {Object.values(RESOURCE_TYPE_NAMES).map((typeName) => (
              <label
                key={typeName}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedResourceTypes.includes(typeName)}
                  onChange={() => toggleResourceType(typeName)}
                  className="w-4 h-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green focus:ring-offset-0"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                  {typeName}
                </span>
              </label>
            ))}
          </div>
        </div>

        {displayedTypes.length > 0 && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <div>
              <h4 className="font-medium mb-3 text-sm">{typesLabel}</h4>
              <div className="space-y-2">
                {displayedTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                      className="w-4 h-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {categories.length > 0 && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <div>
              <h4 className="font-medium mb-3 text-sm">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white truncate">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Tags Filter */}
        {tags.length > 0 && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <div>
              <h4 className="font-medium mb-3 text-sm">Tags</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {tags.slice(0, 20).map((tag) => (
                  <label
                    key={tag}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="w-4 h-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white truncate">
                      {tag}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Authors Filter */}
        {authors.length > 0 && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <div>
              <h4 className="font-medium mb-3 text-sm">Author / Creator</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {authors.slice(0, 15).map((author) => (
                  <label
                    key={author}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAuthors.includes(author)}
                      onChange={() => toggleAuthor(author)}
                      className="w-4 h-4 rounded border-gray-300 text-ahc-green focus:ring-ahc-green focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white truncate">
                      {author}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Publication Date Filter */}
        <>
          <div className="border-t border-gray-200 dark:border-gray-700"></div>
          <div>
            <h4 className="font-medium mb-3 text-sm">Publication Date</h4>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="date-start"
                  className="block text-xs text-gray-500 dark:text-gray-400 mb-1"
                >
                  From
                </label>
                <input
                  id="date-start"
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, start: e.target.value }))
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-ahc-green focus:border-ahc-green"
                />
              </div>
              <div>
                <label
                  htmlFor="date-end"
                  className="block text-xs text-gray-500 dark:text-gray-400 mb-1"
                >
                  To
                </label>
                <input
                  id="date-end"
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, end: e.target.value }))
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-ahc-green focus:border-ahc-green"
                />
              </div>
            </div>
          </div>
        </>
      </div>

      {isMobile && (
        <button
          onClick={() => setShowFiltersMobile(false)}
          className="w-full mt-6 px-4 py-3 bg-ahc-green text-black font-medium rounded-lg hover:brightness-95 transition"
        >
          Apply Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-ahc-dark-dark">
      <Helmet>
        <title>Resources – AHC</title>
      </Helmet>
      <Hero search={search} setSearch={setSearch} />

      {/* Header Section */}
      <div className="bg-white dark:bg-ahc-dark border-b border-gray-200 dark:border-gray-800">
        
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader />
          </div>
        ) : (
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="w-80 flex-shrink-0 hidden lg:block">
              {renderFilterSidebar(false)}
            </aside>

            {/* Mobile Filter Drawer */}
            {showFiltersMobile && (
              <div
                className="lg:hidden fixed inset-0 z-50 bg-black/60 animate-fade"
                onClick={() => setShowFiltersMobile(false)}
              >
                <div
                  className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto animate-page"
                  onClick={(e) => e.stopPropagation()}
                >
                  {renderFilterSidebar(true)}
                </div>
              </div>
            )}

            {/* Mobile Filter Toggle Button */}
            <button
              className="lg:hidden fixed bottom-6 left-6 z-40 bg-ahc-green hover:bg-ahc-green-dark text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 font-semibold"
              onClick={() => setShowFiltersMobile(true)}
            >
              {" "}
              <SlidersHorizontal className="h-5 w-5" />
              <span className="text-sm">Filters</span>
              {hasActiveFilters && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full min-w-[22px] h-5.5 px-1.5 flex items-center justify-center">
                  {selectedResourceTypes.length +
                    selectedCategories.length +
                    selectedTypes.length +
                    selectedTags.length +
                    selectedAuthors.length +
                    (dateRange.start || dateRange.end ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Results Section */}
            <section className="flex-1 min-w-0">
              {/* Results Count and Sort */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {sortedResources.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {allResources.length}
                  </span>{" "}
                  resources
                </p>

                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sort-by"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-ahc-green focus:border-ahc-green transition-colors"
                  >
                    <option value="date-newest">Newest First</option>
                    <option value="date-oldest">Oldest First</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                    <option value="downloads">Most Downloaded</option>
                  </select>
                </div>
              </div>

              {sortedResources.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                    No resources found
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sortedResources.map((resource) => (
                    <div
                      key={`${resource.sourceType}-${resource.id}`}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-ahc-green"
                    >
                      {/* Header with Badge and Download Count */}
                      <div className="flex items-start justify-between mb-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            resource.sourceType === "documents"
                              ? "bg-ahc-green/20 text-ahc-green-dark"
                              : resource.sourceType === "educational"
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                              : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          }`}
                        >
                          {resource.document_type ||
                            resource.resource_type ||
                            resource.sourceTypeName}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                          <Download className="h-3.5 w-3.5" />
                          <span>{resource.download_count ?? 0}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg leading-tight text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {resource.title}
                      </h3>

                      {/* Abstract / Summary */}
                      {(resource.abstract || resource.description) && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {resource.abstract || resource.description}
                        </p>
                      )}

                      {/* Category */}
                      {(resource.category || resource.subject_area) && (
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                          {resource.category || resource.subject_area}
                        </p>
                      )}

                      {/* Metadata */}
                      <div className="space-y-2.5 text-sm mb-4 flex-grow">
                        {(resource.author || resource.creator) && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <User className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate text-xs">
                              {resource.author || resource.creator}
                            </span>
                          </div>
                        )}
                        {(resource.publication_date ||
                          resource.published_at) && (
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span className="text-xs">
                              {new Date(
                                resource.publication_date ||
                                  resource.published_at ||
                                  ""
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      {resource.tags && resource.tags.length > 0 && (
                        <div className="mb-5">
                          <div className="flex flex-wrap gap-1.5">
                            {resource.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                            {resource.tags.length > 3 && (
                              <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                                +{resource.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {resource.file_url && (
                          <button
                            onClick={() => handleDownload(resource)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-ahc-green hover:bg-ahc-green-dark text-white rounded-lg transition-colors"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </button>
                        )}
                        <Link
                          to={`/resources/${resource.sourceType}/${resource.id}`}
                          className="px-4 py-2.5 text-sm font-semibold border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
