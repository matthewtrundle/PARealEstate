import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  StatsGrid,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Port Aransas Investment Property Guide | ROI & Market Analysis",
  description:
    "Explore investment opportunities in Port Aransas real estate. Vacation rental income potential, market trends, and ROI analysis for coastal property investors.",
  keywords: [
    "Port Aransas investment property",
    "beach house investment Texas",
    "vacation rental ROI Port Aransas",
    "coastal real estate investment",
    "Port A rental property",
  ],
  openGraph: {
    title: "Port Aransas Investment Property Guide | ROI & Market Analysis",
    description:
      "Explore investment opportunities in Port Aransas real estate.",
    type: "website",
  },
}

export default function InvestmentPropertyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Investment Property" },
  ]

  const stats = [
    { value: "4-8%", label: "Cap rate range" },
    { value: "$40K+", label: "Annual rental income" },
    { value: "70%+", label: "Peak season occupancy" },
    { value: "12%", label: "Historic appreciation" },
  ]

  return (
    <>
      <SEOPageHero
        title="Investment Property in Port Aransas"
        subtitle="Understanding the vacation rental market and investment potential on the Texas coast"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas offers compelling investment opportunities for those
                seeking vacation rental income combined with long-term appreciation.
                As Texas&apos;s most popular beach destination, the market benefits
                from strong domestic tourism demand and limited beachfront supply.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="market-overview">
              <h2>Investment Market Overview</h2>
              <p>
                Port Aransas sits at the intersection of strong demand and
                constrained supply—a favorable dynamic for investors. The island
                has limited land available for development, while Texas&apos;s growing
                population drives increasing beach tourism.
              </p>
              <p>
                Key market characteristics:
              </p>
              <ul>
                <li><strong>Drive Market</strong> — 2-4 hour drive from Houston, San Antonio, Austin, and Dallas-Fort Worth</li>
                <li><strong>No State Income Tax</strong> — Texas tax advantages benefit rental income</li>
                <li><strong>Year-Round Tourism</strong> — Winter Texans and fishing enthusiasts extend the season</li>
                <li><strong>Limited Supply</strong> — Barrier island geography constrains new development</li>
                <li><strong>Recovery History</strong> — Market has recovered strongly from past hurricanes</li>
              </ul>
            </ContentSection>

            <ContentSection id="rental-income">
              <h2>Vacation Rental Income Potential</h2>
              <p>
                Well-managed vacation rentals in Port Aransas can generate
                significant income, though results vary based on location,
                property quality, and management approach.
              </p>

              <h3>Typical Income Ranges</h3>
              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>1-2 BR Condos:</strong> $25,000 - $45,000/year gross</li>
                  <li><strong>3 BR Homes:</strong> $40,000 - $70,000/year gross</li>
                  <li><strong>4+ BR Premium Homes:</strong> $70,000 - $120,000+/year gross</li>
                </ul>
              </div>

              <h3>Seasonal Patterns</h3>
              <p>
                Port Aransas has distinct seasonal demand:
              </p>
              <ul>
                <li><strong>Peak Season (June-August)</strong> — Highest rates, 80-95% occupancy</li>
                <li><strong>Spring Break (March)</strong> — Premium rates, near-full occupancy</li>
                <li><strong>Shoulder Season (April-May, Sept-Oct)</strong> — Moderate rates, 50-70% occupancy</li>
                <li><strong>Winter (Nov-Feb)</strong> — Lower rates, Winter Texan and fishing demand</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Net vs. Gross Income
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Gross rental income doesn&apos;t tell the full story. After management
                fees (20-35%), cleaning, supplies, maintenance, insurance, taxes,
                and HOA fees, net income is typically 40-60% of gross. Always
                analyze deals using realistic net projections.
              </p>
            </HighlightBox>

            <ContentSection id="investment-analysis">
              <h2>Investment Analysis</h2>

              <h3>Cap Rate Calculation</h3>
              <p>
                Cap rate (capitalization rate) measures return on investment
                based on rental income:
              </p>
              <div className="my-6 p-4 bg-neutral-100 rounded-lg font-mono text-sm">
                Cap Rate = Net Operating Income / Purchase Price
              </div>
              <p>
                Port Aransas cap rates typically range from 4-8%, with higher
                returns generally requiring more hands-on management or properties
                that need updating.
              </p>

              <h3>Cash-on-Cash Return</h3>
              <p>
                If financing your purchase, cash-on-cash return measures return
                on actual cash invested:
              </p>
              <div className="my-6 p-4 bg-neutral-100 rounded-lg font-mono text-sm">
                Cash-on-Cash = Annual Cash Flow / Total Cash Invested
              </div>
              <p>
                A 20-25% down payment on a well-performing property can generate
                8-15% cash-on-cash returns, though leverage increases risk.
              </p>

              <h3>Total Return Perspective</h3>
              <p>
                Smart investors consider total return, which includes:
              </p>
              <ul>
                <li>Net rental income</li>
                <li>Property appreciation</li>
                <li>Principal paydown (if financed)</li>
                <li>Tax benefits (depreciation, deductions)</li>
                <li>Personal use value</li>
              </ul>
            </ContentSection>

            <ContentSection id="property-selection">
              <h2>Selecting an Investment Property</h2>
              <p>
                Not all properties make good investments. Consider these factors:
              </p>

              <h3>Location Factors</h3>
              <ul>
                <li><strong>Beach Access</strong> — Close beach access commands premium rates</li>
                <li><strong>Neighborhood Reputation</strong> — Cinnamon Shore, Beachwalk perform well</li>
                <li><strong>Walkability</strong> — Proximity to restaurants and activities</li>
                <li><strong>Pool Access</strong> — Community or private pools increase bookings</li>
              </ul>

              <h3>Property Characteristics</h3>
              <ul>
                <li><strong>Bedroom Count</strong> — 3-4 bedrooms hit the sweet spot for families</li>
                <li><strong>Sleeping Capacity</strong> — More beds = higher nightly rates</li>
                <li><strong>Outdoor Space</strong> — Decks, patios, outdoor showers add value</li>
                <li><strong>Condition</strong> — Updated kitchens and bathrooms drive bookings</li>
                <li><strong>Photography</strong> — The property must photograph well</li>
              </ul>

              <h3>Financial Factors</h3>
              <ul>
                <li><strong>HOA Fees</strong> — High fees eat into returns</li>
                <li><strong>Insurance Costs</strong> — Verify actual flood and windstorm costs</li>
                <li><strong>Rental Restrictions</strong> — Some HOAs limit short-term rentals</li>
                <li><strong>Maintenance History</strong> — Older properties may need capital</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Due Diligence on Rental History
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                If a property has rental history, request actual income statements.
                Sellers sometimes quote peak-season rates as if they apply year-round.
                Verify actual annual income with booking records before projecting
                future returns.
              </p>
            </HighlightBox>

            <ContentSection id="management-options">
              <h2>Property Management Options</h2>

              <h3>Professional Management</h3>
              <p>
                Most out-of-town investors use professional management. Services
                typically include:
              </p>
              <ul>
                <li>Listing on rental platforms (VRBO, Airbnb, direct booking)</li>
                <li>Guest communication and check-in</li>
                <li>Cleaning coordination</li>
                <li>Maintenance coordination</li>
                <li>Revenue optimization and pricing</li>
              </ul>
              <p>
                Management fees typically range from 20-35% of gross rental income.
                Some companies charge less but provide fewer services.
              </p>

              <h3>Self-Management</h3>
              <p>
                Self-managing can increase net income by 20-30%, but requires:
              </p>
              <ul>
                <li>Time for guest communication (significant during busy periods)</li>
                <li>Reliable local contacts for cleaning and maintenance</li>
                <li>Systems for keyless entry, cleaning schedules, and supplies</li>
                <li>Willingness to handle guest issues remotely</li>
              </ul>
              <p>
                Many investors self-manage initially, then transition to
                professional management as their portfolio grows.
              </p>
            </ContentSection>

            <ContentSection id="expenses">
              <h2>Understanding Expenses</h2>
              <p>
                Accurate expense projections are crucial for investment analysis:
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-4">
                  Typical Annual Expenses (3BR Home @ $650K)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Property Taxes:</strong> $8,000 - $12,000</li>
                  <li><strong>Insurance (All):</strong> $8,000 - $15,000</li>
                  <li><strong>HOA Fees:</strong> $2,400 - $6,000</li>
                  <li><strong>Utilities:</strong> $3,600 - $5,400</li>
                  <li><strong>Management:</strong> $10,000 - $20,000</li>
                  <li><strong>Cleaning:</strong> $6,000 - $12,000</li>
                  <li><strong>Maintenance:</strong> $3,000 - $8,000</li>
                  <li><strong>Supplies &amp; Furnishing:</strong> $2,000 - $4,000</li>
                  <li><strong>Platform Fees:</strong> $2,000 - $4,000</li>
                  <li className="pt-2 border-t border-neutral-300 font-semibold">
                    <strong>Total:</strong> $45,000 - $86,000/year
                  </li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection id="tax-considerations">
              <h2>Tax Considerations</h2>
              <p>
                Investment properties offer several tax benefits:
              </p>
              <ul>
                <li><strong>Depreciation</strong> — Deduct property value over 27.5 years</li>
                <li><strong>Expense Deductions</strong> — Interest, taxes, insurance, repairs, management</li>
                <li><strong>1031 Exchange</strong> — Defer capital gains by reinvesting proceeds</li>
                <li><strong>Qualified Business Income</strong> — Potential 20% deduction on rental income</li>
              </ul>
              <p>
                Personal use affects tax treatment. If you use the property more
                than 14 days or 10% of rental days, some deductions may be limited.
                Consult a tax professional for your specific situation.
              </p>
            </ContentSection>

            <ContentSection id="risks">
              <h2>Understanding the Risks</h2>
              <p>
                All investments carry risk. Key risks for Port Aransas properties:
              </p>
              <ul>
                <li><strong>Hurricane Damage</strong> — Storms can damage properties; insurance may not cover everything</li>
                <li><strong>Market Fluctuations</strong> — Property values and rental rates can decline</li>
                <li><strong>Regulatory Changes</strong> — Short-term rental rules could change</li>
                <li><strong>Competition</strong> — New supply can impact rental rates and occupancy</li>
                <li><strong>Vacancy</strong> — Economic downturns reduce tourism</li>
                <li><strong>Management Risk</strong> — Poor management destroys returns</li>
              </ul>
            </ContentSection>

            <ContentSection id="getting-started">
              <h2>Getting Started</h2>
              <p>
                Ready to invest in Port Aransas? Here&apos;s a recommended approach:
              </p>
              <ol>
                <li><strong>Define Your Goals</strong> — Income, appreciation, personal use, or all three?</li>
                <li><strong>Establish Your Budget</strong> — Include closing costs and furnishing</li>
                <li><strong>Get Pre-Approved</strong> — Know your financing options</li>
                <li><strong>Research Neighborhoods</strong> — Each area has different investment profiles</li>
                <li><strong>Analyze Properties</strong> — Run numbers on actual, not projected, income</li>
                <li><strong>Build Your Team</strong> — Agent, lender, inspector, manager, accountant</li>
                <li><strong>Make an Offer</strong> — Move quickly on good opportunities</li>
              </ol>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Explore Investment Opportunities"
          description="Browse properties with strong rental potential or speak with our team about investment strategies."
          primaryCTA={{ text: "View Properties", href: "/properties" }}
          secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
