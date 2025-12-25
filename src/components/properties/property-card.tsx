"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui"
import { trackEvent } from "@/lib/analytics"
import type { Property } from "@/types/property"

interface PropertyCardProps {
  property: Property
  priority?: boolean
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const handleClick = () => {
    trackEvent("PROPERTY_CARD_CLICKED", {
      property_slug: property.slug,
      property_name: property.name,
    })
  }

  return (
    <Link href={`/properties/${property.slug}`} className="group" onClick={handleClick}>
      <article className="bg-white rounded-xl overflow-hidden shadow-card transition-all hover:shadow-card-hover">
        {/* Image */}
        <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
          <Image
            src={property.images.hero}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />

          {/* Featured tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.features.highlights.slice(0, 2).map((feature) => (
              <Badge
                key={feature}
                variant="default"
                className="bg-white/90 text-primary-700"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Featured badge */}
          {property.featured && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">Featured</Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {property.name}
          </h3>
          <p className="text-neutral-500 text-sm mb-4">
            {property.location.neighborhood} &middot; {property.location.distanceToBeach}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm text-neutral-600">
              <span>{property.specs.bedrooms} beds</span>
              <span>{property.specs.bathrooms} baths</span>
              <span>{property.specs.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <div>
              <span className="text-lg font-semibold text-neutral-900">
                ${property.pricing.listPrice.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-primary-600 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
