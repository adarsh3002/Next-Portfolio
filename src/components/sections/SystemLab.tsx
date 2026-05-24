"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BrainCircuit, Cable, Database, Gauge, LockKeyhole, ServerCog } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"

const nodes = [
  {
    id: "api",
    label: "API Gateway",
    icon: Cable,
    x: "12%",
    y: "38%",
    desc: "Typed REST contracts, auth boundaries, validation, rate-aware routing, and clean response envelopes.",
  },
  {
    id: "service",
    label: "Spring Services",
    icon: ServerCog,
    x: "38%",
    y: "18%",
    desc: "Java service layer for business logic, modular boundaries, and testable orchestration.",
  },
  {
    id: "ai",
    label: "AI Layer",
    icon: BrainCircuit,
    x: "68%",
    y: "38%",
    desc: "Prompt flows, provider adapters, guardrails, and model response normalization.",
  },
  {
    id: "data",
    label: "Data Core",
    icon: Database,
    x: "38%",
    y: "66%",
    desc: "Relational and document stores with indexing, caching, audit trails, and resilient models.",
  },
  {
    id: "quality",
    label: "Reliability",
    icon: Gauge,
    x: "78%",
    y: "72%",
    desc: "Observability, latency budgets, error handling, and deploy-friendly engineering habits.",
  },
  {
    id: "security",
    label: "Security",
    icon: LockKeyhole,
    x: "8%",
    y: "72%",
    desc: "Role-aware access, token hygiene, input validation, and sensible service boundaries.",
  },
]

export default function SystemLab() {
  const [active, setActive] = useState(nodes[0])

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive Lab"
          title="Explore the backend system map."
          desc="A recruiter-friendly architecture view that turns my backend strengths into an interactive product-style experience."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-3 lg:hidden">
            {nodes.map((node) => (
              <button
                type="button"
                key={node.id}
                onClick={() => setActive(node)}
                className={`flex items-center gap-3 rounded-2xl border p-3 text-left text-sm font-semibold ${
                  active.id === node.id
                    ? "border-cyan-300 bg-cyan-300/20 text-cyan-900 dark:text-cyan-100"
                    : "border-slate-200 bg-white/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                }`}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-cyan-200 dark:bg-cyan-300 dark:text-slate-950">
                  <node.icon size={18} />
                </span>
                {node.label}
              </button>
            ))}
          </div>

          <div className="relative hidden min-h-[34rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/65 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.045] lg:block">
            <div aria-hidden="true" className="absolute inset-8 rounded-[2rem] border border-dashed border-cyan-300/25" />
            <svg className="absolute inset-0 h-full w-full" role="presentation">
              <defs>
                <linearGradient id="flow" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.65" />
                </linearGradient>
              </defs>
              <path d="M 125 220 C 250 90, 450 90, 610 220" fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="8 10" />
              <path d="M 125 410 C 270 520, 460 520, 650 430" fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="8 10" />
              <path d="M 375 125 C 520 190, 590 250, 670 310" fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="8 10" />
            </svg>

            {nodes.map((node, index) => (
              <motion.button
                type="button"
                key={node.id}
                onClick={() => setActive(node)}
                className={`absolute z-10 flex min-w-36 items-center gap-3 rounded-2xl border p-3 text-left text-sm font-semibold backdrop-blur-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  active.id === node.id
                    ? "border-cyan-300 bg-cyan-300/20 text-cyan-900 shadow-[0_18px_60px_rgba(34,211,238,0.22)] dark:text-cyan-100"
                    : "border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200"
                }`}
                style={{ left: node.x, top: node.y }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-cyan-200 dark:bg-cyan-300 dark:text-slate-950">
                  <node.icon size={18} />
                </span>
                {node.label}
              </motion.button>
            ))}
          </div>

          <motion.aside
            key={active.id}
            initial={{ opacity: 0, y: 16, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="rounded-[2rem] border border-slate-200 bg-white/75 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_90px_rgba(15,23,42,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.055]"
          >
            <div className="grid size-14 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
              <active.icon size={26} />
            </div>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              Active layer
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{active.label}</h3>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{active.desc}</p>
            <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Unique feature: this system map acts like a miniature architecture walkthrough,
              making backend thinking visible instead of hiding it behind static resume bullets.
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
