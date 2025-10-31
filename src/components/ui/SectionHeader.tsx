export default function SectionHeader({ eyebrow, title, cta }: { eyebrow?: string; title: string; cta?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        {eyebrow && <div className="text-xs tracking-wider uppercase text-ahc-green font-semibold">{eyebrow}</div>}
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      </div>
      {cta && <div className="hidden md:block">{cta}</div>}
    </div>
  )
}
