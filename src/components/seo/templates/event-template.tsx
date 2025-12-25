import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"
import type { Event } from "@/data/types"
import { getAllEvents } from "@/data"

interface EventTemplateProps {
  event: Event
}

function formatRecurring(recurring?: Event["recurring"]): string {
  if (!recurring) return "Check website for dates"

  switch (recurring.frequency) {
    case "annual":
      return recurring.month ? `Every ${recurring.month}` : "Annually"
    case "monthly":
      return "Monthly"
    case "weekly":
      return recurring.dayOfWeek ? `Every ${recurring.dayOfWeek}` : "Weekly"
    default:
      return "Check website for dates"
  }
}

export function EventTemplate({ event }: EventTemplateProps) {
  const allEvents = getAllEvents()
  const relatedEvents = event.relatedEvents
    ? allEvents.filter((e) => event.relatedEvents?.includes(e.slug))
    : allEvents
        .filter((e) => e.slug !== event.slug && e.category === event.category)
        .slice(0, 4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: event.name },
  ]

  return (
    <>
      <SEOPageHero
        title={event.name}
        subtitle={event.description}
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
                    {event.longDescription}
                  </p>
                </ContentSection>

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <ContentSection id="highlights">
                    <h2>Event Highlights</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent-500 mt-1">&#9733;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* What to Expect */}
                {event.whatToExpect && event.whatToExpect.length > 0 && (
                  <ContentSection id="what-to-expect">
                    <h2>What to Expect</h2>
                    <ul className="space-y-2">
                      {event.whatToExpect.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary-600">&#10148;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* History */}
                {event.history && (
                  <ContentSection id="history">
                    <h2>Event History</h2>
                    <p>{event.history}</p>
                  </ContentSection>
                )}

                {/* Tips */}
                {event.tips && event.tips.length > 0 && (
                  <HighlightBox variant="tip">
                    <h4 className="font-display text-lg text-primary-900 mb-3">Insider Tips</h4>
                    <ul className="space-y-2 mb-0">
                      {event.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-neutral-700">{tip}</li>
                      ))}
                    </ul>
                  </HighlightBox>
                )}
              </SEOContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 space-y-6">
                {/* Event Details */}
                <div>
                  <h3 className="font-display text-lg text-primary-900 mb-4">Event Details</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-primary-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-primary-900">When</div>
                        <div className="text-neutral-600">
                          {event.date || formatRecurring(event.recurring)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-primary-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-primary-900">Where</div>
                        <div className="text-neutral-600">{event.location}</div>
                      </div>
                    </div>

                    {event.duration && (
                      <div className="flex items-start gap-3">
                        <div className="text-primary-600 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-900">Duration</div>
                          <div className="text-neutral-600">{event.duration}</div>
                        </div>
                      </div>
                    )}

                    {event.cost && (
                      <div className="flex items-start gap-3">
                        <div className="text-primary-600 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-900">Cost</div>
                          <div className="text-neutral-600">{event.cost}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Website Link */}
                {event.website && (
                  <div className="border-t pt-6">
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-4 bg-neutral-100 text-primary-900 text-center rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      Official Website
                    </a>
                  </div>
                )}

                {/* Nearby Places */}
                {event.nearbyPlaces && event.nearbyPlaces.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="font-display text-lg text-primary-900 mb-4">Nearby Places</h3>
                    <div className="space-y-2">
                      {event.nearbyPlaces.map((placeSlug, index) => (
                        <Link
                          key={index}
                          href={`/places/restaurants/${placeSlug}`}
                          className="block text-primary-600 hover:text-primary-800"
                        >
                          {placeSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="border-t pt-6">
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              More Events to Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedEvents.slice(0, 4).map((related) => (
                <Link
                  key={related.slug}
                  href={`/events/${related.slug}`}
                  className="group bg-neutral-50 rounded-lg p-6 hover:bg-accent-50 transition-colors"
                >
                  <div className="text-xs text-accent-600 uppercase tracking-wide mb-2">
                    {formatRecurring(related.recurring)}
                  </div>
                  <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                    {related.name}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {related.description}
                  </p>
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
