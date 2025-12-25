"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { EASING, DURATION, TRANSFORM } from "@/lib/motion-config"

interface StaggerChildrenProps {
  children: React.ReactNode
  staggerDelay?: number
  duration?: number
  className?: string
  childClassName?: string
  once?: boolean
  amount?: number
  blur?: boolean
}

export function StaggerChildren({
  children,
  staggerDelay = DURATION.stagger,
  duration = DURATION.reveal,
  className = "",
  childClassName = "",
  once = true,
  amount = 0.2,
  blur = true,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const prefersReducedMotion = useReducedMotion()

  // Respect user's motion preferences
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: TRANSFORM.reveal.y,
      filter: blur ? `blur(${TRANSFORM.reveal.blur}px)` : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: EASING.reveal,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants} className={childClassName}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
