"use client"
import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("")
  const idsKey = ids.join("|")

  useEffect(() => {
    const sectionIds = idsKey.split("|")
    const handler = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id)
        }
      })
    }

    handler()
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [idsKey])

  return active
}
