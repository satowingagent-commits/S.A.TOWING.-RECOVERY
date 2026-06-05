'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageSquare, X, Send, Loader2 } from 'lucide-react'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#cc2200] text-[#ffcc44] flex items-center justify-center shadow-lg hover:bg-[#ff4400] transition-colors"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-[#180800] border border-[#3a1200] rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#cc2200] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffcc44] flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[#cc2200]" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#ffcc44] uppercase tracking-wide">
                S.A. Towing Support
              </h3>
              <p className="text-xs text-[#ffcc44]/80">
                Ask us anything!
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0e0500]">
            {messages.length === 0 && (
              <div className="text-center text-[#c87820] text-sm py-8">
                <p className="font-[family-name:var(--font-marker)]">
                  Hi! I&apos;m here to help answer your questions about S.A. Towing & Recovery services.
                </p>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => {
                      sendMessage({ text: 'What services do you offer?' })
                    }}
                    className="block w-full text-left px-3 py-2 rounded bg-[#180800] hover:bg-[#3a1200] text-xs transition-colors text-[#ffcc44] border border-[#3a1200]"
                  >
                    What services do you offer?
                  </button>
                  <button
                    onClick={() => {
                      sendMessage({ text: 'What are your hours?' })
                    }}
                    className="block w-full text-left px-3 py-2 rounded bg-[#180800] hover:bg-[#3a1200] text-xs transition-colors text-[#ffcc44] border border-[#3a1200]"
                  >
                    What are your hours?
                  </button>
                  <button
                    onClick={() => {
                      sendMessage({ text: 'How do I schedule an appointment?' })
                    }}
                    className="block w-full text-left px-3 py-2 rounded bg-[#180800] hover:bg-[#3a1200] text-xs transition-colors text-[#ffcc44] border border-[#3a1200]"
                  >
                    How do I schedule an appointment?
                  </button>
                </div>
              </div>
            )}
            
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                    message.role === 'user' 
                      ? 'bg-[#cc2200] text-[#ffcc44]' 
                      : 'bg-[#3a1200] text-[#ffcc44]'
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === 'text') {
                      return (
                        <span key={index} className="whitespace-pre-wrap">
                          {part.text}
                        </span>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#3a1200] text-[#ffcc44] rounded-lg px-4 py-2 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-[#3a1200] bg-[#180800]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#0e0500] border border-[#3a1200] rounded px-3 py-2 text-sm text-[#ffcc44] placeholder:text-[#c87820]/50 focus:outline-none focus:border-[#cc2200] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[#cc2200] text-[#ffcc44] p-2 rounded hover:bg-[#ff4400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
