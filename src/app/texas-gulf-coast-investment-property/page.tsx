import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Texas Gulf Coast Investment Property | Coastal Market Insights",
  description:
    "Expert insights on Texas Gulf Coast investment opportunities. Market analysis, regional comparisons, and investment guidance for coastal real estate from Port Aransas to South Padre.",
  keywords: [
    "Texas Gulf Coast investment property",
    "coastal real estate analysis Texas",
    "Texas beach property market",
    "Gulf Coast investment opportunities",
    "Port Aransas investment insights",
    "South Texas coastal real estate",
  ],
  openGraph: {
    title: "Texas Gulf Coast Investment Property | Coastal Market Insights",
    description:
      "Expert insights on Texas Gulf Coast investment opportunities and market analysis.",
  },
}

export default function GulfCoastInvestmentPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Gulf Coast Investment", href: "/texas-gulf-coast-investment-property" },
  ]

  return (
    <>
      <SEOPageHero
        title="Texas Gulf Coast Investment"
        subtitle="Market insights and investment analysis for coastal opportunities from Port Aransas to South Padre."
        backgroundImage="/images/hero/gulf-coast.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Why the Texas Gulf Coast?</h2>
              <p>
                The Texas Gulf Coast offers a compelling combination of factors for real estate investors:
                no state income tax, strong population growth, year-round tourism, and relatively affordable
                entry points compared to Florida or California coastal markets.
              </p>
              <p>
                From the family-friendly beaches of Port Aransas to the resort communities of South Padre Island,
                Texas offers diverse coastal investment opportunities. The state&apos;s business-friendly environment
                and growing economy continue to drive demand for both vacation rentals and permanent residences.
              </p>
            </ContentSection>

            {/* Regional Comparison */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Texas Gulf Coast Markets
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-primary-800 mb-2">Port Aransas</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    Premier beach town with strong STR market, fishing culture, and family appeal.
                  </p>
                  <p className="text-xs text-primary-600">Our specialty market with deep local expertise</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-primary-800 mb-2">Mustang Island</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    Master-planned communities and beachfront condos. Strong rental performance.
                  </p>
                  <p className="text-xs text-primary-600">Premium pricing, established developments</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-primary-800 mb-2">Rockport</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    Art community and birding destination. More affordable entry point.
                  </p>
                  <p className="text-xs text-primary-600">Lower prices, growing tourism appeal</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-primary-800 mb-2">South Padre Island</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    Resort destination with high-rise condos and premium rates.
                  </p>
                  <p className="text-xs text-primary-600">Strong spring break and winter Texan markets</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Investment Strategies">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Vacation Rentals:</strong> Cash flow focus with 12-18% cap rates possible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Second Home + Rental:</strong> Personal use with rental offset</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Land Banking:</strong> Emerging areas with development potential</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Long-Term Appreciation:</strong> Prime locations for wealth building</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Why Port Aransas Stands Out</h2>
              <p>
                While we serve investors interested in the broader Texas Gulf Coast, our expertise centers
                on Port Aransas and Mustang Island. This focus allows us to provide unmatched local knowledge,
                off-market opportunities, and connections to the best property managers and contractors.
              </p>
              <p>
                Port Aransas offers several advantages for investors: accessible price points, strong rental
                demand, established tourism infrastructure, and a welcoming community that supports the
                vacation rental industry.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Explore Gulf Coast Investment"
            description="Let's discuss your investment goals and identify the right market for your strategy."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=investment"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Start Your Coastal Investment"
        subtitle="Share your investment goals for personalized market insights and opportunity matching."
      />
    </>
  )
}
