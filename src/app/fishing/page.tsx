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
  title: "Fishing in Port Aransas | The Fishing Capital of Texas",
  description:
    "Experience world-class fishing in Port Aransas, Texas - the Fishing Capital of Texas. Deep sea charters, bay fishing, pier fishing, and more. Species include redfish, tarpon, and offshore game fish.",
  keywords: [
    "Port Aransas fishing",
    "Fishing Capital of Texas",
    "deep sea fishing Port Aransas",
    "Port Aransas fishing charters",
    "Texas Gulf fishing",
    "redfish Port Aransas",
  ],
  openGraph: {
    title: "Fishing in Port Aransas | The Fishing Capital of Texas",
    description:
      "Experience world-class fishing in Port Aransas - deep sea, bay, and pier fishing for all skill levels.",
    type: "website",
  },
}

export default function FishingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas", href: "/about-port-aransas" },
    { label: "Fishing" },
  ]

  const fishingStats = [
    { value: "#1", label: "Texas Fishing Destination" },
    { value: "100+", label: "Charter Services" },
    { value: "Year-Round", label: "Fishing Season" },
    { value: "50+", label: "Species Available" },
  ]

  return (
    <>
      <SEOPageHero
        title="The Fishing Capital of Texas"
        subtitle="From offshore giants to inshore favorites, Port Aransas offers world-class fishing for anglers of every level"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas has earned its title as the &ldquo;Fishing Capital of Texas&rdquo;
                through generations of exceptional angling opportunities. Whether you prefer
                battling offshore game fish, stalking redfish in the shallows, or simply
                casting from the jetties at sunset, Port A delivers unforgettable fishing
                experiences year-round.
              </p>
            </ContentSection>

            <StatsGrid stats={fishingStats} />

            <ContentSection id="offshore">
              <h2>Offshore &amp; Deep Sea Fishing</h2>
              <p>
                Port Aransas serves as the gateway to some of the Gulf of Mexico&apos;s finest
                offshore fishing grounds. Charter boats depart daily from the harbor, heading
                to oil platforms, artificial reefs, and blue water to pursue trophy game fish.
              </p>
              <p>
                Offshore anglers target species including red snapper (during open season),
                kingfish, cobia, mahi-mahi, wahoo, and yellowfin tuna. Extended trips to
                the deeper waters can produce sailfish, marlin, and swordfish. The Gulf&apos;s
                warm waters ensure productive fishing throughout the year, with peak seasons
                varying by species.
              </p>

              <h3>Popular Offshore Species</h3>
              <ul>
                <li><strong>Red Snapper</strong> — Season varies; check regulations</li>
                <li><strong>King Mackerel</strong> — Year-round, best March-October</li>
                <li><strong>Mahi-Mahi (Dorado)</strong> — May through September</li>
                <li><strong>Yellowfin Tuna</strong> — Summer months in deep water</li>
                <li><strong>Cobia</strong> — Spring migration brings excellent action</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Charter Fishing Options
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Port Aransas offers charter options for every budget—from half-day bay
                trips perfect for families to multi-day offshore expeditions for serious
                anglers. Most charters provide all tackle, bait, and licenses.
              </p>
            </HighlightBox>

            <ContentSection id="bay-fishing">
              <h2>Bay &amp; Inshore Fishing</h2>
              <p>
                The bays, channels, and grass flats surrounding Port Aransas offer exceptional
                inshore fishing for redfish, speckled trout, black drum, and flounder. These
                calmer waters are ideal for wading, kayak fishing, or drift fishing with a
                guide.
              </p>
              <p>
                Corpus Christi Bay, Redfish Bay, and the Lydia Ann Channel provide diverse
                habitats that hold fish year-round. Experienced guides know the seasonal
                patterns and can put you on fish whether you&apos;re sight-casting for tailing
                reds or working the grass beds for trophy trout.
              </p>

              <h3>Inshore Target Species</h3>
              <ul>
                <li><strong>Redfish (Red Drum)</strong> — Year-round; fall is prime</li>
                <li><strong>Speckled Trout</strong> — Best spring and fall</li>
                <li><strong>Black Drum</strong> — Spring spawning run is legendary</li>
                <li><strong>Flounder</strong> — Fall run provides excellent action</li>
                <li><strong>Sheepshead</strong> — Winter months around structures</li>
              </ul>
            </ContentSection>

            <ContentSection id="jetty-fishing">
              <h2>Jetty &amp; Pier Fishing</h2>
              <p>
                The Port Aransas jetties are among the most productive shore-fishing spots
                on the Texas coast. The granite boulders attract baitfish, which in turn
                draw game fish close to shore. Anglers of all ages and skill levels can
                enjoy fishing from the jetties with minimal equipment.
              </p>
              <p>
                The south jetty is accessible by vehicle and foot, while the north jetty
                requires boat access. Common catches include speckled trout, redfish,
                Spanish mackerel, jack crevalle, and occasional tarpon. The jetties also
                provide excellent opportunities for catching bait, particularly mullet
                and piggy perch.
              </p>

              <h3>Pier Options</h3>
              <ul>
                <li><strong>Horace Caldwell Pier</strong> — Lighted, extends into the Gulf</li>
                <li><strong>South Jetty</strong> — Drive-on accessible, excellent variety</li>
                <li><strong>Charlie&apos;s Pasture</strong> — Popular wading spot</li>
              </ul>
            </ContentSection>

            <ContentSection id="surf-fishing">
              <h2>Surf Fishing</h2>
              <p>
                Port Aransas offers 18 miles of Gulf beach, all of which are accessible
                for surf fishing. Beach anglers target pompano, whiting, red drum, and
                sharks. The ability to drive on most of the beach makes it easy to find
                productive spots away from the crowds.
              </p>
              <p>
                Fall is particularly productive for surf fishing, when migrating fish
                move along the beach in large numbers. Early morning and evening hours
                typically produce the best action, though shark fishing picks up after dark.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Fishing License Requirements
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Texas requires a fishing license for ages 17 and older. Saltwater
                endorsements are required for Gulf fishing. Licenses can be purchased
                online or at local tackle shops. Charter customers are typically covered
                by the boat&apos;s license.
              </p>
            </HighlightBox>

            <ContentSection id="tarpon">
              <h2>Tarpon: The Silver King</h2>
              <p>
                No discussion of Port Aransas fishing is complete without mentioning tarpon.
                The &ldquo;Silver King&rdquo; gave the town its original name and drew sportsmen from
                across the nation during the golden age of tarpon fishing in the late 1800s
                and early 1900s.
              </p>
              <p>
                While tarpon populations have fluctuated over the years, these magnificent
                fish still visit Port Aransas waters, particularly during summer months.
                Catching a tarpon from the jetties remains one of fishing&apos;s great thrills,
                connecting modern anglers with over a century of Port Aransas fishing history.
              </p>
            </ContentSection>

            <ContentSection id="seasons">
              <h2>Best Fishing Seasons</h2>
              <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="text-left p-4 font-display text-primary-900">Season</th>
                      <th className="text-left p-4 font-display text-primary-900">Best Targets</th>
                      <th className="text-left p-4 font-display text-primary-900">Conditions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-4 font-medium">Spring (Mar-May)</td>
                      <td className="p-4">Black drum, cobia, trout</td>
                      <td className="p-4">Warming water activates feeding</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Summer (Jun-Aug)</td>
                      <td className="p-4">Offshore species, tarpon, sharks</td>
                      <td className="p-4">Calm seas for offshore trips</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Fall (Sep-Nov)</td>
                      <td className="p-4">Redfish, flounder, bull reds</td>
                      <td className="p-4">Prime season overall</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Winter (Dec-Feb)</td>
                      <td className="p-4">Sheepshead, drum, big trout</td>
                      <td className="p-4">Fewer crowds, cold fronts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Live the Fishing Lifestyle"
          description="Let us help you find properties with boat access, fishing piers, and proximity to the best fishing grounds."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
