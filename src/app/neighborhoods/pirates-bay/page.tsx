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
  title: "Pirates Bay Homes for Sale | Waterfront & Boat Access in Port Aransas",
  description:
    "Discover Pirates Bay, Port Aransas's premier waterfront community with canal-front homes, private boat slips, and direct bay access. Perfect for fishing and boating enthusiasts.",
  keywords: [
    "Pirates Bay Port Aransas",
    "Pirates Bay homes for sale",
    "canal front homes Port Aransas",
    "boat access property Texas",
    "waterfront homes Port Aransas",
  ],
  openGraph: {
    title: "Pirates Bay Homes for Sale | Waterfront & Boat Access in Port Aransas",
    description:
      "Discover Pirates Bay - canal-front homes with boat access in Port Aransas.",
    type: "website",
  },
}

export default function PiratesBayPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Pirates Bay" },
  ]

  const stats = [
    { value: "$600K+", label: "Starting price" },
    { value: "Gated", label: "Community" },
    { value: "Direct", label: "Boat access" },
    { value: "Canal", label: "Front living" },
  ]

  return (
    <>
      <SEOPageHero
        title="Pirates Bay"
        subtitle="Premier waterfront living with private boat access, canal-front homes, and a gated community for serious anglers and boating families"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Pirates Bay is Port Aransas&apos;s premier destination for waterfront
                living with boat access. This gated community features canal-front
                homes where you can dock your boat in your backyard and be fishing
                the bay within minutes. For serious anglers and boating families,
                Pirates Bay delivers unmatched convenience and lifestyle.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Community Overview</h2>
              <p>
                Pirates Bay is built around a system of canals that provide protected
                deep-water access to Corpus Christi Bay and, beyond that, the Gulf
                of Mexico. The gated community offers security and privacy while
                maintaining the relaxed atmosphere that defines Port Aransas.
              </p>
              <p>
                Unlike ocean-front properties, canal-front homes in Pirates Bay
                offer calm, protected waters for docking and launching. The community
                includes boat slips, fish cleaning stations, and easy access to
                some of the best fishing grounds on the Texas coast.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Angler&apos;s Paradise
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Pirates Bay is specifically designed for fishing enthusiasts.
                Canal-front homes mean you can have your boat ready to go 24/7,
                and the community&apos;s location provides quick access to productive
                fishing grounds in both the bay and offshore.
              </p>
            </HighlightBox>

            <ContentSection id="boat-access">
              <h2>Boat Access &amp; Facilities</h2>
              <p>
                The primary attraction of Pirates Bay is its exceptional boat access:
              </p>
              <ul>
                <li><strong>Private Boat Slips</strong> — Many homes include covered boat lifts</li>
                <li><strong>Canal System</strong> — Deep water access directly from your backyard</li>
                <li><strong>Bay Access</strong> — Minutes to Corpus Christi Bay and open water</li>
                <li><strong>Fish Cleaning Stations</strong> — Community facilities for cleaning your catch</li>
                <li><strong>Fuel &amp; Supplies</strong> — Nearby marina services</li>
              </ul>
              <p>
                The canal depth accommodates most recreational boats, from bay boats
                and flats skiffs to larger offshore vessels. The protected waters
                mean you don&apos;t have to worry about wave action or weather exposure
                for your boat.
              </p>
            </ContentSection>

            <ContentSection id="home-styles">
              <h2>Home Styles &amp; Features</h2>
              <p>
                Pirates Bay homes are typically elevated coastal designs oriented
                to maximize waterfront living. Common features include:
              </p>
              <ul>
                <li>Open floor plans with water views</li>
                <li>Large decks and outdoor living spaces</li>
                <li>Covered boat lifts and fishing docks</li>
                <li>Ground-level parking and storage</li>
                <li>Hurricane-rated construction</li>
                <li>Multiple outdoor showers</li>
              </ul>
              <p>
                Homes range from approximately 1,500 to 4,000+ square feet, with
                most featuring 3-5 bedrooms. The architectural style is classic
                Texas coastal, with elevated living spaces, metal roofs, and
                durable materials designed to withstand the marine environment.
              </p>
            </ContentSection>

            <ContentSection id="community-features">
              <h2>Community Features</h2>
              <ul>
                <li><strong>Gated Entry</strong> — Security and privacy for residents</li>
                <li><strong>Community Pool</strong> — Resort-style pool for residents</li>
                <li><strong>Walking Paths</strong> — Trails throughout the community</li>
                <li><strong>Kayak Launch</strong> — Easy access for paddling</li>
                <li><strong>HOA Maintenance</strong> — Common areas professionally maintained</li>
              </ul>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Pirates Bay Lifestyle</h2>
              <p>
                Life at Pirates Bay centers on the water. A typical day might start
                with an early fishing trip—just walk to your boat and go. Mid-day
                brings pool time or kayaking in the calm canal waters. Evenings
                feature sunset views from your deck, possibly with fresh-caught
                fish on the grill.
              </p>
              <p>
                The community attracts a mix of full-time residents and second-home
                owners who share a passion for fishing and boating. The atmosphere
                is friendly and relaxed, with neighbors often gathering for dock
                parties and fish fries.
              </p>
            </ContentSection>

            <ContentSection id="investment">
              <h2>Investment Potential</h2>
              <p>
                Pirates Bay properties perform well as vacation rentals, particularly
                for fishing groups and families who want boat access. The unique
                combination of waterfront living and boat facilities commands premium
                rental rates from a dedicated audience of water enthusiasts.
              </p>
              <p>
                Properties with newer boats lifts and well-maintained docks are
                particularly attractive to renters who bring their own boats or
                want to rent one locally.
              </p>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate &amp; Pricing</h2>
              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Canal-Front Homes:</strong> $700,000 - $1,800,000</li>
                  <li><strong>Interior Lots:</strong> $500,000 - $800,000</li>
                  <li><strong>Average Price/Sq Ft:</strong> $400 - $550</li>
                  <li><strong>HOA Fees:</strong> Contact for current rates</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready for Waterfront Living?"
          description="Explore canal-front homes in Pirates Bay where your boat is always ready and the fish are waiting."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
