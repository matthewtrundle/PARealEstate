"use client"

import { useState, useEffect } from "react"

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Create event listener
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener("change", handler)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  return prefersReducedMotion
}
