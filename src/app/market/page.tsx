import { Metadata } from "next"
import Link from "next/link"
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
  title: "Port Aransas Real Estate Market | Trends, Prices & Analysis",
  description:
    "Get the latest Port Aransas real estate market data, price trends, and expert analysis. Understand market conditions before buying or selling coastal property.",
  keywords: [
    "Port Aransas real estate market",
    "Port Aransas home prices",
    "Texas coastal real estate",
    "Port Aransas market trends",
    "beach home values",
  ],
  openGraph: {
    title: "Port Aransas Real Estate Market | Trends, Prices & Analysis",
    description:
      "Get the latest Port Aransas real estate market data, price trends, and expert analysis.",
    type: "website",
  },
}

export default function MarketPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market" },
  ]

  const marketStats = [
    { value: "$677K", label: "Median Home Price" },
    { value: "$477", label: "Price per Sq Ft" },
    { value: "470+", label: "Active Listings" },
    { value: "-3%", label: "YoY Price Change" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Real Estate Market"
        subtitle="Current market conditions, pricing trends, and expert analysis for coastal property buyers and sellers"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                The Port Aransas real estate market continues to attract buyers seeking
                beach homes, vacation properties, and investment opportunities. As the
                third-largest beach home market in Texas, Port Aransas offers a diverse
                inventory ranging from affordable condos to luxury waterfront estates.
              </p>
            </ContentSection>

            <StatsGrid stats={marketStats} />

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Market Update - 2025
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Data reflects current market conditions. The Port Aransas market has seen
                a slight correction from pandemic-era highs, creating opportunities for
                buyers while maintaining strong fundamentals.
              </p>
            </HighlightBox>

            <ContentSection id="current-conditions">
              <h2>Current Market Conditions</h2>
              <p>
                The Port Aransas real estate market in 2025 shows stabilization after
                the significant appreciation seen during 2020-2022. Median home prices
                currently hover around $677,000, representing a modest 3% decrease from
                the previous year. This adjustment has improved affordability for buyers
                while maintaining healthy equity for existing homeowners.
              </p>
              <p>
                The median price per square foot of approximately $477 reflects the
                premium that buyers pay for coastal property in this desirable market.
                This figure varies significantly by location, with beachfront properties
                commanding considerably higher prices than properties further inland.
              </p>
            </ContentSection>

            <ContentSection id="inventory">
              <h2>Inventory &amp; Supply</h2>
              <p>
                Port Aransas typically maintains around 470 beach homes for sale at any
                given time, making it one of the most active beach home markets on the
                Texas coast. Current inventory levels are considered balanced, providing
                buyers with reasonable selection while supporting property values.
              </p>
              <p>
                New construction continues to add inventory, particularly in master-planned
                communities like Cinnamon Shore and Palmilla Beach. These developments
                offer modern designs with elevated foundations and hurricane-resistant
                construction that appeal to today&apos;s buyers.
              </p>
            </ContentSection>

            <ContentSection id="price-ranges">
              <h2>Price Ranges by Property Type</h2>

              <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="text-left p-4 font-display text-primary-900">Property Type</th>
                      <th className="text-left p-4 font-display text-primary-900">Price Range</th>
                      <th className="text-left p-4 font-display text-primary-900">Typical Sq Ft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-4">Condos</td>
                      <td className="p-4">$250K - $600K</td>
                      <td className="p-4">800 - 1,500</td>
                    </tr>
                    <tr>
                      <td className="p-4">Townhomes</td>
                      <td className="p-4">$400K - $800K</td>
                      <td className="p-4">1,200 - 2,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Single Family</td>
                      <td className="p-4">$500K - $1.5M</td>
                      <td className="p-4">1,500 - 3,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Luxury/Waterfront</td>
                      <td className="p-4">$1M - $3M+</td>
                      <td className="p-4">2,500 - 5,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentSection>

            <ContentSection id="investment">
              <h2>Investment Outlook</h2>
              <p>
                Port Aransas remains attractive for real estate investment due to its
                strong vacation rental market, limited barrier island supply, and growing
                popularity as a second-home destination. Properties with good rental
                history can generate significant income, with popular homes achieving
                high occupancy rates during peak season.
              </p>
              <p>
                Long-term appreciation in Port Aransas has historically outpaced mainland
                Texas markets, driven by the inherent scarcity of coastal property and
                consistent demand from both tourists and permanent residents.
              </p>
              <p>
                <Link href="/guides/investment-property" className="text-primary-600 hover:text-primary-800">
                  Read our Investment Property Guide →
                </Link>
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      {/* Market Reports Links */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-12">
            Detailed Market Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link
              href="/market/trends"
              className="p-8 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-xl text-primary-900 mb-3 group-hover:text-primary-700">
                Market Trends
              </h3>
              <p className="text-neutral-600">
                Historical data, seasonal patterns, and projected trends for the
                Port Aransas real estate market.
              </p>
            </Link>
            <Link
              href="/market/price-guide"
              className="p-8 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-xl text-primary-900 mb-3 group-hover:text-primary-700">
                Price Guide
              </h3>
              <p className="text-neutral-600">
                Detailed pricing by neighborhood, property type, and location
                within Port Aransas.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Get a Free Market Analysis"
          description="Interested in buying or selling? Our team can provide a detailed analysis of current market conditions for your property type and target neighborhoods."
          primaryCTA={{ text: "Request Analysis", href: "#contact-form" }}
          secondaryCTA={{ text: "View Properties", href: "/properties" }}
        />
      </Container>
    </>
  )
}
