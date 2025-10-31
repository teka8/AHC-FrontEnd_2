import { Helmet } from 'react-helmet-async'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useGetDocumentCategoriesQuery,
  useGetDocumentsQuery,
  useGetEducationalCategoriesQuery,
  useGetEducationalQuery,
  type DocumentItem,
  type EducationalItem,
  useGetOthersCategoriesQuery,
  useGetOthersQuery,
  type OthersItem,
} from '../features/resources/resourcesApi'

export default function Resources() {
  const [section, setSection] = useState<'documents' | 'educational' | 'others'>('documents')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('')
  const [showCatsMobile, setShowCatsMobile] = useState(false)

  const { data: docCats, isLoading: catsLoading1 } = useGetDocumentCategoriesQuery()
  const { data: eduCats, isLoading: catsLoading2 } = useGetEducationalCategoriesQuery()
  const { data: othCats, isLoading: catsLoading3 } = useGetOthersCategoriesQuery()
  const { data: docs, isLoading: docsLoading } = useGetDocumentsQuery({ search, category, perPage: 100, page: 1 })
  const { data: edu, isLoading: eduLoading } = useGetEducationalQuery({ search, category, perPage: 100, page: 1 })
  const { data: oth, isLoading: othLoading } = useGetOthersQuery({ search, category, perPage: 100, page: 1 })

  useEffect(() => { setCategory('') }, [section])

  const categories = useMemo(() => {
    if (section === 'documents') {
      const dc = docCats ?? []
      if (Array.isArray(dc) && dc.length > 0) return dc
      const items = (docs as any[]) ?? []
      const names = Array.from(new Set(items.map((x:any)=>x?.category).filter(Boolean)))
      return names.map((name:string)=>({ id: null, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') }))
    }
    if (section === 'educational') {
      const ec = eduCats ?? []
      if (Array.isArray(ec) && ec.length > 0) return ec
      const items = (edu as any[]) ?? []
      const names = Array.from(new Set(items.map((x:any)=>x?.subject_area).filter(Boolean)))
      return names.map((name:string)=>({ id: null, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') }))
    }
    // others
    const oc = othCats ?? []
    if (Array.isArray(oc) && oc.length > 0) return oc
    const items = (oth as any[]) ?? []
    const names = Array.from(new Set(items.map((x:any)=>x?.subject_area).filter(Boolean)))
    return names.map((name:string)=>({ id: null, name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') }))
  }, [section, docCats, eduCats, othCats, edu, oth])
  const items = useMemo(() => (section === 'documents' ? ((docs as any) ?? []) : section==='educational' ? ((edu as any) ?? []) : ((oth as any) ?? [])), [section, docs, edu, oth])
  const isLoading = (section === 'documents' ? docsLoading : section==='educational' ? eduLoading : othLoading) || catsLoading1 || catsLoading2 || catsLoading3

  const getExt = (url: string) => {
    const m = (url || '').match(/\.([a-z0-9]+)(?:\?|#|$)/i)
    return (m?.[1] || '').toLowerCase()
  }
  const isPreviewable = (mime?: string | null, url?: string | null) => {
    const mt = (mime || '').toLowerCase()
    const ext = getExt(url || '')
    return mt.startsWith('image/') || mt.startsWith('video/') || mt.startsWith('audio/') || mt.includes('pdf') ||
      ['png','jpg','jpeg','webp','gif','mp4','webm','ogg','mp3','wav','pdf'].includes(ext)
  }
  const FileTypeBadge = ({ url, mime }: { url?: string | null; mime?: string | null }) => {
    const ext = getExt(url || '')
    const label = (ext || (mime || '').split('/').pop() || 'file').toUpperCase()
    return <div className="w-full aspect-video rounded bg-slate-100 border flex items-center justify-center text-sm text-slate-600">{label}</div>
  }
  return (
    <div className="container py-10">
      <Helmet><title>Resources – AHC</title></Helmet>
      <SectionHeader eyebrow="Knowledge Hub" title="Resources" />
      <div className="flex flex-col gap-3 mt-2 md:flex-row md:items-center">
        <div className="grid grid-cols-1 gap-2 md:inline-flex md:gap-0 rounded md:border md:overflow-hidden">
          <button className={`px-3 py-2 w-full md:w-auto text-left md:text-center ${section==='documents'?'bg-ahc-green text-black':''}`} onClick={()=>setSection('documents')}>Document Repository</button>
          <button className={`px-3 py-2 w-full md:w-auto text-left md:text-center ${section==='educational'?'bg-ahc-green text-black':''}`} onClick={()=>setSection('educational')}>Educational Resource Hub</button>
          <button className={`px-3 py-2 w-full md:w-auto text-left md:text-center ${section==='others'?'bg-ahc-green text-black':''}`} onClick={()=>setSection('others')}>Others</button>
        </div>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search resources" className="input w-full md:flex-1 md:max-w-md" />
        <button className="btn md:hidden" onClick={()=>setShowCatsMobile(v=>!v)}>
          {showCatsMobile ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>
      {isLoading ? <Loader /> : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <aside className={`${showCatsMobile ? '' : 'hidden'} md:block`}>
            <div className="card p-4">
              <div className="font-medium mb-2">Categories</div>
              <div className="space-y-1">
                <button className={`flex items-center gap-2 w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${category===''?'bg-slate-100':''}`} onClick={()=>setCategory('')}>
                  <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h5l2 3h11v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M3 7V5a2 2 0 0 1 2-2h3l2 2h4"/></svg>
                  <span>All</span>
                </button>
                {categories.map((c:any)=> (
                  <button key={c.slug ?? c.name} className={`flex items-center gap-2 w-full text-left px-2 py-2 rounded hover:bg-slate-50 ${category===c.name?'bg-slate-100':''}`} onClick={()=>setCategory(c.name)}>
                    <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h5l2 3h11v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M3 7V5a2 2 0 0 1 2-2h3l2 2h4"/></svg>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
          <section className="md:col-span-3">
            {items.length === 0 ? (
              <div className="text-sm text-slate-600">No resources found.</div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {section==='documents' ? (
                  (items as DocumentItem[]).map((d)=> (
                    <div key={d.id} className="card p-4 hover:shadow">
                      <div className="mb-2">
                        {(() => {
                          const mt = (d.mime_type ?? '').toLowerCase()
                          const url = d.file_url ?? ''
                          if (mt.startsWith('image/')) return <img src={url} alt="" className="w-full aspect-video object-cover rounded" />
                          if (mt.startsWith('video/')) return <video src={url} controls className="w-full aspect-video rounded" />
                          if (mt.startsWith('audio/')) return <audio src={url} controls className="w-full" />
                          if (mt.includes('pdf')) return <iframe src={url} className="w-full aspect-video rounded" />
                          return <FileTypeBadge url={url} mime={d.mime_type as any} />
                        })()}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">{d.document_type ?? 'Document'}</div>
                      <div className="font-semibold mt-1">{d.title}</div>
                      {d.author && <div className="text-sm text-slate-600 mt-1">{d.author}</div>}
                      {d.category && <div className="text-xs mt-2">{d.category}</div>}
                      <div className="mt-3 flex gap-2">
                        {d.file_url && isPreviewable(d.mime_type as any, d.file_url) && (
                          <a href={d.file_url} target="_blank" rel="noreferrer" className="btn btn-sm">View</a>
                        )}
                        {d.file_url && <a href={d.file_url} download className="btn btn-sm">Download</a>}
                        <Link to={`/resources/documents/${d.id}`} className="btn btn-sm">Detail</Link>
                      </div>
                    </div>
                  ))
                ) : section==='educational' ? (
                  (items as EducationalItem[]).map((e)=> (
                    <div key={e.id} className="card p-4 hover:shadow">
                      <div className="mb-2">
                        {(() => {
                          const url = e.file_url ?? ''
                          // No mime_type in payload; infer basic cases from url
                          if (url.match(/\.(png|jpe?g|webp|gif)$/i)) return <img src={url} alt="" className="w-full aspect-video object-cover rounded" />
                          if (url.match(/\.(mp4|webm|ogg)$/i)) return <video src={url} controls className="w-full aspect-video rounded" />
                          if (url.match(/\.(mp3|wav|ogg)$/i)) return <audio src={url} controls className="w-full" />
                          if (url.match(/\.pdf$/i)) return <iframe src={url} className="w-full aspect-video rounded" />
                          return <FileTypeBadge url={url} />
                        })()}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">{e.resource_type ?? 'Resource'}</div>
                      <div className="font-semibold mt-1">{e.title}</div>
                      {e.creator && <div className="text-sm text-slate-600 mt-1">{e.creator}</div>}
                      <div className="mt-2 flex gap-2">
                        {e.file_url && isPreviewable(undefined, e.file_url) && <a href={e.file_url} target="_blank" rel="noreferrer" className="btn btn-sm">View</a>}
                        {e.file_url && <a href={e.file_url} download className="btn btn-sm">Download</a>}
                        <Link to={`/resources/educational/${e.id}`} className="btn btn-sm">Detail</Link>
                        {e.embed_code && <div className="text-xs text-slate-500">Has embed</div>}
                      </div>
                    </div>
                  ))
                ) : (
                  (items as OthersItem[]).map((o)=> (
                    <div key={o.id} className="card p-4 hover:shadow">
                      <div className="mb-2">
                        {(() => {
                          const mt = (o as any).mime_type?.toLowerCase?.() ?? ''
                          const url = o.file_url ?? ''
                          if (mt.startsWith('image/')) return <img src={url} alt="" className="w-full aspect-video object-cover rounded" />
                          if (mt.startsWith('video/')) return <video src={url} controls className="w-full aspect-video rounded" />
                          if (mt.startsWith('audio/')) return <audio src={url} controls className="w-full" />
                          if (mt.includes('pdf')) return <iframe src={url} className="w-full aspect-video rounded" />
                          return <FileTypeBadge url={url} mime={(o as any).mime_type} />
                        })()}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">{o.resource_type ?? 'Other'}</div>
                      <div className="font-semibold mt-1">{o.title}</div>
                      {o.creator && <div className="text-sm text-slate-600 mt-1">{o.creator}</div>}
                      {o.subject_area && <div className="text-xs mt-2">{o.subject_area}</div>}
                      <div className="mt-3 flex gap-2">
                        {o.file_url && isPreviewable((o as any).mime_type, o.file_url) && (
                          <a href={o.file_url} target="_blank" rel="noreferrer" className="btn btn-sm">View</a>
                        )}
                        {o.file_url && <a href={o.file_url} download className="btn btn-sm">Download</a>}
                        <Link to={`/resources/others/${o.id}`} className="btn btn-sm">Detail</Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
