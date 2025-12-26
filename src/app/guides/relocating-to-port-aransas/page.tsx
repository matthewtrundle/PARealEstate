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
  title: "Relocating to Port Aransas | Moving Guide & Community Info",
  description:
    "Complete guide to relocating to Port Aransas, Texas. Learn about the community, schools, healthcare, cost of living, and what to expect when making the move.",
  keywords: [
    "relocating to Port Aransas",
    "moving to Port Aransas",
    "Port Aransas Texas living",
    "Port A relocation guide",
    "living on Mustang Island",
  ],
  openGraph: {
    title: "Relocating to Port Aransas | Moving Guide & Community Info",
    description:
      "Complete guide to relocating to Port Aransas, Texas.",
    type: "website",
  },
}

export default function RelocatingToPortAransasPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Relocating to Port Aransas" },
  ]

  const stats = [
    { value: "4,000", label: "Full-time residents" },
    { value: "None", label: "State income tax" },
    { value: "18 mi", label: "of beaches" },
    { value: "270+", label: "Sunny days/year" },
  ]

  return (
    <>
      <SEOPageHero
        title="Relocating to Port Aransas"
        subtitle="Your comprehensive guide to making Port Aransas your permanent home"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                More people are discovering what longtime residents have always
                known: Port Aransas offers a unique quality of life that&apos;s
                hard to find elsewhere. If you&apos;re considering making the move
                to this barrier island community, this guide covers everything
                you need to know about life in Port A.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="why-relocate">
              <h2>Why People Relocate to Port Aransas</h2>
              <p>
                Port Aransas attracts relocators for many reasons:
              </p>
              <ul>
                <li><strong>Beach Lifestyle:</strong> Daily access to 18 miles of Gulf beach</li>
                <li><strong>Small-Town Community:</strong> Tight-knit, friendly atmosphere</li>
                <li><strong>No State Income Tax:</strong> Texas tax advantages</li>
                <li><strong>Outdoor Living:</strong> Fishing, boating, wildlife year-round</li>
                <li><strong>Mild Winters:</strong> Escape harsh northern climates</li>
                <li><strong>Slower Pace:</strong> Less stress, more relaxation</li>
                <li><strong>Remote Work:</strong> Beach office for remote professionals</li>
              </ul>
            </ContentSection>

            <ContentSection id="understanding-community">
              <h2>Understanding the Community</h2>

              <h3>Population &amp; Demographics</h3>
              <p>
                Port Aransas has about 4,000 full-time residents, though this
                swells significantly during tourist season. The community is
                diverse in age, including:
              </p>
              <ul>
                <li>Retirees seeking beach lifestyle</li>
                <li>Remote workers and digital nomads</li>
                <li>Families who prioritize outdoor life</li>
                <li>Marine and tourism industry workers</li>
                <li>Artists and creative professionals</li>
              </ul>

              <h3>Island Culture</h3>
              <p>
                Port Aransas has a distinctive culture:
              </p>
              <ul>
                <li>Casual and laid-back atmosphere</li>
                <li>Golf carts are common transportation</li>
                <li>Flip-flops are acceptable almost everywhere</li>
                <li>Strong community support during challenges</li>
                <li>Active arts and music scene</li>
                <li>Deep fishing and boating traditions</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The Ferry Experience
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                The free ferry between Port Aransas and Aransas Pass runs 24/7.
                During peak times, expect waits of 30-60 minutes. Many residents
                learn to time their trips to avoid rush hour. Alternatively,
                the causeway through Corpus Christi offers a longer but more
                predictable route to the mainland.
              </p>
            </HighlightBox>

            <ContentSection id="housing-market">
              <h2>Housing Market Overview</h2>

              <h3>What to Expect</h3>
              <p>
                The Port Aransas housing market differs from mainland markets:
              </p>
              <ul>
                <li>Limited inventory due to island geography</li>
                <li>Higher prices per square foot than mainland</li>
                <li>Many elevated homes (flood protection)</li>
                <li>Strong demand keeps prices stable</li>
                <li>Mix of full-time and vacation homes</li>
              </ul>

              <h3>Price Ranges</h3>
              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Condos:</strong> $300,000 - $600,000</li>
                  <li><strong>Townhomes:</strong> $400,000 - $700,000</li>
                  <li><strong>Single-Family Homes:</strong> $450,000 - $1,500,000+</li>
                  <li><strong>Gulf-Front Properties:</strong> $1,200,000 - $3,000,000+</li>
                </ul>
              </div>

              <h3>Neighborhoods for Full-Time Residents</h3>
              <ul>
                <li><strong>Downtown:</strong> Walkable, historic character, near ferry</li>
                <li><strong>Cinnamon Shore:</strong> New urbanism, community amenities</li>
                <li><strong>Pirates Bay:</strong> Gated, boat access, fishing-friendly</li>
                <li><strong>Beachwalk:</strong> Family-friendly, pools, near beach</li>
                <li><strong>Mustang Island:</strong> Beach-oriented, varied options</li>
              </ul>
            </ContentSection>

            <ContentSection id="cost-of-living">
              <h2>Cost of Living</h2>
              <p>
                Living on the island has unique cost considerations:
              </p>

              <h3>Lower Costs</h3>
              <ul>
                <li><strong>No State Income Tax:</strong> Significant savings for high earners</li>
                <li><strong>Entertainment:</strong> Free beach access, outdoor activities</li>
                <li><strong>Commuting:</strong> Minimal if you work locally or remotely</li>
              </ul>

              <h3>Higher Costs</h3>
              <ul>
                <li><strong>Housing:</strong> Premium for coastal property</li>
                <li><strong>Insurance:</strong> Flood and windstorm add $5,000-15,000+/year</li>
                <li><strong>Groceries:</strong> Limited options, slightly higher prices</li>
                <li><strong>Property Taxes:</strong> Texas has relatively high property taxes</li>
                <li><strong>Maintenance:</strong> Salt air and humidity require extra upkeep</li>
              </ul>

              <h3>Monthly Budget Estimate</h3>
              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Sample Monthly Costs (Couple, $600K Home)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Housing (mortgage, taxes, insurance):</strong> $4,500-5,500</li>
                  <li><strong>Utilities:</strong> $250-400</li>
                  <li><strong>Groceries:</strong> $600-900</li>
                  <li><strong>Dining/Entertainment:</strong> $400-800</li>
                  <li><strong>Transportation:</strong> $300-500</li>
                  <li><strong>Healthcare:</strong> $400-800</li>
                  <li className="pt-2 border-t border-neutral-300 font-semibold">
                    <strong>Total:</strong> $6,500-9,000/month
                  </li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection id="employment">
              <h2>Employment &amp; Income</h2>

              <h3>Local Employment</h3>
              <p>
                Major employers in and around Port Aransas:
              </p>
              <ul>
                <li><strong>Tourism &amp; Hospitality:</strong> Hotels, restaurants, charter boats</li>
                <li><strong>Real Estate:</strong> Property management, sales, construction</li>
                <li><strong>Marine Industry:</strong> Fishing, boat services, marina operations</li>
                <li><strong>City Government:</strong> Municipal services</li>
                <li><strong>UT Marine Science Institute:</strong> Research and education</li>
              </ul>

              <h3>Remote Work</h3>
              <p>
                Port Aransas is increasingly popular with remote workers:
              </p>
              <ul>
                <li>Reliable high-speed internet available</li>
                <li>Coffee shops and co-working-friendly spaces</li>
                <li>Beach lifestyle balanced with work</li>
                <li>Time zone works for national employers</li>
              </ul>

              <h3>Mainland Employment</h3>
              <p>
                Some residents commute to mainland jobs:
              </p>
              <ul>
                <li>Corpus Christi offers diverse employment</li>
                <li>30-60 minute commute depending on ferry waits</li>
                <li>Healthcare, energy, education sectors nearby</li>
              </ul>
            </ContentSection>

            <ContentSection id="schools">
              <h2>Schools &amp; Education</h2>

              <h3>Port Aransas ISD</h3>
              <p>
                Port Aransas has its own small school district:
              </p>
              <ul>
                <li><strong>Port Aransas Elementary:</strong> PreK-5th grade</li>
                <li><strong>Port Aransas Jr/Sr High:</strong> 6th-12th grade</li>
                <li>Small class sizes (often 15-20 students)</li>
                <li>Strong community involvement</li>
                <li>Marine science and environmental programs</li>
              </ul>

              <h3>Pros of Small District</h3>
              <ul>
                <li>Personal attention from teachers</li>
                <li>Tight-knit school community</li>
                <li>Parents know teachers and administrators</li>
                <li>Unique location for science education</li>
              </ul>

              <h3>Considerations</h3>
              <ul>
                <li>Limited AP/honors course selection</li>
                <li>Fewer extracurricular options</li>
                <li>Sports teams compete against larger schools</li>
                <li>Some families supplement with online courses</li>
              </ul>

              <h3>Alternative Options</h3>
              <ul>
                <li>Corpus Christi private schools (commute required)</li>
                <li>Homeschooling with island-based activities</li>
                <li>Online/virtual school programs</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Visit During School Year
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                If you have school-age children, visit during the school year
                to meet teachers and administrators. The small community means
                you can often get a tour and detailed information by just asking.
              </p>
            </HighlightBox>

            <ContentSection id="healthcare">
              <h2>Healthcare Access</h2>

              <h3>On-Island Services</h3>
              <ul>
                <li>Port Aransas Health Clinic (primary care)</li>
                <li>EMS services available</li>
                <li>Limited specialty care on island</li>
              </ul>

              <h3>Mainland Healthcare</h3>
              <p>
                Corpus Christi provides comprehensive healthcare:
              </p>
              <ul>
                <li>CHRISTUS Spohn Hospital system</li>
                <li>Driscoll Children&apos;s Hospital</li>
                <li>Numerous specialists and practices</li>
                <li>30-60 minute drive from Port Aransas</li>
              </ul>

              <h3>Emergency Services</h3>
              <ul>
                <li>Port Aransas Fire Department with EMS</li>
                <li>Coast Guard Station for water emergencies</li>
                <li>Helicopter transport available for critical cases</li>
                <li>Plan for potential ferry delays in emergencies</li>
              </ul>
            </ContentSection>

            <ContentSection id="practical-matters">
              <h2>Practical Matters</h2>

              <h3>Groceries &amp; Shopping</h3>
              <ul>
                <li>IGA grocery store on island</li>
                <li>Several convenience stores</li>
                <li>Major shopping in Corpus Christi (HEB, Costco, etc.)</li>
                <li>Many residents stock up on mainland trips</li>
              </ul>

              <h3>Dining</h3>
              <ul>
                <li>Numerous restaurants, especially seafood</li>
                <li>Mix of casual and upscale options</li>
                <li>Many seasonal hours—check before going in winter</li>
                <li>Local favorites become gathering spots</li>
              </ul>

              <h3>Services</h3>
              <ul>
                <li>Post office and basic banking</li>
                <li>Hardware store for basic needs</li>
                <li>Limited professional services on island</li>
                <li>Many services require mainland trips</li>
              </ul>

              <h3>Transportation</h3>
              <ul>
                <li>Car or golf cart recommended</li>
                <li>Golf carts legal on most streets</li>
                <li>Bike-friendly for local errands</li>
                <li>No public transportation</li>
              </ul>
            </ContentSection>

            <ContentSection id="weather">
              <h2>Weather &amp; Climate</h2>

              <h3>What to Expect</h3>
              <ul>
                <li><strong>Summers:</strong> Hot and humid, 85-95°F, afternoon sea breezes</li>
                <li><strong>Winters:</strong> Mild, 50-70°F, occasional cold fronts</li>
                <li><strong>Rain:</strong> ~30 inches annually, often brief afternoon storms</li>
                <li><strong>Hurricane Season:</strong> June-November, preparation essential</li>
              </ul>

              <h3>Hurricane Preparedness</h3>
              <p>
                Living coastal means hurricane awareness:
              </p>
              <ul>
                <li>Know evacuation routes and timing</li>
                <li>Have a hurricane kit and plan</li>
                <li>Secure or remove outdoor items</li>
                <li>Understand your insurance coverage</li>
                <li>Have mainland accommodations planned</li>
              </ul>
            </ContentSection>

            <ContentSection id="making-the-move">
              <h2>Making the Move</h2>

              <h3>Before You Move</h3>
              <ul>
                <li>Spend extended time in Port Aransas (rent first)</li>
                <li>Visit during different seasons</li>
                <li>Connect with locals to understand daily life</li>
                <li>Research specific neighborhoods</li>
                <li>Understand insurance and cost realities</li>
              </ul>

              <h3>Moving Logistics</h3>
              <ul>
                <li>The ferry accommodates moving trucks</li>
                <li>Consider timing to avoid peak tourist season</li>
                <li>Update address for license, registration, voting</li>
                <li>Transfer utilities and services</li>
              </ul>

              <h3>Getting Established</h3>
              <ul>
                <li>Introduce yourself to neighbors</li>
                <li>Join local organizations or clubs</li>
                <li>Frequent local businesses</li>
                <li>Volunteer in the community</li>
                <li>Be patient—small towns take time to accept newcomers</li>
              </ul>
            </ContentSection>

            <ContentSection id="is-it-right">
              <h2>Is Port Aransas Right for You?</h2>

              <h3>Port Aransas is Great For...</h3>
              <ul>
                <li>Beach and outdoor enthusiasts</li>
                <li>Those seeking small-town community</li>
                <li>Retirees wanting active but relaxed lifestyle</li>
                <li>Remote workers who don&apos;t need urban amenities</li>
                <li>Fishing and boating devotees</li>
                <li>People comfortable with some isolation</li>
              </ul>

              <h3>Consider Carefully If You...</h3>
              <ul>
                <li>Need extensive shopping and dining options</li>
                <li>Have complex medical needs requiring specialists</li>
                <li>Want diverse school options for children</li>
                <li>Prefer urban nightlife and entertainment</li>
                <li>Dislike heat and humidity</li>
                <li>Are uncomfortable with hurricane evacuations</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Make Port Aransas Home?"
          description="Let us help you find the perfect home for your island lifestyle."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
