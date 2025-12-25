"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

interface PropertyViewTrackerProps {
  propertySlug: string
  propertyName: string
}

export function PropertyViewTracker({ propertySlug, propertyName }: PropertyViewTrackerProps) {
  useEffect(() => {
    trackEvent("PROPERTY_VIEWED", {
      property_slug: propertySlug,
      property_name: propertyName,
    })
  }, [propertySlug, propertyName])

  return null
}
