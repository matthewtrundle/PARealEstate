import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getPlacesByCategory, getCategoryLabel, placeCategories } from "@/data"
import type { Place } from "@/data/types"

interface PageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {
  return placeCategories.map((cat) => ({
    category: cat.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const label = getCategoryLabel(category)

  return {
    title: `${label} in Port Aransas | Local Guide`,
    description: `Discover the best ${label.toLowerCase()} in Port Aransas, Texas. Find local favorites, waterfront spots, and hidden gems.`,
    keywords: [
      `${label.toLowerCase()} Port Aransas`,
      `best ${label.toLowerCase()} Port A`,
      `Port Aransas ${label.toLowerCase()} guide`,
    ],
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const validCategories: Place["category"][] = ["restaurants", "bars", "shops", "attractions", "parks"]

  if (!validCategories.includes(category as Place["category"])) {
    notFound()
  }

  const places = getPlacesByCategory(category as Place["category"])
  const categoryLabel = getCategoryLabel(category)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Places", href: "/places" },
    { label: categoryLabel },
  ]

  // Group by subcategory
  const groupedPlaces = places.reduce((acc, place) => {
    const sub = place.subcategory
    if (!acc[sub]) {
      acc[sub] = []
    }
    acc[sub].push(place)
    return acc
  }, {} as Record<string, typeof places>)

  return (
    <>
      <SEOPageHero
        title={`${categoryLabel} in Port Aransas`}
        subtitle={`Discover ${places.length} local ${categoryLabel.toLowerCase()} in Port A`}
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          {Object.entries(groupedPlaces).map(([subcategory, subPlaces]) => (
            <div key={subcategory} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl text-primary-900 mb-6 capitalize">
                {subcategory.replace(/-/g, " ")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subPlaces.map((place) => (
                  <Link
                    key={place.slug}
                    href={`/places/${place.category}/${place.slug}`}
                    className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                      {place.name}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{place.nearbyNeighborhood}</span>
                      {place.priceRange && (
                        <span className="text-primary-600">{place.priceRange}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
