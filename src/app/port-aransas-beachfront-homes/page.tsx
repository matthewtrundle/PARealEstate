import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Beachfront Homes | Market Insights & Recent Sales",
  description:
    "Expert insights on Port Aransas beachfront real estate. View recent sales, market trends, and price analysis for Gulf-front properties on the Texas coast.",
  keywords: [
    "Port Aransas beachfront homes",
    "Port Aransas beach house market",
    "Gulf front property values",
    "beachfront real estate Texas",
    "Port Aransas luxury beach homes",
    "Texas Gulf Coast beachfront",
  ],
  openGraph: {
    title: "Port Aransas Beachfront Homes | Market Insights & Recent Sales",
    description:
      "Expert insights on Port Aransas beachfront real estate. View recent sales, market trends, and price analysis.",
  },
}

export default function BeachfrontHomesPage() {
  // Filter beachfront properties for recent sales showcase
  const beachfrontSales = propertiesData.properties.filter(
    (p) => p.features.highlights.some((h) => h.toLowerCase().includes("beach") || h.toLowerCase().includes("gulf"))
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Beachfront Homes", href: "/port-aransas-beachfront-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Beachfront Homes"
        subtitle="Market insights and expert guidance for Gulf-front properties on Mustang Island."
        backgroundImage="/images/hero/beachfront-homes.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Your Guide to Beachfront Living in Port Aransas</h2>
              <p>
                Port Aransas beachfront homes represent the pinnacle of Texas coastal living. These prestigious
                properties offer direct Gulf of Mexico access, unobstructed ocean views, and the rare opportunity
                to step from your back door onto pristine sandy beaches.
              </p>
              <p>
                As the only incorporated city on Mustang Island, Port Aransas offers a unique combination of
                small-town charm and beach town convenience. Beachfront homeowners enjoy private beach access,
                spectacular sunrises over the Gulf, and the soothing sound of waves just steps from their door.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Beachfront Market Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Entry Level</p>
                  <p className="text-2xl font-semibold text-primary-800">$1.5M - $2.5M</p>
                  <p className="text-sm text-neutral-600 mt-2">Gulf-access homes, older construction</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Mid-Range</p>
                  <p className="text-2xl font-semibold text-primary-800">$2.5M - $4M</p>
                  <p className="text-sm text-neutral-600 mt-2">Updated homes, prime beach locations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Luxury</p>
                  <p className="text-2xl font-semibold text-primary-800">$4M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Estate homes, new construction</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Why Choose Port Aransas Beachfront?">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Direct Beach Access:</strong> Walk from your back yard to the sand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Investment Potential:</strong> Premium STR rates for Gulf-front properties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Lifestyle:</strong> Wake up to ocean views and Gulf breezes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Limited Supply:</strong> Beachfront inventory is finite and in high demand</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>What to Expect from Beachfront Properties</h2>
              <p>
                Beachfront homes in Port Aransas typically feature elevated construction to meet coastal building
                codes, impact-resistant windows, and outdoor living spaces designed to maximize Gulf views. Many
                include private pools, outdoor kitchens, and beach-level storage for kayaks and fishing gear.
              </p>
              <p>
                The premium for true beachfront reflects the scarcity of Gulf-front lots and the exceptional
                lifestyle they provide. Working with an experienced local agent is essential to navigating this
                competitive market segment.
              </p>
            </ContentSection>
          </SEOContent>

          {/* Recent Sales */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-2">
              Recent Beachfront Sales
            </h2>
            <p className="text-neutral-600 mb-8">Properties we&apos;ve successfully closed in this category</p>
            {beachfrontSales.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beachfrontSales.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Interested in Beachfront Properties?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a consultation to discuss current opportunities in the beachfront market.
                </p>
                <Link
                  href="/contact?interest=beachfront"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Ready to Find Your Beachfront Home?"
            description="Beachfront properties require expert guidance and local market knowledge. Let's discuss your goals."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=beachfront"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Start Your Beachfront Search"
        subtitle="Tell us about your ideal beachfront property. We'll provide personalized market insights and guidance."
      />
    </>
  )
}
