import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { SEOPageHero } from "@/components/seo"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Port Aransas Estates. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
  ]

  const lastUpdated = "December 2024"

  return (
    <>
      <SEOPageHero
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
            <h2>Introduction</h2>
            <p>
              {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Property preferences and search criteria</li>
              <li>Messages and communications you send to us</li>
              <li>Information about properties you&apos;re interested in buying or selling</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and general location</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or source</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send property listings that match your criteria</li>
              <li>Process real estate transactions</li>
              <li>Send newsletters and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Other real estate professionals involved in your transaction</li>
              <li>Service providers who assist our operations (e.g., email services, CRM)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your experience,
              analyze site usage, and assist in our marketing efforts. You can control cookies
              through your browser settings.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices of these external sites. We encourage you to review their
              privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
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
