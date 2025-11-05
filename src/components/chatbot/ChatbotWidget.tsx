import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([{ role: "bot", text: "Hello! How can we help you today?" }]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    const next = [...messages, { role: "user", text: input }];
    //setMessages(next)
    setInput("");
  }

  return (
    <div>
      <button
        aria-label="Open chatbot"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-gradient-to-br from-ahc-green to-emerald-400 text-black shadow-2xl hover:shadow-ahc-green/50 h-14 w-14 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        {open ? (
          // Close icon with animation
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat icon with animation
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {/* Notification pulse effect when closed */}
        {!open && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="px-4 py-3 bg-gradient-to-r from-ahc-green to-emerald-400 font-semibold text-black flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            AHC Assistant
          </div>
          <div className="p-4 space-y-3 h-64 overflow-y-auto bg-slate-50 dark:bg-slate-900">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {m.role === "bot" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-ahc-green to-emerald-400 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <span
                  className={`inline-block px-4 py-2.5 rounded-2xl shadow-sm max-w-[75%] ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-ahc-green to-emerald-400 text-black font-medium rounded-br-sm"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 flex gap-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ahc-green focus:border-transparent bg-white dark:bg-slate-900 dark:text-white transition-all duration-200"
            />
            <button 
              onClick={handleSend} 
              className="bg-gradient-to-br from-ahc-green to-emerald-400 text-black px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
