"use client"

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion"

export default function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(34, 211, 238, 0.2), transparent 34%)`

  return (
    <motion.article
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100)
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100)
      }}
      whileHover={reducedMotion ? undefined : { rotateX: 3, rotateY: -4, y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_20px_90px_rgba(0,0,0,0.25)] ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative" style={{ transform: "translateZ(28px)" }}>
        {children}
      </div>
    </motion.article>
  )
}
