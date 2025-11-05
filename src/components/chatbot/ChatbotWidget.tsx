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
      {/* Premium Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ahc-green via-emerald-400 to-teal-400 opacity-75 blur-xl animate-pulse"></div>
        
        {/* Main button with glass effect */}
        <button
          aria-label="Open chatbot"
          onClick={() => setOpen((v) => !v)}
          className="relative h-16 w-16 rounded-full bg-gradient-to-br from-ahc-green via-emerald-400 to-teal-400 
                     shadow-2xl hover:shadow-emerald-500/50 
                     flex items-center justify-center 
                     transition-all duration-500 ease-out
                     hover:scale-110 hover:rotate-12
                     before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                     group overflow-hidden
                     animate-bounce-slow"
          style={{
            animation: open ? 'none' : 'float 3s ease-in-out infinite'
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
          </div>
          
          {/* Icon container with 3D effect */}
          <div className="relative z-10 transform transition-all duration-300 group-hover:scale-110">
            {open ? (
              // Close icon with rotation
              <svg 
                className="w-7 h-7 text-white drop-shadow-lg transition-all duration-500 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Chat icon with messaging theme
              <div className="relative">
                <svg 
                  className="w-7 h-7 text-white drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.28-3.87-.78l-.28-.12-2.85.48.48-2.85-.12-.28C4.78 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  <circle cx="8.5" cy="12" r="1.25" fill="white"/>
                  <circle cx="12" cy="12" r="1.25" fill="white"/>
                  <circle cx="15.5" cy="12" r="1.25" fill="white"/>
                </svg>
                
                {/* Typing indicator dots */}
                <div className="absolute -bottom-1 -right-1 flex gap-0.5 bg-white rounded-full px-1.5 py-0.5 shadow-lg">
                  <div className="w-1 h-1 rounded-full bg-ahc-green animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1 h-1 rounded-full bg-ahc-green animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1 h-1 rounded-full bg-ahc-green animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Notification badge with pulse */}
          {!open && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-br from-red-500 to-red-600 shadow-lg items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </span>
            </span>
          )}
          
          {/* Border ring animation */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
        </button>
        
        {/* Help text tooltip */}
        {!open && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
              Need help? Chat with us!
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700"></div>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
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
