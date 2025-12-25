import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { StatsSection, BuyingTimeline, SalesTicker } from "@/components/sections"
import { BeforeAfterSlider } from "@/components/ui"
import { PropertyAlertsForm } from "@/components/forms"
import { PropertyMap } from "@/components/properties"
import { SEOPageHero } from "@/components/seo"

export const metadata: Metadata = {
  title: "Interactive Features Demo",
  description: "Explore our interactive tools and features for Port Aransas real estate",
}

export default function DemoPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Demo" },
  ]

  return (
    <>
      <SEOPageHero
        title="Interactive Features"
        subtitle="Explore our tools designed to help you find your perfect Port Aransas home"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      {/* Sales Ticker Demo */}
      <SalesTicker variant="banner" />

      {/* Interactive Map Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
              Explore Areas
            </span>
            <h2 className="text-fluid-3xl md:text-fluid-4xl font-display font-semibold text-neutral-900 tracking-tight mb-4">
              Interactive Property Map
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Click neighborhoods to explore properties, or switch to property view to see individual listings
            </p>
          </div>
          <PropertyMap className="h-[500px]" />
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection variant="gradient" />

      {/* Before/After Section */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
              Transformations
            </span>
            <h2 className="text-fluid-3xl md:text-fluid-4xl font-display font-semibold text-neutral-900 tracking-tight mb-4">
              Before & After Renovations
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Drag the slider to see the stunning transformations of our featured properties
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <BeforeAfterSlider
                beforeImage="/images/demo/before-1.jpg"
                afterImage="/images/demo/after-1.jpg"
                beforeLabel="Original"
                afterLabel="Renovated"
              />
              <p className="mt-4 text-center text-sm text-neutral-600">Kitchen Remodel - Cinnamon Shore</p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeImage="/images/demo/before-2.jpg"
                afterImage="/images/demo/after-2.jpg"
                beforeLabel="Before"
                afterLabel="After"
              />
              <p className="mt-4 text-center text-sm text-neutral-600">Living Room Update - Mustang Island</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buying Timeline */}
      <BuyingTimeline />

      {/* Property Alerts */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
                Stay Informed
              </span>
              <h2 className="text-fluid-3xl md:text-fluid-4xl font-display font-semibold text-neutral-900 tracking-tight mb-4">
                Never Miss a New Listing
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Set up personalized alerts and be the first to know when properties matching your
                criteria hit the market. In the competitive Port Aransas market, timing is everything.
              </p>
              <ul className="space-y-3">
                {[
                  "Instant email notifications",
                  "Customize by price, type, and area",
                  "Unsubscribe anytime",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <PropertyAlertsForm variant="card" />
          </div>
        </Container>
      </Section>

      {/* Recent Sales Feed */}
      <Section className="bg-neutral-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-400 text-sm tracking-wider uppercase font-medium block mb-4">
                Market Activity
              </span>
              <h2 className="text-fluid-3xl md:text-fluid-4xl font-display font-semibold text-white tracking-tight mb-4">
                Recent Sales in Port Aransas
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                See what&apos;s selling and for how much. Our team has helped buyers and sellers
                close deals across every neighborhood in Port Aransas.
              </p>
            </div>
            <SalesTicker variant="feed" className="bg-white" />
          </div>
        </Container>
      </Section>
    </>
  )
}
