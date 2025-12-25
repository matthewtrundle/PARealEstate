"use client"

import { useState, useEffect, lazy, Suspense, Component, type ReactNode, useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Lazy load the wave ball globe
const WaveBallScene = lazy(() =>
  import("./wave-ball").then((mod) => ({ default: mod.WaveBallScene }))
)

interface Hero3DProps {
  className?: string
}

// Error boundary to catch 3D rendering errors gracefully
interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.warn("3D rendering error (falling back to image):", error.message)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Shared background layer - always visible
function BackgroundLayer() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/hero/beach-aerial.jpg")`,
        }}
      />
      {/* Lighter gradient overlay - lets more photo show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-primary-900/35 to-primary-800/25" />
    </>
  )
}

// Overlay effects - always on top
function OverlayEffects() {
  return (
    <>
      {/* Gradient for text legibility - lighter on right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-primary-900/10 to-transparent pointer-events-none" />

      {/* Subtle vignette - reduced opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(15,30,50,0.25) 100%)",
        }}
      />

      {/* Subtle animated light shimmer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(201,169,98,0.1) 25%, transparent 50%, rgba(201,169,98,0.05) 75%, transparent 100%)",
          animation: "shimmer 8s ease-in-out infinite",
        }}
      />
    </>
  )
}

export function Hero3D({ className = "" }: Hero3DProps) {
  const [shouldRender3D, setShouldRender3D] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas")
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        return !!gl
      } catch {
        return false
      }
    }

    const isDesktop = window.innerWidth >= 768
    const hasWebGL = checkWebGL()

    if (!prefersReducedMotion && isDesktop && hasWebGL) {
      setShouldRender3D(true)
    }

    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768
      if (!isNowDesktop) {
        setShouldRender3D(false)
      } else if (!prefersReducedMotion && hasWebGL) {
        setShouldRender3D(true)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [prefersReducedMotion])

  // Mark as loaded after a delay to ensure smooth transition
  useEffect(() => {
    if (shouldRender3D) {
      const timer = setTimeout(() => setIsLoaded(true), 500)
      return () => clearTimeout(timer)
    }
  }, [shouldRender3D])

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {/* Background is ALWAYS visible - never hidden */}
      <BackgroundLayer />

      {/* 3D Globe removed for now */}

      {/* Overlays - always on top */}
      <OverlayEffects />
    </div>
  )
}
