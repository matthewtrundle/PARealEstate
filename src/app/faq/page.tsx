import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  FAQAccordion,
  type FAQItem,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Port Aransas Real Estate FAQ | Common Questions Answered",
  description:
    "Get answers to frequently asked questions about buying real estate in Port Aransas, Texas. Learn about flood insurance, vacation rentals, closing costs, and more.",
  keywords: [
    "Port Aransas real estate FAQ",
    "buying beach home questions",
    "Port Aransas flood insurance",
    "Texas coastal property FAQ",
    "vacation rental questions",
  ],
  openGraph: {
    title: "Port Aransas Real Estate FAQ | Common Questions Answered",
    description:
      "Get answers to frequently asked questions about buying real estate in Port Aransas.",
    type: "website",
  },
}

const buyingFAQs: FAQItem[] = [
  {
    question: "What should I know about flood insurance in Port Aransas?",
    answer:
      "Most properties in Port Aransas are located in FEMA flood zones and require flood insurance. Costs vary significantly based on the property's elevation, construction type, and flood zone designation. Newer elevated construction typically has lower premiums. Budget $2,000-$10,000+ annually depending on these factors. Your insurance agent can provide specific quotes, and sellers should provide elevation certificates for existing properties.",
  },
  {
    question: "Do I need windstorm insurance?",
    answer:
      "Yes, windstorm insurance is separate from standard homeowner's insurance in Texas coastal areas. The Texas Windstorm Insurance Association (TWIA) provides coverage for most properties. Premiums depend on the property's construction, age, and wind-resistance features. Newer homes built to current codes typically have lower premiums.",
  },
  {
    question: "What are typical closing costs in Port Aransas?",
    answer:
      "Closing costs in Texas typically range from 2-3% of the purchase price for buyers, including title insurance, escrow fees, appraisal, and inspections. Property taxes are prorated at closing. If financing, lender fees add additional costs. Budget 3-5% of purchase price for total closing costs.",
  },
  {
    question: "Should I get a property inspection for a beach home?",
    answer:
      "Absolutely. In addition to a standard home inspection, consider specialized inspections for coastal properties: structural inspection by an engineer (especially for elevated homes), HVAC inspection (salt air is tough on equipment), and a review of any seawall or bulkhead. These additional inspections are worth the investment given the unique conditions.",
  },
  {
    question: "How long does it take to close on a property?",
    answer:
      "Cash transactions can close in as little as 2-3 weeks. Financed purchases typically take 30-45 days. Factors that can extend the timeline include appraisal delays, title issues, insurance procurement, and any repairs negotiated during the inspection period.",
  },
]

const investmentFAQs: FAQItem[] = [
  {
    question: "Can I rent my property as a vacation rental?",
    answer:
      "Yes, Port Aransas allows short-term vacation rentals, making it an attractive investment market. You'll need to register with the city and collect/remit hotel occupancy taxes. Many property management companies operate in the area to handle bookings, cleaning, and maintenance.",
  },
  {
    question: "What kind of rental income can I expect?",
    answer:
      "Rental income varies significantly by property type, location, and amenities. A well-managed 3-bedroom beach house might gross $50,000-$100,000+ annually, with peak rates during summer and spring break. Occupancy rates typically run 60-75% for popular properties. Net income after expenses (management, maintenance, taxes, insurance) is typically 40-60% of gross.",
  },
  {
    question: "What property management fees are typical?",
    answer:
      "Full-service property management companies typically charge 25-35% of rental income, which includes marketing, booking, guest communication, cleaning coordination, and basic maintenance. Some owners self-manage using platforms like VRBO and Airbnb, which charge lower platform fees but require more hands-on involvement.",
  },
  {
    question: "Are there restrictions on vacation rentals?",
    answer:
      "Port Aransas has relatively permissive vacation rental regulations compared to some beach communities. Properties must be registered, and owners must collect hotel occupancy taxes. Some HOA communities have their own rental restrictions, so check community rules before purchasing an investment property.",
  },
]

const lifestyleFAQs: FAQItem[] = [
  {
    question: "What is the cost of living in Port Aransas?",
    answer:
      "Cost of living is moderate to high, primarily driven by housing costs and insurance. Texas has no state income tax, which helps offset higher property taxes. Daily expenses (groceries, dining, utilities) are similar to mainland Texas, though slightly higher due to transportation costs to the island.",
  },
  {
    question: "How do residents handle hurricane season?",
    answer:
      "Residents stay prepared during hurricane season (June-November) with emergency supplies and evacuation plans. When storms threaten, the city may issue evacuation orders—residents typically evacuate to family, friends, or hotels on the mainland. Modern construction is designed to withstand storms, and the community has rebuilt stronger after each hurricane.",
  },
  {
    question: "What healthcare is available in Port Aransas?",
    answer:
      "Port Aransas has a local clinic for routine and urgent care. For hospitals, specialists, and emergency care, residents travel to Corpus Christi (30-45 minutes). EMS services are excellent with helicopter transport available. Many residents find this arrangement works well for beach town living.",
  },
  {
    question: "Are there good schools in Port Aransas?",
    answer:
      "Port Aransas ISD operates a single campus serving pre-K through 12th grade. The small school environment offers individual attention and strong community involvement. Higher education is available at Del Mar College and Texas A&M Corpus Christi, both within commuting distance.",
  },
  {
    question: "Do I need a car in Port Aransas?",
    answer:
      "Many residents use golf carts as their primary transportation—they're street-legal in Port Aransas and perfect for getting around the small town. A car is helpful for trips to Corpus Christi for shopping, medical care, and the airport. The ferry is free but can have long waits during peak times.",
  },
]

const propertyFAQs: FAQItem[] = [
  {
    question: "What are the different neighborhoods like?",
    answer:
      "Port Aransas offers diverse neighborhoods: Cinnamon Shore is a master-planned beach community with New Urbanist design; Pirates Bay features canal-front homes with boat access; Beachwalk is family-friendly with resort amenities; and downtown offers historic character and walkability. Each neighborhood has distinct character and price points.",
  },
  {
    question: "What should I look for in a beach home?",
    answer:
      "Key considerations include elevation (higher is better for insurance and flood risk), construction quality (look for coastal-rated materials and wind-resistant features), outdoor living space (porches, decks), parking (covered preferred for vehicles), and outdoor showers for post-beach cleanup. Newer elevated construction typically offers the best protection and lowest insurance costs.",
  },
  {
    question: "How do elevated homes work?",
    answer:
      "Many Port Aransas homes are built on pilings or stilts, elevating the living space above flood level. The ground level is typically used for parking, storage, or non-habitable space. This design meets FEMA requirements, reduces flood insurance costs, and provides better views. Access is via stairs; some homes include elevators.",
  },
  {
    question: "What maintenance considerations are unique to beach homes?",
    answer:
      "Salt air is tough on everything—expect faster corrosion on metal, more frequent exterior painting, and HVAC systems that need regular maintenance. Budget 1-2% of home value annually for maintenance. Rinse outdoor fixtures and vehicles regularly, and use stainless or marine-grade hardware for best longevity.",
  },
]

export default function FAQPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "FAQ" },
  ]

  return (
    <>
      <SEOPageHero
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about buying, owning, and investing in Port Aransas real estate"
        breadcrumbs={breadcrumbs}
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <h2>Buying a Beach Home</h2>
            <p className="mb-8">
              Essential questions about purchasing property in Port Aransas.
            </p>
          </SEOContent>
          <FAQAccordion items={buyingFAQs} className="mb-16" />

          <SEOContent>
            <h2>Investment &amp; Rentals</h2>
            <p className="mb-8">
              Questions about vacation rental income and investment properties.
            </p>
          </SEOContent>
          <FAQAccordion items={investmentFAQs} className="mb-16" />

          <SEOContent>
            <h2>Living in Port Aransas</h2>
            <p className="mb-8">
              What to expect when you make Port Aransas your home.
            </p>
          </SEOContent>
          <FAQAccordion items={lifestyleFAQs} className="mb-16" />

          <SEOContent>
            <h2>Property Considerations</h2>
            <p className="mb-8">
              Important factors when choosing and maintaining a beach home.
            </p>
          </SEOContent>
          <FAQAccordion items={propertyFAQs} />
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Have More Questions?"
          description="Our local experts are happy to answer any questions about Port Aransas real estate. Reach out anytime."
          primaryCTA={{ text: "Contact Us", href: "#contact-form" }}
          secondaryCTA={{ text: "View Properties", href: "/properties" }}
        />
      </Container>
    </>
  )
}
