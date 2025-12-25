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
}

export function CounterUp({
  end,
  duration = DURATION.counter,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setDisplayValue(end)
      setHasAnimated(true)
      return
    }

    setHasAnimated(true)

    const controls = animate(0, end, {
      duration,
      ease: EASING.smooth,
      onUpdate: (value) => {
        setDisplayValue(value)
      },
    })

    return () => controls.stop()
  }, [isInView, end, duration, prefersReducedMotion, hasAnimated])

  const formattedValue = displayValue.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
