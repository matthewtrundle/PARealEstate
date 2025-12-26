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
  title: "Financing a Coastal Property | Beach Home Loans & Mortgages",
  description:
    "Guide to financing a beach home in Port Aransas. Learn about mortgage options, down payment requirements, and what lenders look for in coastal properties.",
  keywords: [
    "beach house mortgage",
    "financing coastal property",
    "second home loan Texas",
    "Port Aransas mortgage",
    "vacation home financing",
  ],
  openGraph: {
    title: "Financing a Coastal Property | Beach Home Loans & Mortgages",
    description:
      "Guide to financing a beach home in Port Aransas.",
    type: "website",
  },
}

export default function FinancingCoastalPropertyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Financing Coastal Property" },
  ]

  const stats = [
    { value: "10-25%", label: "Down payment" },
    { value: "0.25-0.5%", label: "Rate premium" },
    { value: "680+", label: "Credit score" },
    { value: "43%", label: "Max DTI" },
  ]

  return (
    <>
      <SEOPageHero
        title="Financing a Coastal Property"
        subtitle="Understanding mortgages, loans, and financing options for beach home purchases"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Financing a beach home involves considerations beyond typical
                home purchases. Lenders evaluate coastal properties differently
                due to insurance requirements, rental potential, and property
                types. This guide covers everything you need to know about
                obtaining a mortgage for your Port Aransas property.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="loan-types">
              <h2>Types of Loans for Beach Properties</h2>

              <h3>Primary Residence Loans</h3>
              <p>
                If Port Aransas will be your primary home, you qualify for
                standard primary residence financing:
              </p>
              <ul>
                <li>Down payments as low as 3-5%</li>
                <li>Best available interest rates</li>
                <li>FHA, VA, and conventional options</li>
                <li>Must live in the home as your main residence</li>
              </ul>

              <h3>Second Home Loans</h3>
              <p>
                For vacation homes you&apos;ll use personally:
              </p>
              <ul>
                <li>Typically 10-20% down payment required</li>
                <li>Interest rates 0.25-0.5% higher than primary residence</li>
                <li>Must be used primarily for personal use</li>
                <li>Limited rental allowed (varies by lender)</li>
              </ul>

              <h3>Investment Property Loans</h3>
              <p>
                For properties primarily used for rental income:
              </p>
              <ul>
                <li>Usually 20-25% down payment minimum</li>
                <li>Interest rates 0.5-1% higher than primary</li>
                <li>Rental income can help qualify</li>
                <li>More scrutiny on property financials</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Occupancy Fraud Warning
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Misrepresenting how you&apos;ll use a property to get better loan
                terms is mortgage fraud—a federal crime. Be honest with your
                lender about your intended use. If you plan to rent the property
                frequently, disclose that upfront.
              </p>
            </HighlightBox>

            <ContentSection id="qualification">
              <h2>Qualification Requirements</h2>

              <h3>Credit Score</h3>
              <p>
                Lenders typically require higher credit scores for beach properties:
              </p>
              <ul>
                <li><strong>Primary Residence:</strong> 620+ (higher for best rates)</li>
                <li><strong>Second Home:</strong> 680+ typically required</li>
                <li><strong>Investment Property:</strong> 700+ often required</li>
              </ul>
              <p>
                Higher credit scores unlock better rates and terms. Consider
                improving your score before applying if it&apos;s borderline.
              </p>

              <h3>Debt-to-Income Ratio (DTI)</h3>
              <p>
                Your DTI measures monthly debt payments versus income:
              </p>
              <ul>
                <li>Most lenders want DTI under 43%</li>
                <li>This includes your new mortgage payment</li>
                <li>Also includes existing debts (car loans, credit cards, etc.)</li>
                <li>Rental income from the property may help offset</li>
              </ul>

              <h3>Cash Reserves</h3>
              <p>
                Lenders want to see cash reserves after closing:
              </p>
              <ul>
                <li><strong>Second Homes:</strong> 2-6 months of payments in reserve</li>
                <li><strong>Investment Properties:</strong> 6+ months of payments</li>
                <li>Reserves can include retirement accounts (at discounted value)</li>
              </ul>

              <h3>Income Documentation</h3>
              <p>
                Be prepared to provide extensive documentation:
              </p>
              <ul>
                <li>W-2s and tax returns (typically 2 years)</li>
                <li>Pay stubs (recent 30-60 days)</li>
                <li>Bank statements (2-3 months)</li>
                <li>Investment account statements</li>
                <li>If self-employed: business tax returns, P&amp;L statements</li>
              </ul>
            </ContentSection>

            <ContentSection id="conventional-vs-jumbo">
              <h2>Conventional vs. Jumbo Loans</h2>

              <h3>Conforming Loans</h3>
              <p>
                Conventional loans that meet Fannie Mae/Freddie Mac guidelines:
              </p>
              <ul>
                <li>2024 limit: $766,550 for most areas</li>
                <li>Easier to qualify for</li>
                <li>More flexible terms</li>
                <li>Lower rates than jumbo loans</li>
              </ul>

              <h3>Jumbo Loans</h3>
              <p>
                Loans exceeding conforming limits:
              </p>
              <ul>
                <li>Required for many Port Aransas properties</li>
                <li>Stricter qualification requirements</li>
                <li>Higher down payments (often 20-30%)</li>
                <li>Higher credit score requirements (typically 700+)</li>
                <li>More extensive documentation</li>
              </ul>
              <p>
                Many Port Aransas homes exceed conforming limits, so be prepared
                for jumbo loan requirements.
              </p>
            </ContentSection>

            <ContentSection id="coastal-considerations">
              <h2>Coastal-Specific Lending Considerations</h2>

              <h3>Insurance Requirements</h3>
              <p>
                Lenders require proof of insurance before closing:
              </p>
              <ul>
                <li><strong>Flood Insurance:</strong> Required for all mortgages in flood zones</li>
                <li><strong>Windstorm Insurance:</strong> Required for coastal Texas properties</li>
                <li><strong>Homeowners Insurance:</strong> Standard coverage for other perils</li>
              </ul>
              <p>
                Lenders often escrow insurance payments, increasing your monthly
                payment. Budget for total insurance costs of $8,000-15,000+ annually.
              </p>

              <h3>Property Type Considerations</h3>
              <p>
                Some property types have additional requirements:
              </p>
              <ul>
                <li><strong>Condos:</strong> Must be in lender-approved projects</li>
                <li><strong>Manufactured/Modular:</strong> Limited financing options</li>
                <li><strong>Older Properties:</strong> May require more scrutiny</li>
                <li><strong>Mixed-Use:</strong> Commercial lenders may be needed</li>
              </ul>

              <h3>Condo Financing</h3>
              <p>
                Condo financing has additional requirements:
              </p>
              <ul>
                <li>HOA must be in good financial standing</li>
                <li>Adequate reserve funds required</li>
                <li>Owner-occupancy ratio minimums (often 50%+)</li>
                <li>No pending litigation against HOA</li>
                <li>Proper insurance coverage by HOA</li>
              </ul>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Work with Coastal-Experienced Lenders
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Not all lenders understand coastal property nuances. Work with
                lenders experienced in beach properties—they know how to navigate
                insurance requirements, condo approvals, and property-specific
                challenges that can delay or derail financing.
              </p>
            </HighlightBox>

            <ContentSection id="using-rental-income">
              <h2>Using Rental Income to Qualify</h2>
              <p>
                If you plan to rent the property, some of that income may help
                you qualify for the loan:
              </p>

              <h3>How Lenders Calculate Rental Income</h3>
              <ul>
                <li>Typically use 75% of projected gross rental income</li>
                <li>May require appraisal with rental schedule</li>
                <li>Existing rental history strengthens the case</li>
                <li>Market rent analysis from comparable properties</li>
              </ul>

              <h3>Documentation Needed</h3>
              <ul>
                <li>Rental history (if property was previously rented)</li>
                <li>Signed lease agreements (if in place)</li>
                <li>Market rent analysis or appraisal</li>
                <li>Property management agreements (if applicable)</li>
              </ul>

              <h3>Limitations</h3>
              <ul>
                <li>Can&apos;t use 100% of projected income</li>
                <li>Must still meet minimum down payment requirements</li>
                <li>Investment property classification may apply</li>
              </ul>
            </ContentSection>

            <ContentSection id="down-payment">
              <h2>Down Payment Strategies</h2>

              <h3>Sources of Down Payment</h3>
              <ul>
                <li><strong>Savings:</strong> Cash in bank accounts</li>
                <li><strong>Investments:</strong> Stocks, bonds, mutual funds</li>
                <li><strong>Retirement:</strong> 401(k) loans or IRA withdrawals (with caution)</li>
                <li><strong>Home Equity:</strong> HELOC on primary residence</li>
                <li><strong>Gift Funds:</strong> From family members (documented)</li>
              </ul>

              <h3>Down Payment Considerations</h3>
              <ul>
                <li>Larger down payment = lower monthly payment</li>
                <li>20%+ avoids PMI on conventional loans</li>
                <li>More down = better rates on investment properties</li>
                <li>Consider opportunity cost of tying up cash</li>
              </ul>
            </ContentSection>

            <ContentSection id="loan-process">
              <h2>The Loan Process</h2>

              <h3>Pre-Approval</h3>
              <p>
                Get pre-approved before house hunting:
              </p>
              <ul>
                <li>Submit application and documentation</li>
                <li>Lender verifies income, credit, assets</li>
                <li>Receive pre-approval letter (typically valid 60-90 days)</li>
                <li>Know your maximum purchase price</li>
              </ul>

              <h3>Loan Application</h3>
              <p>
                Once under contract:
              </p>
              <ul>
                <li>Complete full application with property details</li>
                <li>Provide updated documentation</li>
                <li>Pay application and appraisal fees</li>
                <li>Lock interest rate (timing is strategic)</li>
              </ul>

              <h3>Processing &amp; Underwriting</h3>
              <ul>
                <li>Appraisal ordered and completed</li>
                <li>Title search conducted</li>
                <li>Insurance verified</li>
                <li>Underwriter reviews file and conditions</li>
                <li>May request additional documentation</li>
              </ul>

              <h3>Clear to Close</h3>
              <ul>
                <li>All conditions satisfied</li>
                <li>Final loan documents prepared</li>
                <li>Closing disclosure provided (3 days before closing)</li>
                <li>Wire closing funds to title company</li>
              </ul>
            </ContentSection>

            <ContentSection id="rate-considerations">
              <h2>Interest Rate Considerations</h2>

              <h3>Factors Affecting Your Rate</h3>
              <ul>
                <li><strong>Credit Score:</strong> Higher score = lower rate</li>
                <li><strong>Down Payment:</strong> Larger down = lower rate</li>
                <li><strong>Loan Type:</strong> Primary &lt; second home &lt; investment</li>
                <li><strong>Loan Amount:</strong> Jumbo loans may have different rates</li>
                <li><strong>Loan Term:</strong> 15-year typically lower than 30-year</li>
              </ul>

              <h3>Rate Lock Timing</h3>
              <p>
                When to lock your rate is a strategic decision:
              </p>
              <ul>
                <li>Lock early if rates are favorable and may rise</li>
                <li>Float if rates are trending down</li>
                <li>Typical lock periods: 30, 45, or 60 days</li>
                <li>Longer locks may cost slightly more</li>
              </ul>
            </ContentSection>

            <ContentSection id="common-issues">
              <h2>Common Financing Issues</h2>

              <h3>Appraisal Challenges</h3>
              <ul>
                <li>Beach properties can be harder to appraise</li>
                <li>Limited comparable sales in unique areas</li>
                <li>Seasonal market fluctuations affect values</li>
                <li>May need second appraisal or value dispute</li>
              </ul>

              <h3>Condo Project Issues</h3>
              <ul>
                <li>Project not on approved list</li>
                <li>Insufficient reserves or high delinquencies</li>
                <li>Too many investor-owned units</li>
                <li>Pending litigation or assessment</li>
              </ul>

              <h3>Insurance Binding Delays</h3>
              <ul>
                <li>Flood insurance can take time to bind</li>
                <li>TWIA windstorm has processing timeline</li>
                <li>Start insurance process early</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Start the Financing Process?"
          description="Connect with lenders experienced in coastal properties and get pre-approved for your Port Aransas purchase."
          primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
