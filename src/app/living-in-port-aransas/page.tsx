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
  title: "Living in Port Aransas | Cost of Living, Lifestyle & Community",
  description:
    "Discover what it's like to live in Port Aransas, Texas. Learn about the cost of living, schools, healthcare, community life, and why residents love calling this beach town home.",
  keywords: [
    "living in Port Aransas",
    "Port Aransas cost of living",
    "Port Aransas lifestyle",
    "move to Port Aransas",
    "Port Aransas community",
    "retire in Port Aransas",
  ],
  openGraph: {
    title: "Living in Port Aransas | Cost of Living, Lifestyle & Community",
    description:
      "Discover what it's like to live in Port Aransas - lifestyle, community, and everything you need to know.",
    type: "website",
  },
}

export default function LivingInPortAransasPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas", href: "/about-port-aransas" },
    { label: "Living Here" },
  ]

  const communityStats = [
    { value: "2,800+", label: "Year-round residents" },
    { value: "Low", label: "Crime rate" },
    { value: "0%", label: "State income tax" },
    { value: "A+", label: "Quality of life" },
  ]

  return (
    <>
      <SEOPageHero
        title="Living in Port Aransas"
        subtitle="Discover the laid-back coastal lifestyle that draws people from across the country to call this Texas beach town home"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas isn&apos;t just a vacation destination—it&apos;s a genuine community
                of approximately 2,800 year-round residents who&apos;ve chosen this barrier
                island for its unmatched quality of life. From fishermen who moved here
                for the world-class angling to retirees seeking sun-filled days by the
                Gulf, Port A residents share a common appreciation for the island&apos;s
                unique character.
              </p>
            </ContentSection>

            <StatsGrid stats={communityStats} />

            <ContentSection id="lifestyle">
              <h2>The Port Aransas Lifestyle</h2>
              <p>
                Life in Port Aransas moves to the rhythm of the tides, not the clock.
                Golf carts outnumber cars on many streets, flip-flops are acceptable
                virtually everywhere, and a stranger is just a friend you haven&apos;t met
                yet. This isn&apos;t a place for those who need the pace of city life—and
                that&apos;s exactly the point.
              </p>
              <p>
                Residents enjoy easy access to 18 miles of Gulf beaches, some of the
                best fishing in Texas, and a vibrant local arts and dining scene.
                Yet within 30 minutes, the urban amenities of Corpus Christi—including
                major shopping, hospitals, and the international airport—are readily
                available.
              </p>

              <h3>A Typical Day</h3>
              <p>
                Morning might start with a beach walk or a few hours of fishing from
                the jetties. Mid-day could mean lunch at a favorite waterfront spot
                or a round of golf. Afternoons are for beach time, paddleboarding,
                or simply relaxing on the porch with the Gulf breeze. Evenings bring
                spectacular sunsets and the choice of local restaurants or a casual
                cookout with neighbors.
              </p>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The Island Vibe
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Port Aransas has a distinct &ldquo;island time&rdquo; mentality. Things move a
                bit slower here, and that&apos;s by design. If you&apos;re looking for a
                high-pressure, fast-paced environment, this isn&apos;t the place. But if
                you want to trade stress for sunsets, Port A delivers.
              </p>
            </HighlightBox>

            <ContentSection id="cost-of-living">
              <h2>Cost of Living</h2>
              <p>
                While beachfront property commands a premium anywhere, Port Aransas
                offers relative value compared to other desirable coastal communities.
                Texas has no state income tax, which can mean significant savings
                for those relocating from higher-tax states.
              </p>

              <h3>Housing Costs</h3>
              <p>
                Median home prices in Port Aransas hover around $677,000, with options
                ranging from condos in the $300,000s to luxury waterfront estates over
                $2 million. Rental rates for those testing the waters typically range
                from $1,500-$3,000 monthly for a year-round lease.
              </p>

              <h3>Other Expenses</h3>
              <ul>
                <li><strong>Utilities</strong> — Similar to mainland Texas; expect higher AC costs in summer</li>
                <li><strong>Insurance</strong> — Windstorm and flood insurance add to costs</li>
                <li><strong>Property Taxes</strong> — Texas has no state income tax but property taxes are notable</li>
                <li><strong>Groceries &amp; Dining</strong> — Slightly higher than mainland due to transportation</li>
                <li><strong>Transportation</strong> — Many residents use golf carts, reducing fuel costs</li>
              </ul>
            </ContentSection>

            <ContentSection id="community">
              <h2>Community &amp; Culture</h2>
              <p>
                Despite its small size, Port Aransas has a rich community life. Residents
                know their neighbors, support local businesses, and come together for
                events and causes. The town maintains a strong sense of identity,
                successfully balancing tourism with preservation of its authentic character.
              </p>

              <h3>Community Organizations</h3>
              <ul>
                <li>Port Aransas Chamber of Commerce</li>
                <li>Port Aransas Art Center</li>
                <li>Port Aransas Community Theatre</li>
                <li>Port Aransas Preservation and Historical Association</li>
                <li>Various fishing and boating clubs</li>
                <li>Active volunteer fire department</li>
              </ul>

              <h3>Places of Worship</h3>
              <p>
                Several churches serve the community, including the historic Chapel on
                the Dunes. Options include Presbyterian, Methodist, Baptist, and Catholic
                congregations, plus non-denominational services.
              </p>
            </ContentSection>

            <ContentSection id="schools">
              <h2>Schools &amp; Education</h2>
              <p>
                Port Aransas Independent School District serves the community with a
                single campus that houses pre-K through 12th grade. The small school
                environment means students receive individual attention, and the
                district has a strong reputation for both academics and extracurricular
                activities.
              </p>
              <p>
                For higher education, Del Mar College and Texas A&amp;M University-Corpus
                Christi are both within commuting distance. The UT Marine Science
                Institute also offers educational programs and internship opportunities.
              </p>
            </ContentSection>

            <ContentSection id="healthcare">
              <h2>Healthcare</h2>
              <p>
                Port Aransas has basic medical services, including a clinic for routine
                care and urgent needs. For specialized care and hospitals, residents
                travel to Corpus Christi (approximately 30-45 minutes), which has
                multiple hospitals and a full range of medical specialists.
              </p>
              <p>
                Many residents find this arrangement works well—the small town offers
                peace and quiet for daily life, while comprehensive medical care is
                available when needed. EMS services are excellent, with trained
                responders and helicopter transport available for emergencies.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Retiree-Friendly
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Port Aransas is particularly popular with retirees who appreciate
                the relaxed pace, fishing opportunities, and tight-knit community.
                Texas&apos;s favorable tax situation and affordable healthcare options
                make it an attractive retirement destination.
              </p>
            </HighlightBox>

            <ContentSection id="getting-around">
              <h2>Getting Around</h2>
              <p>
                Port Aransas is highly navigable without a car. Golf carts are the
                preferred mode of transportation for many residents, legal on most
                streets, and a fun way to embrace the island lifestyle. Bicycles are
                also popular, thanks to flat terrain and a bike-friendly atmosphere.
              </p>
              <p>
                For trips off the island, the free 24-hour ferry to Aransas Pass
                operates continuously, though wait times can be long during peak
                periods. Alternatively, the drive through Corpus Christi via the
                JFK Causeway avoids the ferry entirely.
              </p>
            </ContentSection>

            <ContentSection id="weather">
              <h2>Weather &amp; Climate</h2>
              <p>
                Port Aransas enjoys a subtropical climate with mild winters and hot
                summers. Average temperatures range from the mid-50s in winter to
                the low 90s in summer. The Gulf breeze provides natural cooling,
                making summer more bearable than inland Texas.
              </p>
              <p>
                Hurricane season (June-November) is a consideration. Residents stay
                prepared and may evacuate for major storms. The town has rebuilt
                stronger after each storm, most recently after Hurricane Harvey in 2017.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      {/* Related Links */}
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-center text-primary-900 mb-12">
            Ready to Learn More?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/guides/relocating-to-port-aransas"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Relocation Guide
              </h3>
              <p className="text-sm text-neutral-600">
                Step-by-step guide to making the move.
              </p>
            </Link>
            <Link
              href="/neighborhoods"
              className="p-6 bg-neutral-50 rounded-lg hover:bg-accent-50 transition-colors group"
            >
              <h3 className="font-display text-lg text-primary-900 mb-2 group-hover:text-primary-700">
                Neighborhoods
              </h3>
              <p className="text-sm text-neutral-600">
                Find the right area for your lifestyle.
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
                Current pricing and market conditions.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Start Your Port Aransas Journey"
          description="Whether you're relocating full-time or seeking a second home, let us help you find the perfect property."
        />
      </Container>
    </>
  )
}
