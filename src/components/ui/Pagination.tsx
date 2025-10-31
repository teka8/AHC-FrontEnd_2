import React from 'react'

export default function Pagination({ page, total, pageSize, onPageChange }: { page: number; total: number; pageSize: number; onPageChange: (p: number) => void }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const canPrev = page > 1
  const canNext = page < totalPages
  const go = (p: number) => onPageChange(Math.min(totalPages, Math.max(1, p)))

  const pages: number[] = []
  for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) pages.push(i)

  return (
    <div className="flex items-center justify-between gap-2 mt-6">
      <button className="px-3 py-1 border rounded disabled:opacity-50" disabled={!canPrev} onClick={() => go(page - 1)}>Prev</button>
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button key={p} onClick={() => go(p)} className={`px-3 py-1 border rounded ${p === page ? 'bg-ahc-green text-black' : 'hover:bg-slate-50'}`}>{p}</button>
        ))}
      </div>
      <button className="px-3 py-1 border rounded disabled:opacity-50" disabled={!canNext} onClick={() => go(page + 1)}>Next</button>
    </div>
  )
}
