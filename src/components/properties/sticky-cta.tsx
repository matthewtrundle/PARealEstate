"use client"

import { Button } from "@/components/ui"
import type { Property } from "@/types/property"

interface StickyCTAProps {
  property: Property
}

export function StickyCTA({ property }: StickyCTAProps) {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-lg md:hidden">
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-neutral-900">
              ${property.pricing.listPrice.toLocaleString()}
            </span>
          </div>
          <div className="text-sm text-neutral-500">
            {property.specs.bedrooms} bed &middot; {property.specs.bathrooms} bath &middot; {property.specs.sqft.toLocaleString()} sqft
          </div>
        </div>
        <Button variant="cta" size="lg" onClick={scrollToForm}>
          Request Info
        </Button>
      </div>
    </div>
  )
}
