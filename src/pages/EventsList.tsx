import { Helmet } from 'react-helmet-async'
import { useGetEventsQuery } from '../features/events/eventsApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import EventCard from '../components/cards/EventCard'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'

export default function EventsList() {
  const { data, isLoading } = useGetEventsQuery()
  const items = Array.isArray((data as any)?.data)
    ? (data as any).data
    : Array.isArray(data as any)
    ? (data as any)
    : []

  const [view, setView] = useState<'calendar' | 'list'>('calendar')
  const [month, setMonth] = useState(dayjs())
  const byDate = useMemo(() => {
    const map: Record<string, any[]> = {}
    items.forEach((e: any) => {
      // Use canonical event_date to align with detail page
      if (!e?.event_date) return
      const dkey = dayjs(e.event_date).format('YYYY-MM-DD')
      if (!map[dkey]) map[dkey] = []
      map[dkey].push(e)
    })
    return map
  }, [items])

  const startOfMonth = month.startOf('month')
  const endOfMonth = month.endOf('month')
  const startGrid = startOfMonth.startOf('week')
  const endGrid = endOfMonth.endOf('week')
  const days: dayjs.Dayjs[] = []
  for (let d = startGrid; d.isBefore(endGrid) || d.isSame(endGrid, 'day'); d = d.add(1, 'day')) {
    days.push(d)
  }

  const selectedLabel = month.format('MMMM YYYY')

  return (
    <div className="container py-16 md:py-24">
      <Helmet><title>Events – AHC</title></Helmet>
      <SectionHeader eyebrow="What’s Next" title="All Events" />
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <button className={`px-4 py-2 text-sm font-medium transition-colors ${view==='calendar'?'bg-ahc-green text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`} onClick={()=>setView('calendar')}>Calendar</button>
          <button className={`px-4 py-2 text-sm font-medium transition-colors ${view==='list'?'bg-ahc-green text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`} onClick={()=>setView('list')}>List</button>
        </div>
      </div>

      {isLoading ? <Loader /> : view === 'list' ? (
        <div className="grid gap-8 md:grid-cols-3 animate-page">
          {items.map((e) => (<EventCard key={e.id} item={e} />))}
        </div>
      ) : (
        <div className="animate-page bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold font-display dark:text-white">{selectedLabel}</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-colors" onClick={()=>setMonth(m=>m.subtract(1,'month'))}>Prev</button>
              <button className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-colors" onClick={()=>setMonth(dayjs())}>Today</button>
              <button className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-colors" onClick={()=>setMonth(m=>m.add(1,'month'))}>Next</button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-xs text-slate-500 dark:text-slate-400 mb-2 font-semibold">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(w => (<div key={w} className="px-2 py-1 text-center">{w}</div>))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map(d => {
              const isCurrentMonth = d.isSame(month, 'month')
              const key = d.format('YYYY-MM-DD')
              const dayEvents = byDate[key] || []
              return (
                <div key={key} className={`min-h-[120px] rounded-lg border p-2 transition-colors ${isCurrentMonth ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-400 border-slate-100 dark:border-slate-700/50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{d.date()}</div>
                    {!!dayEvents.length && <span className="inline-block rounded-full bg-ahc-green/20 text-ahc-green-dark text-xs px-2 py-0.5">{dayEvents.length}</span>}
                  </div>
                  <div className="mt-2 space-y-1">
                    {dayEvents.slice(0,2).map(ev => (
                      <a key={ev.id} href={`/events/${ev.id}`} className="block text-xs truncate rounded-md px-2 py-1 bg-ahc-green/10 text-ahc-green-dark hover:bg-ahc-green/20 transition-colors">{ev.title}</a>
                    ))}
                    {dayEvents.length > 2 && (
                      <a href={`/events?date=${key}`} className="block text-xs text-slate-500 hover:underline">+{dayEvents.length - 2} more</a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
