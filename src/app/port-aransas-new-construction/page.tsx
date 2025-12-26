import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Port Aransas New Construction | New Build Market Insights",
  description:
    "Expert insights on Port Aransas new construction market. Analysis of active developments, builder trends, and pricing for modern beach homes in Texas.",
  keywords: [
    "Port Aransas new construction",
    "new build homes Port Aransas",
    "new beach houses Texas market",
    "Port Aransas home builders",
    "new construction coastal homes",
    "modern beach house Texas",
  ],
  openGraph: {
    title: "Port Aransas New Construction | New Build Market Insights",
    description: "Expert insights on new construction beach homes and active developments in Port Aransas.",
  },
}

export default function NewConstructionPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "New Construction", href: "/port-aransas-new-construction" },
  ]

  return (
    <>
      <SEOPageHero
        title="New Construction"
        subtitle="Market insights for modern beach homes built to the latest coastal standards."
        backgroundImage="/images/hero/new-construction.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>New Homes in Port Aransas</h2>
              <p>
                New construction in Port Aransas offers the opportunity to own a modern coastal home
                built to current building codes, with energy-efficient features and contemporary design.
                Post-Hurricane Harvey construction standards ensure these homes are built to withstand
                Gulf Coast weather.
              </p>
              <p>
                From spec homes ready for immediate occupancy to custom builds on your chosen lot,
                Port Aransas offers options for buyers who want the peace of mind that comes with
                new construction.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                New Construction Price Bands
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Spec Homes</p>
                  <p className="text-2xl font-semibold text-primary-800">$600K - $900K</p>
                  <p className="text-sm text-neutral-600 mt-2">Move-in ready, standard finishes</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Semi-Custom</p>
                  <p className="text-2xl font-semibold text-primary-800">$900K - $1.5M</p>
                  <p className="text-sm text-neutral-600 mt-2">Select finishes, premium lots</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Custom Build</p>
                  <p className="text-2xl font-semibold text-primary-800">$1.5M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Fully custom, architect-designed</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Benefits of New Construction">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Modern Building Codes:</strong> Built to current wind and flood standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Energy Efficiency:</strong> Lower utility costs with modern insulation and systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Warranty Protection:</strong> Builder warranties on structure and systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">✓</span>
                  <span><strong>Customization:</strong> Choose finishes and features in pre-construction</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>Active Developments</h2>
              <p>
                Several master-planned communities in Port Aransas offer new construction opportunities,
                including Cinnamon Shore, Palmilla Beach, and various infill projects throughout the island.
                We can guide you to the right development based on your preferences for location, style,
                and price point.
              </p>
              <p>
                For buyers interested in custom construction, we can connect you with reputable local
                builders and help you find the right lot for your dream beach home.
              </p>
            </ContentSection>

            <ContentSection>
              <h2>Builder Relationships</h2>
              <p>
                We&apos;ve developed relationships with the top builders in Port Aransas and can provide
                insights into their construction quality, timelines, and pricing. Whether you&apos;re looking
                at a spec home or planning a custom build, we can help you navigate the process.
              </p>
              <p>
                New construction offers unique advantages for vacation rental investors, including modern
                amenities that drive bookings and warranties that reduce maintenance concerns in the early years.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Interested in New Construction?"
            description="Let us guide you through the new construction market and active development options."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=new-construction"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Explore New Construction"
        subtitle="Tell us about your new home preferences for personalized market insights."
      />
    </>
  )
}
