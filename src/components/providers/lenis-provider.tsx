"use client"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import Lenis from "lenis"

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export function useLenis() {
  return useContext(LenisContext)
}

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Skip Lenis if user prefers reduced motion
      return
    }

    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2, // Duration of the scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    setLenis(lenisInstance)

    // RAF loop for smooth scroll
    function raf(time: number) {
      lenisInstance.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }
    rafIdRef.current = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      lenisInstance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  )
}
