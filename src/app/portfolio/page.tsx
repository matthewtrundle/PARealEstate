import { Suspense } from "react"
import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { PropertyGrid, PropertyFilters } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"
import type { Property } from "@/types/property"

export const metadata: Metadata = {
  title: "Our Portfolio | Recent Transactions in Port Aransas",
  description:
    "Browse our portfolio of successfully closed properties in Port Aransas, Texas. View case studies of beach homes, condos, and investment properties we've helped clients buy and sell.",
  openGraph: {
    title: "Our Portfolio | Recent Transactions in Port Aransas",
    description:
      "Browse our portfolio of successfully closed properties in Port Aransas, Texas.",
  },
}

interface PropertiesPageProps {
  searchParams: Promise<{
    bedrooms?: string
    priceRange?: string
    features?: string
    sort?: string
  }>
}

function filterAndSortProperties(
  properties: Property[],
  params: {
    bedrooms?: string
    priceRange?: string
    features?: string
    sort?: string
  }
): Property[] {
  let filtered = [...properties]

  // Filter by bedrooms
  if (params.bedrooms) {
    const minBedrooms = parseInt(params.bedrooms)
    if (params.bedrooms === "6+") {
      filtered = filtered.filter((p) => p.specs.bedrooms >= 6)
    } else {
      filtered = filtered.filter((p) => p.specs.bedrooms >= minBedrooms)
    }
  }

  // Filter by price range
  if (params.priceRange) {
    const [min, max] = params.priceRange.split("-").map(Number)
    filtered = filtered.filter((p) => {
      if (max) {
        return p.pricing.listPrice >= min && p.pricing.listPrice <= max
      }
      return p.pricing.listPrice >= min
    })
  }

  // Filter by features
  if (params.features) {
    const requiredFeatures = params.features.split(",").filter(Boolean)
    filtered = filtered.filter((p) => {
      const propertyFeatures = [
        ...p.features.highlights.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
        ...p.features.outdoor.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
        ...p.features.indoor.map((a) => a.toLowerCase().replace(/\s+/g, "-")),
      ]
      return requiredFeatures.every((required) =>
        propertyFeatures.some((a) => a.includes(required))
      )
    })
  }

  // Sort
  const sort = params.sort || "featured"
  switch (sort) {
    case "price-asc":
      filtered.sort((a, b) => a.pricing.listPrice - b.pricing.listPrice)
      break
    case "price-desc":
      filtered.sort((a, b) => b.pricing.listPrice - a.pricing.listPrice)
      break
    case "newest":
      filtered.sort((a, b) => a.pricing.daysOnMarket - b.pricing.daysOnMarket)
      break
    case "sqft":
      filtered.sort((a, b) => b.specs.sqft - a.specs.sqft)
      break
    case "featured":
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
  }

  return filtered
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams
  const allProperties = propertiesData.properties as Property[]
  const filteredProperties = filterAndSortProperties(allProperties, params)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500 py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <Container className="relative z-10">
          <div className="text-center">
            <h1 className="font-display text-fluid-4xl text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Showcasing our successful transactions across Port Aransas, Texas
            </p>
          </div>
        </Container>
      </section>

      {/* Properties Grid Section */}
      <Section>
        <Container>
          <Suspense fallback={<div className="h-24 bg-neutral-100 rounded-xl animate-pulse" />}>
            <PropertyFilters />
          </Suspense>

          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-600">
              <span className="font-semibold text-neutral-900">{filteredProperties.length}</span>{" "}
              successful {filteredProperties.length === 1 ? "transaction" : "transactions"}
            </p>
          </div>

          <PropertyGrid
            properties={filteredProperties}
            emptyMessage="No properties match your criteria"
          />
        </Container>
      </Section>

      {/* Lead Form Section */}
      <LeadFormSection />
    </>
  )
}
