export default function SectionHeader({ eyebrow, title, centerTitle }: { eyebrow?: string; title: string; centerTitle?: boolean }) {
  return (
    <div className={`relative ${centerTitle ? 'text-center' : ''} mb-12`}>
      {eyebrow && <div className="text-sm tracking-wider uppercase text-ahc-green font-semibold mb-2">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">{title}</h2>
      <div className={`absolute left-1/2 -translate-x-1/2 bottom-[-20px] h-1 w-24 bg-gradient-to-r from-ahc-green-light via-ahc-green to-ahc-green-dark rounded-full`} />
    </div>
  )
}
