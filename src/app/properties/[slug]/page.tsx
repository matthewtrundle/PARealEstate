import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container, Section } from "@/components/layout"
import { Badge, Button } from "@/components/ui"
import { PropertyGallery, BookingWidget, StickyCTA, PropertyViewTracker } from "@/components/properties"
import { LeadFormSection } from "@/components/sections"
import propertiesData from "@/data/properties.json"
import type { Property } from "@/types/property"

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

function getProperty(slug: string): Property | undefined {
  return propertiesData.properties.find((p) => p.slug === slug) as Property | undefined
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    return { title: "Property Not Found" }
  }

  return {
    title: property.seo.title,
    description: property.seo.description,
    openGraph: {
      title: property.seo.title,
      description: property.seo.description,
      images: [property.images.hero],
    },
  }
}

export async function generateStaticParams() {
  return propertiesData.properties.map((property) => ({
    slug: property.slug,
  }))
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    notFound()
  }

  return (
    <>
      {/* Track property view */}
      <PropertyViewTracker propertySlug={property.slug} propertyName={property.name} />

      {/* Gallery Section */}
      <section className="pt-8 pb-4">
        <Container>
          <PropertyGallery images={property.images} propertyName={property.name} />
        </Container>
      </section>

      {/* Main Content */}
      <Section className="pt-8">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.highlights.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <h1 className="font-display text-fluid-3xl text-neutral-900 mb-3">
                  {property.name}
                </h1>
                <p className="text-lg text-neutral-600">
                  {property.location.neighborhood}, Port Aransas &middot;{" "}
                  {property.location.distanceToBeach}
                </p>

                {/* Price & Status */}
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-3xl font-display font-bold text-primary-600">
                    ${property.pricing.listPrice.toLocaleString()}
                  </span>
                  <Badge variant={property.status === "active" ? "default" : "secondary"}>
                    {property.status === "active" ? "For Sale" : property.status}
                  </Badge>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Bedrooms", value: property.specs.bedrooms },
                  { label: "Bathrooms", value: property.specs.bathrooms },
                  { label: "Sq Ft", value: property.specs.sqft.toLocaleString() },
                  { label: "Year Built", value: property.specs.yearBuilt },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-neutral-50 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-display font-bold text-primary-600">
                      {spec.value}
                    </div>
                    <div className="text-sm text-neutral-600">{spec.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-display text-2xl text-neutral-900 mb-4">
                  About This Property
                </h2>
                <p className="text-neutral-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-display text-2xl text-neutral-900 mb-6">Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Key Highlights */}
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {property.features.highlights.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-neutral-600">
                          <svg
                            className="w-5 h-5 text-primary-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outdoor Features */}
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3">Outdoor</h3>
                    <ul className="space-y-2">
                      {property.features.outdoor.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-neutral-600">
                          <svg
                            className="w-5 h-5 text-primary-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indoor Features */}
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3">Indoor</h3>
                    <ul className="space-y-2">
                      {property.features.indoor.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-neutral-600">
                          <svg
                            className="w-5 h-5 text-primary-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment Potential */}
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3">Investment Potential</h3>
                    <ul className="space-y-2">
                      {property.features.investment.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-neutral-600">
                          <svg
                            className="w-5 h-5 text-primary-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="font-display text-2xl text-neutral-900 mb-6">
                  Property Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="font-semibold text-neutral-800 mb-3">Construction</h3>
                    <div className="space-y-2 text-neutral-600">
                      <p>Type: {property.details.propertyType}</p>
                      <p>Construction: {property.details.construction}</p>
                      <p>Roof: {property.details.roof}</p>
                    </div>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="font-semibold text-neutral-800 mb-3">Additional Info</h3>
                    <div className="space-y-2 text-neutral-600">
                      <p>Parking: {property.details.parking}</p>
                      <p>HVAC: {property.details.hvac}</p>
                      {property.details.hoa && <p>HOA: {property.details.hoa}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="font-display text-2xl text-neutral-900 mb-4">Location</h2>
                <p className="text-neutral-600 mb-4">
                  {property.location.address}, {property.location.city},{" "}
                  {property.location.state} {property.location.zip}
                </p>
                {/* Map placeholder */}
                <div className="aspect-[16/9] rounded-xl bg-neutral-100 flex items-center justify-center">
                  <div className="text-center text-neutral-400">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p>Map integration coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Inquiry Widget (Desktop) */}
            <div className="hidden lg:block">
              <BookingWidget property={property} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Lead Form Section */}
      <LeadFormSection />

      {/* Sticky CTA (Mobile) */}
      <StickyCTA property={property} />

      {/* Spacer for mobile sticky CTA */}
      <div className="h-24 md:hidden" />
    </>
  )
}
