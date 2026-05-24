"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.2 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300"
      style={{ scaleX, width: "100%" }}
    />
  )
}
