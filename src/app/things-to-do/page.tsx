import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Things to Do in Port Aransas | Activities, Attractions & Events",
  description:
    "Discover the best things to do in Port Aransas, Texas - beaches, fishing, dolphin watching, birding, shopping, dining, and family activities. Your complete guide to Port A attractions.",
  keywords: [
    "things to do Port Aransas",
    "Port Aransas attractions",
    "Port Aransas activities",
    "dolphin watching Port Aransas",
    "Port Aransas events",
    "family activities Port A",
  ],
  openGraph: {
    title: "Things to Do in Port Aransas | Activities, Attractions & Events",
    description:
      "Discover beaches, fishing, dolphin watching, and more in Port Aransas, Texas.",
    type: "website",
  },
}

export default function ThingsToDoPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas", href: "/about-port-aransas" },
    { label: "Things to Do" },
  ]

  return (
    <>
      <SEOPageHero
        title="Things to Do in Port Aransas"
        subtitle="From sun-drenched beaches to world-class fishing, discover everything that makes Port A a beloved Texas destination"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas offers an irresistible blend of outdoor adventure, natural
                beauty, and small-town Texas charm. Whether you&apos;re seeking adrenaline-pumping
                water sports or a lazy day on the beach, this barrier island paradise has
                something for everyone.
              </p>
            </ContentSection>

            <ContentSection id="beaches-water">
              <h2>Beaches &amp; Water Activities</h2>
              <p>
                With 18 miles of wide, sandy beaches along the Gulf of Mexico, beach time
                is at the heart of the Port Aransas experience. Drive right onto the beach,
                set up camp, and enjoy swimming, surfing, paddleboarding, or simply
                soaking up the Texas sun.
              </p>
              <ul>
                <li><strong>Swimming &amp; Wading</strong> — Warm Gulf waters from April-October</li>
                <li><strong>Surfing &amp; Boogie Boarding</strong> — Best near the jetties</li>
                <li><strong>Kayaking &amp; Paddleboarding</strong> — Calm bay waters ideal for beginners</li>
                <li><strong>Jet Skiing &amp; Parasailing</strong> — Rentals available throughout town</li>
                <li><strong>Kiteboarding &amp; Windsurfing</strong> — Consistent coastal winds</li>
              </ul>
              <p>
                <Link href="/beaches" className="text-primary-600 hover:text-primary-800">
                  Learn more about Port Aransas beaches →
                </Link>
              </p>
            </ContentSection>

            <ContentSection id="fishing">
              <h2>World-Class Fishing</h2>
              <p>
                As the &ldquo;Fishing Capital of Texas,&rdquo; Port Aransas is an angler&apos;s paradise.
                From offshore expeditions chasing marlin and tuna to bay fishing for
                redfish and trout, the options are endless.
              </p>
              <ul>
                <li><strong>Deep Sea Charters</strong> — Target offshore game fish in the Gulf</li>
                <li><strong>Bay Fishing</strong> — Wade or drift the flats for reds and trout</li>
                <li><strong>Jetty Fishing</strong> — Free, accessible, and surprisingly productive</li>
                <li><strong>Pier Fishing</strong> — Horace Caldwell Pier extends into the Gulf</li>
                <li><strong>Surf Fishing</strong> — Drive onto the beach and cast into the waves</li>
              </ul>
              <p>
                <Link href="/fishing" className="text-primary-600 hover:text-primary-800">
                  Explore fishing in Port Aransas →
                </Link>
              </p>
            </ContentSection>

            <ContentSection id="wildlife">
              <h2>Wildlife &amp; Nature</h2>

              <h3>Dolphin Watching</h3>
              <p>
                Bottlenose dolphins are frequent visitors to Port Aransas waters. Several
                operators offer dolphin watching cruises that venture into the harbor and
                bay areas where dolphins often play. Sightings are common, and these
                intelligent creatures often swim alongside boats.
              </p>

              <h3>Birding</h3>
              <p>
                Located along the Central Flyway, Port Aransas is a birder&apos;s paradise.
                Over 400 species have been documented in the area. The Leonabelle Turnbull
                Birding Center and Port Aransas Nature Preserve offer excellent viewing
                opportunities with boardwalks through coastal wetlands.
              </p>

              <h3>Sea Turtle Rescue</h3>
              <p>
                Visit the Amos Rehabilitation Keep (ARK) at the University of Texas
                Marine Science Institute to see rescued sea turtles undergoing
                rehabilitation. The facility educates visitors about these endangered
                animals and the conservation efforts to protect them.
              </p>

              <h3>Mustang Island State Park</h3>
              <p>
                Just south of town, the state park offers 5 miles of Gulf beach plus
                paddling trails, camping, and excellent birding. It&apos;s a perfect spot
                for nature lovers seeking a more pristine beach experience.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Local Tip: Golf Cart Living
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                The best way to explore Port Aransas is by golf cart. Many residents
                and visitors use golf carts as their primary transportation, cruising
                the streets, beach, and shops in true island style. Rentals are
                available throughout town.
              </p>
            </HighlightBox>

            <ContentSection id="attractions">
              <h2>Attractions &amp; Entertainment</h2>

              <h3>Red Dragon Pirate Cruise</h3>
              <p>
                A family favorite, this pirate-themed boat adventure takes young
                buccaneers on a treasure-hunting expedition. Kids get to fire water
                cannons, search for treasure, and engage in swashbuckling fun.
              </p>

              <h3>Port Aransas Museum &amp; Farley Boat Works</h3>
              <p>
                Learn about the island&apos;s maritime history and traditional boat-building
                techniques. The museum offers classes where visitors can build their
                own model skiffs, connecting with over a century of fishing heritage.
              </p>

              <h3>Port Aransas Art Center</h3>
              <p>
                The local art scene thrives at this community center, which hosts
                rotating exhibitions, art classes, and events. It&apos;s a hub for the
                island&apos;s creative community.
              </p>

              <h3>Community Theatre</h3>
              <p>
                Port Aransas Community Theatre presents stage productions throughout
                the year, from comedies to dramas. It&apos;s a testament to the town&apos;s
                vibrant arts community.
              </p>
            </ContentSection>

            <ContentSection id="shopping-dining">
              <h2>Shopping &amp; Dining</h2>
              <p>
                Downtown Port Aransas is a shopper&apos;s delight, with unique boutiques,
                souvenir shops, and galleries lining the streets. From island-inspired
                fashions to one-of-a-kind home decor, you&apos;ll find treasures you won&apos;t
                see anywhere else.
              </p>
              <p>
                The dining scene ranges from casual beach bars to upscale waterfront
                restaurants. Fresh Gulf seafood is the star, with local favorites
                serving everything from fried shrimp baskets to elegant preparations
                of the day&apos;s catch. Many restaurants offer outdoor seating with views
                of the harbor or Gulf.
              </p>
            </ContentSection>

            <ContentSection id="events">
              <h2>Annual Events &amp; Festivals</h2>
              <ul>
                <li><strong>SandFest (April)</strong> — Texas State sand sculpting competition</li>
                <li><strong>Deep Sea Roundup (July)</strong> — Historic fishing tournament since 1932</li>
                <li><strong>Beachtoberfest (October)</strong> — German-style festival on the beach</li>
                <li><strong>Whooping Crane Festival (February)</strong> — Celebrate winter visitors</li>
                <li><strong>Texas Legends Music Series</strong> — Live music throughout summer</li>
                <li><strong>Holiday Events</strong> — Boat parades and festive celebrations</li>
              </ul>
            </ContentSection>

            <ContentSection id="family">
              <h2>Family-Friendly Activities</h2>
              <p>
                Port Aransas is exceptionally welcoming to families. Beyond the beach,
                kids will love:
              </p>
              <ul>
                <li>Building sandcastles and hunting for shells</li>
                <li>Feeding the fish at the harbor</li>
                <li>Riding the free ferry (watch for dolphins!)</li>
                <li>Mini golf and arcade games</li>
                <li>Learning about sea life at the Marine Science Institute</li>
                <li>Biking the flat, easy-to-navigate streets</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Make Port Aransas Your Home"
          description="Imagine having all these activities at your doorstep. Explore properties in this vibrant coastal community."
        />
      </Container>
    </>
  )
}
