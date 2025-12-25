"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui"
import { ParallaxLayer, PremiumButtonWrapper } from "@/components/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import siteConfig from "@/data/site-config.json"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Word animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

// Container for word stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
}

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  // Enhanced parallax zoom effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30])

  // Split headline into words
  const headlineWords = "Let's find your perfect property".split(" ")

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <ParallaxLayer
        className="py-32 md:py-40"
        image="/images/hero/beach-aerial.jpg"
        overlay="bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85"
        speed={0.15}
      >
        {/* Enhanced background zoom on scroll */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ scale: backgroundScale }}
          />
        )}

        <motion.div
          style={prefersReducedMotion ? {} : { y: contentY }}
        >
          <Container className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              {/* Overline with slide-in */}
              <motion.span
                className="text-accent-500 text-sm tracking-wider uppercase font-medium block mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
              >
                Ready to Start?
              </motion.span>

              {/* Headline - Word by word reveal */}
              <motion.h2
                className="text-fluid-5xl font-display font-normal text-white tracking-tight mb-6 leading-[1.1]"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
                    variants={wordVariants}
                    transition={{
                      duration: 0.5,
                      ease: easeOutExpo,
                    }}
                  >
                    {word}
                    {i < headlineWords.length - 1 && "\u00A0"}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-lg text-neutral-300 mb-10"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.5 }}
              >
                Tell us what you&apos;re looking for and we&apos;ll connect you with
                the right opportunities in Port Aransas.
              </motion.p>

              {/* CTA Buttons - Premium effects */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.6 }}
              >
                <PremiumButtonWrapper
                  glowColor="rgba(201, 169, 98, 0.5)"
                  shineColor="rgba(255, 255, 255, 0.4)"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="px-8 py-4 text-base bg-accent-500 hover:bg-accent-400 text-primary-950 border-0 rounded-md transition-colors duration-300"
                    asChild
                  >
                    <a href="#contact-form">Request Listings</a>
                  </Button>
                </PremiumButtonWrapper>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-md"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-base border-neutral-500 text-white hover:bg-white/5 hover:border-neutral-300 rounded-md transition-all duration-300"
                    asChild
                  >
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}>
                      Call Us Directly
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Subtle urgency pulse on primary CTA */}
              <motion.div
                className="mt-8"
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.8 }}
              >
                <motion.span
                  className="text-sm text-neutral-400"
                  animate={prefersReducedMotion ? {} : {
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Available 7 days a week
                </motion.span>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </ParallaxLayer>
    </div>
  )
}
