import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, SEOContent, ContentSection, HighlightBox, CTABanner } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Port Aransas New Construction Homes | New Build Beach Houses",
  description:
    "Explore new construction homes in Port Aransas, TX. Modern beach houses with coastal design, energy efficiency, and the latest building standards.",
  keywords: [
    "Port Aransas new construction",
    "new build homes Port Aransas",
    "new beach houses Texas",
    "Port Aransas home builders",
    "new construction coastal homes",
    "modern beach house Texas",
  ],
  openGraph: {
    title: "Port Aransas New Construction Homes | New Build Properties",
    description: "Modern new construction beach houses with coastal design.",
  },
}

export default function NewConstructionPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "New Construction", href: "/port-aransas-new-construction" },
  ]

  return (
    <>
      <SEOPageHero
        title="New Construction"
        subtitle="Modern beach homes built to the latest coastal standards and design trends."
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
          </SEOContent>

          <CTABanner
            title="Explore New Construction"
            description="See what's being built in Port Aransas and find your new home."
            buttonText="View New Homes"
            buttonHref="/contact?interest=new-construction"
          />
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Get New Construction Updates"
        subtitle="Be first to know about new developments and spec homes coming to market."
      />
    </>
  )
}
