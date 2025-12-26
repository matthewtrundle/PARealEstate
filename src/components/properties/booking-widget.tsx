"use client"

import { Button, TrackedLink } from "@/components/ui"
import { LeadForm } from "@/components/forms"
import type { Property } from "@/types/property"
import siteConfig from "@/data/site-config.json"

interface BookingWidgetProps {
  property: Property
}

export function BookingWidget({ property }: BookingWidgetProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 sticky top-24">
      {/* SOLD Header */}
      <div className="p-6 border-b border-neutral-100 bg-green-50">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded">
            SOLD
          </span>
          {property.saleDate && (
            <span className="text-sm text-neutral-500">
              {new Date(property.saleDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-display font-bold text-neutral-900">
            ${(property.salePrice || property.pricing.listPrice).toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-neutral-500 mt-1">
          ${property.pricing.pricePerSqft.toLocaleString()}/sqft
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 border-b border-neutral-100">
        <div className="p-4 text-center border-r border-neutral-100">
          <div className="font-semibold text-neutral-900">{property.specs.bedrooms}</div>
          <div className="text-xs text-neutral-500">Bedrooms</div>
        </div>
        <div className="p-4 text-center border-r border-neutral-100">
          <div className="font-semibold text-neutral-900">{property.specs.bathrooms}</div>
          <div className="text-xs text-neutral-500">Bathrooms</div>
        </div>
        <div className="p-4 text-center">
          <div className="font-semibold text-neutral-900">{property.specs.sqft.toLocaleString()}</div>
          <div className="text-xs text-neutral-500">Sq Ft</div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4 border-b border-neutral-100 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">Year Built</span>
          <span className="font-medium text-neutral-900">{property.specs.yearBuilt}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Lot Size</span>
          <span className="font-medium text-neutral-900">{property.specs.lotSize}</span>
        </div>
        {property.daysToSell && (
          <div className="flex justify-between">
            <span className="text-neutral-500">Days to Sell</span>
            <span className="font-medium text-green-600">{property.daysToSell} days</span>
          </div>
        )}
        {property.details.hoa && (
          <div className="flex justify-between">
            <span className="text-neutral-500">HOA</span>
            <span className="font-medium text-neutral-900">{property.details.hoa}</span>
          </div>
        )}
      </div>

      {/* Consultation CTA */}
      <div className="p-6 bg-primary-50">
        <h4 className="font-semibold text-neutral-900 mb-2">Looking for something similar?</h4>
        <p className="text-sm text-neutral-600 mb-4">
          We can help you find comparable properties in {property.location.neighborhood} and beyond.
        </p>
        <LeadForm
          source="portfolio_consultation"
          propertySlug={property.slug}
          propertyName={property.name}
          variant="compact"
        />
      </div>

      {/* Call CTA */}
      <div className="px-6 pb-6">
        <div className="text-center text-sm text-neutral-500 mb-3">or call us directly</div>
        <Button variant="outline" size="lg" className="w-full" asChild>
          <TrackedLink
            href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
            event="PHONE_CLICKED"
            eventProperties={{ source: "portfolio_widget", property: property.slug }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {siteConfig.contact.phone}
          </TrackedLink>
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Local experts
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Off-market access
          </div>
        </div>
      </div>
    </div>
  )
}
