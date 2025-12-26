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
  title: "Buying a Beach Home in Port Aransas | Complete Guide 2025",
  description:
    "Everything you need to know about buying a beach home in Port Aransas. From flood insurance to construction types, learn what makes coastal real estate unique.",
  keywords: [
    "buying beach home Port Aransas",
    "Port Aransas home buying guide",
    "Texas beach house purchase",
    "coastal property buying tips",
    "Port A real estate advice",
  ],
  openGraph: {
    title: "Buying a Beach Home in Port Aransas | Complete Guide 2025",
    description:
      "Everything you need to know about buying a beach home in Port Aransas.",
    type: "website",
  },
}

export default function BuyingBeachHomePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Buying a Beach Home" },
  ]

  const stats = [
    { value: "$677K", label: "Median price" },
    { value: "470+", label: "Homes available" },
    { value: "60-90", label: "Days on market" },
    { value: "5-7%", label: "Annual appreciation" },
  ]

  return (
    <>
      <SEOPageHero
        title="Buying a Beach Home in Port Aransas"
        subtitle="Your comprehensive guide to purchasing coastal property on the Texas Gulf Coast"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Buying a beach home is different from buying property anywhere else.
                From understanding flood zones to navigating insurance requirements,
                coastal real estate comes with unique considerations. This guide
                covers everything you need to know to make a confident purchase
                in Port Aransas.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="coastal-differences">
              <h2>What Makes Coastal Buying Different</h2>
              <p>
                Beach properties face environmental challenges that inland homes
                don&apos;t encounter. Salt air, humidity, wind, flooding, and
                occasional hurricanes all affect construction, maintenance, and
                insurance costs. Understanding these factors upfront helps you
                make informed decisions.
              </p>
              <p>
                The good news: Port Aransas has decades of experience with coastal
                construction. Homes built to modern codes are designed to withstand
                these challenges, and the lifestyle benefits make the extra
                considerations worthwhile for most buyers.
              </p>
            </ContentSection>

            <ContentSection id="property-types">
              <h2>Property Types in Port Aransas</h2>

              <h3>Single-Family Homes</h3>
              <p>
                Most Port Aransas homes are elevated on pilings, with living spaces
                on the second floor or higher. Ground level typically includes
                parking, storage, and outdoor living areas. This design protects
                against flooding and maximizes views and breezes.
              </p>

              <h3>Condominiums</h3>
              <p>
                Condos offer a lower-maintenance entry point to beach ownership.
                Many include resort-style amenities like pools and beach access.
                HOA fees cover exterior maintenance, insurance, and common areas—
                simplifying ownership but adding monthly costs.
              </p>

              <h3>Townhomes</h3>
              <p>
                Townhomes bridge the gap between condos and single-family homes.
                They offer more space and privacy than condos while still sharing
                some maintenance responsibilities through HOAs.
              </p>

              <h3>Vacant Land</h3>
              <p>
                Building your own beach home is an option, though construction
                costs are significant. Lot prices vary widely based on location,
                from $100,000 for interior lots to $800,000+ for Gulf-front parcels.
              </p>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Elevation Matters
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                A home&apos;s elevation relative to the Base Flood Elevation (BFE)
                significantly impacts flood insurance costs. Homes built above
                BFE can save thousands annually on insurance. Always verify
                elevation certificates before purchasing.
              </p>
            </HighlightBox>

            <ContentSection id="flood-insurance">
              <h2>Understanding Flood Insurance</h2>
              <p>
                All properties in Port Aransas require flood insurance if you
                have a mortgage. Even without a mortgage, flood insurance is
                strongly recommended—the Texas coast floods.
              </p>
              <p>
                Key factors affecting flood insurance costs:
              </p>
              <ul>
                <li><strong>Flood Zone</strong> — Most of Port Aransas is in Zone AE (high risk)</li>
                <li><strong>Elevation</strong> — Height of lowest floor relative to BFE</li>
                <li><strong>Building Type</strong> — Construction method and materials</li>
                <li><strong>Foundation</strong> — Pilings typically perform better than slab</li>
                <li><strong>Coverage Amount</strong> — Building value and contents coverage</li>
              </ul>
              <p>
                Annual flood insurance can range from $1,500 to $10,000+ depending
                on these factors. Newer, elevated homes typically have the lowest
                premiums.
              </p>
            </ContentSection>

            <ContentSection id="windstorm-insurance">
              <h2>Windstorm Insurance</h2>
              <p>
                Texas coastal counties require separate windstorm insurance,
                typically through the Texas Windstorm Insurance Association (TWIA).
                This coverage protects against wind damage from tropical storms
                and hurricanes.
              </p>
              <p>
                Homes built to current wind-resistant standards (WPI-8 certification)
                qualify for discounts. Factors affecting windstorm premiums include:
              </p>
              <ul>
                <li>Age and construction type of the home</li>
                <li>Roof shape, age, and materials</li>
                <li>Hurricane shutters or impact-resistant windows</li>
                <li>Distance from the coast</li>
                <li>Deductible selection</li>
              </ul>
            </ContentSection>

            <ContentSection id="construction-quality">
              <h2>Evaluating Construction Quality</h2>
              <p>
                Coastal construction must withstand salt air, humidity, high
                winds, and occasional flooding. When evaluating a property, pay
                attention to:
              </p>

              <h3>Structural Elements</h3>
              <ul>
                <li><strong>Foundation</strong> — Concrete pilings or treated wood posts</li>
                <li><strong>Framing</strong> — Hurricane straps connecting roof to walls to foundation</li>
                <li><strong>Roof</strong> — Metal roofs last longest in coastal environments</li>
                <li><strong>Windows</strong> — Impact-resistant glass or storm shutters</li>
                <li><strong>Siding</strong> — Cement fiber or vinyl (avoid untreated wood)</li>
              </ul>

              <h3>Systems &amp; Finishes</h3>
              <ul>
                <li><strong>HVAC</strong> — Coastal-rated units resist salt corrosion</li>
                <li><strong>Plumbing</strong> — PEX or CPVC preferred over copper in salt air</li>
                <li><strong>Electrical</strong> — Properly grounded and protected from moisture</li>
                <li><strong>Hardware</strong> — Stainless steel or marine-grade materials</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Hire a Coastal-Experienced Inspector
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Not all home inspectors understand coastal construction. Choose
                an inspector with specific experience in beach properties. They&apos;ll
                know what to look for regarding salt damage, moisture intrusion,
                and hurricane-resistant features.
              </p>
            </HighlightBox>

            <ContentSection id="due-diligence">
              <h2>Due Diligence Checklist</h2>
              <p>
                Before closing on a Port Aransas property, verify:
              </p>
              <ul>
                <li><strong>Elevation Certificate</strong> — Current certificate showing floor height vs. BFE</li>
                <li><strong>Flood Zone Determination</strong> — Confirm the property&apos;s flood zone designation</li>
                <li><strong>Insurance Quotes</strong> — Get actual quotes for flood and windstorm before buying</li>
                <li><strong>HOA Documents</strong> — Review rules, fees, reserves, and rental policies</li>
                <li><strong>Title Search</strong> — Verify clear title and any easements</li>
                <li><strong>Survey</strong> — Confirm property boundaries and any encroachments</li>
                <li><strong>Permit History</strong> — Check for unpermitted work or additions</li>
                <li><strong>Rental History</strong> — If buying an investment property, review past income</li>
              </ul>
            </ContentSection>

            <ContentSection id="financing">
              <h2>Financing Considerations</h2>
              <p>
                Financing a beach home involves some additional considerations:
              </p>
              <ul>
                <li><strong>Second Home Loans</strong> — Slightly higher rates than primary residences</li>
                <li><strong>Investment Property Loans</strong> — Higher rates and larger down payments</li>
                <li><strong>Jumbo Loans</strong> — Many beach homes exceed conforming loan limits</li>
                <li><strong>Insurance Escrow</strong> — Lenders may require escrowing flood and windstorm</li>
              </ul>
              <p>
                Work with a lender experienced in coastal properties. They&apos;ll
                understand the unique insurance requirements and property types.
              </p>
            </ContentSection>

            <ContentSection id="closing-process">
              <h2>The Closing Process</h2>
              <p>
                Closing on a Port Aransas property typically takes 30-45 days
                and involves several steps:
              </p>
              <ol>
                <li><strong>Contract Execution</strong> — Sign purchase agreement with contingencies</li>
                <li><strong>Earnest Money</strong> — Deposit typically 1-3% of purchase price</li>
                <li><strong>Inspections</strong> — Complete within the inspection period (usually 7-10 days)</li>
                <li><strong>Insurance Binding</strong> — Secure flood and windstorm policies</li>
                <li><strong>Appraisal</strong> — Lender orders appraisal to verify value</li>
                <li><strong>Title Work</strong> — Title company researches and clears title</li>
                <li><strong>Final Walkthrough</strong> — Verify property condition before closing</li>
                <li><strong>Closing</strong> — Sign documents and receive keys</li>
              </ol>
            </ContentSection>

            <ContentSection id="working-with-agent">
              <h2>Working with a Local Agent</h2>
              <p>
                A real estate agent with deep Port Aransas experience is invaluable.
                They&apos;ll know which neighborhoods suit your goals, understand
                local pricing nuances, and guide you through coastal-specific
                considerations.
              </p>
              <p>
                Questions to ask a potential agent:
              </p>
              <ul>
                <li>How many years have you worked in Port Aransas?</li>
                <li>Do you own property here?</li>
                <li>Can you recommend trusted inspectors and insurance agents?</li>
                <li>What&apos;s your experience with vacation rental properties?</li>
                <li>How do you handle offers in competitive situations?</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Start Your Beach Home Search?"
          description="Let our Port Aransas specialists guide you through the buying process with local expertise."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
