"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

type MagneticButtonProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "dark"
  className?: string
}

const variants = {
  primary:
    "bg-slate-950 text-white shadow-xl shadow-cyan-500/20 hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200",
  secondary:
    "border border-slate-300 bg-white/70 text-slate-800 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-cyan-200",
  dark: "bg-cyan-300 text-slate-950 hover:bg-white",
}

export default function MagneticButton({ href, children, variant = "primary", className = "" }: MagneticButtonProps) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.35 })

  return (
    <motion.a
      href={href}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reducedMotion) return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${variants[variant]} ${className}`}
    >
      <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
