import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Mustang Island Condos | Market Analysis & Recent Sales",
  description:
    "Expert insights on Mustang Island condo market. Price trends, building analysis, and investment guidance for Port Aransas beachfront condominiums.",
  keywords: [
    "Mustang Island condos",
    "Port Aransas condo market",
    "beachfront condo values Texas",
    "Mustang Island real estate analysis",
    "Port Aransas condominium prices",
    "Gulf Coast condo investment",
  ],
  openGraph: {
    title: "Mustang Island Condos | Market Analysis & Recent Sales",
    description:
      "Expert insights on Mustang Island condo market with price analysis and recent sales data.",
  },
}

export default function MustangIslandCondosPage() {
  // Filter condo properties for recent sales showcase
  const condoSales = propertiesData.properties.filter(
    (p) => p.location.neighborhood === "Mustang Island" || p.specs.floors === 1
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Mustang Island Condos", href: "/mustang-island-condos" },
  ]

  return (
    <>
      <SEOPageHero
        title="Mustang Island Condos"
        subtitle="Market insights for beachfront condominiums with resort amenities and Gulf views."
        backgroundImage="/images/hero/condos.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Mustang Island Condo Living</h2>
              <p>
                Mustang Island condominiums offer an exceptional entry point into Port Aransas real estate.
                These oceanfront properties combine the convenience of condo living with the lifestyle benefits
                of beachfront ownership—all without the maintenance responsibilities of a single-family home.
              </p>
              <p>
                From intimate one-bedroom units perfect for weekend getaways to spacious three-bedroom condos
                ideal for families, Mustang Island offers options at various price points. Many complexes feature
                resort-style amenities including pools, fitness centers, and on-site management for vacation rentals.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Condo Market Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">1-2 Bedroom</p>
                  <p className="text-2xl font-semibold text-primary-800">$250K - $450K</p>
                  <p className="text-sm text-neutral-600 mt-2">Entry-level, strong rental demand</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">3 Bedroom</p>
                  <p className="text-2xl font-semibold text-primary-800">$450K - $700K</p>
                  <p className="text-sm text-neutral-600 mt-2">Family-sized, premium views</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Premium Units</p>
                  <p className="text-2xl font-semibold text-primary-800">$700K+</p>
                  <p className="text-sm text-neutral-600 mt-2">Top floors, corner units, renovated</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Popular Mustang Island Condo Communities">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Port Royal Ocean Resort:</strong> Full-service resort with multiple pools</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Sandcastle Condos:</strong> Mid-rise beachfront with Gulf views</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Sea Isle Village:</strong> Boutique complex with private beach access</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Mayan Princess:</strong> Established community with strong rental history</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Investment Potential</h2>
              <p>
                Mustang Island condos are popular with investors due to their strong vacation rental performance.
                Oceanfront units can generate $40,000-$80,000+ in annual rental income, depending on size, location,
                and amenities. The relatively lower purchase price compared to single-family homes means attractive
                cap rates for investors.
              </p>
              <p>
                Many condo associations allow short-term rentals and offer optional rental management programs,
                making them ideal for out-of-area investors looking for turnkey opportunities.
              </p>
            </ContentSection>
          </SEOContent>

          {/* Recent Sales */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-2">
              Recent Condo Sales
            </h2>
            <p className="text-neutral-600 mb-8">Condos we&apos;ve successfully closed on Mustang Island</p>
            {condoSales.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {condoSales.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Interested in Mustang Island Condos?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a consultation to discuss current opportunities in the condo market.
                </p>
                <Link
                  href="/contact?interest=condos"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Interested in Mustang Island Condos?"
            description="Let us guide you through the condo market with personalized insights and recommendations."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=condos"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore the Condo Market"
        subtitle="Tell us about your ideal Mustang Island condo for personalized market insights."
      />
    </>
  )
}
