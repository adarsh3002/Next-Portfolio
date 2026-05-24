"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"
import { NAV_ITEMS } from "@/lib/constants"
import { scrollToSection } from "@/lib/scroll"
import { useScrollSpy } from "@/hooks/useScrollSpy"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const active = useScrollSpy(["home", ...NAV_ITEMS.map((item) => item.id)])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/65">
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3 rounded-full text-left"
          aria-label="Go to top"
        >
          <span className="grid size-9 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 dark:bg-white dark:text-slate-950">
            AK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold text-slate-950 dark:text-white">
              Adarsh Kumar
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">AI Backend Engineer</span>
          </span>
        </button>

        <div className="hidden items-center rounded-full border border-slate-200/70 bg-slate-100/70 p-1 dark:border-white/10 dark:bg-white/5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {active === item.id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-300"
            aria-label="Toggle dark and light mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="mailto:adarsh@example.com"
            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200 sm:inline-flex"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
                setOpen(false)
              }}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {item.name}
              <span className="size-1.5 rounded-full bg-cyan-400" />
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
