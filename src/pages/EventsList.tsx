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
    <div className="container py-10">
      <Helmet><title>Events – AHC</title></Helmet>
      <SectionHeader eyebrow="What’s Next" title="All Events" />
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex rounded border overflow-hidden">
          <button className={`px-3 py-2 ${view==='calendar'?'bg-ahc-green text-black':''}`} onClick={()=>setView('calendar')}>Calendar</button>
          <button className={`px-3 py-2 ${view==='list'?'bg-ahc-green text-black':''}`} onClick={()=>setView('list')}>List</button>
        </div>
      </div>

      {isLoading ? <Loader /> : view === 'list' ? (
        <div className="grid gap-4 md:grid-cols-3 animate-page">
          {items.map((e) => (<EventCard key={e.id} item={e} />))}
        </div>
      ) : (
        <div className="animate-page">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-slate-600">{selectedLabel}</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border hover:bg-slate-50" onClick={()=>setMonth(m=>m.subtract(1,'month'))}>Prev</button>
              <button className="px-3 py-1 rounded border hover:bg-slate-50" onClick={()=>setMonth(dayjs())}>Today</button>
              <button className="px-3 py-1 rounded border hover:bg-slate-50" onClick={()=>setMonth(m=>m.add(1,'month'))}>Next</button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-xs text-slate-500 mb-2">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(w => (<div key={w} className="px-2 py-1">{w}</div>))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map(d => {
              const isCurrentMonth = d.isSame(month, 'month')
              const key = d.format('YYYY-MM-DD')
              const dayEvents = byDate[key] || []
              return (
                <div key={key} className={`min-h-[96px] rounded-lg border p-2 ${isCurrentMonth ? 'bg-white' : 'bg-slate-50 text-slate-400'}`}>
                  <div className="flex items-center justify-between">
                    <div className="text-xs">{d.date()}</div>
                    {!!dayEvents.length && <span className="inline-block rounded-full bg-ahc-green/80 text-black text-[10px] px-2 py-0.5">{dayEvents.length}</span>}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0,2).map(ev => (
                      <a key={ev.id} href={`/events/${ev.id}`} className="block text-[11px] truncate rounded px-2 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">{ev.title}</a>
                    ))}
                    {dayEvents.length > 2 && (
                      <a href={`/events?date=${key}`} className="block text-[11px] text-slate-500 hover:text-slate-700">+{dayEvents.length - 2} more</a>
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
