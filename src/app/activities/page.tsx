import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllActivities } from "@/data"

export const metadata: Metadata = {
  title: "Things to Do in Port Aransas | Activities & Recreation",
  description:
    "Discover the best activities in Port Aransas, Texas. From fishing and surfing to birdwatching and beach camping, find your perfect Port A adventure.",
  keywords: [
    "things to do Port Aransas",
    "Port Aransas activities",
    "Port A fishing",
    "beach activities Texas",
    "Port Aransas recreation",
  ],
}

function DifficultyBadge({ difficulty }: { difficulty?: "easy" | "moderate" | "challenging" }) {
  if (!difficulty) return null

  const colors = {
    easy: "bg-green-100 text-green-800",
    moderate: "bg-yellow-100 text-yellow-800",
    challenging: "bg-red-100 text-red-800",
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[difficulty]}`}>
      {difficulty}
    </span>
  )
}

export default function ActivitiesPage() {
  const activities = getAllActivities()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Activities" },
  ]

  // Group activities by category
  const groupedActivities = activities.reduce((acc, activity) => {
    const category = activity.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(activity)
    return acc
  }, {} as Record<string, typeof activities>)

  return (
    <>
      <SEOPageHero
        title="Things to Do in Port Aransas"
        subtitle="From world-class fishing to laid-back beach days, discover activities for every interest"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          {Object.entries(groupedActivities).map(([category, categoryActivities]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-display text-3xl text-primary-900 mb-8 capitalize">
                {category.replace(/-/g, " ")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryActivities.map((activity) => (
                  <Link
                    key={activity.slug}
                    href={`/activities/${activity.slug}`}
                    className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700">
                        {activity.name}
                      </h3>
                      <DifficultyBadge difficulty={activity.difficulty} />
                    </div>
                    <p className="text-sm text-neutral-600 line-clamp-3 mb-4">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                      {activity.duration && <span>{activity.duration}</span>}
                      {activity.cost && (
                        <>
                          <span>•</span>
                          <span>{activity.cost}</span>
                        </>
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
