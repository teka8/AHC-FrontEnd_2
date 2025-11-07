import type { ResearchItem } from '../../features/healthPillars/researchApi';

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <a
      href={item.link}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
    >
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">{item.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.countries.map((country) => (
            <span key={country} className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">{country}</span>
          ))}
        </div>
        <div
          className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
      <div className="bg-slate-50 dark:bg-slate-700/50 px-6 py-3 rounded-b-xl mt-auto">
        <span className="text-sm font-semibold text-ahc-green-dark dark:text-ahc-green-light group-hover:text-ahc-green-darker transition-colors">
          View Details &rarr;
        </span>
      </div>
    </a>
  );
}
