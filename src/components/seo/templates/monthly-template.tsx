import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  StatsGrid,
  CTABanner,
} from "@/components/seo"
import type { MonthlyGuide } from "@/data/types"
import { getAllMonthlyGuides, getEventsByMonth } from "@/data"

interface MonthlyTemplateProps {
  guide: MonthlyGuide
}

function CrowdLevelBadge({ level }: { level: MonthlyGuide["crowdLevel"] }) {
  const colors = {
    low: "bg-green-100 text-green-800",
    moderate: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    peak: "bg-red-100 text-red-800",
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)} crowds
    </span>
  )
}

function ActivityRating({ rating }: { rating: "excellent" | "good" | "fair" }) {
  const colors = {
    excellent: "text-green-600",
    good: "text-yellow-600",
    fair: "text-orange-600",
  }

  const stars = {
    excellent: "★★★★★",
    good: "★★★★☆",
    fair: "★★★☆☆",
  }

  return (
    <span className={`text-sm ${colors[rating]}`}>{stars[rating]}</span>
  )
}

export function MonthlyTemplate({ guide }: MonthlyTemplateProps) {
  const allGuides = getAllMonthlyGuides()
  const monthEvents = getEventsByMonth(guide.month)

  // Get previous and next months
  const currentIndex = allGuides.findIndex((g) => g.slug === guide.slug)
  const prevMonth = currentIndex > 0 ? allGuides[currentIndex - 1] : allGuides[allGuides.length - 1]
  const nextMonth = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : allGuides[0]

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Monthly Guides", href: "/guides/monthly" },
    { label: guide.month },
  ]

  const weatherStats = [
    { value: `${guide.weather.avgHigh}°F`, label: "Avg High" },
    { value: `${guide.weather.avgLow}°F`, label: "Avg Low" },
    { value: `${guide.weather.waterTemp}°F`, label: "Water Temp" },
    { value: `${guide.weather.rainfall}"`, label: "Rainfall" },
  ]

  return (
    <>
      <SEOPageHero
        title={guide.title}
        subtitle={guide.description}
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
                    {guide.intro}
                  </p>
                </ContentSection>

                {/* Quick Overview */}
                <div className="flex flex-wrap gap-4 my-8">
                  <CrowdLevelBadge level={guide.crowdLevel} />
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                    {guide.pricing.level.charAt(0).toUpperCase() + guide.pricing.level.slice(1)} pricing
                  </span>
                </div>

                {/* Weather Section */}
                <ContentSection id="weather">
                  <h2>Weather in {guide.month}</h2>
                  <StatsGrid stats={weatherStats} />
                  <p>{guide.weather.description}</p>
                </ContentSection>

                {/* Highlights */}
                {guide.highlights && guide.highlights.length > 0 && (
                  <ContentSection id="highlights">
                    <h2>{guide.month} Highlights</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {guide.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent-500 mt-1">&#9733;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* Activities */}
                <ContentSection id="activities">
                  <h2>Best Activities This Month</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {guide.activities.map((activity, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-neutral-100">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-primary-900">{activity.name}</h3>
                          <ActivityRating rating={activity.rating} />
                        </div>
                        <p className="text-sm text-neutral-600">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </ContentSection>

                {/* Fishing */}
                {guide.fishing && (
                  <ContentSection id="fishing">
                    <h2>Fishing in {guide.month}</h2>
                    <p className="mb-4">{guide.fishing.conditions}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.fishing.species.map((species, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                        >
                          {species}
                        </span>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* Events This Month */}
                {monthEvents.length > 0 && (
                  <ContentSection id="events">
                    <h2>Events in {guide.month}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {monthEvents.map((event) => (
                        <Link
                          key={event.slug}
                          href={`/events/${event.slug}`}
                          className="block bg-white p-4 rounded-lg border border-neutral-100 hover:border-primary-300 transition-colors"
                        >
                          <h3 className="font-medium text-primary-900 mb-1">{event.name}</h3>
                          <p className="text-sm text-neutral-600">{event.description}</p>
                        </Link>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* Tips */}
                {guide.tips && guide.tips.length > 0 && (
                  <HighlightBox variant="tip">
                    <h4 className="font-display text-lg text-primary-900 mb-3">
                      {guide.month} Tips
                    </h4>
                    <ul className="space-y-2 mb-0">
                      {guide.tips.map((tip, index) => (
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
                {/* Quick Summary */}
                <div>
                  <h3 className="font-display text-lg text-primary-900 mb-4">Quick Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Crowd Level</span>
                      <CrowdLevelBadge level={guide.crowdLevel} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Avg High</span>
                      <span className="text-primary-900 font-medium">{guide.weather.avgHigh}°F</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Water Temp</span>
                      <span className="text-primary-900 font-medium">{guide.weather.waterTemp}°F</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Info */}
                <div className="border-t pt-6">
                  <h3 className="font-display text-lg text-primary-900 mb-3">Pricing</h3>
                  <p className="text-sm text-neutral-600">{guide.pricing.description}</p>
                </div>

                {/* Packing List */}
                {guide.packing && guide.packing.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="font-display text-lg text-primary-900 mb-3">What to Pack</h3>
                    <ul className="space-y-2">
                      {guide.packing.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className="text-accent-500">&#9679;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="border-t pt-6">
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Month Navigation */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-8">
            Explore Other Months
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href={`/guides/monthly/${prevMonth.slug}`}
              className="px-6 py-3 bg-neutral-100 text-primary-900 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              ← {prevMonth.month}
            </Link>
            <Link
              href="/guides/monthly"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              All Months
            </Link>
            <Link
              href={`/guides/monthly/${nextMonth.slug}`}
              className="px-6 py-3 bg-neutral-100 text-primary-900 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              {nextMonth.month} →
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
