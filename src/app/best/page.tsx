import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllBestOfLists } from "@/data"

export const metadata: Metadata = {
  title: "Best of Port Aransas | Top Restaurants, Beaches & More",
  description:
    "Discover the best of Port Aransas with our curated guides. Find the top restaurants, beaches, bars, fishing spots, and more in Port A.",
  keywords: [
    "best restaurants Port Aransas",
    "best beaches Port Aransas",
    "top things to do Port A",
    "Port Aransas recommendations",
    "best of Port Aransas",
  ],
}

export default function BestOfPage() {
  const lists = getAllBestOfLists()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Best Of" },
  ]

  // Group lists by category
  const groupedLists = lists.reduce((acc, list) => {
    const category = list.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(list)
    return acc
  }, {} as Record<string, typeof lists>)

  return (
    <>
      <SEOPageHero
        title="Best of Port Aransas"
        subtitle="Curated guides to the best restaurants, beaches, bars, and attractions in Port A"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          {Object.entries(groupedLists).map(([category, categoryLists]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-display text-3xl text-primary-900 mb-8 capitalize">
                {category.replace(/-/g, " ")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryLists.map((list) => (
                  <Link
                    key={list.slug}
                    href={`/best/${list.slug}`}
                    className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-display text-xl text-primary-900 group-hover:text-primary-700 mb-3">
                      {list.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-3 mb-4">
                      {list.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-500">
                        {list.items.length} picks
                      </span>
                      <span className="text-primary-600 group-hover:text-primary-800">
                        Read guide →
                      </span>
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
