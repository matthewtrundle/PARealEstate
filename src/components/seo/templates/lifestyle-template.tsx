import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
  FAQAccordion,
} from "@/components/seo"
import type { LifestyleScenario } from "@/data/types"
import { getAllLifestyleScenarios } from "@/data"

interface LifestyleTemplateProps {
  scenario: LifestyleScenario
}

export function LifestyleTemplate({ scenario }: LifestyleTemplateProps) {
  const allScenarios = getAllLifestyleScenarios()
  const relatedScenarios = allScenarios
    .filter((s) => s.slug !== scenario.slug)
    .slice(0, 4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Living in Port Aransas", href: "/living-in-port-aransas" },
    { label: scenario.title },
  ]

  return (
    <>
      <SEOPageHero
        title={scenario.headline}
        subtitle={scenario.description}
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SEOContent>
                <ContentSection>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    {scenario.intro}
                  </p>
                </ContentSection>

                {/* Benefits Grid */}
                {scenario.benefits && scenario.benefits.length > 0 && (
                  <ContentSection id="benefits">
                    <h2>Why Port Aransas?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {scenario.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg border border-neutral-100"
                        >
                          <h3 className="font-display text-lg text-primary-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* Content Sections */}
                {scenario.sections.map((section, index) => (
                  <ContentSection key={index} id={section.title.toLowerCase().replace(/\s+/g, "-")}>
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                    {section.highlights && section.highlights.length > 0 && (
                      <ul className="mt-4">
                        {section.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </ContentSection>
                ))}

                {/* Testimonial */}
                {scenario.testimonial && (
                  <blockquote className="border-l-4 border-accent-500 pl-6 my-10">
                    <p className="text-lg italic text-neutral-700">
                      &ldquo;{scenario.testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-4 text-neutral-600">
                      <strong>{scenario.testimonial.author}</strong>
                      <span className="text-neutral-500"> - {scenario.testimonial.role}</span>
                    </footer>
                  </blockquote>
                )}

                {/* Considerations */}
                {scenario.considerations && scenario.considerations.length > 0 && (
                  <HighlightBox variant="warning">
                    <h4 className="font-display text-lg text-primary-900 mb-3">Things to Consider</h4>
                    <ul className="space-y-3 mb-0">
                      {scenario.considerations.map((item, index) => (
                        <li key={index}>
                          <strong className="text-primary-900">{item.title}:</strong>
                          <span className="text-neutral-700 ml-2">{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </HighlightBox>
                )}

                {/* FAQs */}
                {scenario.faqs && scenario.faqs.length > 0 && (
                  <ContentSection id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion items={scenario.faqs} />
                  </ContentSection>
                )}
              </SEOContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 space-y-6">
                {/* Related Properties */}
                {scenario.relatedProperties && (
                  <div>
                    <h3 className="font-display text-lg text-primary-900 mb-4">Ideal Properties</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Property Type</span>
                        <span className="text-primary-900">{scenario.relatedProperties.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Price Range</span>
                        <span className="text-primary-900">{scenario.relatedProperties.priceRange}</span>
                      </div>
                      {scenario.relatedProperties.features.length > 0 && (
                        <div className="pt-3 border-t">
                          <span className="text-neutral-600 block mb-2">Key Features</span>
                          <ul className="space-y-1">
                            {scenario.relatedProperties.features.map((feature, index) => (
                              <li key={index} className="text-primary-900 flex items-center gap-2">
                                <span className="text-accent-500">&#10003;</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Recommended Neighborhoods */}
                {scenario.relatedNeighborhoods && scenario.relatedNeighborhoods.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="font-display text-lg text-primary-900 mb-4">
                      Recommended Neighborhoods
                    </h3>
                    <div className="space-y-2">
                      {scenario.relatedNeighborhoods.map((neighborhood, index) => (
                        <Link
                          key={index}
                          href={`/neighborhoods/${neighborhood}`}
                          className="block text-primary-600 hover:text-primary-800"
                        >
                          {neighborhood.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                {scenario.callToAction ? (
                  <div className="border-t pt-6">
                    <h4 className="font-medium text-primary-900 mb-2">
                      {scenario.callToAction.title}
                    </h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      {scenario.callToAction.description}
                    </p>
                    <Link
                      href={scenario.callToAction.buttonLink}
                      className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {scenario.callToAction.buttonText}
                    </Link>
                  </div>
                ) : (
                  <div className="border-t pt-6">
                    <Link
                      href="/contact"
                      className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Talk to a Local Expert
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Lifestyle Scenarios */}
      {relatedScenarios.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              Explore Other Lifestyles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedScenarios.map((related) => (
                <Link
                  key={related.slug}
                  href={`/living/${related.slug}`}
                  className="group bg-neutral-50 rounded-lg p-6 hover:bg-accent-50 transition-colors"
                >
                  <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Container>
        <CTABanner />
      </Container>
    </>
  )
}
