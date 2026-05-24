"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { CHATBOT_PROMPTS, CHATBOT_RESPONSES } from "@/lib/constants"

type Message = {
  role: "assistant" | "user"
  text: string
}

export default function AiChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I am Adarsh's portfolio assistant. Ask me about his backend, AI, or frontend work.",
    },
  ])
  const [input, setInput] = useState("")

  const suggestions = useMemo(
    () => CHATBOT_PROMPTS.filter((prompt) => !messages.some((message) => message.text === prompt)),
    [messages],
  )

  const respond = (text: string) => {
    const normalized = text.trim()
    if (!normalized) return

    const answer =
      CHATBOT_RESPONSES[normalized] ??
      "Adarsh is strongest in Java backend engineering, Spring Boot APIs, scalable systems, databases, microservices, and AI integrations, with frontend skills in Next.js and React."

    setMessages((current) => [
      ...current,
      { role: "user", text: normalized },
      { role: "assistant", text: answer },
    ])
    setInput("")
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mb-4 w-[min(calc(100vw-2.5rem),24rem)] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/90 shadow-[0_24px_90px_rgba(15,23,42,0.2)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90"
          >
            <div className="flex items-center justify-between border-b border-slate-200/80 p-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-200">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-slate-950 dark:text-white">AI portfolio assistant</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Instant recruiter briefing</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Close assistant"
              >
                <X size={17} />
              </button>
            </div>

            <div className="max-h-80 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}-${message.text}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "mr-8 bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                      : "ml-8 bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950"
                  }`}
                >
                  {message.text}
                </motion.div>
              ))}
            </div>

            {suggestions.length > 0 && (
              <div className="flex gap-2 overflow-x-auto px-4 pb-3">
                {suggestions.map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => respond(prompt)}
                    className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault()
                respond(input)
              }}
              className="flex gap-2 border-t border-slate-200/80 p-3 dark:border-white/10"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Adarsh..."
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button
                type="submit"
                className="grid size-10 place-items-center rounded-full bg-slate-950 text-white transition hover:-translate-y-0.5 hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="group relative grid size-14 place-items-center rounded-full bg-slate-950 text-white shadow-[0_18px_60px_rgba(34,211,238,0.35)] ring-1 ring-cyan-300/40 dark:bg-white dark:text-slate-950"
        aria-label="Open AI assistant"
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-cyan-300 opacity-20 blur-xl transition group-hover:opacity-40" />
        <MessageCircle className="relative" size={22} />
      </motion.button>
    </div>
  )
}
