"use client"

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const listeners = new Set<() => void>()

let currentTheme: Theme = "dark"
let initialized = false

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme")

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)
  document.documentElement.style.colorScheme = theme
  window.localStorage.setItem("theme", theme)
}

function emitChange() {
  listeners.forEach((listener) => listener())
}

function initializeTheme() {
  if (initialized || typeof window === "undefined") return

  initialized = true
  currentTheme = getPreferredTheme()
  applyTheme(currentTheme)

  const media = window.matchMedia("(prefers-color-scheme: light)")
  const handleSystemThemeChange = () => {
    const storedTheme = window.localStorage.getItem("theme")
    if (storedTheme === "dark" || storedTheme === "light") return

    currentTheme = getPreferredTheme()
    applyTheme(currentTheme)
    emitChange()
  }

  media.addEventListener("change", handleSystemThemeChange)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return currentTheme
}

function getServerSnapshot() {
  return "dark" as Theme
}

function updateTheme(theme: Theme) {
  currentTheme = theme
  applyTheme(theme)
  emitChange()
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    initializeTheme()
    emitChange()
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme: updateTheme,
      toggleTheme: () => updateTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
