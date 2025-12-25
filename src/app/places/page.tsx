import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { placeCategories, getPlacesByCategory } from "@/data"

export const metadata: Metadata = {
  title: "Local Places in Port Aransas | Restaurants, Shops, Attractions",
  description:
    "Discover the best local places in Port Aransas, Texas. Explore restaurants, bars, shops, attractions, and beach access points in our comprehensive guide.",
  keywords: [
    "Port Aransas restaurants",
    "Port Aransas bars",
    "Port Aransas shops",
    "things to do Port Aransas",
    "Port A local guide",
  ],
}

export default function PlacesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Places" },
  ]

  return (
    <>
      <SEOPageHero
        title="Local Places in Port Aransas"
        subtitle="Your guide to the best restaurants, bars, shops, and attractions in Port A"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          {placeCategories.map((category) => {
            const places = getPlacesByCategory(category.slug as "restaurants" | "bars" | "shops" | "attractions" | "parks")
            const displayPlaces = places.slice(0, 8)

            return (
              <div key={category.slug} className="mb-16 last:mb-0">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display text-3xl text-primary-900">
                    {category.label}
                  </h2>
                  <Link
                    href={`/places/${category.slug}`}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    View all {category.count} →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayPlaces.map((place) => (
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
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>{place.subcategory}</span>
                        {place.priceRange && (
                          <>
                            <span>•</span>
                            <span className="text-primary-600">{place.priceRange}</span>
                          </>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
