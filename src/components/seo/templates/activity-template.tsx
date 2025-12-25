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
import type { Activity } from "@/data/types"
import { getRelatedActivities } from "@/data"

interface ActivityTemplateProps {
  activity: Activity
}

function DifficultyBadge({ difficulty }: { difficulty?: Activity["difficulty"] }) {
  if (!difficulty) return null

  const colors = {
    easy: "bg-green-100 text-green-800",
    moderate: "bg-yellow-100 text-yellow-800",
    challenging: "bg-red-100 text-red-800",
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[difficulty]}`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  )
}

export function ActivityTemplate({ activity }: ActivityTemplateProps) {
  const relatedActivities = getRelatedActivities(activity, 4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Activities", href: "/activities" },
    { label: activity.name },
  ]

  return (
    <>
      <SEOPageHero
        title={activity.name}
        subtitle={activity.description}
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SEOContent>
                <ContentSection>
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    {activity.longDescription}
                  </p>
                </ContentSection>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {activity.difficulty && (
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-sm text-neutral-500 mb-1">Difficulty</div>
                      <DifficultyBadge difficulty={activity.difficulty} />
                    </div>
                  )}
                  {activity.duration && (
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-sm text-neutral-500 mb-1">Duration</div>
                      <div className="font-medium text-primary-900">{activity.duration}</div>
                    </div>
                  )}
                  {activity.cost && (
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-sm text-neutral-500 mb-1">Cost</div>
                      <div className="font-medium text-primary-900">{activity.cost}</div>
                    </div>
                  )}
                  {activity.bestTime && (
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-sm text-neutral-500 mb-1">Best Time</div>
                      <div className="font-medium text-primary-900">{activity.bestTime}</div>
                    </div>
                  )}
                </div>

                {/* Best Seasons */}
                {activity.bestSeason && activity.bestSeason.length > 0 && (
                  <ContentSection id="best-seasons">
                    <h2>Best Time to Go</h2>
                    <div className="flex flex-wrap gap-2">
                      {activity.bestSeason.map((season, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* What to Bring */}
                {activity.whatToBring && activity.whatToBring.length > 0 && (
                  <ContentSection id="what-to-bring">
                    <h2>What to Bring</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activity.whatToBring.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent-500 mt-1">&#8226;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* Requirements */}
                {activity.requirements && activity.requirements.length > 0 && (
                  <HighlightBox variant="info">
                    <h4 className="font-display text-lg text-primary-900 mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-0">
                      {activity.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-neutral-700">{req}</li>
                      ))}
                    </ul>
                  </HighlightBox>
                )}

                {/* Tips */}
                {activity.tips && activity.tips.length > 0 && (
                  <HighlightBox variant="tip">
                    <h4 className="font-display text-lg text-primary-900 mb-3">Pro Tips</h4>
                    <ul className="space-y-2 mb-0">
                      {activity.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-neutral-700">{tip}</li>
                      ))}
                    </ul>
                  </HighlightBox>
                )}

                {/* Locations */}
                {activity.locations && activity.locations.length > 0 && (
                  <ContentSection id="locations">
                    <h2>Where to Go</h2>
                    <ul className="space-y-2">
                      {activity.locations.map((location, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary-600">&#10148;</span>
                          <span>{location}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* FAQs */}
                {activity.faqs && activity.faqs.length > 0 && (
                  <ContentSection id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion items={activity.faqs} />
                  </ContentSection>
                )}
              </SEOContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 space-y-6">
                {/* Operators/Providers */}
                {activity.operators && activity.operators.length > 0 && (
                  <div>
                    <h3 className="font-display text-lg text-primary-900 mb-4">Local Providers</h3>
                    <div className="space-y-4">
                      {activity.operators.map((operator, index) => (
                        <div key={index} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium text-primary-900">{operator.name}</h4>
                          {operator.description && (
                            <p className="text-sm text-neutral-600 mt-1">{operator.description}</p>
                          )}
                          <div className="mt-2 space-y-1 text-sm">
                            {operator.phone && (
                              <a
                                href={`tel:${operator.phone}`}
                                className="block text-primary-600 hover:text-primary-800"
                              >
                                {operator.phone}
                              </a>
                            )}
                            {operator.website && (
                              <a
                                href={operator.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-primary-600 hover:text-primary-800"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Activities */}
                {relatedActivities.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="font-display text-lg text-primary-900 mb-4">Related Activities</h3>
                    <div className="space-y-3">
                      {relatedActivities.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/activities/${related.slug}`}
                          className="block text-primary-600 hover:text-primary-800"
                        >
                          {related.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="border-t pt-6">
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-4 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Find a Home Near the Action
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* More Activities */}
      {relatedActivities.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              More Activities to Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedActivities.map((related) => (
                <Link
                  key={related.slug}
                  href={`/activities/${related.slug}`}
                  className="group bg-neutral-50 rounded-lg p-6 hover:bg-accent-50 transition-colors"
                >
                  <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                    {related.name}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {related.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-neutral-500">{related.category}</span>
                    {related.difficulty && (
                      <DifficultyBadge difficulty={related.difficulty} />
                    )}
                  </div>
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
