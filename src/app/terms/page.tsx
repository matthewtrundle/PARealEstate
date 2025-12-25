import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { SEOPageHero } from "@/components/seo"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Port Aransas Estates website. Read our terms and conditions for using our real estate services.",
}

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Service" },
  ]

  const lastUpdated = "December 2024"

  return (
    <>
      <SEOPageHero
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the {SITE_CONFIG.name} website and services, you agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do not
              use our website or services.
            </p>

            <h2>Description of Services</h2>
            <p>
              {SITE_CONFIG.name} provides real estate brokerage services, including but not limited to:
            </p>
            <ul>
              <li>Property listings and search tools</li>
              <li>Buyer and seller representation</li>
              <li>Market information and resources</li>
              <li>Property valuation tools and calculators</li>
              <li>Real estate consultation services</li>
            </ul>

            <h2>User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use the website for lawful purposes only</li>
              <li>Not interfere with the proper functioning of the website</li>
              <li>Not attempt to access areas of the site you are not authorized to access</li>
              <li>Not use the website to harm, threaten, or harass others</li>
            </ul>

            <h2>Property Listings</h2>
            <p>
              Property listings on our website are provided for informational purposes. While we
              strive to ensure accuracy, we do not guarantee that all information is complete,
              current, or error-free. Property details, prices, and availability are subject to
              change without notice.
            </p>
            <p>
              Photographs and virtual tours may not reflect the current condition of properties.
              We recommend verifying all information and visiting properties in person before
              making any real estate decisions.
            </p>

            <h2>Calculators and Tools</h2>
            <p>
              The calculators and tools provided on our website (including mortgage calculators,
              affordability calculators, and home value estimators) are for informational purposes
              only. Results are estimates and should not be relied upon for financial decisions.
              We recommend consulting with qualified professionals for accurate financial advice.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of {SITE_CONFIG.name} or its content suppliers and is protected by
              intellectual property laws. You may not reproduce, distribute, or create derivative
              works without our express written permission.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not
              responsible for the content, accuracy, or practices of these external sites. Your
              use of third-party websites is at your own risk.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without any
              warranties of any kind, either express or implied. We do not warrant that our
              website will be uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE_CONFIG.name} shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from
              your use of our website or services.
            </p>

            <h2>Real Estate Transactions</h2>
            <p>
              Real estate transactions involve significant legal and financial considerations.
              We strongly recommend that you:
            </p>
            <ul>
              <li>Work with qualified real estate professionals</li>
              <li>Obtain professional home inspections</li>
              <li>Review all contracts with a real estate attorney</li>
              <li>Secure appropriate financing and insurance</li>
              <li>Conduct thorough due diligence before any purchase</li>
            </ul>

            <h2>Fair Housing</h2>
            <p>
              We are committed to compliance with all federal, state, and local fair housing laws.
              We do not discriminate on the basis of race, color, religion, sex, handicap, familial
              status, national origin, or any other protected class.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {SITE_CONFIG.name} and its officers,
              directors, employees, and agents from any claims, damages, or expenses arising
              from your use of our website or violation of these terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will
              be effective immediately upon posting to the website. Your continued use of our
              website constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the State of Texas, without regard to conflict of law principles.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></li>
              <li>Phone: <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a></li>
              <li>Address: {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}
