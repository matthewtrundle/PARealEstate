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
  title: "First-Time Beach Home Buyer Guide | Port Aransas Real Estate",
  description:
    "First-time buyer's guide to purchasing a beach home in Port Aransas. Learn about financing, insurance, and what makes coastal buying unique for new buyers.",
  keywords: [
    "first time home buyer Port Aransas",
    "buying first beach house",
    "Texas beach home first time",
    "Port Aransas real estate beginners",
    "coastal property first purchase",
  ],
  openGraph: {
    title: "First-Time Beach Home Buyer Guide | Port Aransas Real Estate",
    description:
      "First-time buyer's guide to purchasing a beach home in Port Aransas.",
    type: "website",
  },
}

export default function FirstTimeBuyerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "First-Time Buyer" },
  ]

  const stats = [
    { value: "$450K+", label: "Entry price" },
    { value: "20%", label: "Typical down" },
    { value: "30-45", label: "Days to close" },
    { value: "5-10", label: "Inspection days" },
  ]

  return (
    <>
      <SEOPageHero
        title="First-Time Beach Home Buyer Guide"
        subtitle="Everything you need to know for your first beach property purchase in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Buying your first beach home is exciting—and a bit different from
                buying an inland property. This guide walks you through the
                entire process, from understanding coastal-specific considerations
                to navigating your first offer and closing.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="is-it-right">
              <h2>Is a Beach Home Right for You?</h2>
              <p>
                Before diving into the market, honestly assess whether beach
                ownership fits your lifestyle and finances:
              </p>

              <h3>Beach Ownership is Great If You...</h3>
              <ul>
                <li>Love the beach and will use the property regularly</li>
                <li>Want a vacation destination you can return to repeatedly</li>
                <li>Are comfortable with higher maintenance requirements</li>
                <li>Can handle the extra costs (insurance, maintenance, HOA)</li>
                <li>Enjoy the beach lifestyle—fishing, boating, relaxing</li>
              </ul>

              <h3>Consider Carefully If You...</h3>
              <ul>
                <li>Prefer variety in vacation destinations</li>
                <li>Dislike home maintenance responsibilities</li>
                <li>Are stretching your budget to afford it</li>
                <li>Won&apos;t visit at least 4-6 times per year</li>
                <li>Are only buying for investment (run the numbers carefully)</li>
              </ul>
            </ContentSection>

            <ContentSection id="financial-prep">
              <h2>Financial Preparation</h2>

              <h3>Understanding the Costs</h3>
              <p>
                Beach homes have costs beyond the purchase price:
              </p>

              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Annual Cost Estimate ($500K Home)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Mortgage (20% down, 7%):</strong> ~$2,660/month</li>
                  <li><strong>Property Taxes:</strong> ~$8,500/year</li>
                  <li><strong>Insurance (All Types):</strong> ~$8,000-12,000/year</li>
                  <li><strong>HOA (if applicable):</strong> ~$2,400-6,000/year</li>
                  <li><strong>Utilities:</strong> ~$3,000-4,000/year</li>
                  <li><strong>Maintenance:</strong> ~$4,000-8,000/year</li>
                  <li className="pt-2 border-t border-neutral-300 font-semibold">
                    <strong>Total Annual:</strong> ~$58,000-68,000
                  </li>
                </ul>
              </div>

              <h3>Down Payment</h3>
              <p>
                Second homes typically require 10-25% down, depending on your
                financial profile and the lender. A 20% down payment helps you:
              </p>
              <ul>
                <li>Avoid private mortgage insurance (PMI)</li>
                <li>Get better interest rates</li>
                <li>Have a lower monthly payment</li>
                <li>Build equity faster</li>
              </ul>

              <h3>Reserves</h3>
              <p>
                Beyond the down payment, you&apos;ll need:
              </p>
              <ul>
                <li><strong>Closing Costs:</strong> 2-5% of purchase price</li>
                <li><strong>Furnishing:</strong> $10,000-50,000 depending on size and taste</li>
                <li><strong>Initial Supplies:</strong> $2,000-5,000</li>
                <li><strong>Emergency Fund:</strong> 6 months of expenses minimum</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Get Pre-Approved First
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Before house hunting, get pre-approved for a mortgage. This tells
                you exactly what you can afford and shows sellers you&apos;re a serious
                buyer. In competitive markets, offers without pre-approval often
                aren&apos;t considered.
              </p>
            </HighlightBox>

            <ContentSection id="understanding-market">
              <h2>Understanding the Port Aransas Market</h2>

              <h3>Entry-Level Options</h3>
              <p>
                First-time beach buyers typically start with:
              </p>
              <ul>
                <li><strong>Condos:</strong> $300,000-500,000 — Lowest entry point, includes amenities</li>
                <li><strong>Townhomes:</strong> $400,000-600,000 — More space, shared walls</li>
                <li><strong>Smaller Homes:</strong> $450,000-650,000 — 2-3 BR, may need updates</li>
              </ul>

              <h3>What You Can Expect by Price</h3>
              <ul>
                <li><strong>$350K-450K:</strong> Basic condos, older properties needing work</li>
                <li><strong>$450K-600K:</strong> Nice condos, smaller homes, townhomes</li>
                <li><strong>$600K-800K:</strong> 3BR homes in good condition, some with views</li>
                <li><strong>$800K-1.2M:</strong> Updated 3-4BR homes, better locations</li>
                <li><strong>$1.2M+:</strong> Premium locations, larger homes, Gulf-front</li>
              </ul>
            </ContentSection>

            <ContentSection id="search-process">
              <h2>The Search Process</h2>

              <h3>Working with an Agent</h3>
              <p>
                A local real estate agent is invaluable for first-time buyers:
              </p>
              <ul>
                <li>They know the neighborhoods and their nuances</li>
                <li>They understand coastal-specific issues to watch for</li>
                <li>They can recommend trusted inspectors, lenders, and insurers</li>
                <li>They handle negotiations and paperwork</li>
                <li>Their commission is typically paid by the seller</li>
              </ul>

              <h3>Viewing Properties</h3>
              <p>
                When viewing beach properties, pay attention to:
              </p>
              <ul>
                <li><strong>Signs of Water Damage:</strong> Stains, warping, musty smells</li>
                <li><strong>Salt Air Effects:</strong> Corrosion on metal, weathered materials</li>
                <li><strong>HVAC Condition:</strong> Critical for humidity control</li>
                <li><strong>Windows and Doors:</strong> Quality seals against weather</li>
                <li><strong>Exterior Materials:</strong> Condition of siding, roof, deck</li>
                <li><strong>Foundation:</strong> Pilings or slab, any settling issues</li>
              </ul>

              <h3>Questions to Ask</h3>
              <p>
                For each property you&apos;re considering:
              </p>
              <ul>
                <li>What flood zone is it in?</li>
                <li>What&apos;s the elevation certificate show?</li>
                <li>What are actual insurance costs?</li>
                <li>What has been updated or replaced recently?</li>
                <li>Are there any known issues?</li>
                <li>What are the HOA rules on rentals?</li>
                <li>Has it ever flooded or had storm damage?</li>
              </ul>
            </ContentSection>

            <ContentSection id="making-offer">
              <h2>Making an Offer</h2>

              <h3>Offer Components</h3>
              <p>
                Your offer will include:
              </p>
              <ul>
                <li><strong>Purchase Price:</strong> Your proposed price</li>
                <li><strong>Earnest Money:</strong> Typically 1-3% as good-faith deposit</li>
                <li><strong>Financing Terms:</strong> Loan type, down payment, contingency</li>
                <li><strong>Inspection Contingency:</strong> Right to inspect, typically 7-10 days</li>
                <li><strong>Closing Date:</strong> Usually 30-45 days from contract</li>
                <li><strong>Included Items:</strong> Appliances, furnishings to be included</li>
              </ul>

              <h3>Negotiation</h3>
              <p>
                Common negotiation points include:
              </p>
              <ul>
                <li>Purchase price adjustments</li>
                <li>Seller-paid closing cost credits</li>
                <li>Repairs identified during inspection</li>
                <li>Inclusion of furnishings or equipment</li>
                <li>Closing date flexibility</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="info">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The Inspection Period
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                The inspection period is your opportunity to discover any issues
                before you&apos;re committed. Hire an inspector experienced with
                coastal properties—they know what to look for. This period is also
                when you should get actual insurance quotes.
              </p>
            </HighlightBox>

            <ContentSection id="due-diligence">
              <h2>Due Diligence</h2>

              <h3>Professional Inspection</h3>
              <p>
                Always hire a professional inspector. A thorough inspection covers:
              </p>
              <ul>
                <li>Foundation and structural elements</li>
                <li>Roof condition and life expectancy</li>
                <li>Electrical system</li>
                <li>Plumbing</li>
                <li>HVAC systems</li>
                <li>Appliances</li>
                <li>Signs of water intrusion or damage</li>
                <li>Windows and doors</li>
              </ul>

              <h3>Insurance Due Diligence</h3>
              <p>
                During the inspection period, get real insurance quotes:
              </p>
              <ul>
                <li><strong>Flood Insurance:</strong> Required if you have a mortgage</li>
                <li><strong>Windstorm Insurance:</strong> Required in coastal Texas</li>
                <li><strong>Homeowners Insurance:</strong> Standard policy for non-wind, non-flood</li>
              </ul>
              <p>
                Don&apos;t rely on seller estimates. Get actual quotes using the
                property&apos;s elevation certificate and construction details.
              </p>

              <h3>Document Review</h3>
              <ul>
                <li><strong>HOA Documents:</strong> Rules, fees, reserves, meeting minutes</li>
                <li><strong>Title Report:</strong> Any liens, easements, or issues</li>
                <li><strong>Survey:</strong> Property boundaries and encroachments</li>
                <li><strong>Permit History:</strong> Verify all work was permitted</li>
                <li><strong>Disclosure Statement:</strong> Seller&apos;s known issues disclosure</li>
              </ul>
            </ContentSection>

            <ContentSection id="closing">
              <h2>Closing on Your Beach Home</h2>

              <h3>Final Steps</h3>
              <p>
                As closing approaches:
              </p>
              <ul>
                <li>Complete any negotiated repairs</li>
                <li>Finalize your mortgage (lock rate if not already)</li>
                <li>Bind insurance policies (must be done before closing)</li>
                <li>Wire closing funds to title company</li>
                <li>Do final walkthrough to verify condition</li>
              </ul>

              <h3>Closing Day</h3>
              <p>
                At closing, you&apos;ll:
              </p>
              <ul>
                <li>Sign all loan and title documents</li>
                <li>Pay remaining closing costs</li>
                <li>Receive keys to your new beach home</li>
              </ul>

              <h3>After Closing</h3>
              <p>
                Immediate tasks after closing:
              </p>
              <ul>
                <li>Change locks and smart home codes</li>
                <li>Set up utilities in your name</li>
                <li>Schedule any desired upgrades or repairs</li>
                <li>Begin furnishing if needed</li>
                <li>Introduce yourself to neighbors</li>
                <li>Enjoy your new beach home!</li>
              </ul>
            </ContentSection>

            <ContentSection id="common-mistakes">
              <h2>Common First-Time Buyer Mistakes</h2>
              <ul>
                <li><strong>Underestimating Insurance:</strong> Get real quotes before making offers</li>
                <li><strong>Skipping Inspection:</strong> Never waive inspection on coastal property</li>
                <li><strong>Ignoring HOA Rules:</strong> Review documents carefully, especially rental policies</li>
                <li><strong>Buying at Budget Max:</strong> Leave room for unexpected costs</li>
                <li><strong>Rushing the Decision:</strong> Take time to find the right property</li>
                <li><strong>Not Understanding Flood Zones:</strong> Know the implications of each zone</li>
                <li><strong>Overlooking Maintenance:</strong> Budget for ongoing coastal maintenance</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Find Your First Beach Home?"
          description="Let us guide you through your first Port Aransas purchase with local expertise and patient support."
          primaryCTA={{ text: "View Properties", href: "/properties" }}
          secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
