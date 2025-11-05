export default function SectionHeader({ eyebrow, title, centerTitle }: { eyebrow?: string; title: string; centerTitle?: boolean }) {
  return (
    <div className={`flex items-end ${centerTitle ? 'justify-center text-center' : 'justify-between'} mb-6`}>
      <div>
        {eyebrow && <div className="text-xs tracking-wider uppercase text-ahc-green font-semibold">{eyebrow}</div>}
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">{title}</h2>
      </div>
    </div>
  )
}
