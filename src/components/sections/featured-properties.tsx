"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Container, Section } from "@/components/layout"
import { Button } from "@/components/ui"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import propertiesData from "@/data/properties.json"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Card entrance variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
}

// Container for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

// Header variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

export function FeaturedProperties() {
  const featuredProperties = propertiesData.properties.filter((p) => p.featured)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section className="section-light section-spacing-lg">
      <Container>
        <div ref={sectionRef}>
          {/* Section header - Editorial with animated underline */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              className="text-primary-700 text-sm tracking-wider uppercase font-medium block mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              Featured Listings
            </motion.span>
            <h2 className="text-fluid-4xl font-display font-normal text-neutral-900 tracking-tight mb-6 relative inline-block">
              Exceptional properties
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-accent-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
              />
            </h2>
            <motion.p
              className="text-lg text-neutral-600 max-w-xl mx-auto"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
            >
              Hand-selected homes and condos in Port Aransas
            </motion.p>
          </motion.div>

          {/* Properties grid - Premium cards with stagger */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {featuredProperties.slice(0, 3).map((property, index) => (
              <motion.div
                key={property.id}
                variants={cardVariants}
                transition={{ duration: 0.7, ease: easeOutExpo }}
              >
                <Link
                  href={`/properties/${property.slug}`}
                  className="group block"
                >
                  <motion.article
                    className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-all duration-500"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 8px 40px rgba(0,0,0,0.06), 0 16px 60px rgba(0,0,0,0.04)",
                      borderColor: "rgb(209 213 219)", // neutral-300
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Property Image */}
                    <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                      <Image
                        src={property.images.hero}
                        alt={property.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />

                      {/* Hover vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Property type badge with pulse */}
                      <motion.div
                        className="absolute top-4 left-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-medium text-neutral-700 rounded shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          {property.features.highlights[0]}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Location */}
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                        {property.location.neighborhood}
                      </p>

                      {/* Title */}
                      <h3 className="text-lg font-display font-normal text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                        {property.name}
                      </h3>

                      {/* Specs */}
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <span>{property.specs.bedrooms} bed</span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                        <span>{property.specs.bathrooms} bath</span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                        <span>{property.specs.sqft.toLocaleString()} sqft</span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        {/* Price with glow on hover */}
                        <motion.span
                          className="text-xl font-display font-normal text-neutral-900"
                          whileHover={{ color: "rgb(29 78 116)" }} // primary-700
                        >
                          ${property.pricing.listPrice.toLocaleString()}
                        </motion.span>
                        <span className="text-sm text-primary-700 font-medium flex items-center overflow-hidden">
                          <span className="group-hover:-translate-x-1 transition-transform duration-300">View</span>
                          <svg
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View all button - with arrow slide */}
          <motion.div
            className="text-center mt-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-4 border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 rounded-md transition-all duration-300"
                asChild
              >
                <Link href="/properties" className="flex items-center gap-2">
                  View All Properties
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
