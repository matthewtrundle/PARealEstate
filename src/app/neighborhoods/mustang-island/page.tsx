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
  title: "Mustang Island Real Estate | Beachfront Homes & Gulf Views",
  description:
    "Explore Mustang Island real estate in Port Aransas. Beachfront properties, Gulf views, and proximity to Mustang Island State Park. Homes from $500K to $3M+.",
  keywords: [
    "Mustang Island real estate",
    "Mustang Island homes for sale",
    "beachfront homes Port Aransas",
    "Gulf view property Texas",
    "Mustang Island State Park homes",
  ],
  openGraph: {
    title: "Mustang Island Real Estate | Beachfront Homes & Gulf Views",
    description:
      "Explore Mustang Island real estate - beachfront properties with stunning Gulf views.",
    type: "website",
  },
}

export default function MustangIslandPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Mustang Island" },
  ]

  const stats = [
    { value: "$500K+", label: "Starting price" },
    { value: "18 mi", label: "of beach" },
    { value: "Direct", label: "Gulf access" },
    { value: "5 mi", label: "State Park" },
  ]

  return (
    <>
      <SEOPageHero
        title="Mustang Island"
        subtitle="Barrier island living with direct Gulf access, stunning sunrises, and the natural beauty of the Texas coast"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Mustang Island stretches 18 miles along the Texas Gulf Coast,
                offering some of the most desirable beachfront real estate in the
                state. From the active waters near Port Aransas to the pristine
                shores of Mustang Island State Park, this barrier island delivers
                the quintessential Texas beach experience.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="overview">
              <h2>Island Overview</h2>
              <p>
                Mustang Island encompasses the entire barrier island on which Port
                Aransas sits, but &ldquo;Mustang Island&rdquo; as a real estate designation
                typically refers to the less developed areas south of the main town,
                extending toward Mustang Island State Park and beyond.
              </p>
              <p>
                This area offers a mix of established beachfront homes, newer
                construction, and vacant lots with Gulf views. The feel is more
                relaxed and natural than the town center, with wider spaces between
                properties and easier beach access.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Beach Access
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Mustang Island offers exceptional beach access with numerous public
                access points and the ability to drive on most of the beach. Many
                properties feature private beach walkovers or direct beachfront
                locations.
              </p>
            </HighlightBox>

            <ContentSection id="property-types">
              <h2>Property Types</h2>

              <h3>Beachfront Homes</h3>
              <p>
                The most coveted properties sit directly on the Gulf, offering
                unobstructed sunrise views and the sound of waves from your porch.
                These homes command premium prices but deliver an unmatched coastal
                living experience. Most are elevated on pilings with large decks
                oriented toward the water.
              </p>

              <h3>Second-Row &amp; Inland Properties</h3>
              <p>
                Properties across from the beach or slightly inland offer significant
                value while maintaining easy beach access. Many second-row homes
                have rooftop decks with Gulf views at a fraction of beachfront prices.
              </p>

              <h3>New Construction</h3>
              <p>
                Several developments offer new construction opportunities with modern
                coastal architecture, elevated designs, and premium finishes. These
                homes meet current building codes and typically have lower insurance
                costs than older properties.
              </p>
            </ContentSection>

            <ContentSection id="state-park">
              <h2>Mustang Island State Park</h2>
              <p>
                The 3,954-acre Mustang Island State Park occupies the southern portion
                of the island, offering residents and visitors access to five miles
                of pristine Gulf beach, paddling trails, camping, and nature
                observation. The park is a major draw for nature enthusiasts and
                provides protected natural space that enhances the appeal of nearby
                real estate.
              </p>
              <p>
                Properties near the state park enjoy the benefits of permanent open
                space and undeveloped coastline—an increasingly rare commodity on
                the Texas coast.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>Mustang Island Lifestyle</h2>
              <p>
                Living on Mustang Island means embracing a slower pace centered on
                nature and outdoor recreation. Mornings might bring a beach walk
                or surf session, afternoons feature fishing from the shore or kayaking
                in the bay, and evenings deliver spectacular Gulf sunsets.
              </p>
              <p>
                The location provides privacy and natural beauty while remaining
                convenient to Port Aransas&apos;s restaurants, shops, and services—
                typically a short drive or golf cart ride away.
              </p>
            </ContentSection>

            <ContentSection id="considerations">
              <h2>Buying Considerations</h2>
              <ul>
                <li><strong>Elevation</strong> — Critical for flood insurance; newer elevated homes have advantages</li>
                <li><strong>Beach Erosion</strong> — Some areas experience erosion; research shoreline history</li>
                <li><strong>Insurance</strong> — Beachfront properties require substantial windstorm and flood coverage</li>
                <li><strong>Maintenance</strong> — Salt air and wind demand regular upkeep</li>
                <li><strong>Access</strong> — Some areas are more remote; consider distance to services</li>
              </ul>
            </ContentSection>

            <ContentSection id="pricing">
              <h2>Real Estate Pricing</h2>
              <p>
                Mustang Island offers a broad range of price points depending on
                location, size, and proximity to the Gulf:
              </p>

              <div className="my-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-2">
                  Current Market Snapshot
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li><strong>Gulf-Front Homes:</strong> $1,200,000 - $3,000,000+</li>
                  <li><strong>Second-Row/Beach Access:</strong> $600,000 - $1,200,000</li>
                  <li><strong>Inland Properties:</strong> $400,000 - $700,000</li>
                  <li><strong>Vacant Lots:</strong> $200,000 - $800,000+ (location dependent)</li>
                </ul>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Your Place on Mustang Island"
          description="From beachfront estates to cozy coastal retreats, discover the property that fits your island lifestyle."
        />
      </Container>
    </>
  )
}
