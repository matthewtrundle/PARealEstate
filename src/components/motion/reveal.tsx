"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { EASING, DURATION, TRANSFORM } from "@/lib/motion-config"

interface RevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
  blur?: boolean
}

const directionOffsets = {
  up: { y: TRANSFORM.reveal.y, x: 0 },
  down: { y: -TRANSFORM.reveal.y, x: 0 },
  left: { x: TRANSFORM.reveal.y, y: 0 },
  right: { x: -TRANSFORM.reveal.y, y: 0 },
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = DURATION.reveal,
  className = "",
  once = true,
  amount = 0.3,
  blur = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const prefersReducedMotion = useReducedMotion()

  // Respect user's motion preferences
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = directionOffsets[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? `blur(${TRANSFORM.reveal.blur}px)` : "blur(0px)",
        ...offset,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : {
              opacity: 0,
              filter: blur ? `blur(${TRANSFORM.reveal.blur}px)` : "blur(0px)",
              ...offset,
            }
      }
      transition={{
        duration,
        delay,
        ease: EASING.reveal,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
