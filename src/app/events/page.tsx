import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllEvents } from "@/data"
import type { Event } from "@/data/types"

export const metadata: Metadata = {
  title: "Events & Festivals in Port Aransas | Annual Events Calendar",
  description:
    "Discover Port Aransas events and festivals. From SandFest to the Deep Sea Roundup, find annual events, fishing tournaments, and holiday celebrations.",
  keywords: [
    "Port Aransas events",
    "SandFest Port Aransas",
    "Deep Sea Roundup",
    "Port A festivals",
    "Port Aransas calendar",
  ],
}

function formatRecurring(recurring?: Event["recurring"]): string {
  if (!recurring) return ""

  switch (recurring.frequency) {
    case "annual":
      return recurring.month || "Annually"
    case "monthly":
      return "Monthly"
    case "weekly":
      return recurring.dayOfWeek ? `Every ${recurring.dayOfWeek}` : "Weekly"
    default:
      return ""
  }
}

export default function EventsPage() {
  const events = getAllEvents()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events" },
  ]

  // Group events by category
  const groupedEvents = events.reduce((acc, event) => {
    const category = event.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(event)
    return acc
  }, {} as Record<string, typeof events>)

  return (
    <>
      <SEOPageHero
        title="Events & Festivals"
        subtitle="Year-round celebrations, tournaments, and community gatherings in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          {Object.entries(groupedEvents).map(([category, categoryEvents]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-display text-3xl text-primary-900 mb-8 capitalize">
                {category.replace(/-/g, " ")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryEvents.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="bg-primary-600 px-4 py-2">
                      <span className="text-sm text-white font-medium">
                        {formatRecurring(event.recurring)}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-primary-900 group-hover:text-primary-700 mb-2">
                        {event.name}
                      </h3>
                      <p className="text-sm text-neutral-600 line-clamp-3 mb-4">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
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
