import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  GuideCard,
  GuideGrid,
  CTABanner,
} from "@/components/seo"
import { HomeIcon, TrendingUpIcon, PalmTreeIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Port Aransas Real Estate Guides | Buying, Investing & Living",
  description:
    "Expert guides on buying a beach home, investment properties, vacation rentals, and relocating to Port Aransas. Everything you need to know about Texas coastal real estate.",
  keywords: [
    "Port Aransas real estate guide",
    "buying beach home Texas",
    "Port Aransas investment property",
    "vacation rental guide",
    "relocating to Port Aransas",
  ],
  openGraph: {
    title: "Port Aransas Real Estate Guides | Buying, Investing & Living",
    description:
      "Expert guides on buying a beach home, investment properties, and relocating to Port Aransas.",
    type: "website",
  },
}

const buyingGuides = [
  {
    title: "Buying a Beach Home in Port Aransas",
    description:
      "A comprehensive guide to purchasing coastal property, from understanding flood zones to choosing the right insurance. Essential reading for first-time beach home buyers.",
    href: "/guides/buying-beach-home",
    category: "Buying",
  },
  {
    title: "First-Time Buyer's Guide",
    description:
      "New to buying real estate in Texas? This guide covers everything from working with agents to closing costs and what to expect throughout the process.",
    href: "/guides/first-time-buyer",
    category: "Buying",
  },
  {
    title: "Financing Your Coastal Property",
    description:
      "Learn about mortgage options, jumbo loans, and financing strategies specific to beach homes and second properties in Texas.",
    href: "/guides/financing-coastal-property",
    category: "Buying",
  },
]

const investmentGuides = [
  {
    title: "Port Aransas Investment Property Guide",
    description:
      "Analyze the Port Aransas market for investment opportunities. Understand ROI potential, property management, and long-term value appreciation.",
    href: "/guides/investment-property",
    category: "Investing",
  },
  {
    title: "Vacation Rental Income Guide",
    description:
      "Maximize your rental income in Port Aransas. Learn about occupancy rates, pricing strategies, property management, and local regulations.",
    href: "/guides/vacation-rental-guide",
    category: "Investing",
  },
]

const sellingGuides = [
  {
    title: "Selling Your Port Aransas Property",
    description:
      "Expert guidance on selling your beach home or investment property. Market timing, pricing strategy, preparation tips, and what to expect from the selling process.",
    href: "/guides/selling",
    category: "Selling",
  },
]

const lifestyleGuides = [
  {
    title: "Relocating to Port Aransas",
    description:
      "Everything you need to know about making Port Aransas your full-time home, from schools and healthcare to local services and community life.",
    href: "/guides/relocating-to-port-aransas",
    category: "Lifestyle",
  },
]

export default function GuidesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Real Estate Guides"
        subtitle="Expert resources to help you buy, invest, and live on the Texas coast"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <SEOContent>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mb-12">
              Whether you&apos;re buying your first beach home, exploring investment
              opportunities, or planning to relocate to the Texas coast, our comprehensive
              guides provide the local knowledge and expert insights you need to make
              informed decisions.
            </p>
          </SEOContent>

          {/* Buying Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Buying Guides
            </h2>
            <GuideGrid>
              {buyingGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<HomeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Investment Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Investment Guides
            </h2>
            <GuideGrid columns={2}>
              {investmentGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<TrendingUpIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Selling Guides */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Selling Guides
            </h2>
            <GuideGrid columns={2}>
              {sellingGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<HomeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>

          {/* Lifestyle Guides */}
          <div>
            <h2 className="font-display text-2xl text-primary-900 mb-6">
              Lifestyle Guides
            </h2>
            <GuideGrid columns={2}>
              {lifestyleGuides.map((guide) => (
                <GuideCard
                  key={guide.href}
                  {...guide}
                  icon={<PalmTreeIcon size={28} />}
                />
              ))}
            </GuideGrid>
          </div>
        </Container>
      </Section>

      {/* Featured Topics */}
      <Section className="bg-white">
        <Container size="narrow">
          <h2 className="font-display text-3xl text-primary-900 mb-8 text-center">
            Popular Topics
          </h2>

          <div className="space-y-4">
            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                What should I know about flood insurance?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Most properties in Port Aransas are in FEMA flood zones and require flood
                insurance. Our buying guide covers flood zone designations, insurance costs,
                and elevation certificates in detail.
              </p>
            </details>

            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                Can I rent my property as a vacation rental?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Yes, Port Aransas allows short-term rentals, making it popular for investment
                properties. Our vacation rental guide covers permits, management options, and
                expected rental income.
              </p>
            </details>

            <details className="p-6 bg-neutral-50 rounded-lg cursor-pointer group">
              <summary className="font-display text-lg text-primary-900 list-none flex items-center justify-between">
                What are the ongoing costs of beach home ownership?
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-600">
                Beyond mortgage and insurance, budget for property taxes, HOA fees (in some
                communities), maintenance due to salt air exposure, and potential wind/hail
                insurance. Our guides break down typical costs by property type.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Have Questions About Buying?"
          description="Our team of local experts is here to answer your questions and guide you through the process."
          primaryCTA={{ text: "Contact Us", href: "#contact-form" }}
          secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        />
      </Container>
    </>
  )
}
