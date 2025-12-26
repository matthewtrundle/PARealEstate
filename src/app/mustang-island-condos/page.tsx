import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Mustang Island Condos for Sale | Port Aransas Beachfront Condominiums",
  description:
    "Explore Mustang Island condos for sale in Port Aransas, TX. Oceanfront condominiums with resort amenities, Gulf views, and strong rental income potential.",
  keywords: [
    "Mustang Island condos for sale",
    "Port Aransas condos",
    "beachfront condos Texas",
    "Mustang Island real estate",
    "Port Aransas condominiums",
    "Gulf Coast condo investment",
  ],
  openGraph: {
    title: "Mustang Island Condos for Sale | Port Aransas Condominiums",
    description:
      "Explore Mustang Island condos for sale with Gulf views and resort amenities.",
  },
}

export default function MustangIslandCondosPage() {
  // Filter condo properties
  const condoProperties = propertiesData.properties.filter(
    (p) => p.location.neighborhood === "Mustang Island" || p.specs.floors === 1
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Mustang Island Condos", href: "/mustang-island-condos" },
  ]

  return (
    <>
      <SEOPageHero
        title="Mustang Island Condos"
        subtitle="Beachfront condominiums with resort amenities and stunning Gulf of Mexico views."
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

          {/* Property Listings */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">
              Available Condos
            </h2>
            {condoProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {condoProperties.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  New Condo Listings Coming Soon
                </h3>
                <p className="text-neutral-600 mb-6">
                  Be the first to know about new Mustang Island condo listings.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Condo Alerts
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Interested in Mustang Island Condos?"
            description="Let us know your budget and preferences. We'll match you with the best condo opportunities."
            buttonText="Contact Us"
            buttonHref="/contact?interest=condos"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Find Your Perfect Condo"
        subtitle="Tell us about your ideal Mustang Island condo and we'll send matching listings."
      />
    </>
  )
}
