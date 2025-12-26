"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const recentSales = [
  { propertyType: "Beachfront Home", neighborhood: "Cinnamon Shore", price: 1250000, daysAgo: 2 },
  { propertyType: "Beach Cottage", neighborhood: "Mustang Island", price: 875000, daysAgo: 4 },
  { propertyType: "Waterfront Condo", neighborhood: "Pirates Bay", price: 725000, daysAgo: 5 },
  { propertyType: "Canal Home", neighborhood: "Beachwalk", price: 650000, daysAgo: 7 },
  { propertyType: "Investment Property", neighborhood: "Downtown", price: 485000, daysAgo: 9 },
  { propertyType: "Luxury Estate", neighborhood: "Port Royal", price: 1100000, daysAgo: 11 },
  { propertyType: "Beach House", neighborhood: "Cinnamon Shore", price: 980000, daysAgo: 14 },
  { propertyType: "Gulf View Condo", neighborhood: "Mustang Island", price: 790000, daysAgo: 16 },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

function formatTimeAgo(days: number): string {
  if (days === 0) return "Today"
  if (days === 1) return "Yesterday"
  if (days < 7) return `${days} days ago`
  if (days < 14) return "1 week ago"
  return `${Math.floor(days / 7)} weeks ago`
}

interface SalesTickerProps {
  className?: string
  variant?: "banner" | "compact" | "feed"
}

export function SalesTicker({ className, variant = "banner" }: SalesTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate through sales
  useEffect(() => {
    if (variant !== "banner") return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentSales.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [variant])

  // Banner variant - rotating single item
  if (variant === "banner") {
    const sale = recentSales[currentIndex]

    return (
      <div className={cn(
        "fixed left-0 right-0 z-40 bg-neutral-900 text-white py-2.5 overflow-hidden transition-all duration-500",
        isScrolled ? "top-20 opacity-100" : "top-20 opacity-0 pointer-events-none",
        className
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-sm">
            {/* Live indicator */}
            <span className="flex items-center gap-2 text-green-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              JUST SOLD
            </span>

            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-white">{sale.propertyType}</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-400">{sale.neighborhood}</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-accent-400 font-semibold">{formatPrice(sale.price)}</span>
                  <span className="text-neutral-500 text-xs">{formatTimeAgo(sale.daysAgo)}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex gap-1 ml-4">
              {recentSales.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsVisible(false)
                    setTimeout(() => {
                      setCurrentIndex(i)
                      setIsVisible(true)
                    }, 150)
                  }}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    i === currentIndex ? "bg-white" : "bg-neutral-600 hover:bg-neutral-500"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Compact variant - horizontal scroll
  if (variant === "compact") {
    return (
      <div
        ref={tickerRef}
        className={cn("overflow-hidden bg-neutral-100 py-3", className)}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...recentSales, ...recentSales].map((sale, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <span className="text-green-600 font-medium">SOLD</span>
              <span className="text-neutral-900">{sale.propertyType}</span>
              <span className="text-neutral-400">•</span>
              <span className="text-primary-600 font-semibold">{formatPrice(sale.price)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  // Feed variant - vertical list
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-neutral-100 p-6", className)}>
      <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        Recent Sales
      </h3>
      <div className="space-y-4">
        {recentSales.slice(0, 5).map((sale, index) => (
          <motion.div
            key={`${sale.propertyType}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
          >
            <div>
              <div className="font-medium text-neutral-900 text-sm">{sale.propertyType}</div>
              <div className="text-xs text-neutral-500">{sale.neighborhood}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-primary-600">{formatPrice(sale.price)}</div>
              <div className="text-xs text-neutral-400">{formatTimeAgo(sale.daysAgo)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
