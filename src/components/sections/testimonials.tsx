"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import testimonialsData from "@/data/testimonials.json"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Transition direction state
type Direction = "left" | "right"

// Smooth crossfade with direction
const getSlideVariants = (direction: Direction) => ({
  enter: {
    x: direction === "right" ? 60 : -60,
    opacity: 0,
    filter: "blur(4px)",
  },
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    x: direction === "right" ? -60 : 60,
    opacity: 0,
    filter: "blur(4px)",
  },
})

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>("right")
  const featuredTestimonials = testimonialsData.testimonials.filter((t) => t.featured)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  // Auto-advance testimonials
  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setDirection("right")
      setActiveIndex((prev) =>
        prev === featuredTestimonials.length - 1 ? 0 : prev + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [featuredTestimonials.length, prefersReducedMotion])

  const goToPrev = () => {
    setDirection("left")
    setActiveIndex((prev) =>
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setDirection("right")
    setActiveIndex((prev) =>
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    )
  }

  const slideVariants = getSlideVariants(direction)

  return (
    <Section className="section-dark section-spacing-lg">
      <Container>
        <div ref={sectionRef}>
          {/* Section header - Editorial with animations */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <motion.span
              className="text-accent-500 text-sm tracking-wider uppercase font-medium block mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              Client Stories
            </motion.span>
            <motion.h2
              className="text-fluid-4xl font-display font-normal text-white tracking-tight mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
            >
              Trusted by buyers & sellers
            </motion.h2>
          </motion.div>

          {/* Testimonial Carousel - Large serif quote with premium transitions */}
          <motion.div
            className="relative max-w-3xl mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
          >
            {/* Decorative quote marks */}
            <motion.div
              className="absolute -top-8 left-0 text-8xl font-display text-accent-500/20 leading-none select-none pointer-events-none"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
            >
              &ldquo;
            </motion.div>
            <motion.div
              className="absolute -bottom-16 right-0 text-8xl font-display text-accent-500/20 leading-none select-none pointer-events-none"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
            >
              &rdquo;
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: easeOutExpo,
                }}
                className="text-center px-8"
              >
                {/* Large editorial quote */}
                <blockquote className="text-2xl md:text-3xl font-display font-normal text-white leading-relaxed mb-10 italic">
                  {featuredTestimonials[activeIndex].text}
                </blockquote>

                {/* Author with stagger */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.2 }}
                >
                  <div className="font-medium text-white mb-1">
                    {featuredTestimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {featuredTestimonials[activeIndex].location}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots - Enhanced with scale animation */}
            <div className="flex justify-center gap-3 mt-12">
              {featuredTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? "right" : "left")
                    setActiveIndex(index)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-accent-500 w-8"
                      : "bg-neutral-700 hover:bg-neutral-600 w-2"
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Enhanced with glow */}
            <motion.button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 transition-all duration-300 hidden lg:flex"
              whileHover={{
                scale: 1.1,
                borderColor: "rgb(163 163 163)", // neutral-400
                color: "#fff",
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 transition-all duration-300 hidden lg:flex"
              whileHover={{
                scale: 1.1,
                borderColor: "rgb(163 163 163)", // neutral-400
                color: "#fff",
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
