import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllMonthlyGuides } from "@/data"
import type { MonthlyGuide } from "@/data/types"

export const metadata: Metadata = {
  title: "Port Aransas Monthly Guide | Best Time to Visit",
  description:
    "Plan your perfect Port Aransas trip with our monthly guides. Learn about weather, events, crowds, and activities for each month of the year.",
  keywords: [
    "Port Aransas weather",
    "best time to visit Port Aransas",
    "Port Aransas monthly guide",
    "when to visit Port A",
    "Port Aransas seasons",
  ],
}

function CrowdLevelBadge({ level }: { level: MonthlyGuide["crowdLevel"] }) {
  const colors = {
    low: "bg-green-100 text-green-800",
    moderate: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    peak: "bg-red-100 text-red-800",
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level}
    </span>
  )
}

export default function MonthlyGuidesPage() {
  const guides = getAllMonthlyGuides()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Monthly Guides" },
  ]

  return (
    <>
      <SEOPageHero
        title="Monthly Guides to Port Aransas"
        subtitle="Plan the perfect trip with our month-by-month guide to weather, events, and activities"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/monthly/${guide.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {guide.month}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span>{guide.weather.avgHigh}°F High</span>
                    <span>•</span>
                    <span>{guide.weather.waterTemp}°F Water</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CrowdLevelBadge level={guide.crowdLevel} />
                    <span className="text-xs text-neutral-500">
                      {guide.pricing.level} pricing
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 line-clamp-3 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guide.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
