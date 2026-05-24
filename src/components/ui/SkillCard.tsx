"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SkillGroup = {
  title: string
  level: number
  skills: string[]
  icon: LucideIcon
}

export default function SkillCard({ group }: { group: SkillGroup }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      layout
      data-cursor="interactive"
      className="h-full rounded-[1.75rem] border border-slate-200 bg-white/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:border-cyan-300 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.22)]"
      whileHover={{ y: -6 }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-cyan-200 dark:bg-cyan-300 dark:text-slate-950">
            <group.icon size={20} />
          </span>
          <span>
            <span className="font-display block text-xl font-semibold text-slate-950 dark:text-white">{group.title}</span>
            <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">{group.level}% practical fluency</span>
          </span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="mt-2 text-slate-500 dark:text-slate-300">
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${group.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
