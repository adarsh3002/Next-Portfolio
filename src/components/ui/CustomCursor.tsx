"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const x = useSpring(cursorX, { stiffness: 650, damping: 44, mass: 0.15 })
  const y = useSpring(cursorY, { stiffness: 650, damping: 44, mass: 0.15 })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const move = (event: PointerEvent) => {
      cursorX.set(event.clientX - 16)
      cursorY.set(event.clientY - 16)
      setVisible(true)
    }
    const leave = () => setVisible(false)
    const enterInteractive = () => setActive(true)
    const leaveInteractive = () => setActive(false)

    window.addEventListener("pointermove", move)
    document.documentElement.addEventListener("mouseleave", leave)
    const interactive = Array.from(document.querySelectorAll("a, button, [data-cursor='interactive']"))
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", enterInteractive)
      element.addEventListener("pointerleave", leaveInteractive)
    })

    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("mouseleave", leave)
      interactive.forEach((element) => {
        element.removeEventListener("pointerenter", enterInteractive)
        element.removeEventListener("pointerleave", leaveInteractive)
      })
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-8 rounded-full border border-cyan-300 mix-blend-difference md:block"
      animate={{ scale: active ? 2.2 : 1, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ x, y }}
    >
      <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  )
}
