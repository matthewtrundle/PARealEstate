import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  CTABanner,
  FAQAccordion,
} from "@/components/seo"
import type { Comparison } from "@/data/types"
import { getAllComparisons } from "@/data"

interface CompareTemplateProps {
  comparison: Comparison
}

export function CompareTemplate({ comparison }: CompareTemplateProps) {
  const allComparisons = getAllComparisons()
  const relatedComparisons = allComparisons
    .filter((c) => c.slug !== comparison.slug)
    .slice(0, 4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/compare" },
    { label: comparison.title },
  ]

  return (
    <>
      <SEOPageHero
        title={comparison.title}
        subtitle={comparison.description}
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                {comparison.intro}
              </p>
            </ContentSection>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {/* Option A */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary-600 p-4">
                  <h2 className="font-display text-2xl text-white mb-0">
                    {comparison.optionA.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 mb-6">{comparison.optionA.description}</p>

                  {/* Pros */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-green-700 mb-3">Pros</h3>
                    <ul className="space-y-2">
                      {comparison.optionA.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-1">&#10003;</span>
                          <span className="text-neutral-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-red-700 mb-3">Cons</h3>
                    <ul className="space-y-2">
                      {comparison.optionA.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 mt-1">&#10007;</span>
                          <span className="text-neutral-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-medium text-primary-900 mb-2">Best For:</h4>
                    <ul className="space-y-1">
                      {comparison.optionA.bestFor.map((item, index) => (
                        <li key={index} className="text-sm text-neutral-600">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  {comparison.optionA.stats && (
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium text-primary-900 mb-3">Key Stats</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(comparison.optionA.stats).map(([key, value]) => (
                          <div key={key} className="text-center bg-neutral-50 p-3 rounded">
                            <div className="text-lg font-semibold text-primary-900">{value}</div>
                            <div className="text-xs text-neutral-500 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Option B */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-accent-600 p-4">
                  <h2 className="font-display text-2xl text-white mb-0">
                    {comparison.optionB.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 mb-6">{comparison.optionB.description}</p>

                  {/* Pros */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-green-700 mb-3">Pros</h3>
                    <ul className="space-y-2">
                      {comparison.optionB.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-1">&#10003;</span>
                          <span className="text-neutral-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-6">
                    <h3 className="font-display text-lg text-red-700 mb-3">Cons</h3>
                    <ul className="space-y-2">
                      {comparison.optionB.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-red-500 mt-1">&#10007;</span>
                          <span className="text-neutral-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-medium text-primary-900 mb-2">Best For:</h4>
                    <ul className="space-y-1">
                      {comparison.optionB.bestFor.map((item, index) => (
                        <li key={index} className="text-sm text-neutral-600">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  {comparison.optionB.stats && (
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium text-primary-900 mb-3">Key Stats</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(comparison.optionB.stats).map(([key, value]) => (
                          <div key={key} className="text-center bg-neutral-50 p-3 rounded">
                            <div className="text-lg font-semibold text-primary-900">{value}</div>
                            <div className="text-xs text-neutral-500 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            {comparison.comparisonTable && comparison.comparisonTable.length > 0 && (
              <ContentSection id="comparison-table">
                <h2>Side-by-Side Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="p-4 text-left font-display text-primary-900">Category</th>
                        <th className="p-4 text-center font-display text-primary-900">
                          {comparison.optionA.name}
                        </th>
                        <th className="p-4 text-center font-display text-primary-900">
                          {comparison.optionB.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.comparisonTable.map((row, index) => (
                        <tr key={index} className="border-b border-neutral-100">
                          <td className="p-4 font-medium text-neutral-700">{row.category}</td>
                          <td className="p-4 text-center text-neutral-600">{row.optionA}</td>
                          <td className="p-4 text-center text-neutral-600">{row.optionB}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ContentSection>
            )}

            {/* Verdict */}
            <ContentSection id="verdict" className="bg-white p-8 rounded-lg shadow-sm my-12">
              <h2 className="mb-6">The Verdict</h2>
              <p className="text-lg text-neutral-700 mb-6">{comparison.verdict.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg text-primary-900 mb-2">
                    Choose {comparison.optionA.name} if:
                  </h4>
                  <p className="text-neutral-700">{comparison.verdict.chooseA}</p>
                </div>
                <div className="bg-accent-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg text-primary-900 mb-2">
                    Choose {comparison.optionB.name} if:
                  </h4>
                  <p className="text-neutral-700">{comparison.verdict.chooseB}</p>
                </div>
              </div>
            </ContentSection>

            {/* FAQs */}
            {comparison.faqs && comparison.faqs.length > 0 && (
              <ContentSection id="faq">
                <h2>Frequently Asked Questions</h2>
                <FAQAccordion items={comparison.faqs} />
              </ContentSection>
            )}
          </SEOContent>
        </Container>
      </Section>

      {/* Related Comparisons */}
      {relatedComparisons.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              More Comparisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedComparisons.map((related) => (
                <Link
                  key={related.slug}
                  href={`/compare/${related.slug}`}
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
