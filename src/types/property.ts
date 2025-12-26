export interface Property {
  id: string
  slug: string
  status: "active" | "pending" | "sold" | "off-market"
  featured: boolean
  name: string
  tagline: string
  description: string
  shortDescription: string
  location: PropertyLocation
  specs: PropertySpecs
  pricing: PropertyPricing
  features: PropertyFeatures
  images: PropertyImages
  details: PropertyDetails
  seo: PropertySEO
  // Sold property fields
  saleDate?: string
  salePrice?: number
  daysToSell?: number
}

export interface PropertyLocation {
  address: string
  city: string
  state: string
  zip: string
  coordinates: {
    lat: number
    lng: number
  }
  distanceToBeach: string
  neighborhood: string
}

export interface PropertySpecs {
  bedrooms: number
  bathrooms: number
  sqft: number
  lotSize: string
  yearBuilt: number
  floors: number
}

export interface PropertyPricing {
  listPrice: number
  pricePerSqft: number
  currency: string
  status: string
  daysOnMarket: number
}

export interface PropertyFeatures {
  highlights: string[]
  outdoor: string[]
  indoor: string[]
  investment: string[]
}

export interface PropertyImages {
  hero: string
  gallery: PropertyImage[]
  floorplan?: string
}

export interface PropertyImage {
  src: string
  alt: string
  category: "interior" | "outdoor" | "aerial" | "detail"
}

export interface PropertyDetails {
  propertyType: string
  construction: string
  roof: string
  parking: string
  hvac: string
  hoa: string
}

export interface PropertySEO {
  title: string
  description: string
}

// Filter types
export interface PropertyFilters {
  bedroomOptions: (number | string)[]
  propertyTypes: PropertyTypeFilter[]
  featureFilters: FeatureFilter[]
  priceRanges: PriceRange[]
}

export interface PropertyTypeFilter {
  id: string
  label: string
}

export interface FeatureFilter {
  id: string
  label: string
}

export interface PriceRange {
  id: string
  label: string
  min: number
  max: number | null
}
