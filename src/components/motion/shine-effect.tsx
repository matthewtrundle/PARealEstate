"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ShineButtonProps {
  children: ReactNode
  className?: string
  shineColor?: string
  onClick?: () => void
  asChild?: boolean
}

export function ShineButton({
  children,
  className = "",
  shineColor = "rgba(255, 255, 255, 0.4)",
}: ShineButtonProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden group", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}

      {/* Shine overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${shineColor},
            transparent
          )`,
        }}
      />
    </motion.div>
  )
}

// Glow effect for buttons on hover
interface GlowButtonProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowButton({
  children,
  className = "",
  glowColor = "rgba(201, 169, 98, 0.5)",
}: GlowButtonProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{
        boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Combined shine + glow for premium CTA
interface PremiumButtonWrapperProps {
  children: ReactNode
  className?: string
  glowColor?: string
  shineColor?: string
}

export function PremiumButtonWrapper({
  children,
  className = "",
  glowColor = "rgba(201, 169, 98, 0.4)",
  shineColor = "rgba(255, 255, 255, 0.3)",
}: PremiumButtonWrapperProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-md", className)}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 4px 20px ${glowColor}, 0 8px 40px ${glowColor}`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%", skewX: "-15deg" }}
        whileHover={{ x: "200%" }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          width: "50%",
          background: `linear-gradient(
            90deg,
            transparent,
            ${shineColor},
            transparent
          )`,
        }}
      />
    </motion.div>
  )
}
