import { PropertyCard } from "./property-card"
import type { Property } from "@/types/property"

interface PropertyGridProps {
  properties: Property[]
  emptyMessage?: string
}

export function PropertyGrid({ properties, emptyMessage = "No properties found" }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 text-neutral-400 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl text-neutral-900 mb-2">{emptyMessage}</h3>
        <p className="text-neutral-600">Try adjusting your filters or search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} priority={index < 3} />
      ))}
    </div>
  )
}
