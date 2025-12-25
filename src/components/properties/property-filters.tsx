"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Button } from "@/components/ui"

interface FilterOption {
  value: string
  label: string
}

const bedroomOptions: FilterOption[] = [
  { value: "", label: "Any Bedrooms" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4+ Bedrooms" },
]

const priceRangeOptions: FilterOption[] = [
  { value: "", label: "Any Price" },
  { value: "0-500000", label: "Under $500K" },
  { value: "500000-750000", label: "$500K - $750K" },
  { value: "750000-1000000", label: "$750K - $1M" },
  { value: "1000000-2000000", label: "$1M - $2M" },
  { value: "2000000-999999999", label: "$2M+" },
]

const amenityOptions: FilterOption[] = [
  { value: "pool", label: "Pool" },
  { value: "beachfront", label: "Beachfront" },
  { value: "hot-tub", label: "Hot Tub" },
  { value: "pet-friendly", label: "Pet Friendly" },
]

const sortOptions: FilterOption[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest Listings" },
  { value: "sqft", label: "Largest Homes" },
]

export function PropertyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return params.toString()
    },
    [searchParams]
  )

  const handleFilterChange = (name: string, value: string) => {
    const queryString = createQueryString(name, value)
    router.push(`/properties${queryString ? `?${queryString}` : ""}`, { scroll: false })
  }

  const clearFilters = () => {
    router.push("/properties", { scroll: false })
  }

  const hasActiveFilters = searchParams.toString().length > 0

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-end">
        {/* Bedrooms Filter */}
        <div className="flex-1 min-w-[140px]">
          <label htmlFor="bedrooms" className="block text-sm font-medium text-neutral-700 mb-2">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            value={searchParams.get("bedrooms") || ""}
            onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {bedroomOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex-1 min-w-[160px]">
          <label htmlFor="priceRange" className="block text-sm font-medium text-neutral-700 mb-2">
            Price Range
          </label>
          <select
            id="priceRange"
            value={searchParams.get("priceRange") || ""}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {priceRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Filter */}
        <div className="flex-1 min-w-[160px]">
          <label htmlFor="sort" className="block text-sm font-medium text-neutral-700 mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={searchParams.get("sort") || "featured"}
            onChange={(e) => handleFilterChange("sort", e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>
        )}
      </div>

      {/* Amenity Quick Filters */}
      <div className="mt-4 pt-4 border-t border-neutral-100">
        <div className="flex flex-wrap gap-2">
          {amenityOptions.map((amenity) => {
            const currentAmenities = searchParams.get("amenities")?.split(",").filter(Boolean) || []
            const isActive = currentAmenities.includes(amenity.value)

            return (
              <button
                key={amenity.value}
                onClick={() => {
                  const newAmenities = isActive
                    ? currentAmenities.filter((a) => a !== amenity.value)
                    : [...currentAmenities, amenity.value]
                  handleFilterChange("amenities", newAmenities.join(","))
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {amenity.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
