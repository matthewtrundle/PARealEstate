import Link from "next/link"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"
import type { BestOfList } from "@/data/types"
import { getAllBestOfLists } from "@/data"

interface BestOfTemplateProps {
  list: BestOfList
}

export function BestOfTemplate({ list }: BestOfTemplateProps) {
  const allLists = getAllBestOfLists()
  const relatedLists = list.relatedLists
    ? allLists.filter((l) => list.relatedLists?.includes(l.slug))
    : allLists.filter((l) => l.slug !== list.slug && l.category === list.category).slice(0, 4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Best Of", href: "/best" },
    { label: list.title },
  ]

  return (
    <>
      <SEOPageHero
        title={list.title}
        subtitle={list.description}
        breadcrumbs={breadcrumbs}
        size="default"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                {list.intro}
              </p>
            </ContentSection>

            {/* List Items */}
            <div className="space-y-8 mt-12">
              {list.items.map((item) => (
                <div
                  key={item.rank}
                  className="bg-white rounded-lg shadow-sm p-6 md:p-8 relative overflow-hidden"
                >
                  {/* Rank Badge */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-primary-600 flex items-center justify-center">
                    <span className="font-display text-2xl text-white">#{item.rank}</span>
                  </div>

                  <div className="ml-12 md:ml-16">
                    {/* Name & Link */}
                    <h2 className="font-display text-2xl md:text-3xl text-primary-900 mb-2">
                      {item.slug ? (
                        <Link
                          href={`/places/restaurants/${item.slug}`}
                          className="hover:text-primary-700"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                    </h2>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-4">
                      {item.address && <span>{item.address}</span>}
                      {item.priceRange && <span>{item.priceRange}</span>}
                      {item.bestFor && <span>Best for: {item.bestFor}</span>}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-700 mb-4">{item.description}</p>

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            {list.tips && list.tips.length > 0 && (
              <HighlightBox variant="tip" className="mt-12">
                <h4 className="font-display text-lg text-primary-900 mb-3">Tips for Your Visit</h4>
                <ul className="space-y-2 mb-0">
                  {list.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-neutral-700">{tip}</li>
                  ))}
                </ul>
              </HighlightBox>
            )}

            {/* Last Updated */}
            <div className="mt-8 text-sm text-neutral-500 text-center">
              Last updated: {list.lastUpdated}
            </div>
          </SEOContent>
        </Container>
      </Section>

      {/* Related Lists */}
      {relatedLists.length > 0 && (
        <Section className="bg-white">
          <Container>
            <h2 className="font-display text-3xl text-primary-900 mb-8">
              More Best Of Lists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLists.slice(0, 4).map((relatedList) => (
                <Link
                  key={relatedList.slug}
                  href={`/best/${relatedList.slug}`}
                  className="group bg-neutral-50 rounded-lg p-6 hover:bg-accent-50 transition-colors"
                >
                  <h3 className="font-display text-lg text-primary-900 group-hover:text-primary-700 mb-2">
                    {relatedList.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {relatedList.description}
                  </p>
                  <div className="mt-3 text-xs text-neutral-500">
                    {relatedList.items.length} picks
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
