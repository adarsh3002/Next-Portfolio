"use client"

import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
