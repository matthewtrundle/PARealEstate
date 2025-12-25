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
  title: "Downtown Port Aransas Homes | Historic Charm & Walkable Living",
  description:
    "Discover downtown Port Aransas real estate. Historic charm, walkable streets, local shops and restaurants. Experience authentic Port A living from $400K to $1.5M.",
  keywords: [
    "downtown Port Aransas homes",
    "Port Aransas downtown real estate",
    "walkable beach town Texas",
    "Port A homes for sale",
    "historic Port Aransas property",
  ],
  openGraph: {
    title: "Downtown Port Aransas Homes | Historic Charm & Walkable Living",
    description:
      "Discover downtown Port Aransas - historic charm and walkable coastal living.",
    type: "website",
  },
}

export default function DowntownPortAransasPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Downtown Port Aransas" },
  ]

  const stats = [
    { value: "$400K+", label: "Starting price" },
    { value: "Walk", label: "to everything" },
    { value: "Historic", label: "Character" },
    { value: "Near", label: "Ferry landing" },
  ]

  return (
    <>
      <SEOPageHero
        title="Downtown Port Aransas"
        subtitle="Where historic Texas coastal charm meets walkable living—restaurants, shops, and the beach all within reach"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Downtown Port Aransas offers something increasingly rare on the Texas
                coast: authentic small-town character in a walkable beach setting.
                Here you&apos;ll find historic cottages, local shops, excellent restaurants,
                and the iconic ferry landing—all connected by streets where golf
                carts outnumber cars and neighbors wave as they pass.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Area Overview</h2>
              <p>
                Downtown Port Aransas is the historic heart of the community, centered
                around the streets near the ferry landing and stretching toward the
                beach. This is where Port Aransas&apos;s story began, and it remains
                the most characterful and walkable part of town.
              </p>
              <p>
                Unlike the planned communities on the island, downtown evolved
                organically over decades. You&apos;ll find a mix of historic homes,
                renovated cottages, newer construction, and commercial properties
                creating a varied and interesting streetscape.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                True Walkability
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Downtown Port Aransas is one of the few truly walkable beach towns
                in Texas. Residents can walk to restaurants, shops, the beach, and
                the ferry. Many locals use golf carts as their primary transportation,
                embracing the island lifestyle to its fullest.
              </p>
            </HighlightBox>

            <ContentSection id="character">
              <h2>Downtown Character</h2>
              <p>
                The downtown area captures the essence of what makes Port Aransas
                special. Weathered beach cottages sit alongside renovated homes,
                creating an eclectic architectural mix that reflects the town&apos;s
                evolution. Local businesses—many family-owned for generations—line
                the main streets.
              </p>
              <p>
                Key downtown attractions include:
              </p>
              <ul>
                <li><strong>The Ferry Landing</strong> — Free 24-hour ferry to Aransas Pass</li>
                <li><strong>Historic Tarpon Inn</strong> — Oldest building on the island (1886)</li>
                <li><strong>Local Shops</strong> — Unique boutiques and souvenir stores</li>
                <li><strong>Restaurants &amp; Bars</strong> — Fresh seafood to casual beach bars</li>
                <li><strong>Art Galleries</strong> — Local artists showcase coastal works</li>
                <li><strong>Harbor Views</strong> — Working harbor and marina activity</li>
              </ul>
            </ContentSection>

            <ContentSection id="property-types">
              <h2>Property Types</h2>

              <h3>Historic Cottages</h3>
              <p>
                Original beach cottages from the mid-20th century offer character
                that can&apos;t be replicated. Many have been lovingly restored while
                maintaining their historic charm. These properties appeal to buyers
                who value authenticity over modern amenities.
              </p>

              <h3>Renovated Homes</h3>
              <p>
                Many downtown properties have been thoughtfully renovated, combining
                historic character with modern conveniences. These homes often
                feature updated kitchens and bathrooms while preserving exterior
                charm and neighborhood character.
              </p>

              <h3>New Construction</h3>
              <p>
                Newer elevated homes can be found throughout downtown, typically
                on lots where older structures were damaged by storms or demolished.
                These offer modern coastal design while maintaining appropriate
                scale for the neighborhood.
              </p>

              <h3>Mixed-Use &amp; Commercial</h3>
              <p>
                Downtown includes commercial properties and mixed-use buildings,
                some offering residential units above retail space—a classic
                small-town arrangement that adds to the area&apos;s vitality.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Downtown Lifestyle</h2>
              <p>
                Living downtown means being at the center of Port Aransas life.
                Walk to breakfast at a local café, stroll the shops, catch the
                ferry to the mainland, or head to the beach—it&apos;s all within easy
                reach. The rhythm of the town unfolds around you.
              </p>
              <p>
                The downtown area is especially appealing to those who want to
                experience Port Aransas as locals do. You&apos;ll recognize your
                neighbors, develop relationships with local business owners, and
                feel connected to the community in ways that newer developments
                can&apos;t replicate.
              </p>
            </ContentSection>

            <ContentSection id="considerations">
              <h2>Buying Considerations</h2>
              <ul>
                <li><strong>Lot Sizes</strong> — Generally smaller than newer developments</li>
                <li><strong>Parking</strong> — Can be limited; consider property-specific options</li>
                <li><strong>Older Homes</strong> — May need updates; inspect carefully</li>
                <li><strong>Flood Zones</strong> — Most properties in flood zones; elevation matters</li>
                <li><strong>Activity Level</strong> — Closer to town activity and tourism</li>
                <li><strong>Character</strong> — Unique properties with individual personalities</li>
              </ul>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Downtown pricing varies significantly based on condition, lot size,
                and proximity to the beach or harbor. The area offers some of the
                more affordable options in Port Aransas, along with premium
                properties for those seeking prime locations.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Historic/Renovation Projects:</strong> $350,000 - $600,000</li>
                  <li><strong>Updated Homes:</strong> $500,000 - $900,000</li>
                  <li><strong>Premium Locations:</strong> $800,000 - $1,500,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $350 - $500</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Experience Downtown Port Aransas"
          description="Discover properties with authentic character in the heart of Texas's most beloved beach town."
          primaryCTA={{ text: "View Properties", href: "/properties?neighborhood=downtown" }}
        />
      </Container>
    </>
  )
}
