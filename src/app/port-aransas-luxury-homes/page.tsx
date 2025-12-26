import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Luxury Homes | Premium Beach Estates",
  description:
    "Browse luxury homes for sale in Port Aransas, TX. Premium beachfront estates, custom builds, and exclusive properties from $1.5M to $5M+.",
  keywords: [
    "Port Aransas luxury homes",
    "luxury beach homes Texas",
    "premium Port Aransas real estate",
    "million dollar beach houses",
    "luxury coastal estates Texas",
    "high end Port Aransas properties",
  ],
  openGraph: {
    title: "Port Aransas Luxury Homes | Premium Beach Estates",
    description: "Premium beachfront estates and luxury properties in Port Aransas.",
  },
}

export default function LuxuryHomesPage() {
  // Filter luxury properties ($1.5M+)
  const luxuryProperties = propertiesData.properties.filter(
    (p) => p.pricing.listPrice >= 1500000
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Luxury Homes", href: "/port-aransas-luxury-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Luxury Homes"
        subtitle="Exceptional properties for discerning buyers seeking the finest in coastal living."
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
                Port Aransas luxury properties ($1.5M+) represent a small but active segment of the market.
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

          {/* Property Listings */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">
              Featured Luxury Properties
            </h2>
            {luxuryProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {luxuryProperties.slice(0, 4).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Exclusive Listings Available
                </h3>
                <p className="text-neutral-600 mb-6">
                  Many luxury properties are marketed privately. Contact us for access to exclusive listings.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Request Private Viewings
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Seeking Luxury?"
            description="Let us introduce you to Port Aransas's finest properties, including off-market opportunities."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=luxury"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Access Exclusive Listings"
        subtitle="Tell us about your luxury home requirements and we'll connect you with matching properties."
      />
    </>
  )
}
