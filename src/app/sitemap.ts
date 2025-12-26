import { MetadataRoute } from "next"
import propertiesData from "@/data/properties.json"
import blogData from "@/data/blog-posts.json"
import monthlyData from "@/data/guides/monthly.json"
import eventsData from "@/data/events/events.json"
import restaurantsData from "@/data/places/restaurants.json"
import barsData from "@/data/places/bars.json"
import shopsData from "@/data/places/shops.json"
import attractionsData from "@/data/places/attractions.json"
import parksData from "@/data/places/parks.json"

const BASE_URL = "https://portaransasestates.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    // Core pages - highest priority
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Neighborhoods - high priority for local SEO
    { url: `${BASE_URL}/neighborhoods`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/neighborhoods/beachwalk`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/neighborhoods/cinnamon-shore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/neighborhoods/mustang-island`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/neighborhoods/pirates-bay`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/neighborhoods/port-aransas-downtown`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Guides - valuable content for AIO
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/guides/buying-beach-home`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides/selling`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides/first-time-buyer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/financing-coastal-property`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/investment-property`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides/vacation-rental-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/relocating-to-port-aransas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/monthly`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Tools - lead magnets
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/mortgage-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/affordability-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/home-value-estimator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/investment-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/closing-cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/rent-vs-buy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Area information - local SEO & AIO content
    { url: `${BASE_URL}/about-port-aransas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/living-in-port-aransas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/things-to-do`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/beaches`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fishing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/history`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },

    // Market information - high value for buyers
    { url: `${BASE_URL}/market`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/market/trends`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/market/price-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Content hubs
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/places`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/activities`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },

    // Place categories
    { url: `${BASE_URL}/places/restaurants`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/places/bars`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/places/shops`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/places/attractions`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/places/parks`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Hyper-local landing pages - SEO powerhouses
    { url: `${BASE_URL}/port-aransas-beachfront-homes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/mustang-island-condos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/port-aransas-vacation-rentals`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/texas-gulf-coast-investment-property`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/port-aransas-waterfront-homes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/port-aransas-new-construction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/port-aransas-luxury-homes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Legal pages - low priority
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  // Dynamic portfolio pages (sold properties)
  const portfolioPages: MetadataRoute.Sitemap = propertiesData.properties.map((property) => ({
    url: `${BASE_URL}/portfolio/${property.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = blogData.posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Monthly guide pages
  const monthlyPages: MetadataRoute.Sitemap = monthlyData.map((month: { slug: string }) => ({
    url: `${BASE_URL}/guides/monthly/${month.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Event pages
  const eventPages: MetadataRoute.Sitemap = eventsData.map((event: { slug: string }) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  // Place pages - restaurants
  const restaurantPages: MetadataRoute.Sitemap = restaurantsData.map((place: { slug: string }) => ({
    url: `${BASE_URL}/places/restaurants/${place.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  // Place pages - bars
  const barPages: MetadataRoute.Sitemap = barsData.map((place: { slug: string }) => ({
    url: `${BASE_URL}/places/bars/${place.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }))

  // Place pages - shops
  const shopPages: MetadataRoute.Sitemap = shopsData.map((place: { slug: string }) => ({
    url: `${BASE_URL}/places/shops/${place.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }))

  // Place pages - attractions
  const attractionPages: MetadataRoute.Sitemap = attractionsData.map((place: { slug: string }) => ({
    url: `${BASE_URL}/places/attractions/${place.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  // Place pages - parks
  const parkPages: MetadataRoute.Sitemap = parksData.map((place: { slug: string }) => ({
    url: `${BASE_URL}/places/parks/${place.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }))

  return [
    ...staticPages,
    ...portfolioPages,
    ...blogPages,
    ...monthlyPages,
    ...eventPages,
    ...restaurantPages,
    ...barPages,
    ...shopPages,
    ...attractionPages,
    ...parkPages,
  ]
}
