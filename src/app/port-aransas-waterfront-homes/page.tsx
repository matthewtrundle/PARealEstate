import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Port Aransas Waterfront Homes | Market Insights & Pricing",
  description:
    "Expert insights on Port Aransas waterfront real estate. Canal-front and bay-front property analysis, price trends, and market guidance for water-access homes.",
  keywords: [
    "Port Aransas waterfront homes",
    "canal front property values",
    "bay front homes Texas",
    "waterfront real estate Port Aransas",
    "boat dock homes Texas coast",
    "water access property analysis",
  ],
  openGraph: {
    title: "Port Aransas Waterfront Homes | Market Insights & Pricing",
    description: "Expert insights on canal-front and bay-front property values in Port Aransas.",
  },
}

export default function WaterfrontHomesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Market Insights", href: "/market" },
    { label: "Waterfront Homes", href: "/port-aransas-waterfront-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Waterfront Homes"
        subtitle="Market insights for canal-front and bay-front properties with boat docks and direct water access."
        backgroundImage="/images/hero/waterfront.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <SEOContent>
            <ContentSection>
              <h2>Waterfront Living in Port Aransas</h2>
              <p>
                Port Aransas waterfront homes offer the best of coastal living for boaters and fishing
                enthusiasts. Unlike beachfront properties that face the Gulf, waterfront homes sit along
                the canals and bays that wind through the island, providing protected water access and
                often private boat docks.
              </p>
              <p>
                These properties are prized by serious anglers who want to launch from their backyard,
                as well as families who enjoy kayaking, paddleboarding, and dolphin watching in the
                calm bay waters.
              </p>
            </ContentSection>

            {/* Market Overview */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-6">
                Waterfront Market Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Canal-Front</p>
                  <p className="text-2xl font-semibold text-primary-800">$600K - $1.2M</p>
                  <p className="text-sm text-neutral-600 mt-2">Protected docks, calm waters</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Bay-Front</p>
                  <p className="text-2xl font-semibold text-primary-800">$1M - $2M</p>
                  <p className="text-sm text-neutral-600 mt-2">Open water views, deep water</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Premium</p>
                  <p className="text-2xl font-semibold text-primary-800">$2M+</p>
                  <p className="text-sm text-neutral-600 mt-2">Estate properties, ship channel</p>
                </div>
              </div>
            </div>

            <HighlightBox title="Waterfront Property Types">
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Canal-Front:</strong> Protected dockage, calm waters, quick bay access</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Bay-Front:</strong> Open water views, deeper drafts, spectacular sunsets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Ship Channel:</strong> Watch cargo ships pass, deep water access</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500">•</span>
                  <span><strong>Lagoon:</strong> Nature views, wildlife, kayak-friendly</span>
                </li>
              </ul>
            </HighlightBox>

            <ContentSection>
              <h2>For Boaters & Anglers</h2>
              <p>
                Many waterfront homes include private boat docks, lifts, and fish cleaning stations.
                From your dock, you have quick access to the Lydia Ann Channel, Corpus Christi Bay,
                and the Gulf of Mexico—some of the best fishing waters in Texas.
              </p>
              <p>
                Waterfront properties typically offer more value than beachfront homes, with larger
                lots and more privacy. Working with an agent who understands the nuances of different
                waterfront locations is essential to finding the right property.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Interested in Waterfront Properties?"
            description="Let's discuss your boating needs and find the right waterfront location for your lifestyle."
            buttonText="Schedule Consultation"
            buttonHref="/contact?interest=waterfront"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Start Your Waterfront Search"
        subtitle="Tell us about your ideal waterfront property and boating requirements."
      />
    </>
  )
}
