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
  title: "Cinnamon Shore Homes for Sale | Port Aransas Master-Planned Community",
  description:
    "Discover Cinnamon Shore, Port Aransas's premier master-planned beach community. New Urbanist design, beach access, vibrant community life. Homes from $800K to $2.5M+.",
  keywords: [
    "Cinnamon Shore homes for sale",
    "Cinnamon Shore Port Aransas",
    "Cinnamon Shore real estate",
    "Port Aransas master planned community",
    "Cinnamon Shore beach homes",
  ],
  openGraph: {
    title: "Cinnamon Shore Homes for Sale | Port Aransas Master-Planned Community",
    description:
      "Discover Cinnamon Shore, Port Aransas's premier master-planned beach community.",
    type: "website",
  },
}

export default function CinnamonShorePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Cinnamon Shore" },
  ]

  const stats = [
    { value: "$800K+", label: "Starting price" },
    { value: "500+", label: "Homes" },
    { value: "2006", label: "Established" },
    { value: "Walk", label: "to beach" },
  ]

  return (
    <>
      <SEOPageHero
        title="Cinnamon Shore"
        subtitle="Port Aransas's premier New Urbanist beach community where coastal charm meets thoughtful design"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Cinnamon Shore represents the pinnacle of Texas coastal living. This
                award-winning master-planned community brings New Urbanist design
                principles to the beach, creating a walkable, vibrant neighborhood
                where colorful cottages, tree-lined streets, and community gathering
                spaces foster genuine connection among residents.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Community Overview</h2>
              <p>
                Developed by the same team behind Seaside, Florida, Cinnamon Shore
                launched in 2006 and has grown into Port Aransas&apos;s most distinctive
                neighborhood. The community spans two phases—North and South—offering
                over 500 homes connected by pedestrian-friendly streets and dedicated
                beach walkovers.
              </p>
              <p>
                The development emphasizes outdoor living, with homes featuring spacious
                porches, rooftop decks, and outdoor showers. Streets are designed for
                people first, with narrow lanes that slow traffic and wide sidewalks
                that encourage walking and biking. Golf carts are the preferred mode
                of transportation here.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                New Urbanist Design
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                New Urbanism emphasizes walkability, mixed-use spaces, and human-scale
                architecture. At Cinnamon Shore, this means homes are close together
                with porches facing the street, encouraging interaction and creating
                a genuine neighborhood feel rarely found in modern developments.
              </p>
            </HighlightBox>

            <ContentSection id="architecture">
              <h2>Architecture &amp; Home Styles</h2>
              <p>
                Cinnamon Shore homes follow strict architectural guidelines that ensure
                cohesive aesthetics while allowing individual expression. You&apos;ll find
                a cheerful palette of coastal colors—sea foam greens, coral pinks,
                sky blues, and sunny yellows—adorning elevated cottages with metal
                roofs and classic Gulf Coast details.
              </p>
              <p>
                Home sizes range from cozy two-bedroom cottages around 1,200 square
                feet to expansive five-bedroom residences exceeding 4,000 square feet.
                All homes are elevated on pilings to meet flood requirements and
                maximize Gulf breezes, with ground-level parking and storage.
              </p>

              <h3>Popular Home Features</h3>
              <ul>
                <li>Elevated living spaces with Gulf views</li>
                <li>Wrap-around porches and rooftop decks</li>
                <li>Open floor plans for indoor-outdoor living</li>
                <li>Hurricane-rated windows and doors</li>
                <li>Designer kitchens with premium appliances</li>
                <li>Multiple outdoor showers</li>
              </ul>
            </ContentSection>

            <ContentSection id="amenities">
              <h2>Community Amenities</h2>
              <p>
                Cinnamon Shore offers resort-caliber amenities that make every day
                feel like vacation:
              </p>
              <ul>
                <li><strong>Beach Access</strong> — Dedicated walkovers to the Gulf beach</li>
                <li><strong>Community Pools</strong> — Multiple pools throughout the community</li>
                <li><strong>The Dune</strong> — Beach club and restaurant on the Gulf</li>
                <li><strong>Town Center</strong> — Shops, dining, and gathering spaces</li>
                <li><strong>Fitness Center</strong> — Full gym facilities</li>
                <li><strong>Event Lawn</strong> — Hosts concerts, movies, and community events</li>
                <li><strong>Playground</strong> — Family-friendly play areas</li>
              </ul>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Cinnamon Shore Lifestyle</h2>
              <p>
                Life at Cinnamon Shore centers on community and outdoor living. Morning
                might start with yoga on the event lawn, followed by a bike ride to
                the beach. Afternoons bring pool time and porch sitting. Evenings
                feature sunset watching, communal dinners, and the kind of spontaneous
                socializing that happens when neighbors actually know each other.
              </p>
              <p>
                The community hosts regular events including concerts, outdoor movies,
                holiday celebrations, and fitness classes. The Town Center provides
                convenient shopping and dining without leaving the neighborhood.
              </p>
            </ContentSection>

            <ContentSection id="rental-potential">
              <h2>Rental Potential</h2>
              <p>
                Cinnamon Shore properties are highly sought-after as vacation rentals.
                The community&apos;s amenities, beach access, and distinctive character
                command premium rental rates. Well-managed properties can generate
                substantial income, making this an attractive investment opportunity.
              </p>
              <p>
                Professional property management is available, and the community has
                established rental guidelines that maintain quality while allowing
                owners to maximize their investment. High season (summer and spring
                break) sees particularly strong demand.
              </p>
            </ContentSection>

            <ContentSection id="real-estate">
              <h2>Real Estate &amp; Pricing</h2>
              <p>
                Cinnamon Shore homes command premium prices reflecting the community&apos;s
                quality and desirability. Current pricing typically ranges from
                $800,000 for smaller cottages to over $2.5 million for larger
                waterfront or prime location homes.
              </p>
              <p>
                Inventory is limited as homeowners tend to hold their properties
                long-term. New construction lots occasionally become available in
                the developing sections. Given the community&apos;s reputation and
                limited supply, properties typically sell quickly when listed.
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Price Range:</strong> $800,000 - $2,500,000+</li>
                  <li><strong>Average Price/Sq Ft:</strong> $550 - $700</li>
                  <li><strong>Average Days on Market:</strong> 60-90 days</li>
                  <li><strong>HOA Fees:</strong> Contact for current rates</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Interested in Cinnamon Shore?"
          description="Browse available properties or speak with our team about finding your perfect beach cottage in this exceptional community."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
