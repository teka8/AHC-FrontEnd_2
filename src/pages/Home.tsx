import { Helmet } from 'react-helmet-async'
import { useGetPagesBySectionQuery } from '../features/pages/pagesApi'
import { useGetEventsQuery } from '../features/events/eventsApi'
import Loader from '../components/Loader'
import Hero from '../components/ui/Hero'
import SectionHeader from '../components/ui/SectionHeader'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import EventCard from '../components/cards/EventCard'
import PartnersStrip from '../components/ui/PartnersStrip'
import { useGetPublicPostsQuery } from '../features/posts/postsApi'

export default function Home() {
  const { data: homeBlocks, isLoading: loadingPages } = useGetPagesBySectionQuery('home')
  const { data: posts, isLoading: loadingNews } = useGetPublicPostsQuery()
  const { data: events, isLoading: loadingEvents } = useGetEventsQuery()
  const homeArray = Array.isArray((homeBlocks as any)?.data)
    ? (homeBlocks as any).data
    : Array.isArray(homeBlocks)
    ? (homeBlocks as any)
    : []
  const eventsArray = Array.isArray((events as any)?.data)
    ? (events as any).data
    : Array.isArray(events as any)
    ? (events as any)
    : []
  const newsArray = Array.isArray(posts as any) ? (posts as any) : []

  return (
    <div>
      <Helmet><title>AHC – Home</title></Helmet>
      <Hero />

      {/* About HCC */}
      <section className="container py-12 animate-page">
        <SectionHeader eyebrow="Who we are" title="About HCC" cta={<a href="/about" className="text-sm text-ahc-green link-underline">Learn more</a>} />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum, mauris at ultricies ultricies, urna sapien
              molestie lectus, nec hendrerit nunc nisi nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
            </p>
            <p>
              Curabitur a augue nec ipsum blandit posuere. Donec imperdiet, leo et cursus mattis, orci enim congue leo, vel convallis
              arcu justo et mi. Sed nec lacinia nibh. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="text-sm text-slate-600">Our Reach</div>
              <div className="mt-1 text-2xl font-bold">12+ Universities</div>
              <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="card p-5">
              <div className="text-sm text-slate-600">Resources</div>
              <div className="mt-1 text-2xl font-bold">500+ Items</div>
              <p className="mt-2 text-sm text-slate-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card p-5">
              <div className="text-sm text-slate-600">Community</div>
              <div className="mt-1 text-2xl font-bold">3k+ Members</div>
              <p className="mt-2 text-sm text-slate-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className="card p-5">
              <div className="text-sm text-slate-600">Impact</div>
              <div className="mt-1 text-2xl font-bold">Pan‑African</div>
              <p className="mt-2 text-sm text-slate-600">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <SectionHeader eyebrow="Highlights" title="Latest News" cta={<a href="/news" className="text-sm text-ahc-green">View all</a>} />
        {loadingNews ? (
          <Loader />
        ) : newsArray.length === 0 ? (
          <div className="text-sm text-slate-600">No news yet.</div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {newsArray.slice(0,3).map((n: any) => {
              const firstImgMatch = (n.content ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
              const galleryFirst = n.gallery && Array.isArray(n.gallery) && n.gallery.length > 0 ? (n.gallery[0].original || n.gallery[0].url) : ''
              const imgUrl = n.featured_image || galleryFirst || (firstImgMatch ? firstImgMatch[1] : '')
              return (
                <Link key={n.id} to={`/news/${n.id}`} className="group card overflow-hidden hover:shadow-md transition">
                  {imgUrl ? (
                    <img src={imgUrl} alt="" className="w-full aspect-[16/9] object-cover" />
                  ) : <div className="aspect-[16/9] bg-slate-200" />}
                  <div className="p-5">
                    {n.published_at && (
                      <div className="text-xs uppercase tracking-wider text-slate-500">{dayjs(n.published_at).format('MMM DD, YYYY')}</div>
                    )}
                    <h3 className="mt-1 font-semibold group-hover:text-slate-900">{n.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3">{n.excerpt ?? (n.content ?? '').replace(/<[^>]+>/g, '').slice(0,160)}</p>
                    <span className="mt-3 inline-block text-sm text-slate-700 group-hover:text-ahc-green">Read more →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      <section className="bg-slate-50">
        <div className="container py-12">
          <SectionHeader eyebrow="What’s Next" title="Upcoming Events" cta={<a href="/events" className="text-sm text-ahc-green">View all</a>} />
          {loadingEvents ? (
            <Loader />
          ) : eventsArray.length === 0 ? (
            <div className="text-sm text-slate-600">No upcoming events yet. Please check back soon.</div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {eventsArray.slice(0,3).map((e) => (
                <EventCard key={e.id} item={e} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-12 animate-page">
        <SectionHeader eyebrow="Our Direction" title="Mission & Vision" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-ahc-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12l9-5-9-5-9 5 9 5z"/></svg>
              <h3 className="font-semibold">Mission</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum mauris at ultricies ultricies.</p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-ahc-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/></svg>
              <h3 className="font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container py-12 animate-page">
        <SectionHeader eyebrow="What we focus on" title="Focus Areas" />
        <div className="grid gap-4 md:grid-cols-3">
          {[{t:'Curriculum Innovation'},{t:'Faculty Development'},{t:'Research & Scholarship'},{t:'Technology & Simulation'},{t:'Regional Collaboration'},{t:'Policy & Advocacy'}].map((f) => (
            <div key={f.t} className="card p-5">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-ahc-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                <h4 className="font-semibold text-sm">{f.t}</h4>
              </div>
              <p className="mt-2 text-xs text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      <PartnersStrip />
    </div>
  )
}
