import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  NeighborhoodCard,
  NeighborhoodGrid,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Port Aransas Neighborhoods | Find Your Perfect Community",
  description:
    "Explore Port Aransas neighborhoods including Cinnamon Shore, Mustang Island, Pirates Bay, and downtown Port A. Find the perfect community for your coastal lifestyle.",
  keywords: [
    "Port Aransas neighborhoods",
    "Cinnamon Shore",
    "Mustang Island",
    "Pirates Bay",
    "Beachwalk Port Aransas",
    "Port Aransas communities",
  ],
  openGraph: {
    title: "Port Aransas Neighborhoods | Find Your Perfect Community",
    description:
      "Explore Port Aransas neighborhoods and find the perfect community for your coastal lifestyle.",
    type: "website",
  },
}

const neighborhoods = [
  {
    name: "Cinnamon Shore",
    slug: "cinnamon-shore",
    image: "/images/neighborhoods/cinnamon-shore.jpg",
    description:
      "A master-planned New Urbanist community featuring colorful beach cottages, walkable streets, and direct beach access. Known for its vibrant community atmosphere and upscale amenities.",
    priceRange: "$800K - $2.5M+",
    propertyCount: 45,
  },
  {
    name: "Mustang Island",
    slug: "mustang-island",
    image: "/images/neighborhoods/mustang-island.jpg",
    description:
      "Beachfront living along the Gulf with a mix of established homes and new construction. Close to Mustang Island State Park with stunning ocean views.",
    priceRange: "$500K - $3M+",
    propertyCount: 62,
  },
  {
    name: "Pirates Bay",
    slug: "pirates-bay",
    image: "/images/neighborhoods/pirates-bay.jpg",
    description:
      "A gated waterfront community with canal-front homes offering private boat access. Perfect for fishing enthusiasts and boating families.",
    priceRange: "$600K - $1.8M",
    propertyCount: 28,
  },
  {
    name: "Beachwalk",
    slug: "beachwalk",
    image: "/images/neighborhoods/beachwalk.jpg",
    description:
      "A family-friendly community with resort-style pools, beach access, and well-maintained common areas. Popular for vacation rentals and second homes.",
    priceRange: "$450K - $1.2M",
    propertyCount: 35,
  },
  {
    name: "Downtown Port Aransas",
    slug: "port-aransas-downtown",
    image: "/images/neighborhoods/downtown-port-a.jpg",
    description:
      "Historic charm meets coastal living in the walkable downtown area. Close to shops, restaurants, and the ferry landing with authentic Port A character.",
    priceRange: "$400K - $1.5M",
    propertyCount: 41,
  },
]

export default function NeighborhoodsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Neighborhoods" },
  ]

  return (
    <>
      <SEOPageHero
        title="Port Aransas Neighborhoods"
        subtitle="From master-planned communities to historic downtown charm, discover the perfect neighborhood for your coastal lifestyle"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <SEOContent>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mb-12">
              Port Aransas offers a diverse range of neighborhoods, each with its own unique
              character and appeal. Whether you&apos;re seeking a luxury beachfront estate, a
              canal-front home with boat access, or a charming cottage in the heart of town,
              you&apos;ll find it here on Mustang Island.
            </p>
          </SEOContent>

          <NeighborhoodGrid>
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.slug} {...neighborhood} />
            ))}
          </NeighborhoodGrid>
        </Container>
      </Section>

      {/* Neighborhood Comparison */}
      <Section className="bg-white">
        <Container size="narrow">
          <h2 className="font-display text-3xl text-primary-900 mb-8 text-center">
            Choosing the Right Neighborhood
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Beach Access
              </h3>
              <p className="text-neutral-600">
                <strong>Cinnamon Shore</strong> and <strong>Mustang Island</strong> offer the
                best direct beach access. Cinnamon Shore has dedicated beach walkovers, while
                Mustang Island properties often feature beachfront lots.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Boating &amp; Fishing
              </h3>
              <p className="text-neutral-600">
                <strong>Pirates Bay</strong> is the top choice for boaters with its canal system
                and private boat slips. Many homes include covered boat lifts and direct access
                to the bay and Gulf.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Walkability &amp; Local Character
              </h3>
              <p className="text-neutral-600">
                <strong>Downtown Port Aransas</strong> offers the most walkable lifestyle with
                restaurants, shops, and the ferry landing within easy reach. Perfect for those
                who want to experience authentic Port A culture.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-display text-xl text-primary-900 mb-3">
                For Rental Investment
              </h3>
              <p className="text-neutral-600">
                <strong>Beachwalk</strong> and <strong>Cinnamon Shore</strong> have strong
                vacation rental track records with professional management options and
                resort-style amenities that attract renters year-round.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Need Help Choosing a Neighborhood?"
          description="Our local experts can help you find the perfect community based on your lifestyle, budget, and investment goals."
        />
      </Container>
    </>
  )
}
