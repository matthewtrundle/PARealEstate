"use client"

import { trackEvent, type AnalyticsEvent } from "@/lib/analytics"

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: AnalyticsEvent
  eventProperties?: Record<string, string | number | boolean | null | undefined>
  children: React.ReactNode
}

export function TrackedLink({
  event,
  eventProperties,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event, eventProperties)
    onClick?.(e)
  }

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
