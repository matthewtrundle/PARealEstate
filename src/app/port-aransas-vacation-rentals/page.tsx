import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, StatsGrid, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Vacation Rentals | STR Investment Insights",
  description:
    "Expert insights on Port Aransas vacation rental investment. Market analysis, rental income data, and STR guidance for Texas Gulf Coast properties.",
  keywords: [
    "Port Aransas vacation rental investment",
    "Port Aransas STR market",
    "vacation rental income Texas",
    "short term rental analysis",
    "Port Aransas rental property values",
    "Texas coast STR investment",
  ],
  openGraph: {
    title: "Port Aransas Vacation Rentals | STR Investment Insights",
    description:
      "Expert insights on Port Aransas vacation rental market with income analysis and investment guidance.",
  },
}

export default function VacationRentalsPage() {
  // Filter STR-ready properties for recent sales showcase
  const strSales = propertiesData.properties.filter(
    (p) => p.features.investment?.some((i) => i.toLowerCase().includes("str") || i.toLowerCase().includes("rental"))
  )

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Vacation Rentals", href: "/port-aransas-vacation-rentals" },
  ]

  const stats = [
    { value: "8M+", label: "Annual Visitors to Texas Coast" },
    { value: "$120K", label: "Top Annual Rental Income" },
    { value: "75%", label: "Average Peak Occupancy" },
    { value: "12-18%", label: "Typical Cap Rates" },
  ]

  return (
    <>
      <SEOPageHero
        title="Vacation Rental Investment"
        subtitle="Market insights and investment analysis for Port Aransas STR properties."
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

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Investment Property Price Bands
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Entry Level</p>
                  <p className="text-2xl font-semibold text-primary-800">$400K - $600K</p>
                  <p className="text-sm text-neutral-600 mt-2">Condos, 1-2 BR homes</p>
                  <p className="text-xs text-primary-600 mt-1">~$40-60K annual income</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Sweet Spot</p>
                  <p className="text-2xl font-semibold text-primary-800">$600K - $1M</p>
                  <p className="text-sm text-neutral-600 mt-2">3-4 BR homes with pools</p>
                  <p className="text-xs text-primary-600 mt-1">~$70-100K annual income</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Premium</p>
                  <p className="text-2xl font-semibold text-primary-800">$1M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Beachfront, luxury properties</p>
                  <p className="text-xs text-primary-600 mt-1">~$100-150K+ annual income</p>
                </div>
              </div>
            </div>

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

          {/* Recent Sales */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-2">
              Recent Investment Property Sales
            </h2>
            <p className="text-neutral-600 mb-8">STR-ready properties we&apos;ve successfully closed</p>
            {strSales.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {strSales.slice(0, 6).map((property) => (
                  <PropertyCard key={property.id} property={property as any} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Ready to Invest in Port Aransas?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a consultation to discuss investment opportunities and current market conditions.
                </p>
                <Link
                  href="/contact?interest=investment"
                  className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            )}
          </div>

          <CTABanner
            title="Ready to Invest?"
            description="Let's discuss your investment criteria and identify properties that match your goals."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=investment"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore Investment Opportunities"
        subtitle="Tell us about your investment goals for personalized market insights and recommendations."
      />
    </>
  )
}
