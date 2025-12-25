import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllComparisons } from "@/data"

export const metadata: Metadata = {
  title: "Port Aransas Comparisons | Compare Beach Towns & Real Estate Options",
  description:
    "Compare Port Aransas to other Texas beach towns and explore real estate options. Find out if Port A is right for you with our detailed comparison guides.",
  keywords: [
    "Port Aransas vs South Padre",
    "Port Aransas vs Galveston",
    "buy vs rent Port Aransas",
    "Texas beach town comparison",
    "Port Aransas real estate",
  ],
}

export default function ComparePage() {
  const comparisons = getAllComparisons()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare" },
  ]

  return (
    <>
      <SEOPageHero
        title="Compare Your Options"
        subtitle="Detailed comparisons to help you make the right choice about Port Aransas"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex">
                  <div className="flex-1 bg-primary-600 p-4 text-center">
                    <span className="text-white font-medium">
                      {comparison.optionA.name}
                    </span>
                  </div>
                  <div className="flex items-center px-4 bg-neutral-100">
                    <span className="text-neutral-500 font-medium">vs</span>
                  </div>
                  <div className="flex-1 bg-accent-600 p-4 text-center">
                    <span className="text-white font-medium">
                      {comparison.optionB.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary-900 group-hover:text-primary-700 mb-3">
                    {comparison.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {comparison.description}
                  </p>
                  <span className="text-primary-600 group-hover:text-primary-800 text-sm">
                    Read comparison →
                  </span>
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
