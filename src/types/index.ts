export * from "./property"

export interface Testimonial {
  id: string
  name: string
  location: string
  property?: string
  rating: number
  text: string
  date: string
  avatar?: string
  featured: boolean
}

export interface TestimonialStats {
  averageRating: number
  totalReviews: number
  repeatGuestRate: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface SiteConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  url: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  social: {
    instagram: string
    facebook: string
  }
  hours: string
  responseTime: string
}

export interface NavLink {
  href: string
  label: string
}

export interface LeadFormState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}
