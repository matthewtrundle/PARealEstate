"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { TRANSFORM } from "@/lib/motion-config"

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number // Multiplier for parallax intensity
  direction?: "up" | "down"
  scale?: boolean // Enable scale effect on scroll
  opacity?: boolean // Enable opacity fade on scroll
  rotate?: number // Rotation amount in degrees
}

export function Parallax({
  children,
  className = "",
  speed = 1,
  direction = "up",
  scale = false,
  opacity = false,
  rotate = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const range = TRANSFORM.parallax.max * speed
  const yRange = direction === "up" ? [range, -range] : [-range, range]

  const y = useTransform(scrollYProgress, [0, 1], yRange)
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacityValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const rotateValue = useTransform(scrollYProgress, [0, 1], [-rotate, rotate])

  // Respect user's motion preferences
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const style: { y: MotionValue<number>; scale?: MotionValue<number>; opacity?: MotionValue<number>; rotate?: MotionValue<number> } = { y }
  if (scale) style.scale = scaleValue
  if (opacity) style.opacity = opacityValue
  if (rotate !== 0) style.rotate = rotateValue

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  )
}

// Parallax background layer for section backgrounds
interface ParallaxLayerProps {
  children?: React.ReactNode
  className?: string
  speed?: number
  image?: string
  overlay?: string
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.5,
  image,
  overlay,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`relative ${className}`}>
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        {overlay && <div className={`absolute inset-0 ${overlay}`} />}
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {image && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, y, scale }}
        />
      )}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
      {children}
    </div>
  )
}

// Floating decorative element with parallax
interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export function FloatingElement({
  children,
  className = "",
  speed = 1,
  direction = "up",
  delay = 0,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const range = 50 * speed

  const transforms = {
    up: { y: useTransform(scrollYProgress, [0, 1], [range, -range]) },
    down: { y: useTransform(scrollYProgress, [0, 1], [-range, range]) },
    left: { x: useTransform(scrollYProgress, [0, 1], [range, -range]) },
    right: { x: useTransform(scrollYProgress, [0, 1], [-range, range]) },
  }

  if (prefersReducedMotion) {
    return <div className={`relative ${className}`}>{children}</div>
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={transforms[direction]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
