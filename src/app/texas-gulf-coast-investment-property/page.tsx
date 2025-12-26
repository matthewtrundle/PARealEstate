import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Texas Gulf Coast Investment Property | Coastal Real Estate Opportunities",
  description:
    "Explore Texas Gulf Coast investment properties. From Port Aransas to South Padre, discover coastal real estate with strong appreciation and rental income potential.",
  keywords: [
    "Texas Gulf Coast investment property",
    "coastal real estate investment Texas",
    "Texas beach property investment",
    "Gulf Coast rental property",
    "Port Aransas investment",
    "South Texas coastal real estate",
  ],
  openGraph: {
    title: "Texas Gulf Coast Investment Property | Coastal Opportunities",
    description:
      "Discover Texas Gulf Coast investment properties with strong returns.",
  },
}

export default function GulfCoastInvestmentPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Investment", href: "/guides/investment-property" },
    { label: "Gulf Coast Investment", href: "/texas-gulf-coast-investment-property" },
  ]

  return (
    <>
      <SEOPageHero
        title="Texas Gulf Coast Investment"
        subtitle="Discover coastal investment opportunities from Port Aransas to South Padre Island."
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
                Texas offers diverse coastal investment opportunities. The state's business-friendly environment
                and growing economy continue to drive demand for both vacation rentals and permanent residences.
              </p>
            </ContentSection>

            <HighlightBox title="Texas Gulf Coast Markets">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Port Aransas</h4>
                  <p className="text-sm text-neutral-600">
                    Premier beach town with strong STR market, fishing culture, and family appeal.
                    Our specialty market with deep local expertise.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Mustang Island</h4>
                  <p className="text-sm text-neutral-600">
                    Master-planned communities and beachfront condos. Strong rental performance
                    and appreciation potential.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Rockport</h4>
                  <p className="text-sm text-neutral-600">
                    Art community and birding destination. More affordable entry point with
                    growing tourism appeal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">South Padre Island</h4>
                  <p className="text-sm text-neutral-600">
                    Resort destination with high-rise condos and premium rates.
                    Strong spring break and winter Texan markets.
                  </p>
                </div>
              </div>
            </HighlightBox>

            <ContentSection>
              <h2>Investment Strategies</h2>
              <p>
                Texas Gulf Coast investors typically pursue one of three strategies: vacation rentals for
                cash flow, second homes with rental offset, or land banking in emerging areas. Each approach
                has distinct advantages depending on your investment goals and time horizon.
              </p>
              <p>
                The vacation rental strategy works particularly well in Port Aransas, where strong demand
                and favorable regulations support consistent returns. Properties with desirable features
                like pools, beach access, and quality furnishings can achieve 60-70% occupancy annually.
              </p>
            </ContentSection>

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
            title="Explore Port Aransas Investment"
            description="Let us show you the investment opportunities in Texas's premier beach town."
            buttonText="View Properties"
            buttonHref="/properties"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Get Started with Coastal Investment"
        subtitle="Share your investment goals and we'll identify matching opportunities on the Texas Gulf Coast."
      />
    </>
  )
}
