// Data types for SEO content pages

export interface Place {
  slug: string
  name: string
  category: "restaurants" | "bars" | "shops" | "attractions" | "parks"
  subcategory: string
  description: string
  longDescription: string
  address: string
  phone?: string
  website?: string
  hours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  priceRange?: "$" | "$$" | "$$$" | "$$$$"
  features: string[]
  nearbyNeighborhood: string
  coordinates?: {
    lat: number
    lng: number
  }
  images?: string[]
  seoKeywords: string[]
  rating?: number
  reviewCount?: number
  established?: string
  highlights?: string[]
  tips?: string[]
  nearbyPlaces?: string[] // slugs of related places
  relatedProperties?: boolean // show nearby properties CTA
}

export interface Activity {
  slug: string
  name: string
  category: string
  description: string
  longDescription: string
  difficulty?: "easy" | "moderate" | "challenging"
  duration?: string
  bestSeason?: string[]
  bestTime?: string
  cost?: string
  requirements?: string[]
  whatToBring?: string[]
  tips?: string[]
  locations?: string[]
  operators?: {
    name: string
    phone?: string
    website?: string
    description?: string
  }[]
  seoKeywords: string[]
  relatedActivities?: string[]
  images?: string[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export interface BestOfList {
  slug: string
  title: string
  category: string
  description: string
  intro: string
  items: {
    rank: number
    name: string
    slug?: string // link to place page if exists
    description: string
    highlights: string[]
    address?: string
    priceRange?: string
    bestFor?: string
  }[]
  tips?: string[]
  seoKeywords: string[]
  lastUpdated: string
  relatedLists?: string[]
}

export interface LifestyleScenario {
  slug: string
  title: string
  headline: string
  description: string
  intro: string
  sections: {
    title: string
    content: string
    highlights?: string[]
  }[]
  benefits: {
    title: string
    description: string
    icon?: string
  }[]
  considerations?: {
    title: string
    description: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  relatedNeighborhoods?: string[]
  relatedProperties?: {
    type: string
    priceRange: string
    features: string[]
  }
  seoKeywords: string[]
  faqs?: {
    question: string
    answer: string
  }[]
  callToAction?: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}

export interface Event {
  slug: string
  name: string
  category: string
  description: string
  longDescription: string
  date?: string // Could be specific date or recurring
  recurring?: {
    frequency: "annual" | "monthly" | "weekly"
    month?: string
    dayOfWeek?: string
  }
  location: string
  duration?: string
  cost?: string
  website?: string
  highlights?: string[]
  whatToExpect?: string[]
  tips?: string[]
  history?: string
  images?: string[]
  seoKeywords: string[]
  relatedEvents?: string[]
  nearbyPlaces?: string[]
}

export interface Comparison {
  slug: string
  title: string
  description: string
  intro: string
  optionA: {
    name: string
    description: string
    pros: string[]
    cons: string[]
    bestFor: string[]
    stats?: Record<string, string | number>
  }
  optionB: {
    name: string
    description: string
    pros: string[]
    cons: string[]
    bestFor: string[]
    stats?: Record<string, string | number>
  }
  comparisonTable?: {
    category: string
    optionA: string
    optionB: string
  }[]
  verdict: {
    summary: string
    chooseA: string
    chooseB: string
  }
  seoKeywords: string[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export interface MonthlyGuide {
  slug: string
  month: string
  monthNumber: number
  title: string
  description: string
  intro: string
  weather: {
    avgHigh: number
    avgLow: number
    waterTemp: number
    rainfall: number
    description: string
  }
  crowdLevel: "low" | "moderate" | "high" | "peak"
  events: string[] // slugs of events
  activities: {
    name: string
    description: string
    rating: "excellent" | "good" | "fair"
  }[]
  fishing?: {
    species: string[]
    conditions: string
  }
  tips: string[]
  packing: string[]
  pricing: {
    level: "budget" | "moderate" | "premium"
    description: string
  }
  seoKeywords: string[]
  highlights: string[]
}

// Neighborhood sub-page types
export interface NeighborhoodTopic {
  neighborhoodSlug: string
  topicSlug: string
  title: string
  description: string
  content: string
  items?: {
    name: string
    description: string
    distance?: string
  }[]
  tips?: string[]
  seoKeywords: string[]
}
