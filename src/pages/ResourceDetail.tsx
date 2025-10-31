import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import {
  useGetDocumentByIdQuery,
  useGetEducationalByIdQuery,
  useGetOtherByIdQuery,
} from '../features/resources/resourcesApi'

export default function ResourceDetail() {
  const { section = 'documents', id = '' } = useParams()
  const numericId = Number(id)
  const isDoc = section === 'documents'
  const isEdu = section === 'educational'
  const isOther = section === 'others'

  const { data: doc, isLoading: l1, isError: e1 } = useGetDocumentByIdQuery(numericId, { skip: !isDoc || !numericId }) as any
  const { data: edu, isLoading: l2, isError: e2 } = useGetEducationalByIdQuery(numericId, { skip: !isEdu || !numericId }) as any
  const { data: oth, isLoading: l3, isError: e3 } = useGetOtherByIdQuery(numericId, { skip: !isOther || !numericId }) as any

  const item: any = isDoc ? doc : isEdu ? edu : oth
  const isLoading = (isDoc && l1) || (isEdu && l2) || (isOther && l3)
  const isError = (isDoc && e1) || (isEdu && e2) || (isOther && e3)

  const title = item?.title ?? 'Resource'
  const fileUrl: string = item?.file_url ?? ''
  const mimeType: string = (item?.mime_type ?? '').toLowerCase?.() ?? ''

  const getExt = (url: string) => {
    const m = (url || '').match(/\.([a-z0-9]+)(?:\?|#|$)/i)
    return (m?.[1] || '').toLowerCase()
  }
  const isPreviewable = (mt: string, url: string) => {
    const ext = getExt(url)
    return mt.startsWith('image/') || mt.startsWith('video/') || mt.startsWith('audio/') || mt.includes('pdf') ||
      ['png','jpg','jpeg','webp','gif','mp4','webm','ogg','mp3','wav','pdf'].includes(ext)
  }
  const FileTypeBadge = ({ url, mime }: { url?: string; mime?: string }) => {
    const ext = getExt(url || '')
    const label = (ext || (mime || '').split('/').pop() || 'file').toUpperCase()
    return <div className="w-full h-64 rounded bg-slate-100 border flex items-center justify-center text-base text-slate-600">{label}</div>
  }

  const renderPreview = () => {
    const url = fileUrl
    const mt = mimeType
    if (!url) return null
    if (mt.startsWith('image/') || url.match(/\.(png|jpe?g|webp|gif)$/i)) {
      return <img src={url} alt="" className="w-full rounded border" />
    }
    if (mt.startsWith('video/') || url.match(/\.(mp4|webm|ogg)$/i)) {
      return <video src={url} controls className="w-full rounded" />
    }
    if (mt.startsWith('audio/') || url.match(/\.(mp3|wav|ogg)$/i)) {
      return <audio src={url} controls className="w-full" />
    }
    if (mt.includes('pdf') || url.match(/\.pdf$/i)) {
      return <iframe src={url} className="w-full h-[70vh] rounded border" />
    }
    return <FileTypeBadge url={url} mime={mt} />
  }

  return (
    <div className="container pt-24 pb-10">
      <Helmet><title>{title} – AHC</title></Helmet>
      {isLoading ? <Loader /> : isError ? (
        <div className="text-sm text-red-600">Failed to load this resource.</div>
      ) : item ? (
        <div>
          <SectionHeader eyebrow="Resources" title={title} cta={<Link to="/resources" className="text-sm text-ahc-green">All resources</Link>} />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              {renderPreview()}
            </div>
            <aside>
              <div className="card p-4">
                <div className="text-sm text-slate-600">Type</div>
                <div className="font-medium">{item.document_type || item.resource_type || 'Resource'}</div>
                {item.author && <div className="mt-2"><div className="text-sm text-slate-600">Author</div><div className="font-medium">{item.author}</div></div>}
                {item.creator && <div className="mt-2"><div className="text-sm text-slate-600">Creator</div><div className="font-medium">{item.creator}</div></div>}
                {item.category && <div className="mt-2"><div className="text-sm text-slate-600">Category</div><div className="font-medium">{item.category}</div></div>}
                {item.subject_area && <div className="mt-2"><div className="text-sm text-slate-600">Subject</div><div className="font-medium">{item.subject_area}</div></div>}
                {item.publication_date && <div className="mt-2"><div className="text-sm text-slate-600">Published</div><div className="font-medium">{item.publication_date}</div></div>}
                {item.published_at && <div className="mt-2"><div className="text-sm text-slate-600">Published</div><div className="font-medium">{item.published_at}</div></div>}
                <div className="mt-4 flex gap-2">
                  {fileUrl && isPreviewable(mimeType, fileUrl) && <a href={fileUrl} target="_blank" rel="noreferrer" className="btn btn-sm">View</a>}
                  {fileUrl && <a href={fileUrl} download className="btn btn-sm">Download</a>}
                </div>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <div className="text-sm text-slate-600">Resource not found.</div>
      )}
    </div>
  )
}
