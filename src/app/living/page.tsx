import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { getAllLifestyleScenarios } from "@/data"
import { WavesIcon, FishingIcon, CommunityIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Living in Port Aransas | Lifestyle Guides",
  description:
    "Explore what it's like to live in Port Aransas, Texas. Guides for families, retirees, remote workers, fishing enthusiasts, and more.",
  keywords: [
    "living in Port Aransas",
    "Port Aransas lifestyle",
    "moving to Port Aransas",
    "Port A community",
    "coastal living Texas",
  ],
}

export default function LivingPage() {
  const scenarios = getAllLifestyleScenarios()

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Living in Port Aransas" },
  ]

  return (
    <>
      <SEOPageHero
        title="Living in Port Aransas"
        subtitle="Discover what makes Port A the perfect place to call home, no matter your lifestyle"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario) => (
              <Link
                key={scenario.slug}
                href={`/living/${scenario.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-8">
                  <h2 className="font-display text-2xl text-primary-900 group-hover:text-primary-700 mb-3">
                    {scenario.title}
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {scenario.description}
                  </p>

                  {/* Benefits Preview */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {scenario.benefits.slice(0, 4).map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <span className="text-accent-500">&#10003;</span>
                        <span>{benefit.title}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-primary-600 group-hover:text-primary-800">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Port Aransas Section */}
      <Section className="bg-white">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary-900 mb-4">
              Why Choose Port Aransas?
            </h2>
            <p className="text-lg text-neutral-600">
              From its world-class fishing to its laid-back beach lifestyle, Port A offers
              something special for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                <WavesIcon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-display text-lg text-primary-900 mb-2">Beach Living</h3>
              <p className="text-sm text-neutral-600">
                18 miles of Gulf beaches at your doorstep. Wake up to the sound of waves.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                <FishingIcon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-display text-lg text-primary-900 mb-2">Fishing Paradise</h3>
              <p className="text-sm text-neutral-600">
                Known as the Fishing Capital of Texas with world-class inshore and offshore fishing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                <CommunityIcon size={32} className="text-primary-600" />
              </div>
              <h3 className="font-display text-lg text-primary-900 mb-2">Small Town Charm</h3>
              <p className="text-sm text-neutral-600">
                A close-knit community of 2,800 year-round residents who look out for each other.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
