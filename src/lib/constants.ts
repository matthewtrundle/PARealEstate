/**
 * Site-wide constants
 */

export const SITE_CONFIG = {
  name: "Port Aransas Estates",
  shortName: "PA Estates",
  tagline: "Premium Coastal Real Estate",
  description:
    "We help buyers and investors discover exceptional beach homes, condos, and investment properties in Port Aransas, Texas.",
  url: "https://portaransasestates.com",
  phone: "(361) 555-0123",
  email: "info@portaransasestates.com",
  address: {
    street: "456 Mustang Island Drive",
    city: "Port Aransas",
    state: "TX",
    zip: "78373",
  },
  social: {
    instagram: "https://instagram.com/portaransasestates",
    facebook: "https://facebook.com/portaransasestates",
  },
  hours: "9am - 6pm CST, Mon-Sat",
  responseTime: "within 24 hours",
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  easing: {
    outExpo: [0.16, 1, 0.3, 1],
    outQuart: [0.25, 1, 0.5, 1],
    inOutSine: [0.37, 0, 0.63, 1],
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
} as const
