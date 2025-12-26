import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { PropertyCard } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"

export const metadata: Metadata = {
  title: "Port Aransas Waterfront Homes | Canal & Bay Front Properties",
  description:
    "Browse waterfront homes for sale in Port Aransas, TX. Canal-front and bay-front properties with boat docks, fishing access, and water views.",
  keywords: [
    "Port Aransas waterfront homes",
    "canal front homes Port Aransas",
    "bay front property Texas",
    "waterfront homes with boat dock",
    "Port Aransas fishing homes",
    "water access homes Texas coast",
  ],
  openGraph: {
    title: "Port Aransas Waterfront Homes | Canal & Bay Properties",
    description: "Canal-front and bay-front homes with boat docks and water access.",
  },
}

export default function WaterfrontHomesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Waterfront Homes", href: "/port-aransas-waterfront-homes" },
  ]

  return (
    <>
      <SEOPageHero
        title="Waterfront Homes"
        subtitle="Canal-front and bay-front properties with boat docks and direct water access."
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
                lots and more privacy. Prices range from $600,000 for modest canal-front homes to
                $2 million+ for premium bay-front estates with deep water.
              </p>
            </ContentSection>
          </SEOContent>

          <CTABanner
            title="Find Your Waterfront Home"
            description="Tell us about your boating needs and we'll match you with the right property."
            buttonText="Contact Us"
            buttonHref="/contact?interest=waterfront"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Get Waterfront Property Alerts"
        subtitle="Be first to know about new canal-front and bay-front listings."
      />
    </>
  )
}
