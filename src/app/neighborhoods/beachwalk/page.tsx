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
  title: "Beachwalk Homes for Sale | Family-Friendly Port Aransas Community",
  description:
    "Discover Beachwalk, a family-friendly Port Aransas community with resort-style pools, beach access, and well-maintained amenities. Homes from $450K to $1.2M.",
  keywords: [
    "Beachwalk Port Aransas",
    "Beachwalk homes for sale",
    "family beach community Texas",
    "Port Aransas family homes",
    "vacation rental property Port Aransas",
  ],
  openGraph: {
    title: "Beachwalk Homes for Sale | Family-Friendly Port Aransas Community",
    description:
      "Discover Beachwalk - a family-friendly beach community with resort amenities.",
    type: "website",
  },
}

export default function BeachwalkPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Beachwalk" },
  ]

  const stats = [
    { value: "$450K+", label: "Starting price" },
    { value: "Resort", label: "Style pools" },
    { value: "Close", label: "Beach access" },
    { value: "Strong", label: "Rental demand" },
  ]

  return (
    <>
      <SEOPageHero
        title="Beachwalk"
        subtitle="Family-friendly beach community with resort-style amenities, convenient beach access, and strong vacation rental performance"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Beachwalk offers the perfect blend of beach community living and
                resort-style amenities. This well-established neighborhood is
                particularly popular with families and vacation rental investors,
                thanks to its excellent pool facilities, convenient beach access,
                and well-maintained common areas.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Community Overview</h2>
              <p>
                Beachwalk has established itself as one of Port Aransas&apos;s most
                sought-after family-friendly communities. The neighborhood&apos;s
                thoughtful design prioritizes outdoor living and community gathering,
                with multiple pool areas serving as natural hubs for resident
                interaction.
              </p>
              <p>
                The community is conveniently located with easy beach access while
                remaining close to Port Aransas&apos;s shops, restaurants, and attractions.
                This combination of beach convenience and town proximity makes it
                particularly attractive to both full-time residents and vacation
                rental guests.
              </p>
            </ContentSection>

            <ContentSection id="amenities">
              <h2>Community Amenities</h2>
              <p>
                Beachwalk&apos;s amenities rival those of resort properties:
              </p>
              <ul>
                <li><strong>Multiple Pools</strong> — Resort-style pools throughout the community</li>
                <li><strong>Hot Tubs</strong> — Relaxation after a day at the beach</li>
                <li><strong>Beach Access</strong> — Convenient paths to the Gulf beach</li>
                <li><strong>Fitness Center</strong> — Equipment for staying active</li>
                <li><strong>Playground</strong> — Safe play areas for children</li>
                <li><strong>Grilling Areas</strong> — Outdoor cooking and gathering spaces</li>
                <li><strong>Landscaped Grounds</strong> — Professionally maintained common areas</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Family Favorite
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Beachwalk&apos;s combination of pools, playground, and beach access
                makes it particularly popular with families. Kids love the pools,
                parents appreciate the safe, walkable environment, and everyone
                enjoys the beach just minutes away.
              </p>
            </HighlightBox>

            <ContentSection id="home-styles">
              <h2>Home Styles</h2>
              <p>
                Beachwalk offers a variety of home styles to suit different needs
                and budgets:
              </p>

              <h3>Townhomes &amp; Condos</h3>
              <p>
                More affordable entry points into the community, these attached
                homes offer 2-3 bedrooms with shared walls and lower maintenance
                requirements. Ideal for vacation rentals or couples.
              </p>

              <h3>Single-Family Homes</h3>
              <p>
                Detached homes ranging from modest 3-bedroom layouts to larger
                family homes with 4-5 bedrooms. Most feature elevated construction
                with ground-level parking and outdoor living spaces.
              </p>

              <h3>Common Features</h3>
              <ul>
                <li>Elevated construction for flood protection</li>
                <li>Open floor plans with coastal finishes</li>
                <li>Outdoor decks and patios</li>
                <li>Covered parking</li>
                <li>Outdoor showers</li>
              </ul>
            </ContentSection>

            <ContentSection id="rental-investment">
              <h2>Vacation Rental Investment</h2>
              <p>
                Beachwalk is one of the strongest performing vacation rental areas
                in Port Aransas. The family-friendly amenities, beach proximity,
                and well-maintained grounds make properties here highly attractive
                to rental guests.
              </p>
              <p>
                Key rental advantages include:
              </p>
              <ul>
                <li>High demand during summer and spring break</li>
                <li>Family groups seeking pool amenities</li>
                <li>Repeat guests who know and love the community</li>
                <li>Professional management options available</li>
                <li>Established rental track record</li>
              </ul>
              <p>
                Well-managed 3-bedroom properties can generate significant rental
                income, particularly during peak seasons. The community&apos;s
                reputation helps drive bookings without heavy marketing investment.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Beachwalk Lifestyle</h2>
              <p>
                Daily life at Beachwalk balances beach time with community amenities.
                Mornings might bring a walk to the beach or laps in the pool.
                Afternoons are for lounging by the pool or building sandcastles
                with the kids. Evenings feature grilling with neighbors or a short
                trip to downtown Port Aransas for dinner.
              </p>
              <p>
                The community attracts a diverse mix of full-time residents, second
                homeowners, and vacation renters. The atmosphere is friendly and
                family-oriented, with the pools serving as natural gathering places.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Condos/Townhomes:</strong> $350,000 - $550,000</li>
                  <li><strong>Single-Family Homes:</strong> $500,000 - $1,200,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $350 - $450</li>
                  <li><strong>HOA Fees:</strong> Cover amenities and common area maintenance</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Experience Beachwalk Living"
          description="Browse available homes in this family-friendly community or let us help you find the perfect beach property."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
