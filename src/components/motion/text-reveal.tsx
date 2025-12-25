"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface TextRevealProps {
  children: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  delay?: number
  staggerDelay?: number
  duration?: number
  once?: boolean
}

// Premium easing - easeOutExpo for smooth deceleration
const easeOutExpo = [0.16, 1, 0.3, 1] as const

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

export function TextReveal({
  children,
  className = "",
  as: Component = "span",
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.6,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: "-10%" })
  const prefersReducedMotion = useReducedMotion()

  const words = children.split(" ")

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>
  }

  const MotionComponent = motion[Component] as typeof motion.span

  return (
    <MotionComponent
      ref={ref}
      className={`${className} inline`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={wordVariants}
          transition={{
            duration,
            delay: delay + i * staggerDelay,
            ease: easeOutExpo,
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </MotionComponent>
  )
}

// Line-by-line reveal for paragraphs
interface LineRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.15,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function LineRevealItem({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={lineVariants}
      transition={{ duration: 0.7, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}
