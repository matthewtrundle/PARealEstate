"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Container } from "./container"
import { Button } from "@/components/ui"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"

// Calm transitions
const calmTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const,
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...calmTransition, delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="Port Aransas Estates"
                width={160}
                height={50}
                className="h-12 w-auto transition-all duration-300"
                style={{
                  filter: isScrolled ? "none" : "brightness(0) invert(1)",
                }}
                priority
              />
            </Link>

            {/* Desktop Navigation - Minimal */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-300",
                    pathname === link.href
                      ? isScrolled
                        ? "text-primary-700"
                        : "text-accent-400"
                      : isScrolled
                        ? "text-neutral-600 hover:text-neutral-900"
                        : "text-neutral-300 hover:text-white"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-px",
                        isScrolled ? "bg-primary-700" : "bg-accent-400"
                      )}
                      transition={calmTransition}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA - Confident, squared */}
            <div className="hidden md:flex items-center gap-6">
              <Button
                variant="cta"
                size="sm"
                className={cn(
                  "px-5 py-2 text-sm border-0 rounded-md transition-colors duration-300",
                  isScrolled
                    ? "bg-primary-800 hover:bg-primary-700 text-white"
                    : "bg-accent-500 hover:bg-accent-400 text-primary-950"
                )}
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "md:hidden p-2 -mr-2 transition-colors duration-300",
                isScrolled ? "text-neutral-900" : "text-white"
              )}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
