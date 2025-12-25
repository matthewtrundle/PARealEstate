"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

const valueProps = [
  {
    number: "01",
    title: "Local Expertise",
    description:
      "We live and breathe Port Aransas. Our deep knowledge of neighborhoods, market trends, and coastal regulations means you get insider guidance that makes all the difference.",
    highlights: ["15+ years in Port A", "Neighborhood specialists", "Market trend analysis"],
  },
  {
    number: "02",
    title: "Investment Focus",
    description:
      "Whether it's a vacation rental generating income or long-term appreciation, we provide data-driven guidance on ROI potential and help you make smart investment decisions.",
    highlights: ["Rental income projections", "ROI analysis", "Market opportunities"],
  },
  {
    number: "03",
    title: "White-Glove Service",
    description:
      "From your first inquiry to the closing table, you'll have a dedicated expert by your side. We handle the details so you can focus on finding your perfect coastal property.",
    highlights: ["Dedicated agent", "Full transaction support", "Post-closing assistance"],
  },
]

// Card variants with alternating entrance direction
const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -30 : 30,
    y: 20,
    rotateY: i % 2 === 0 ? -5 : 5,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: 0,
  },
}

// Badge variants with scale + rotate
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
}

// Highlight item variants for stagger
const highlightVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

export function ValueProps() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-100/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent-100/20 to-transparent blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #1a365d 1px, transparent 1px),
                              linear-gradient(to bottom, #1a365d 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <Container className="relative">
        <div ref={sectionRef}>
          {/* Section header - More editorial with animations */}
          <motion.div
            className="text-center mb-20"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-primary-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
              />
              <span className="text-primary-600 text-sm tracking-[0.2em] uppercase font-medium">
                Why Choose Us
              </span>
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-primary-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
              />
            </motion.div>
            <motion.h2
              className="text-fluid-4xl md:text-fluid-5xl font-display font-normal text-neutral-900 tracking-tight mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
            >
              The Difference is in<br className="hidden md:block" /> the Details
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            >
              Buying coastal property is about more than square footage.
              It's about finding the life you've been dreaming of.
            </motion.p>
          </motion.div>

          {/* Value props - Elegant cards with premium animations */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {valueProps.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.7,
                  ease: easeOutExpo,
                  delay: 0.4 + index * 0.15,
                }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-neutral-100/50 h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(29,78,116,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number badge with scale + rotate entrance */}
                  <motion.div
                    className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                    variants={badgeVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.5,
                      ease: easeOutExpo,
                      delay: 0.6 + index * 0.15,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 4px 15px rgba(29,78,116,0.4)",
                    }}
                  >
                    <span className="text-sm font-medium text-white tracking-wider">{item.number}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-display font-normal text-neutral-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights list with staggered slide-in */}
                    <motion.ul
                      className="space-y-2 pt-4 border-t border-neutral-100"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.8 + index * 0.15,
                          },
                        },
                      }}
                    >
                      {item.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-neutral-700"
                          variants={highlightVariants}
                          transition={{ duration: 0.4, ease: easeOutExpo }}
                        >
                          <motion.span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"
                            whileHover={{ scale: 1.5 }}
                          />
                          {highlight}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Bottom accent line on hover - animated */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-2xl origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: easeOutExpo }}
                  />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(29,78,116,0.03) 0%, transparent 70%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
