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
  title: "Port Aransas Home Prices | Complete Price Guide by Area",
  description:
    "Comprehensive guide to Port Aransas home prices by neighborhood, property type, and features. Understand pricing for condos, homes, and waterfront properties.",
  keywords: [
    "Port Aransas home prices",
    "Port Aransas property values",
    "Cinnamon Shore prices",
    "beach home cost Texas",
    "Port A real estate prices",
  ],
  openGraph: {
    title: "Port Aransas Home Prices | Complete Price Guide by Area",
    description:
      "Comprehensive guide to Port Aransas home prices by neighborhood and property type.",
    type: "website",
  },
}

export default function PriceGuidePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market", href: "/market" },
    { label: "Price Guide" },
  ]

  const stats = [
    { value: "$300K", label: "Entry price" },
    { value: "$677K", label: "Median price" },
    { value: "$3M+", label: "Luxury homes" },
    { value: "$477", label: "Avg $/sqft" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Price Guide"
        subtitle="Comprehensive pricing by neighborhood, property type, and features"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Understanding Port Aransas pricing requires looking beyond
                simple averages. Location, property type, condition, and
                amenities all significantly impact value. This guide breaks
                down pricing across neighborhoods and property types to help
                you understand what you can expect at different price points.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Market Overview</h2>
              <p>
                Port Aransas is the third-largest beach home market in Texas,
                with approximately 470 homes typically available. Prices range
                from around $300,000 for basic condos to over $3 million for
                premium Gulf-front estates.
              </p>
              <p>
                Key pricing factors in Port Aransas include:
              </p>
              <ul>
                <li><strong>Location:</strong> Gulf-front commands 50-100% premium over inland</li>
                <li><strong>Neighborhood:</strong> Master-planned communities price higher</li>
                <li><strong>Condition:</strong> Updated homes sell at significant premiums</li>
                <li><strong>Elevation:</strong> Higher elevation = lower insurance = higher value</li>
                <li><strong>Views:</strong> Gulf, bay, or canal views add substantial value</li>
              </ul>
            </ContentSection>

            <ContentSection id="by-neighborhood">
              <h2>Pricing by Neighborhood</h2>

              <h3>Cinnamon Shore</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Range:</strong> $800,000 - $2,500,000+</li>
                  <li><strong>Avg $/sqft:</strong> $550 - $700</li>
                  <li><strong>Premium for:</strong> Beach proximity, community amenities</li>
                </ul>
              </div>
              <p>
                Port Aransas&apos;s premier master-planned community commands top
                prices. The New Urbanist design, beach access, and amenities
                create sustained demand. Limited inventory keeps prices firm.
              </p>

              <h3>Mustang Island (Beach-Oriented Areas)</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Gulf-Front:</strong> $1,200,000 - $3,000,000+</li>
                  <li><strong>Second-Row:</strong> $600,000 - $1,200,000</li>
                  <li><strong>Inland:</strong> $400,000 - $700,000</li>
                </ul>
              </div>
              <p>
                Direct Gulf frontage is the most valuable attribute in the
                entire market. Second-row properties with beach access offer
                value while maintaining proximity.
              </p>

              <h3>Pirates Bay</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Canal-Front:</strong> $700,000 - $1,800,000</li>
                  <li><strong>Interior:</strong> $500,000 - $800,000</li>
                  <li><strong>Avg $/sqft:</strong> $400 - $550</li>
                </ul>
              </div>
              <p>
                The gated community with boat access attracts fishing and boating
                enthusiasts. Canal-front lots with boat lifts command premiums.
              </p>

              <h3>Beachwalk</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Condos/Townhomes:</strong> $350,000 - $550,000</li>
                  <li><strong>Single-Family:</strong> $500,000 - $1,200,000</li>
                  <li><strong>Avg $/sqft:</strong> $350 - $450</li>
                </ul>
              </div>
              <p>
                Family-friendly community with resort-style pools. Offers
                good value compared to Cinnamon Shore while providing similar
                community amenities.
              </p>

              <h3>Downtown Port Aransas</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Historic/Renovation Projects:</strong> $350,000 - $600,000</li>
                  <li><strong>Updated Homes:</strong> $500,000 - $900,000</li>
                  <li><strong>Premium Locations:</strong> $800,000 - $1,500,000</li>
                </ul>
              </div>
              <p>
                The historic downtown offers walkability and character at
                varied price points. Condition significantly impacts value—
                renovated homes price much higher than fixer-uppers.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Price Per Square Foot Context
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Price per square foot varies significantly by property type.
                Smaller homes often have higher $/sqft due to fixed land costs.
                Always consider total price, not just $/sqft, when comparing
                properties of different sizes.
              </p>
            </HighlightBox>

            <ContentSection id="by-property-type">
              <h2>Pricing by Property Type</h2>

              <h3>Condominiums</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>1 BR Units:</strong> $250,000 - $400,000</li>
                  <li><strong>2 BR Units:</strong> $350,000 - $550,000</li>
                  <li><strong>3 BR Units:</strong> $500,000 - $800,000</li>
                  <li><strong>Luxury/Gulf-Front:</strong> $800,000 - $1,500,000+</li>
                </ul>
              </div>
              <p>
                Condos offer the lowest entry point but include HOA fees that
                affect total cost of ownership. Gulf-view units command substantial
                premiums over interior-facing units in the same building.
              </p>

              <h3>Townhomes</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>2 BR:</strong> $400,000 - $550,000</li>
                  <li><strong>3 BR:</strong> $500,000 - $700,000</li>
                  <li><strong>4 BR:</strong> $650,000 - $900,000</li>
                </ul>
              </div>
              <p>
                Townhomes bridge condos and single-family homes. More space than
                condos with some shared maintenance through HOA.
              </p>

              <h3>Single-Family Homes</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Modest (2-3 BR, older):</strong> $400,000 - $600,000</li>
                  <li><strong>Standard (3 BR, updated):</strong> $550,000 - $800,000</li>
                  <li><strong>Premium (4+ BR, desirable):</strong> $800,000 - $1,500,000</li>
                  <li><strong>Luxury/Gulf-Front:</strong> $1,500,000 - $3,500,000+</li>
                </ul>
              </div>
              <p>
                Single-family homes represent the bulk of the market. Condition,
                location, and size all significantly impact pricing within
                broad ranges.
              </p>

              <h3>Vacant Land</h3>
              <div className="my-4 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Interior Lots:</strong> $100,000 - $250,000</li>
                  <li><strong>Community Lots:</strong> $200,000 - $400,000</li>
                  <li><strong>Canal-Front:</strong> $300,000 - $600,000</li>
                  <li><strong>Gulf-Front:</strong> $600,000 - $1,200,000+</li>
                </ul>
              </div>
              <p>
                Land prices vary dramatically by location. Construction costs
                for elevated coastal homes typically run $250-400/sqft or more,
                so factor total build cost when evaluating lots.
              </p>
            </ContentSection>

            <ContentSection id="price-factors">
              <h2>Major Price Factors</h2>

              <h3>Location Premium Multipliers</h3>
              <p>
                Using inland homes as the baseline, typical premiums are:
              </p>
              <ul>
                <li><strong>Gulf-Front:</strong> 100-150% premium</li>
                <li><strong>Gulf-View (second row):</strong> 30-50% premium</li>
                <li><strong>Canal-Front with boat access:</strong> 25-40% premium</li>
                <li><strong>Beach walkable:</strong> 15-25% premium</li>
                <li><strong>Community with pools:</strong> 10-20% premium</li>
              </ul>

              <h3>Condition Impact</h3>
              <ul>
                <li><strong>Turn-key updated:</strong> Commands full market value</li>
                <li><strong>Good condition, dated finishes:</strong> 5-15% below updated</li>
                <li><strong>Needs cosmetic work:</strong> 15-25% below updated</li>
                <li><strong>Major renovation needed:</strong> 30-50% below updated</li>
              </ul>

              <h3>Size Considerations</h3>
              <p>
                Price per square foot typically decreases as size increases:
              </p>
              <ul>
                <li><strong>Under 1,500 sqft:</strong> $450-600/sqft typical</li>
                <li><strong>1,500-2,500 sqft:</strong> $400-500/sqft typical</li>
                <li><strong>2,500-3,500 sqft:</strong> $375-475/sqft typical</li>
                <li><strong>Over 3,500 sqft:</strong> $350-450/sqft typical</li>
              </ul>
            </ContentSection>

            <ContentSection id="what-you-get">
              <h2>What You Get at Each Price Point</h2>

              <h3>$300,000 - $450,000</h3>
              <ul>
                <li>Basic 1-2 BR condos</li>
                <li>Older properties needing updates</li>
                <li>Smaller homes in less desirable locations</li>
                <li>Entry-level vacation rental options</li>
              </ul>

              <h3>$450,000 - $650,000</h3>
              <ul>
                <li>Nice 2-3 BR condos with amenities</li>
                <li>Smaller single-family homes in good condition</li>
                <li>Townhomes in communities like Beachwalk</li>
                <li>Solid vacation rental performers</li>
              </ul>

              <h3>$650,000 - $900,000</h3>
              <ul>
                <li>Well-maintained 3-4 BR single-family homes</li>
                <li>Some canal-front or water-view properties</li>
                <li>Entry into communities like Cinnamon Shore</li>
                <li>Strong vacation rental potential</li>
              </ul>

              <h3>$900,000 - $1,300,000</h3>
              <ul>
                <li>Premium 4+ BR homes</li>
                <li>Desirable locations and communities</li>
                <li>Quality finishes and updates</li>
                <li>Excellent vacation rental income potential</li>
              </ul>

              <h3>$1,300,000 - $2,000,000</h3>
              <ul>
                <li>Gulf-view properties</li>
                <li>Premium Cinnamon Shore homes</li>
                <li>Larger canal-front with boat facilities</li>
                <li>Newer construction with high-end finishes</li>
              </ul>

              <h3>$2,000,000+</h3>
              <ul>
                <li>Gulf-front homes</li>
                <li>Large estate properties</li>
                <li>Exceptional views and locations</li>
                <li>Premium construction and finishes</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Don&apos;t Forget Carrying Costs
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Purchase price is just the beginning. Factor in property taxes
                (~1.7% of value), insurance ($8,000-15,000+/year), HOA fees
                (if applicable), and maintenance when calculating total cost
                of ownership. A $600,000 home can easily cost $40,000+/year
                beyond any mortgage.
              </p>
            </HighlightBox>

            <ContentSection id="negotiation">
              <h2>Negotiation Considerations</h2>

              <h3>Current Market Dynamics</h3>
              <p>
                In the current balanced market:
              </p>
              <ul>
                <li>Well-priced properties sell near asking</li>
                <li>Overpriced listings sit and eventually reduce</li>
                <li>Buyers have room to negotiate on properties over 90 days</li>
                <li>Cash offers still have advantage but not as extreme as 2021-22</li>
              </ul>

              <h3>Reasonable Expectations</h3>
              <ul>
                <li><strong>Hot property:</strong> Full price or slight escalation</li>
                <li><strong>Fairly priced:</strong> 2-5% below asking often accepted</li>
                <li><strong>Overpriced/long listing:</strong> 5-10% below may be considered</li>
                <li><strong>Estate sales or motivated:</strong> Potentially more negotiable</li>
              </ul>
            </ContentSection>

            <ContentSection id="value-opportunities">
              <h2>Finding Value</h2>

              <h3>Undervalued Property Types</h3>
              <ul>
                <li><strong>Cosmetic fixer-uppers:</strong> Sweat equity opportunity</li>
                <li><strong>Off-season purchases:</strong> Less competition, motivated sellers</li>
                <li><strong>Long-listed properties:</strong> Sellers may be flexible</li>
                <li><strong>Second-row with views:</strong> Often better value than Gulf-front</li>
              </ul>

              <h3>Red Flags</h3>
              <ul>
                <li>Priced significantly below comparable properties (why?)</li>
                <li>Recent price reductions without obvious reason</li>
                <li>Unusual sale terms or conditions</li>
                <li>Seller unwilling to allow proper inspection</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Properties in Your Price Range"
          description="Let us help you find the perfect beach home within your budget."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
