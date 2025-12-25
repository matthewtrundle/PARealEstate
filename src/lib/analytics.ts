"use client"

import posthog from "posthog-js"

// Analytics event names
export const ANALYTICS_EVENTS = {
  // Lead events
  LEAD_FORM_VIEWED: "lead_form_viewed",
  LEAD_FORM_STARTED: "lead_form_started",
  LEAD_FORM_SUBMITTED: "lead_form_submitted",
  LEAD_FORM_ERROR: "lead_form_error",

  // Property events
  PROPERTY_VIEWED: "property_viewed",
  PROPERTY_CARD_CLICKED: "property_card_clicked",
  PROPERTY_GALLERY_OPENED: "property_gallery_opened",
  PROPERTY_CTA_CLICKED: "property_cta_clicked",

  // Navigation events
  NAV_LINK_CLICKED: "nav_link_clicked",
  PHONE_CLICKED: "phone_clicked",
  EMAIL_CLICKED: "email_clicked",

  // Hero events
  HERO_CTA_CLICKED: "hero_cta_clicked",

  // Page events
  PAGE_VIEWED: "page_viewed",
} as const

export type AnalyticsEvent = keyof typeof ANALYTICS_EVENTS

let isInitialized = false

/**
 * Initialize PostHog analytics
 * Should be called once in the root layout
 */
export function initAnalytics() {
  if (typeof window === "undefined") return
  if (isInitialized) return

  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"

  if (!posthogKey) {
    console.log("[Analytics] PostHog key not configured, analytics disabled")
    return
  }

  try {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage",
      autocapture: false, // We track events explicitly
    })
    isInitialized = true
    console.log("[Analytics] PostHog initialized")
  } catch (error) {
    console.error("[Analytics] Failed to initialize PostHog:", error)
  }
}

/**
 * Track an analytics event
 */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, unknown>
) {
  if (typeof window === "undefined") return

  const eventName = ANALYTICS_EVENTS[event]

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, properties)
  }

  // Track with PostHog if initialized
  if (isInitialized) {
    posthog.capture(eventName, properties)
  }
}

/**
 * Identify a user
 */
export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  if (!isInitialized) return

  posthog.identify(userId, traits)
}

/**
 * Reset user identity (on logout)
 */
export function resetUser() {
  if (typeof window === "undefined") return
  if (!isInitialized) return

  posthog.reset()
}
