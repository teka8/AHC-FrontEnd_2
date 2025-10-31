import { useState } from 'react'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user'|'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! How can we help you today?' },
  ])
  const [input, setInput] = useState('')

  function handleSend() {
    if (!input.trim()) return
    const next = [...messages, { role: 'user', text: input }]
    setMessages(next)
    setInput('')
  }

  return (
    <div>
      <button
        aria-label="Open chatbot"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-ahc-green text-black shadow-lg h-12 w-12 flex items-center justify-center"
      >
        {open ? '×' : '💬'}
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 bg-white border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b font-semibold">AHC Assistant</div>
          <div className="p-3 space-y-2 h-64 overflow-y-auto bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-ahc-green text-black' : 'bg-white border'}`}>{m.text}</span>
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2 border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ahc-green"
            />
            <button onClick={handleSend} className="btn">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
