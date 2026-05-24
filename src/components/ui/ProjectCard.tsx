"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Card3D from "./Card3D"

type Project = {
  title: string
  type: string
  desc: string
  impact: string
  details: string[]
  stack: string[]
  icon: LucideIcon
}

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <Card3D className="h-full">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
            <project.icon size={22} />
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
            {project.type}
          </span>
        </div>
        <h3 className="font-display mt-7 text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.desc}</p>
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 transition group-hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span>{project.impact}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="ml-3 shrink-0 text-cyan-500">
            <ChevronDown size={18} />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, rotateX: -8 }}
            animate={{ height: "auto", opacity: 1, rotateX: 0 }}
            exit={{ height: 0, opacity: 0, rotateX: -8 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                <Sparkles size={16} />
                Architecture notes
              </div>
              <ul className="mt-3 space-y-2">
                {project.details.map((detail) => (
                  <li key={detail} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <motion.span
            key={item}
            whileHover={{ y: -2, scale: 1.04 }}
            className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-slate-950"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </Card3D>
  )
}
