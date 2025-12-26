import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Luxury Homes | Premium Market Analysis",
  description:
    "Expert insights on Port Aransas luxury real estate. Market analysis, price trends, and recent sales for premium beach estates and high-end coastal properties.",
  keywords: [
    "Port Aransas luxury homes",
    "luxury beach real estate Texas",
    "premium coastal property values",
    "high end beach homes analysis",
    "luxury market Port Aransas",
    "exclusive coastal estates Texas",
  ],
  openGraph: {
    title: "Port Aransas Luxury Homes | Premium Market Analysis",
    description: "Expert insights on Port Aransas luxury real estate and premium property values.",
  },
}

export default function LuxuryHomesPage() {
  // Filter luxury properties ($1.5M+) for recent sales showcase
  const luxurySales = propertiesData.properties.filter(
    (p) => p.pricing.listPrice >= 1500000
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Luxury Homes", href: "/port-aransas-luxury-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Luxury Homes"
        subtitle="Premium market insights for discerning buyers seeking the finest in coastal living."
        backgroundImage="/images/hero/luxury.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Luxury Living in Port Aransas</h2>
              <p>
                Port Aransas luxury homes represent the pinnacle of Texas coastal real estate. These
                exceptional properties feature premium finishes, expansive floor plans, and prime locations
                that command the best views and most desirable lots on the island.
              </p>
              <p>
                From custom beachfront estates with infinity pools to meticulously designed bay-front
                retreats with private docks, the luxury segment offers discerning buyers an unparalleled
                coastal lifestyle.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Luxury Market Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Entry Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$1.5M - $2.5M</p>
                  <p className="text-sm text-neutral-600 mt-2">Premium homes, select locations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Mid Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$2.5M - $4M</p>
                  <p className="text-sm text-neutral-600 mt-2">Custom builds, prime locations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Ultra Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$4M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Estate properties, trophy homes</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Luxury Property Features">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Premium Locations:</strong> Beachfront, bay-front, or golf course settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Custom Design:</strong> Architect-designed with high-end finishes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Resort Amenities:</strong> Private pools, outdoor kitchens, elevators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Smart Home:</strong> Integrated technology and automation systems</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>The Luxury Market</h2>
              <p>
                Port Aransas luxury properties ($1.5M+) represent a select segment of the market.
                These homes attract buyers from across Texas and beyond who seek a premium second home or
                retirement destination with investment potential.
              </p>
              <p>
                Many luxury properties perform exceptionally well as vacation rentals, with nightly rates
                of $1,000-$3,000+ during peak season. This income potential appeals to buyers who want their
                beach home to generate returns when they&apos;re not using it.
              </p>
            </ContentSection>
          </SEOContent>

          {/* Recent Sales */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-2">
              Recent Luxury Sales
            </h2>
            <p className="text-neutral-600 mb-8">Premium properties we&apos;ve successfully closed</p>
            {luxurySales.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {luxurySales.slice(0, 4).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Interested in Luxury Properties?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Many luxury properties are marketed privately. Schedule a consultation for exclusive access.
                </p>
                <Link
                  href="/contact?interest=luxury"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Seeking Luxury?"
            description="Let us introduce you to Port Aransas's finest properties and provide personalized market guidance."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=luxury"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore the Luxury Market"
        subtitle="Tell us about your luxury home requirements for personalized market insights."
      />
    </>
  )
}
