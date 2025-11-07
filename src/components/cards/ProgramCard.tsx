import type { ProgramItem } from '../../features/healthPillars/programsApi';

export default function ProgramCard({ item }: { item: ProgramItem }) {
  return (
    <a
      href={`/programs/${item.id}`}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
    >
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.university}</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.country}</p>
        <div
          className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
      <div className="bg-slate-50 dark:bg-slate-700/50 px-6 py-3 rounded-b-xl mt-auto">
        <span className="text-sm font-semibold text-ahc-green-dark dark:text-ahc-green-light group-hover:text-ahc-green-darker transition-colors">
          {item.status}
        </span>
      </div>
    </a>
  );
}
