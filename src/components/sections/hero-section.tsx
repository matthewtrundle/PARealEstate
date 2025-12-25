"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { HeroParallax } from "@/components/hero"
import { PremiumButtonWrapper } from "@/components/motion"

// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Word animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

// Container variants for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-based fade and scale
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  // Split headline into words
  const headlineWords = "Find Your Place on the Texas Coast".split(" ")

  return (
    <HeroParallax
      videoUrl="/Animate_this_soft_1080p_202512251006.mp4"
      className="flex items-center justify-center bg-primary-950"
    >
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center w-full">
        {/* Content - Centered with scroll fade */}
        <motion.div
          style={prefersReducedMotion ? {} : {
            opacity: contentOpacity,
            scale: contentScale,
            y: contentY,
          }}
        >
          <Container className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Overline - subtle location marker */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-accent-500 text-sm tracking-wider uppercase font-medium">
                  Port Aransas, Texas
                </span>
              </motion.div>

              {/* Main headline - word by word reveal */}
              <motion.h1
                className="text-fluid-6xl font-display font-normal text-white tracking-tight leading-[1.05] mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
                    variants={wordVariants}
                    transition={{
                      duration: 0.6,
                      ease: easeOutExpo,
                    }}
                  >
                    {word}
                    {i < headlineWords.length - 1 && "\u00A0"}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
                className="text-fluid-lg text-neutral-300 max-w-2xl mb-12 leading-relaxed"
              >
                Whether you&apos;re seeking a second home, investment property, or your next chapter
                by the sea — we connect you with exceptional coastal real estate opportunities.
              </motion.p>

              {/* CTA Buttons with premium effects */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <PremiumButtonWrapper
                  glowColor="rgba(201, 169, 98, 0.4)"
                  shineColor="rgba(255, 255, 255, 0.3)"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="px-8 py-4 text-base bg-accent-500 hover:bg-accent-400 text-primary-950 border-0 rounded-md transition-colors duration-300"
                    asChild
                  >
                    <Link href="/properties">View Properties</Link>
                  </Button>
                </PremiumButtonWrapper>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-base border-neutral-500 text-white hover:bg-white/5 hover:border-neutral-300 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    asChild
                  >
                    <a href="#contact-form">Request Consultation</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </motion.div>

        {/* Animated scroll hint with bounce */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [-10, 0, 0, 10],
          }}
          transition={{
            delay: 1.5,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-6 h-6 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </motion.div>
      </section>
    </HeroParallax>
  )
}
