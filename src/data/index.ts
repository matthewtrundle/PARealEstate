// Central data access functions for SEO content

import type {
  Place,
  Activity,
  BestOfList,
  LifestyleScenario,
  Event,
  Comparison,
  MonthlyGuide,
} from "./types"

// Import all data files
import restaurantsData from "./places/restaurants.json"
import barsData from "./places/bars.json"
import shopsData from "./places/shops.json"
import attractionsData from "./places/attractions.json"
import parksData from "./places/parks.json"
import activitiesData from "./guides/activities.json"
import bestOfData from "./guides/best-of.json"
import monthlyData from "./guides/monthly.json"
import scenariosData from "./lifestyle/scenarios.json"
import eventsData from "./events/events.json"
import comparisonsData from "./comparisons/comparisons.json"

// Type assertions for imported data
const restaurants = restaurantsData as Place[]
const bars = barsData as Place[]
const shops = shopsData as Place[]
const attractions = attractionsData as Place[]
const parks = parksData as Place[]
const activities = activitiesData as Activity[]
const bestOfLists = bestOfData as BestOfList[]
const monthlyGuides = monthlyData as MonthlyGuide[]
const lifestyleScenarios = scenariosData as LifestyleScenario[]
const events = eventsData as Event[]
const comparisons = comparisonsData as Comparison[]

// ============================================
// PLACES
// ============================================

export function getAllPlaces(): Place[] {
  return [...restaurants, ...bars, ...shops, ...attractions, ...parks]
}

export function getPlacesByCategory(category: Place["category"]): Place[] {
  switch (category) {
    case "restaurants":
      return restaurants
    case "bars":
      return bars
    case "shops":
      return shops
    case "attractions":
      return attractions
    case "parks":
      return parks
    default:
      return []
  }
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return getAllPlaces().find((place) => place.slug === slug)
}

export function getPlaceByCategoryAndSlug(
  category: string,
  slug: string
): Place | undefined {
  const places = getPlacesByCategory(category as Place["category"])
  return places.find((place) => place.slug === slug)
}

export function getPlacesByNeighborhood(neighborhood: string): Place[] {
  return getAllPlaces().filter(
    (place) => place.nearbyNeighborhood.toLowerCase() === neighborhood.toLowerCase()
  )
}

export function getPlacesByFeature(feature: string): Place[] {
  return getAllPlaces().filter((place) =>
    place.features.some((f) => f.toLowerCase() === feature.toLowerCase())
  )
}

export function getRelatedPlaces(place: Place, limit = 4): Place[] {
  const sameCategoryPlaces = getPlacesByCategory(place.category).filter(
    (p) => p.slug !== place.slug
  )
  // Prioritize same neighborhood, then same subcategory
  return sameCategoryPlaces
    .sort((a, b) => {
      const aScore =
        (a.nearbyNeighborhood === place.nearbyNeighborhood ? 2 : 0) +
        (a.subcategory === place.subcategory ? 1 : 0)
      const bScore =
        (b.nearbyNeighborhood === place.nearbyNeighborhood ? 2 : 0) +
        (b.subcategory === place.subcategory ? 1 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}

// ============================================
// ACTIVITIES
// ============================================

export function getAllActivities(): Activity[] {
  return activities
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((activity) => activity.slug === slug)
}

export function getActivitiesByCategory(category: string): Activity[] {
  return activities.filter(
    (activity) => activity.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedActivities(activity: Activity, limit = 4): Activity[] {
  return activities
    .filter((a) => a.slug !== activity.slug && a.category === activity.category)
    .slice(0, limit)
}

// ============================================
// BEST-OF LISTS
// ============================================

export function getAllBestOfLists(): BestOfList[] {
  return bestOfLists
}

export function getBestOfBySlug(slug: string): BestOfList | undefined {
  return bestOfLists.find((list) => list.slug === slug)
}

export function getBestOfByCategory(category: string): BestOfList[] {
  return bestOfLists.filter(
    (list) => list.category.toLowerCase() === category.toLowerCase()
  )
}

// ============================================
// MONTHLY GUIDES
// ============================================

export function getAllMonthlyGuides(): MonthlyGuide[] {
  return monthlyGuides.sort((a, b) => a.monthNumber - b.monthNumber)
}

export function getMonthlyGuideBySlug(slug: string): MonthlyGuide | undefined {
  return monthlyGuides.find((guide) => guide.slug === slug)
}

export function getMonthlyGuideByMonth(month: string): MonthlyGuide | undefined {
  return monthlyGuides.find(
    (guide) => guide.month.toLowerCase() === month.toLowerCase()
  )
}

export function getCurrentMonthGuide(): MonthlyGuide | undefined {
  const currentMonth = new Date().getMonth() + 1 // 1-indexed
  return monthlyGuides.find((guide) => guide.monthNumber === currentMonth)
}

// ============================================
// LIFESTYLE SCENARIOS
// ============================================

export function getAllLifestyleScenarios(): LifestyleScenario[] {
  return lifestyleScenarios
}

export function getLifestyleScenarioBySlug(
  slug: string
): LifestyleScenario | undefined {
  return lifestyleScenarios.find((scenario) => scenario.slug === slug)
}

// ============================================
// EVENTS
// ============================================

export function getAllEvents(): Event[] {
  return events
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug)
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter(
    (event) => event.category.toLowerCase() === category.toLowerCase()
  )
}

export function getEventsByMonth(month: string): Event[] {
  return events.filter(
    (event) =>
      event.recurring?.month?.toLowerCase() === month.toLowerCase()
  )
}

// ============================================
// COMPARISONS
// ============================================

export function getAllComparisons(): Comparison[] {
  return comparisons
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((comparison) => comparison.slug === slug)
}

// ============================================
// CATEGORY HELPERS
// ============================================

export const placeCategories = [
  { slug: "restaurants", label: "Restaurants", count: restaurants.length },
  { slug: "bars", label: "Bars & Nightlife", count: bars.length },
  { slug: "shops", label: "Shops & Retail", count: shops.length },
  { slug: "attractions", label: "Attractions", count: attractions.length },
  { slug: "parks", label: "Parks & Beaches", count: parks.length },
]

export function getCategoryLabel(category: string): string {
  const cat = placeCategories.find((c) => c.slug === category)
  return cat?.label || category
}

// ============================================
// STATIC PARAMS GENERATORS
// ============================================

export function generatePlaceStaticParams() {
  return getAllPlaces().map((place) => ({
    category: place.category,
    slug: place.slug,
  }))
}

export function generateActivityStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }))
}

export function generateBestOfStaticParams() {
  return bestOfLists.map((list) => ({
    topic: list.slug,
  }))
}

export function generateMonthlyStaticParams() {
  return monthlyGuides.map((guide) => ({
    month: guide.slug,
  }))
}

export function generateLifestyleStaticParams() {
  return lifestyleScenarios.map((scenario) => ({
    scenario: scenario.slug,
  }))
}

export function generateEventStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export function generateComparisonStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }))
}
