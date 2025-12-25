"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { Button } from "@/components/ui"
import { CounterUp, PremiumButtonWrapper } from "@/components/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

const sellerBenefits = [
  {
    title: "Strategic Pricing",
    description: "Data-driven market analysis ensures your property is priced to sell quickly while maximizing your return.",
  },
  {
    title: "Premium Marketing",
    description: "Professional photography, virtual tours, and targeted digital campaigns that reach qualified buyers.",
  },
  {
    title: "Expert Negotiation",
    description: "Skilled representation at the negotiating table to protect your interests and secure the best terms.",
  },
  {
    title: "Seamless Process",
    description: "We handle every detail from listing to closing, keeping you informed every step of the way.",
  },
]

// Card variants with subtle rotation
const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    rotate: i % 2 === 0 ? -2 : 2,
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
}

// Stats data for easier animation
const stats = [
  { value: 97, suffix: "%", label: "List-to-Sale Ratio" },
  { value: 21, suffix: "", label: "Avg Days on Market" },
  { value: 45, prefix: "$", suffix: "M+", label: "Sold Last Year" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

export function SellersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {/* Animated gradient accent */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent-500/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              <motion.div
                className="h-px bg-gradient-to-r from-transparent to-accent-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
              />
              <span className="text-accent-400 text-sm tracking-[0.2em] uppercase font-medium">
                For Sellers
              </span>
            </motion.div>

            <motion.h2
              className="text-fluid-4xl md:text-fluid-5xl font-display font-normal text-white tracking-tight mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
            >
              Thinking About<br />
              <motion.span
                className="text-accent-400 inline-block"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.4 }}
              >
                Selling?
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.3 }}
            >
              The Port Aransas market is dynamic. With limited beachfront inventory
              and strong buyer demand, now could be the perfect time to maximize
              your property's value.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.4 }}
            >
              <PremiumButtonWrapper
                glowColor="rgba(201, 169, 98, 0.4)"
                shineColor="rgba(255, 255, 255, 0.3)"
              >
                <Button
                  variant="cta"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-400 text-primary-950"
                  asChild
                >
                  <Link href="/contact?type=seller">Get a Free Valuation</Link>
                </Button>
              </PremiumButtonWrapper>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-neutral-500 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  asChild
                >
                  <Link href="/guides/selling">Seller&apos;s Guide</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Benefits grid with staggered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sellerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.6,
                  ease: easeOutExpo,
                  delay: 0.3 + index * 0.1,
                }}
              >
                <motion.div
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 h-full"
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2), 0 0 0 1px rgba(201,169,98,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-accent-500"
                      whileHover={{ scale: 1.5, boxShadow: "0 0 10px rgba(201,169,98,0.5)" }}
                    />
                    <h3 className="text-lg font-display text-white group-hover:text-accent-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stat bar with CounterUp */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: easeOutExpo,
                  delay: 0.7 + index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-display text-white mb-2">
                  {stat.prefix || ""}
                  <CounterUp
                    end={stat.value}
                    duration={2}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
