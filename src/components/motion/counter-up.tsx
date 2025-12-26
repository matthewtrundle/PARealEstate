"use client"

import { useRef, useEffect, useState } from "react"
import { useInView, animate } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { DURATION, EASING } from "@/lib/motion-config"

interface CounterUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  startAnimation?: boolean // Optional external trigger
}

export function CounterUp({
  end,
  duration = DURATION.counter,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  startAnimation,
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInViewInternal = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  // Start with the end value - ensures SSR and no-JS users see the real value
  const [displayValue, setDisplayValue] = useState(end)
  // Use ref instead of state to avoid re-triggering effect
  const hasAnimatedRef = useRef(false)

  // Use external trigger if provided, otherwise use internal viewport detection
  const shouldAnimate = startAnimation !== undefined ? startAnimation : isInViewInternal

  useEffect(() => {
    if (!shouldAnimate || hasAnimatedRef.current) return

    // Mark as animated immediately to prevent re-runs
    hasAnimatedRef.current = true

    // Skip animation if user prefers reduced motion - just show final value
    if (prefersReducedMotion) {
      setDisplayValue(end)
      return
    }

    // Animate from 0 to end
    const controls = animate(0, end, {
      duration,
      ease: EASING.smooth,
      onUpdate: (value) => {
        setDisplayValue(value)
      },
      onComplete: () => {
        // Ensure final value is set even if animation had issues
        setDisplayValue(end)
      },
    })

    // Fallback: ensure end value is shown after animation duration + buffer
    const fallbackTimer = setTimeout(() => {
      setDisplayValue(end)
    }, (duration + 0.5) * 1000)

    return () => {
      controls.stop()
      clearTimeout(fallbackTimer)
    }
  }, [shouldAnimate, end, duration, prefersReducedMotion])

  const formattedValue = displayValue.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
