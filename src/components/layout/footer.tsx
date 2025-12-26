"use client"

import Link from "next/link"
import { Container } from "./container"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = {
  explore: [
    { href: "/about-port-aransas", label: "About Port Aransas" },
    { href: "/neighborhoods", label: "Neighborhoods" },
    { href: "/things-to-do", label: "Things to Do" },
    { href: "/fishing", label: "Fishing Guide" },
    { href: "/beaches", label: "Beaches" },
  ],
  neighborhoods: [
    { href: "/neighborhoods/cinnamon-shore", label: "Cinnamon Shore" },
    { href: "/neighborhoods/mustang-island", label: "Mustang Island" },
    { href: "/neighborhoods/pirates-bay", label: "Pirates Bay" },
    { href: "/neighborhoods/beachwalk", label: "Beachwalk" },
    { href: "/neighborhoods/port-aransas-downtown", label: "Downtown" },
  ],
  guides: [
    { href: "/guides", label: "All Guides" },
    { href: "/guides/buying-beach-home", label: "Buying a Beach Home" },
    { href: "/guides/selling", label: "Selling Your Property" },
    { href: "/guides/investment-property", label: "Investment Property" },
    { href: "/market", label: "Market Overview" },
  ],
  tools: [
    { href: "/tools", label: "All Tools" },
    { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
    { href: "/tools/affordability-calculator", label: "Affordability Calculator" },
    { href: "/tools/home-value-estimator", label: "Home Value Estimator" },
    { href: "/tools/investment-calculator", label: "Investment Calculator" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold text-white">
              {SITE_CONFIG.shortName}
            </Link>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}. Your local experts for Port Aransas beach properties.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-secondary-400 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Neighborhoods</h4>
            <ul className="space-y-2">
              {footerLinks.neighborhoods.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Guides</h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <address className="not-italic text-neutral-500 text-xs leading-relaxed">
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
              </address>
              <p className="mt-1 text-neutral-500 text-xs">
                {SITE_CONFIG.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
