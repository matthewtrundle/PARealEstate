"use client"

import { motion, type Variants } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { EASING, DURATION } from "@/lib/motion-config"

interface PageTransitionProps {
  children: React.ReactNode
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.page,
      ease: EASING.reveal,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: DURATION.page * 0.75,
      ease: EASING.reveal,
    },
  },
}

export function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion()

  // Respect user's motion preferences
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
}
