import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/ui/SectionHeader'
import { useGetPublicMediaQuery } from '../features/media/mediaApi'
import { useMemo, useState } from 'react'

export default function Media() {
  const [type, setType] = useState<'all' | 'image' | 'video' | 'audio'>('all')
  const [page, setPage] = useState(1)
  const { data } = useGetPublicMediaQuery({ type: type === 'all' ? undefined : type, page, per_page: 24 })
  const items = useMemo(() => {
    const arr = (data as any)?.data || (Array.isArray(data) ? data : [])
    return Array.isArray(arr) ? arr : []
  }, [data])
  return (
    <div className="container py-10">
      <Helmet><title>Media – AHC</title></Helmet>
      <SectionHeader eyebrow="Gallery" title="Media" />
      <div className="mb-4 flex items-center gap-2">
        <div className="inline-flex rounded border overflow-hidden">
          {(['all','image','video','audio'] as const).map((t) => (
            <button key={t} onClick={()=>{ setType(t); setPage(1) }} className={`px-3 py-2 text-sm capitalize ${type===t?'bg-ahc-green text-black':''}`}>{t}</button>
          ))}
        </div>
      </div>
      {items.length === 0 ? (
        <div className="text-sm text-slate-600">No media found.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((m: any) => {
            const isImg = (m.mime_type || '').startsWith('image/')
            const isVideo = (m.mime_type || '').startsWith('video/')
            return (
              <a key={m.id} href={m.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl border bg-white dark:bg-slate-900">
                {isImg ? (
                  <img src={m.url} alt={m.name || m.file_name || ''} className="w-full aspect-video object-cover" loading="lazy" />
                ) : isVideo ? (
                  <video className="w-full aspect-video object-cover" controls preload="metadata">
                    <source src={m.url} />
                  </video>
                ) : (
                  <div className="aspect-video grid place-content-center text-sm text-slate-600">{m.file_name}</div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
