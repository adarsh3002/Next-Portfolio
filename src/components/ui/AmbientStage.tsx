"use client"

import { motion, useScroll, useTransform } from "framer-motion"

const particles = [
  "left-[8%] top-[18%]",
  "left-[18%] top-[52%]",
  "left-[36%] top-[12%]",
  "left-[58%] top-[36%]",
  "left-[76%] top-[16%]",
  "left-[88%] top-[62%]",
]

export default function AmbientStage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -220])
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 26])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <motion.div
        style={{ y, rotate }}
        className="absolute left-[10%] top-[16%] h-72 w-72 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-sm dark:bg-cyan-300/5"
      />
      <motion.div
        style={{ y: yReverse }}
        className="absolute right-[4%] top-[38%] h-96 w-96 rounded-full border border-emerald-300/20 bg-emerald-300/10 blur-md dark:bg-emerald-300/5"
      />
      {particles.map((position, index) => (
        <motion.span
          key={position}
          className={`absolute ${position} size-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_24px_rgba(103,232,249,0.9)]`}
          animate={{ y: [0, -18, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        />
      ))}
    </div>
  )
}
