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
  title: "Port Aransas Beaches | 18 Miles of Gulf Coast Paradise",
  description:
    "Discover the beautiful beaches of Port Aransas and Mustang Island. Drive-on beach access, swimming, surfing, and family-friendly shores. Ranked among America's Top 25 beaches.",
  keywords: [
    "Port Aransas beaches",
    "Mustang Island beaches",
    "Texas Gulf beaches",
    "beach driving Port Aransas",
    "best Texas beaches",
    "Port A beach access",
  ],
  openGraph: {
    title: "Port Aransas Beaches | 18 Miles of Gulf Coast Paradise",
    description:
      "Discover 18 miles of beautiful Gulf beaches on Mustang Island. Drive-on access, swimming, and more.",
    type: "website",
  },
}

export default function BeachesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas", href: "/about-port-aransas" },
    { label: "Beaches" },
  ]

  const beachStats = [
    { value: "18 mi", label: "of Gulf beaches" },
    { value: "Top 25", label: "U.S. beach ranking" },
    { value: "24/7", label: "Beach access" },
    { value: "Free", label: "Parking available" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Beaches"
        subtitle="Eighteen miles of wide, sandy Gulf beaches where you can swim, surf, fish, or simply relax in Texas coastal paradise"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas and Mustang Island offer some of the most accessible and
                beautiful beaches on the Texas Gulf Coast. With 18 miles of wide, sandy
                shoreline, there&apos;s always room to spread out and enjoy the beach—whether
                you prefer the action near the jetties or the solitude of a distant stretch
                of sand.
              </p>
            </ContentSection>

            <StatsGrid stats={beachStats} />

            <ContentSection id="beach-access">
              <h2>Beach Access &amp; Driving</h2>
              <p>
                One of Port Aransas&apos;s unique features is the ability to drive directly
                on the beach. Most of the 18-mile stretch allows vehicle access, letting
                you set up camp exactly where you want. Beach access roads are located
                throughout town, with the most popular entries at the end of Avenue G,
                Access Road 1A, and at Mustang Island State Park.
              </p>
              <p>
                While beach driving is permitted, regulations require staying below the
                vegetation line and respecting areas closed for sea turtle nesting
                (typically March through August). A current vehicle registration and
                insurance are required for beach driving.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Beach Driving Tips
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Reduce tire pressure to 15-20 PSI for better traction in sand. 4WD or
                AWD vehicles are recommended but not required on packed sand. Avoid
                driving in soft, dry sand above the high-tide line. Bring a shovel and
                recovery boards just in case.
              </p>
            </HighlightBox>

            <ContentSection id="beach-areas">
              <h2>Beach Areas</h2>

              <h3>Downtown Beaches (Access Roads 1-1A)</h3>
              <p>
                The beaches closest to downtown Port Aransas offer the most amenities,
                including restrooms, showers, and nearby restaurants. These areas can
                get crowded on weekends and holidays but are perfect for families who
                want easy access to town. The Horace Caldwell Pier extends into the
                Gulf here, offering fishing and great views.
              </p>

              <h3>Beach Mile Markers 0-5</h3>
              <p>
                Heading south from downtown, the beach becomes progressively less
                crowded. This stretch offers a good balance of accessibility and
                solitude. Many locals prefer these areas for their combination of
                space and reasonable proximity to town.
              </p>

              <h3>Mustang Island State Park (Mile Markers 5+)</h3>
              <p>
                The state park encompasses 5 miles of Gulf beach and offers the most
                pristine beach experience in the area. Day-use fees apply, but the
                cleaner sand, maintained facilities, and park ranger presence make
                it worth the small cost. Camping is available for those who want to
                spend the night on the beach.
              </p>

              <h3>Padre Island National Seashore</h3>
              <p>
                Beyond Mustang Island, the Padre Island National Seashore offers over
                60 miles of undeveloped beach—the longest stretch of undeveloped barrier
                island in the world. Access requires traveling through Corpus Christi,
                but the pristine beaches and excellent birding make it worth the trip.
              </p>
            </ContentSection>

            <ContentSection id="activities">
              <h2>Beach Activities</h2>

              <h3>Swimming</h3>
              <p>
                The Gulf waters at Port Aransas are generally warm and swimmable from
                April through October. Water temperatures peak around 85°F in summer.
                The beaches have a gradual slope, making them suitable for wading and
                swimming. No lifeguards are on duty, so swim at your own risk.
              </p>

              <h3>Surfing &amp; Water Sports</h3>
              <p>
                While not known for big waves, Port Aransas offers fun surf during
                swells, particularly near the jetties where waves tend to be larger.
                Paddleboarding, kiteboarding, and kayaking are popular in the calmer
                bay waters. Several outfitters in town rent equipment and offer lessons.
              </p>

              <h3>Shell Collecting</h3>
              <p>
                The beaches yield excellent shelling, particularly after storms when
                fresh shells wash ashore. Common finds include lightning whelks, sand
                dollars, and various clam shells. The best shelling is typically early
                morning at low tide, especially on the less-trafficked stretches.
              </p>

              <h3>Wildlife Watching</h3>
              <p>
                The beaches are home to diverse wildlife, from ghost crabs scurrying
                at night to dolphins surfing the waves. Sea turtles nest on these
                beaches from April through July—if you spot a nest, keep your distance
                and report it to the local turtle patrol. Bird watching is excellent,
                particularly for shorebirds and migrating species.
              </p>
            </ContentSection>

            <ContentSection id="amenities">
              <h2>Beach Amenities &amp; Services</h2>
              <ul>
                <li><strong>Restrooms &amp; Showers</strong> — Available at main beach access points</li>
                <li><strong>Beach Equipment Rentals</strong> — Umbrellas, chairs, and watersports gear</li>
                <li><strong>Food &amp; Drinks</strong> — Beach vendors and nearby restaurants</li>
                <li><strong>Beach Driving Permits</strong> — Available at local merchants</li>
                <li><strong>Lifeguard Services</strong> — Not provided; swim at your own risk</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Beach Safety
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Always check conditions before swimming. Rip currents can occur,
                especially near the jetties and during incoming tides. If caught in
                a rip current, swim parallel to shore until free. Portuguese man-of-war
                occasionally wash up—avoid contact and watch for them in the water.
              </p>
            </HighlightBox>

            <ContentSection id="best-times">
              <h2>Best Times to Visit</h2>
              <p>
                The beaches are enjoyable year-round, but each season offers a different
                experience:
              </p>
              <ul>
                <li><strong>Spring (March-May)</strong> — Warming weather, spring break crowds mid-March</li>
                <li><strong>Summer (June-August)</strong> — Peak season, warm water, family-friendly</li>
                <li><strong>Fall (September-November)</strong> — Perfect weather, fewer crowds, great fishing</li>
                <li><strong>Winter (December-February)</strong> — Peaceful solitude, occasional cold fronts</li>
              </ul>
              <p>
                Many locals consider fall the best time for the beach—the water is still
                warm, summer crowds have departed, and the weather is typically ideal.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Wake Up to Beach Views Every Day"
          description="Find your beachfront dream home or Gulf-view property in Port Aransas. Beach access is just steps away."
        />
      </Container>
    </>
  )
}
