"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { initScrollTracking, initTimeTracking } from "@/lib/analytics"

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize scroll depth tracking
    const cleanupScroll = initScrollTracking()

    // Initialize time on page tracking
    const cleanupTime = initTimeTracking()

    return () => {
      cleanupScroll?.()
      cleanupTime?.()
    }
  }, [pathname]) // Re-initialize on route change

  return <>{children}</>
}
