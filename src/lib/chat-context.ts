// Chat context generator for Port Aransas AI assistant
// Compiles site content into a context string for the LLM

import {
  getAllPlaces,
  getAllActivities,
  getAllEvents,
  getAllMonthlyGuides,
  getCurrentMonthGuide,
} from "@/data"

import propertiesData from "@/data/properties.json"

interface Property {
  name: string
  status: string
  shortDescription: string
  location: { neighborhood: string; distanceToBeach: string }
  specs: { bedrooms: number; bathrooms: number; sqft: number }
  pricing: { listPrice: number }
  features: { highlights: string[] }
}

const properties = propertiesData.properties as Property[]

export function getPortAransasContext(): string {
  const sections: string[] = []

  // About Port Aransas
  sections.push(`
## About Port Aransas
Port Aransas (locally called "Port A") is a charming beach town on Mustang Island, Texas. Known for:
- 18 miles of pristine Gulf Coast beaches
- World-class fishing (deep sea, bay, and pier)
- Laid-back coastal lifestyle with small-town charm
- Popular vacation destination and investment property market
- Home to Texas SandFest, Deep Sea Roundup, and other iconic events
- No state income tax in Texas
- Growing real estate market with strong rental income potential
`)

  // Properties summary
  const activeProperties = properties.filter((p) => p.status === "active")
  const soldProperties = properties.filter((p) => p.status === "sold")

  sections.push(`
## Real Estate Portfolio
We specialize in Port Aransas coastal properties:
- Currently: ${activeProperties.length} active listings, ${soldProperties.length} recently sold
- Property types: Beachfront homes, condos, investment properties, vacation homes
- Neighborhoods: Cinnamon Shore, Mustang Island, Pirates Bay, Beachwalk, Downtown, Port Royal

Recent sales include:
${soldProperties.slice(0, 5).map((p) => `- ${p.name}: ${p.specs.bedrooms}BR/${p.specs.bathrooms}BA, ${p.location.neighborhood}, $${(p.pricing.listPrice / 1000000).toFixed(2)}M`).join("\n")}
`)

  // Popular restaurants
  const restaurants = getAllPlaces().filter((p) => p.category === "restaurants")
  sections.push(`
## Dining (${restaurants.length} restaurants)
Popular spots include:
${restaurants.slice(0, 8).map((r) => `- ${r.name}: ${r.description}`).join("\n")}
`)

  // Bars and nightlife
  const bars = getAllPlaces().filter((p) => p.category === "bars")
  sections.push(`
## Bars & Nightlife (${bars.length} spots)
${bars.slice(0, 5).map((b) => `- ${b.name}: ${b.description}`).join("\n")}
`)

  // Attractions
  const attractions = getAllPlaces().filter((p) => p.category === "attractions")
  sections.push(`
## Attractions & Activities
${attractions.slice(0, 6).map((a) => `- ${a.name}: ${a.description}`).join("\n")}
`)

  // Activities
  const activities = getAllActivities()
  sections.push(`
## Things to Do
${activities.slice(0, 8).map((a) => `- ${a.name}: ${a.description}`).join("\n")}
`)

  // Events
  const events = getAllEvents()
  sections.push(`
## Annual Events & Festivals
${events.slice(0, 8).map((e) => `- ${e.name} (${e.recurring?.month || e.date}): ${e.description}`).join("\n")}
`)

  // Current month info
  const currentGuide = getCurrentMonthGuide()
  if (currentGuide) {
    sections.push(`
## This Month in Port Aransas (${currentGuide.month})
- Weather: Highs around ${currentGuide.weather.avgHigh}°F, water temp ${currentGuide.weather.waterTemp}°F
- Crowd level: ${currentGuide.crowdLevel}
- Top activities: ${currentGuide.activities.slice(0, 3).map((a) => a.name).join(", ")}
${currentGuide.fishing ? `- Fishing: ${currentGuide.fishing.species.slice(0, 4).join(", ")}` : ""}
`)
  }

  // Contact info
  sections.push(`
## Contact Us
For inquiries about properties or to schedule a tour, visitors should use the contact form on our website at portaransasestates.com/contact. Our team responds within 2 hours during business hours.
`)

  return sections.join("\n")
}

// Fun facts for the popup
export const portAransasFunFacts = [
  "Did you know Port Aransas has 18 miles of pristine Gulf Coast beaches?",
  "The Texas SandFest attracts world-class sculptors from around the globe!",
  "Port A is home to some of the best fishing in the entire Gulf Coast.",
  "The ferry to Port Aransas is free and runs 24/7 - dolphins often follow alongside!",
  "Port Aransas was originally called Tarpon, after the fish that made it famous.",
  "The UT Marine Science Institute in Port A studies the Gulf ecosystem.",
  "Mustang Island State Park offers 5 miles of beach and great birding!",
  "The Deep Sea Roundup is Texas's oldest fishing tournament, running since 1932.",
  "Port A has more sunshine than most Texas cities - perfect beach weather!",
  "Roberts Point Park is a hidden gem for watching dolphins at sunset.",
]

export function getRandomFunFact(): string {
  return portAransasFunFacts[Math.floor(Math.random() * portAransasFunFacts.length)]
}
