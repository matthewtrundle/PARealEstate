"use client"

import { track } from "@vercel/analytics"

// ============================================
// COMPREHENSIVE ANALYTICS EVENT TRACKING
// For Vercel Analytics Pro with Custom Events
// ============================================

// Event name constants for type safety
export const ANALYTICS_EVENTS = {
  // ==========================================
  // LEAD GENERATION EVENTS (High Value)
  // ==========================================
  LEAD_FORM_VIEWED: "Lead Form Viewed",
  LEAD_FORM_STARTED: "Lead Form Started",
  LEAD_FORM_SUBMITTED: "Lead Form Submitted",
  LEAD_FORM_ERROR: "Lead Form Error",

  // ==========================================
  // CONTACT EVENTS
  // ==========================================
  PHONE_CLICKED: "Phone Number Clicked",
  EMAIL_CLICKED: "Email Clicked",
  SCHEDULE_CONSULTATION_CLICKED: "Schedule Consultation Clicked",

  // ==========================================
  // PORTFOLIO/PROPERTY EVENTS
  // ==========================================
  PORTFOLIO_VIEWED: "Portfolio Viewed",
  PROPERTY_CARD_CLICKED: "Property Card Clicked",
  PROPERTY_DETAIL_VIEWED: "Property Detail Viewed",
  PROPERTY_GALLERY_OPENED: "Property Gallery Opened",
  PROPERTY_GALLERY_IMAGE_VIEWED: "Property Gallery Image Viewed",

  // ==========================================
  // CTA EVENTS
  // ==========================================
  HERO_CTA_CLICKED: "Hero CTA Clicked",
  CTA_BANNER_CLICKED: "CTA Banner Clicked",
  STICKY_CTA_CLICKED: "Sticky CTA Clicked",

  // ==========================================
  // NAVIGATION EVENTS
  // ==========================================
  NAV_LINK_CLICKED: "Navigation Link Clicked",
  FOOTER_LINK_CLICKED: "Footer Link Clicked",
  BREADCRUMB_CLICKED: "Breadcrumb Clicked",

  // ==========================================
  // TOOL/CALCULATOR EVENTS
  // ==========================================
  CALCULATOR_USED: "Calculator Used",
  CALCULATOR_RESULT_VIEWED: "Calculator Result Viewed",
  MORTGAGE_CALCULATED: "Mortgage Calculated",
  AFFORDABILITY_CALCULATED: "Affordability Calculated",
  INVESTMENT_CALCULATED: "Investment ROI Calculated",
  CLOSING_COSTS_CALCULATED: "Closing Costs Calculated",
  RENT_VS_BUY_CALCULATED: "Rent vs Buy Calculated",

  // ==========================================
  // CONTENT ENGAGEMENT EVENTS
  // ==========================================
  GUIDE_VIEWED: "Guide Viewed",
  BLOG_POST_VIEWED: "Blog Post Viewed",
  NEIGHBORHOOD_VIEWED: "Neighborhood Page Viewed",
  FAQ_EXPANDED: "FAQ Question Expanded",

  // ==========================================
  // SALES TICKER EVENTS
  // ==========================================
  SALES_TICKER_CLICKED: "Sales Ticker Clicked",
  SALES_TICKER_PROPERTY_CLICKED: "Sales Ticker Property Clicked",

  // ==========================================
  // VIDEO EVENTS
  // ==========================================
  VIDEO_PLAYED: "Video Played",
  VIDEO_PAUSED: "Video Paused",
  VIDEO_COMPLETED: "Video Completed",

  // ==========================================
  // SCROLL/ENGAGEMENT EVENTS
  // ==========================================
  PAGE_SCROLL_25: "Page Scrolled 25%",
  PAGE_SCROLL_50: "Page Scrolled 50%",
  PAGE_SCROLL_75: "Page Scrolled 75%",
  PAGE_SCROLL_100: "Page Scrolled 100%",
  TIME_ON_PAGE_30S: "Time on Page 30s",
  TIME_ON_PAGE_60S: "Time on Page 60s",
  TIME_ON_PAGE_120S: "Time on Page 120s",

  // ==========================================
  // SEARCH/FILTER EVENTS
  // ==========================================
  FILTER_APPLIED: "Filter Applied",
  SORT_CHANGED: "Sort Order Changed",

  // ==========================================
  // EXTERNAL LINK EVENTS
  // ==========================================
  EXTERNAL_LINK_CLICKED: "External Link Clicked",
  SOCIAL_LINK_CLICKED: "Social Link Clicked",
} as const

export type AnalyticsEvent = keyof typeof ANALYTICS_EVENTS

// ============================================
// TRACKING FUNCTIONS
// ============================================

/**
 * Track a custom event with Vercel Analytics
 * Automatically includes UTM parameters if present
 */
export function trackEvent(
  event: AnalyticsEvent | string,
  properties?: Record<string, string | number | boolean | null | undefined>
) {
  if (typeof window === "undefined") return

  // Get event name (use string directly if not in our constants)
  const eventName = typeof event === "string" && event in ANALYTICS_EVENTS
    ? ANALYTICS_EVENTS[event as AnalyticsEvent]
    : event

  // Filter out undefined values and enrich with UTM parameters
  const filteredProperties = properties
    ? Object.fromEntries(
        Object.entries(properties).filter(([, v]) => v !== undefined)
      )
    : {}

  const enrichedProperties = {
    ...filteredProperties,
    ...getUTMParams(),
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, enrichedProperties)
  }

  // Track with Vercel Analytics
  track(eventName, enrichedProperties)
}

/**
 * Get UTM parameters from URL
 */
function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}

  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })

  // Also check for stored UTM params (for multi-page sessions)
  if (Object.keys(utmParams).length === 0) {
    try {
      const stored = sessionStorage.getItem("utm_params")
      if (stored) {
        return JSON.parse(stored)
      }
    } catch {
      // Ignore storage errors
    }
  } else {
    // Store UTM params for session
    try {
      sessionStorage.setItem("utm_params", JSON.stringify(utmParams))
    } catch {
      // Ignore storage errors
    }
  }

  return utmParams
}

// ============================================
// CONVENIENCE TRACKING FUNCTIONS
// ============================================

/**
 * Track lead form events
 */
export function trackLeadForm(
  action: "viewed" | "started" | "submitted" | "error",
  properties?: {
    form_source?: string
    property_slug?: string
    property_name?: string
    error_message?: string
  }
) {
  const eventMap = {
    viewed: "LEAD_FORM_VIEWED",
    started: "LEAD_FORM_STARTED",
    submitted: "LEAD_FORM_SUBMITTED",
    error: "LEAD_FORM_ERROR",
  }
  trackEvent(eventMap[action] as AnalyticsEvent, properties)
}

/**
 * Track property/portfolio interactions
 */
export function trackProperty(
  action: "card_clicked" | "detail_viewed" | "gallery_opened" | "image_viewed",
  properties: {
    property_slug: string
    property_name?: string
    property_type?: string
    property_price?: number
    neighborhood?: string
  }
) {
  const eventMap = {
    card_clicked: "PROPERTY_CARD_CLICKED",
    detail_viewed: "PROPERTY_DETAIL_VIEWED",
    gallery_opened: "PROPERTY_GALLERY_OPENED",
    image_viewed: "PROPERTY_GALLERY_IMAGE_VIEWED",
  }
  trackEvent(eventMap[action] as AnalyticsEvent, properties)
}

/**
 * Track CTA clicks
 */
export function trackCTA(
  location: "hero" | "banner" | "sticky" | "nav" | "footer",
  properties?: {
    cta_text?: string
    destination?: string
  }
) {
  const eventMap = {
    hero: "HERO_CTA_CLICKED",
    banner: "CTA_BANNER_CLICKED",
    sticky: "STICKY_CTA_CLICKED",
    nav: "NAV_LINK_CLICKED",
    footer: "FOOTER_LINK_CLICKED",
  }
  trackEvent(eventMap[location] as AnalyticsEvent, properties)
}

/**
 * Track calculator usage
 */
export function trackCalculator(
  calculator: "mortgage" | "affordability" | "investment" | "closing_costs" | "rent_vs_buy",
  properties?: {
    loan_amount?: number
    interest_rate?: number
    term_years?: number
    down_payment?: number
    home_price?: number
    monthly_income?: number
    result?: number | string
  }
) {
  const eventMap = {
    mortgage: "MORTGAGE_CALCULATED",
    affordability: "AFFORDABILITY_CALCULATED",
    investment: "INVESTMENT_CALCULATED",
    closing_costs: "CLOSING_COSTS_CALCULATED",
    rent_vs_buy: "RENT_VS_BUY_CALCULATED",
  }
  trackEvent(eventMap[calculator] as AnalyticsEvent, properties)
}

/**
 * Track content engagement
 */
export function trackContent(
  type: "guide" | "blog" | "neighborhood" | "faq",
  properties: {
    content_slug?: string
    content_title?: string
    category?: string
  }
) {
  const eventMap = {
    guide: "GUIDE_VIEWED",
    blog: "BLOG_POST_VIEWED",
    neighborhood: "NEIGHBORHOOD_VIEWED",
    faq: "FAQ_EXPANDED",
  }
  trackEvent(eventMap[type] as AnalyticsEvent, properties)
}

/**
 * Track contact actions
 */
export function trackContact(
  method: "phone" | "email" | "schedule",
  properties?: {
    source?: string
    property_slug?: string
  }
) {
  const eventMap = {
    phone: "PHONE_CLICKED",
    email: "EMAIL_CLICKED",
    schedule: "SCHEDULE_CONSULTATION_CLICKED",
  }
  trackEvent(eventMap[method] as AnalyticsEvent, properties)
}

// ============================================
// SCROLL DEPTH TRACKING
// ============================================

let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  100: false,
}

export function initScrollTracking() {
  if (typeof window === "undefined") return

  // Reset on page change
  scrollDepthTracked = { 25: false, 50: false, 75: false, 100: false }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    if (scrollPercent >= 25 && !scrollDepthTracked[25]) {
      scrollDepthTracked[25] = true
      trackEvent("PAGE_SCROLL_25")
    }
    if (scrollPercent >= 50 && !scrollDepthTracked[50]) {
      scrollDepthTracked[50] = true
      trackEvent("PAGE_SCROLL_50")
    }
    if (scrollPercent >= 75 && !scrollDepthTracked[75]) {
      scrollDepthTracked[75] = true
      trackEvent("PAGE_SCROLL_75")
    }
    if (scrollPercent >= 100 && !scrollDepthTracked[100]) {
      scrollDepthTracked[100] = true
      trackEvent("PAGE_SCROLL_100")
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}

// ============================================
// TIME ON PAGE TRACKING
// ============================================

export function initTimeTracking() {
  if (typeof window === "undefined") return

  const startTime = Date.now()
  const tracked = { 30: false, 60: false, 120: false }

  const checkTime = () => {
    const elapsed = (Date.now() - startTime) / 1000

    if (elapsed >= 30 && !tracked[30]) {
      tracked[30] = true
      trackEvent("TIME_ON_PAGE_30S")
    }
    if (elapsed >= 60 && !tracked[60]) {
      tracked[60] = true
      trackEvent("TIME_ON_PAGE_60S")
    }
    if (elapsed >= 120 && !tracked[120]) {
      tracked[120] = true
      trackEvent("TIME_ON_PAGE_120S")
    }
  }

  const interval = setInterval(checkTime, 5000)
  return () => clearInterval(interval)
}
