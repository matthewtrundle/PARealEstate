import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"
import type { Place } from "@/data/types"
import { getRelatedPlaces, getCategoryLabel } from "@/data"

interface PlaceTemplateProps {
  place: Place
}

function formatHours(hours: Place["hours"]) {
  if (!hours) return null
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const dayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return days.map((day, index) => {
    const value = hours[day as keyof typeof hours]
    return value ? { day: dayLabels[index], hours: value } : null
  }).filter(Boolean)
}

function PriceIndicator({ priceRange }: { priceRange?: string }) {
  if (!priceRange) return null
  const dollarCount = priceRange.length

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={i <= dollarCount ? "text-primary-600" : "text-neutral-300"}
        >
          $
        </span>
      ))}
    </div>
  )
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const relatedPlaces = getRelatedPlaces(place, 4)
  const formattedHours = formatHours(place.hours)
  const categoryLabel = getCategoryLabel(place.category)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Places", href: "/places" },
    { label: categoryLabel, href: `/places/${place.category}` },
    { label: place.name },
  ]

  return (
    <>
      <SEOPageHero
        title={place.name}
        subtitle={place.description}
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SEOContent>
                <ContentSection>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    {place.longDescription}
                  </p>
                </ContentSection>

                {/* Highlights */}
                {place.highlights && place.highlights.length > 0 && (
                  <ContentSection id="highlights">
                    <h2>Highlights</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {place.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent-500 mt-1">&#10003;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* Tips */}
                {place.tips && place.tips.length > 0 && (
                  <HighlightBox variant="tip">
                    <h4 className="font-display text-lg text-primary-900 mb-3">Insider Tips</h4>
                    <ul className="space-y-2 mb-0">
                      {place.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-neutral-700">{tip}</li>
                      ))}
                    </ul>
                  </HighlightBox>
                )}

                {/* Features */}
                <ContentSection id="features">
                  <h2>Features &amp; Amenities</h2>
                  <div className="flex flex-wrap gap-2">
                    {place.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </ContentSection>

                {/* Established */}
                {place.established && (
                  <ContentSection>
                    <p className="text-neutral-600">
                      <strong>Established:</strong> {place.established}
                    </p>
                  </ContentSection>
                )}
              </SEOContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 space-y-6">
                {/* Quick Info */}
                <div>
                  <h3 className="font-display text-lg text-primary-900 mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    {place.priceRange && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Price Range</span>
                        <PriceIndicator priceRange={place.priceRange} />
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Category</span>
                      <span className="text-primary-900">{place.subcategory}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Neighborhood</span>
                      <span className="text-primary-900">{place.nearbyNeighborhood}</span>
                    </div>
                    {place.rating && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Rating</span>
                        <span className="text-primary-900">{place.rating} / 5</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t pt-6">
                  <h3 className="font-display text-lg text-primary-900 mb-4">Contact</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-neutral-700">{place.address}</p>
                    {place.phone && (
                      <p>
                        <a href={`tel:${place.phone}`} className="text-primary-600 hover:text-primary-800">
                          {place.phone}
                        </a>
                      </p>
                    )}
                    {place.website && (
                      <p>
                        <a
                          href={place.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800"
                        >
                          Visit Website
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                {/* Hours */}
                {formattedHours && formattedHours.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="font-display text-lg text-primary-900 mb-4">Hours</h3>
                    <div className="space-y-2 text-sm">
                      {formattedHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-neutral-600">{item?.day}</span>
                          <span className="text-neutral-900">{item?.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                {place.relatedProperties && (
                  <div className="border-t pt-6">
                    <Link
                      href={`/neighborhoods/${place.nearbyNeighborhood.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      View Nearby Properties
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Places */}
      {relatedPlaces.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              More {categoryLabel} to Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlaces.map((relatedPlace) => (
                <Link
                  key={relatedPlace.slug}
                  href={`/places/${relatedPlace.category}/${relatedPlace.slug}`}
                  className="group bg-neutral-50 rounded-lg p-6 hover:bg-accent-50 transition-colors"
                >
                  <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                    {relatedPlace.name}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {relatedPlace.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-neutral-500">{relatedPlace.subcategory}</span>
                    {relatedPlace.priceRange && (
                      <span className="text-xs text-primary-600">{relatedPlace.priceRange}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
