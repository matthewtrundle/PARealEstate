"use client"

import { useEffect, useRef, useCallback } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

/**
 * HeroParallax - Cinematic depth layers with mouse-driven parallax
 * Creates perceived 3D depth without WebGL using layered transforms
 *
 * Architecture:
 * - Layer 1: Background image (moves WITH cursor, subtle)
 * - Layer 1.5: Grain + Vignette (static)
 * - Layer 2: Mist/light-leak (moves OPPOSITE to cursor, stronger)
 * - Layer 3: Content (static, crisp)
 */

interface HeroParallaxProps {
  videoUrl?: string
  backgroundUrl?: string
  children: React.ReactNode
  className?: string
}

// SVG noise for grain texture (inline data URI)
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`

export function HeroParallax({ videoUrl, backgroundUrl, children, className = "" }: HeroParallaxProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const mistRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // Animation state stored in refs to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  // Parallax configuration - PROMINENT settings
  const BG_MOVEMENT = 12 // px - background moves WITH cursor
  const MIST_MOVEMENT = 28 // px - mist moves OPPOSITE to cursor (stronger!)
  const LERP_FACTOR = 0.06 // Smooth follow (lower = smoother, slower)

  const updateParallax = useCallback(() => {
    // Lerp current position toward target
    currentPos.current.x += (mousePos.current.x - currentPos.current.x) * LERP_FACTOR
    currentPos.current.y += (mousePos.current.y - currentPos.current.y) * LERP_FACTOR

    // Apply transforms
    if (bgRef.current) {
      const x = currentPos.current.x * BG_MOVEMENT
      const y = currentPos.current.y * BG_MOVEMENT
      bgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.06)`
    }

    if (mistRef.current) {
      // Mist moves opposite direction (negative multiplier)
      const x = currentPos.current.x * -MIST_MOVEMENT
      const y = currentPos.current.y * -MIST_MOVEMENT
      mistRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.15)`
    }

    rafId.current = requestAnimationFrame(updateParallax)
  }, [])

  useEffect(() => {
    // Skip on reduced motion preference
    if (prefersReducedMotion) return

    // Skip on touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const root = rootRef.current
    if (!root) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect()
      // Normalize to -0.5 to 0.5 range
      mousePos.current.x = (e.clientX - rect.left) / rect.width - 0.5
      mousePos.current.y = (e.clientY - rect.top) / rect.height - 0.5
    }

    const handleMouseLeave = () => {
      // Smoothly return to center
      mousePos.current.x = 0
      mousePos.current.y = 0
    }

    // Start animation loop
    rafId.current = requestAnimationFrame(updateParallax)

    // Listen to mouse events on the container
    root.addEventListener("mousemove", handleMouseMove)
    root.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      root.removeEventListener("mousemove", handleMouseMove)
      root.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [prefersReducedMotion, updateParallax])

  return (
    <div
      ref={rootRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Layer 1: Background Video or Image */}
      {videoUrl ? (
        <div
          ref={bgRef}
          className="absolute inset-[-4%] will-change-transform"
          style={{ transform: "translate3d(0, 0, 0) scale(1.06)" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div
          ref={bgRef}
          className="absolute inset-[-4%] will-change-transform bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            transform: "translate3d(0, 0, 0) scale(1.06)",
          }}
        />
      )}

      {/* Layer 1.5a: Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(15,30,50,0.5) 0%, rgba(15,30,50,0.35) 50%, rgba(15,30,50,0.25) 100%)",
        }}
      />

      {/* Layer 1.5b: Vignette - PROMINENT */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,20,35,0.7) 100%)",
        }}
      />

      {/* Layer 1.5c: Grain texture - MORE VISIBLE */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 2: Mist/Light-leak overlay - PROMINENT */}
      <div
        ref={mistRef}
        className="absolute inset-[-15%] will-change-transform pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 25% 15%, rgba(201,169,98,0.22) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 55%, rgba(100,150,200,0.18) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 85%, rgba(201,169,98,0.14) 0%, transparent 40%),
            radial-gradient(ellipse at 15% 70%, rgba(150,180,220,0.12) 0%, transparent 35%)
          `,
          mixBlendMode: "screen",
          filter: "blur(3px)",
          transform: "translate3d(0, 0, 0) scale(1.15)", // Initial state
        }}
      />

      {/* Layer 2b: Animated light sweep - PROMINENT */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 65%, transparent 85%)",
          backgroundSize: "200% 100%",
          animation: "heroLightSweep 10s ease-in-out infinite",
        }}
      />

      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-primary-900/15 to-transparent pointer-events-none" />

      {/* Layer 3: Content (static, crisp) */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}

// Export index file helper
export { HeroParallax as default }
