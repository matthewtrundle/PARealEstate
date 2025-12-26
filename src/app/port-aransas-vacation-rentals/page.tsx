import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, StatsGrid, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Vacation Rental Properties | STR Investment Opportunities",
  description:
    "Invest in Port Aransas vacation rental properties. STR-permitted homes generating $60K-$150K+ annual income. Expert guidance on the Texas vacation rental market.",
  keywords: [
    "Port Aransas vacation rental investment",
    "Port Aransas STR property",
    "vacation rental homes Texas",
    "short term rental investment",
    "Port Aransas rental income property",
    "Airbnb investment Texas coast",
  ],
  openGraph: {
    title: "Port Aransas Vacation Rental Properties | Investment Opportunities",
    description:
      "Invest in Port Aransas vacation rental properties with strong STR income potential.",
  },
}

export default function VacationRentalsPage() {
  // Filter STR-ready properties
  const strProperties = propertiesData.properties.filter(
    (p) => p.features.investment?.some((i) => i.toLowerCase().includes("str") || i.toLowerCase().includes("rental"))
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Vacation Rentals", href: "/port-aransas-vacation-rentals" },
  ]

  const stats = [
    { value: "8M+", label: "Annual Visitors to Texas Coast" },
    { value: "$120K", label: "Top Rental Income" },
    { value: "75%", label: "Average Occupancy (Peak)" },
    { value: "15%", label: "Avg. Cap Rate" },
  ]

  return (
    <>
      <SEOPageHero
        title="Vacation Rental Investment"
        subtitle="STR-permitted properties generating strong returns in the booming Port Aransas market."
        backgroundImage="/images/hero/investment.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Why Invest in Port Aransas Vacation Rentals?</h2>
              <p>
                Port Aransas is one of the strongest vacation rental markets on the Texas Gulf Coast. With over
                8 million annual visitors to the Coastal Bend region, properties in Port Aransas enjoy high
                occupancy rates and premium nightly rates, especially during peak summer months.
              </p>
              <p>
                Unlike many coastal markets, Port Aransas maintains a favorable regulatory environment for
                short-term rentals. STR permits are readily available in most areas, and the city actively
                supports the vacation rental industry that drives its tourism economy.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <HighlightBox title="What Makes a Top-Performing STR?">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Location:</strong> Beachfront or walkable to beach commands premium rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Amenities:</strong> Pool, hot tub, outdoor space significantly boost bookings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Bedrooms:</strong> 3-4 BR homes optimal for family vacation market</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Presentation:</strong> Professional photos and modern decor drive reviews</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>STR Regulations & Permits</h2>
              <p>
                Port Aransas requires a Short-Term Rental permit for properties rented for periods of less than
                30 days. The permit process is straightforward and includes a safety inspection. Annual renewal
                ensures properties maintain standards.
              </p>
              <p>
                We guide our investor clients through the entire permit process and can recommend experienced
                property managers who specialize in Port Aransas vacation rentals.
              </p>
            </ContentSection>
          </SEOContent>

          {/* Property Listings */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">
              STR-Ready Properties
            </h2>
            {strProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strProperties.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Investment Properties Move Fast
                </h3>
                <p className="text-neutral-600 mb-6">
                  Get early access to STR-ready properties before they hit the market.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Join Investor List
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Ready to Invest?"
            description="Tell us your investment criteria and we'll find properties that match your goals."
            buttonText="Start Investing"
            buttonHref="/contact?interest=investment"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Get Investment Property Alerts"
        subtitle="Be first to know about STR-ready properties with strong rental potential."
      />
    </>
  )
}
