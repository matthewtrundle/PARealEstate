import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Beachfront Homes for Sale | Gulf Front Properties",
  description:
    "Browse luxury beachfront homes for sale in Port Aransas, TX. Direct Gulf access, ocean views, and premium coastal living. Find your dream beach house today.",
  keywords: [
    "Port Aransas beachfront homes for sale",
    "Port Aransas beach houses",
    "Gulf front homes Port Aransas",
    "beachfront property Texas",
    "oceanfront homes Port Aransas TX",
    "beach house for sale Texas Gulf Coast",
  ],
  openGraph: {
    title: "Port Aransas Beachfront Homes for Sale | Gulf Front Properties",
    description:
      "Browse luxury beachfront homes for sale in Port Aransas, TX. Direct Gulf access, ocean views, and premium coastal living.",
  },
}

export default function BeachfrontHomesPage() {
  // Filter beachfront properties
  const beachfrontProperties = propertiesData.properties.filter(
    (p) => p.features.highlights.some((h) => h.toLowerCase().includes("beach") || h.toLowerCase().includes("gulf"))
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Beachfront Homes", href: "/port-aransas-beachfront-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Beachfront Homes"
        subtitle="Discover luxury Gulf-front properties with direct beach access and stunning ocean views."
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
                Pricing for beachfront homes ranges from $1.5 million for modest Gulf-access properties to $5 million+
                for luxury estates. The premium reflects the scarcity of true beachfront lots and the exceptional
                lifestyle they provide.
              </p>
            </ContentSection>
          </SEOContent>

          {/* Property Listings */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">
              Featured Beachfront Properties
            </h2>
            {beachfrontProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beachfrontProperties.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Beachfront Inventory Moves Fast
                </h3>
                <p className="text-neutral-600 mb-6">
                  Contact us for off-market opportunities and upcoming beachfront listings.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Notified of New Listings
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Looking for Beachfront?"
            description="Beachfront properties move quickly. Let us know what you're looking for and we'll alert you to new opportunities."
            buttonText="Start Your Search"
            buttonHref="/contact?interest=beachfront"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Find Your Beachfront Dream Home"
        subtitle="Tell us about your ideal beachfront property and budget. We'll connect you with matching opportunities."
      />
    </>
  )
}
