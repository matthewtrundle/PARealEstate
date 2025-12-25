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
  title: "About Port Aransas, Texas | Coastal Living on Mustang Island",
  description:
    "Discover Port Aransas, Texas - a charming beach town on Mustang Island known for fishing, beautiful beaches, and laid-back coastal living. Learn why Port A is the perfect place to own a beach home.",
  keywords: [
    "Port Aransas Texas",
    "Port A",
    "Mustang Island",
    "Texas coast",
    "Texas beach town",
    "coastal living Texas",
  ],
  openGraph: {
    title: "About Port Aransas, Texas | Coastal Living on Mustang Island",
    description:
      "Discover Port Aransas - a charming beach town on Mustang Island known for fishing, beautiful beaches, and laid-back coastal living.",
    type: "website",
  },
}

export default function AboutPortAransasPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas" },
  ]

  const stats = [
    { value: "18 mi", label: "of Gulf beaches" },
    { value: "2,800+", label: "Year-round residents" },
    { value: "#1", label: "Fishing destination in TX" },
    { value: "Top 25", label: "Best U.S. beaches" },
  ]

  return (
    <>
      <SEOPageHero
        title="Welcome to Port Aransas, Texas"
        subtitle="A treasured coastal destination on Mustang Island, where laid-back beach living meets Texas charm"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Known affectionately as &ldquo;Port A&rdquo; by locals and visitors alike, Port Aransas
                sits at the northern tip of Mustang Island along the Texas Gulf Coast. This
                charming beach town has been ranked among TripAdvisor&apos;s Top 25 Best Beaches in
                the U.S. and named one of the South&apos;s Best Beach Towns by Southern Living.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="location">
              <h2>A Prime Coastal Location</h2>
              <p>
                Port Aransas stretches approximately 14 miles along the Gulf of Mexico, offering
                residents and visitors access to some of Texas&apos;s most beautiful beaches.
                Located just 30 minutes from Corpus Christi via the ferry or the JFK Causeway,
                Port A provides the perfect balance of coastal seclusion and convenient access
                to urban amenities.
              </p>
              <p>
                The town is accessible by three routes: the free 24-hour ferry from Aransas Pass,
                the scenic drive across the JFK Causeway, or by boat through the Corpus Christi
                Ship Channel. This unique geography has helped preserve Port Aransas&apos;s
                small-town character while maintaining easy connectivity to the broader region.
              </p>
            </ContentSection>

            <ContentSection id="lifestyle">
              <h2>The Port Aransas Lifestyle</h2>
              <p>
                Life in Port Aransas moves at a different pace. Here, golf carts are as common
                as cars, flip-flops are considered appropriate attire year-round, and the day&apos;s
                schedule often revolves around the tides. The town&apos;s approximately 2,800
                year-round residents enjoy a close-knit community where neighbors know each other
                by name.
              </p>
              <p>
                The local economy thrives on tourism and fishing, with the town welcoming
                visitors who come for the beaches, fishing tournaments, and annual events like
                SandFest and the Texas State Aquarium&apos;s Dolphin Day. Yet despite its
                popularity, Port Aransas maintains the authentic charm that has drawn people
                to its shores for generations.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">Local Tip</h4>
              <p className="text-sm text-neutral-700 mb-0">
                The best way to experience Port Aransas is by golf cart. Many residents and
                visitors explore the town, beaches, and local shops on these eco-friendly
                vehicles. Rentals are available throughout town.
              </p>
            </HighlightBox>

            <ContentSection id="fishing-capital">
              <h2>The Fishing Capital of Texas</h2>
              <p>
                Port Aransas has earned its reputation as the &ldquo;Fishing Capital of Texas&rdquo;
                through generations of world-class fishing opportunities. Whether you prefer
                deep-sea expeditions in the Gulf, bay fishing in the calm waters of Corpus
                Christi Bay, or casting from the historic jetties, Port A delivers exceptional
                fishing year-round.
              </p>
              <p>
                The town is home to numerous charter services, fishing guides, and bait shops
                that cater to everyone from beginners to professional anglers. Species commonly
                caught include redfish, speckled trout, tarpon, king mackerel, and offshore
                favorites like tuna and mahi-mahi.
              </p>
              <p>
                <Link href="/fishing" className="text-primary-600 hover:text-primary-800">
                  Learn more about fishing in Port Aransas →
                </Link>
              </p>
            </ContentSection>

            <ContentSection id="natural-beauty">
              <h2>Natural Beauty &amp; Wildlife</h2>
              <p>
                Beyond the beaches, Port Aransas offers remarkable natural diversity. The town
                sits along the Central Flyway, making it a premier destination for birdwatching
                with over 400 documented species. The Leonabelle Turnbull Birding Center and
                Port Aransas Nature Preserve provide excellent viewing opportunities.
              </p>
              <p>
                Mustang Island State Park, located just south of town, offers 5 miles of
                Gulf beach along with camping, paddling trails, and hiking. Dolphins are
                frequently spotted in the waters around Port Aransas, and sea turtles nest
                on the beaches during summer months.
              </p>
            </ContentSection>

            <ContentSection id="real-estate">
              <h2>Real Estate in Port Aransas</h2>
              <p>
                The Port Aransas real estate market offers diverse options, from charming
                beach cottages to luxury waterfront estates. Popular communities include
                Cinnamon Shore, a master-planned New Urbanist development; Pirates Bay,
                known for canal-front homes with boat access; and the historic downtown
                area with its walkable streets and local character.
              </p>
              <p>
                Many buyers are attracted to Port Aransas for second homes or investment
                properties, as the town&apos;s vacation rental market remains strong
                year-round. The combination of beautiful beaches, excellent fishing, and
                authentic Texas charm continues to drive demand for coastal real estate.
              </p>
              <p>
                <Link href="/neighborhoods" className="text-primary-600 hover:text-primary-800">
                  Explore Port Aransas neighborhoods →
                </Link>
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      {/* Quick Links Section */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-12">
            Explore More About Port Aransas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/history"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                History of Port A
              </h3>
              <p className="text-sm text-neutral-600">
                From pirates to fishing legends, discover Port Aransas&apos;s colorful past.
              </p>
            </Link>
            <Link
              href="/things-to-do"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Things to Do
              </h3>
              <p className="text-sm text-neutral-600">
                Beaches, fishing, dining, and entertainment options for every interest.
              </p>
            </Link>
            <Link
              href="/living-in-port-aransas"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Living Here
              </h3>
              <p className="text-sm text-neutral-600">
                What to expect when you make Port Aransas your home.
              </p>
            </Link>
            <Link
              href="/market"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Market Overview
              </h3>
              <p className="text-sm text-neutral-600">
                Current real estate trends and market conditions.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
