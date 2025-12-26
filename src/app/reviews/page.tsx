import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero, AggregateRatingSchema, ReviewSchema } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"
import testimonialsData from "@/data/testimonials.json"

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description:
    "Read what our clients say about working with Port Aransas Estates. 5-star reviews from happy homebuyers, sellers, and investors across Texas.",
  keywords: [
    "Port Aransas Estates reviews",
    "Port Aransas real estate agent reviews",
    "best realtor Port Aransas",
    "Texas coastal real estate testimonials",
  ],
  openGraph: {
    title: "Client Reviews & Testimonials | Port Aransas Estates",
    description: "Read what our clients say about working with Port Aransas Estates.",
  },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-accent-500" : "text-neutral-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const { testimonials, stats } = testimonialsData
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Reviews", href: "/reviews" },
  ]

  return (
    <>
      {/* Schema Markup */}
      <AggregateRatingSchema ratingValue={averageRating} reviewCount={testimonials.length} />
      {testimonials.map((testimonial) => (
        <ReviewSchema
          key={testimonial.id}
          author={testimonial.name}
          reviewBody={testimonial.text}
          ratingValue={testimonial.rating}
          datePublished={`${testimonial.date}-01`}
        />
      ))}

      <SEOPageHero
        title="Client Reviews"
        subtitle="Hear from real clients who found their perfect coastal property with us."
        backgroundImage="/images/hero/testimonials-bg.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          {/* Stats Banner */}
          <div className="mt-8 mb-12 p-8 bg-primary-50 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-800">
                  {stats.propertiesSold}+
                </div>
                <div className="text-sm text-neutral-600">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-800">
                  {stats.yearsExperience}+
                </div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-800">
                  {stats.clientSatisfaction}
                </div>
                <div className="text-sm text-neutral-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-800">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm text-neutral-500">{testimonial.date}</span>
                </div>

                <blockquote className="text-neutral-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.property} &middot; {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-4">
              Why Clients Trust Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Local Expertise</h3>
                <p className="text-neutral-600 text-sm">
                  Deep knowledge of Port Aransas neighborhoods, pricing, and market trends.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Trusted Process</h3>
                <p className="text-neutral-600 text-sm">
                  Transparent communication and guidance through every step of your transaction.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Results Driven</h3>
                <p className="text-neutral-600 text-sm">
                  Track record of successful transactions and satisfied clients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Ready to Find Your Coastal Home?"
        subtitle="Join our list of happy clients. Let's start your Port Aransas journey."
      />
    </>
  )
}
