import { Link } from "react-router-dom";
import type { ProgramItem } from "../../features/healthPillars/programsApi";

const STATUS_STYLES: Record<string, string> = {
  active:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  paused:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
  archived:
    "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  upcoming:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
};

const statusLabel = (state: string) =>
  state ? state.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) : "";

export default function ProgramCard({ item }: { item: ProgramItem }) {
  const imageSrc = item.image_thumb || item.image || "/images/pillars/power-of-partnership.jpg";
  const categories = (item.category_labels?.length
    ? item.category_labels
    : item.categories?.map((cat) => statusLabel(cat))) ?? []; // reuse statusLabel for formatting

  const chipStyle = (index: number) =>
    index % 2 === 0
      ? "bg-ahc-green/10 text-ahc-green-dark"
      : "bg-ahc-blue/10 text-ahc-blue";

  return (
    <Link
      to={`/programs/${item.id}`}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green"
    >
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src={imageSrc}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">
            {item.host}
          </p>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              STATUS_STYLES[item.state] ?? STATUS_STYLES.upcoming
            }`}
          >
            {statusLabel(item.state)}
          </span>
        </div>

        <div>
          <h3 className="font-bold text-xl font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">
            {item.title}
          </h3>
          {categories.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((label, index) => (
                <span
                  key={`${item.id}-${label}-${index}`}
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${chipStyle(index)}`}
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          className="text-sm text-slate-600 dark:text-slate-300 line-clamp-4 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: item.description || "" }}
        />
      </div>
    </Link>
  );
}
