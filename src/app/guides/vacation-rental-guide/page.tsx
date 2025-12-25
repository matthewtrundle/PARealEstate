import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  StatsGrid,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "Port Aransas Vacation Rental Guide | Maximize Your Rental Income",
  description:
    "Complete guide to running a successful vacation rental in Port Aransas. From setup to management, learn how to maximize your rental income on the Texas coast.",
  keywords: [
    "Port Aransas vacation rental",
    "VRBO Port Aransas",
    "Airbnb Port Aransas",
    "vacation rental income Texas",
    "beach house rental management",
  ],
  openGraph: {
    title: "Port Aransas Vacation Rental Guide | Maximize Your Rental Income",
    description:
      "Complete guide to running a successful vacation rental in Port Aransas.",
    type: "website",
  },
}

export default function VacationRentalGuidePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Vacation Rental Guide" },
  ]

  const stats = [
    { value: "$250+", label: "Peak nightly rate" },
    { value: "80%+", label: "Summer occupancy" },
    { value: "12%", label: "Avg hotel tax" },
    { value: "4.5★", label: "Target rating" },
  ]

  return (
    <>
      <SEOPageHero
        title="Vacation Rental Guide"
        subtitle="Everything you need to know about running a successful short-term rental in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas is one of Texas&apos;s strongest vacation rental markets.
                With millions of annual visitors and limited hotel inventory,
                short-term rentals play a vital role in accommodating tourists.
                This guide covers everything from legal requirements to maximizing
                your rental income.
              </p>
            </ContentSection>

            <StatsGrid stats={stats} />

            <ContentSection id="legal-requirements">
              <h2>Legal Requirements</h2>
              <p>
                Before renting your property, ensure you&apos;re compliant with all
                local regulations:
              </p>

              <h3>Short-Term Rental Permit</h3>
              <p>
                The City of Port Aransas requires short-term rental (STR) permits
                for properties rented for less than 30 consecutive days. The
                permit process includes:
              </p>
              <ul>
                <li>Application submission with property details</li>
                <li>Safety inspection (smoke detectors, fire extinguishers, etc.)</li>
                <li>Annual permit fee (currently around $200-300)</li>
                <li>Proof of liability insurance</li>
              </ul>

              <h3>Hotel Occupancy Tax</h3>
              <p>
                Short-term rentals must collect and remit hotel occupancy tax (HOT):
              </p>
              <ul>
                <li><strong>State:</strong> 6% to Texas Comptroller</li>
                <li><strong>City:</strong> 7% to City of Port Aransas</li>
                <li><strong>Total:</strong> 13% added to guest booking</li>
              </ul>
              <p>
                Platforms like VRBO and Airbnb may collect and remit some or all
                of these taxes automatically. Verify what&apos;s handled and what
                you&apos;re responsible for.
              </p>

              <h3>HOA Restrictions</h3>
              <p>
                Many Port Aransas communities have HOA rules governing rentals:
              </p>
              <ul>
                <li>Minimum rental periods (some require 3 or 7 night minimums)</li>
                <li>Maximum occupancy limits</li>
                <li>Guest registration requirements</li>
                <li>Parking restrictions</li>
                <li>Pool and amenity access rules for guests</li>
              </ul>
              <p>
                Review HOA documents carefully before purchasing an investment
                property—some communities prohibit short-term rentals entirely.
              </p>
            </ContentSection>

            <HighlightBox variant="warning">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Insurance Requirements
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                Standard homeowner&apos;s insurance typically doesn&apos;t cover short-term
                rentals. You&apos;ll need a commercial rental policy or a specialized
                vacation rental policy. Many insurers now offer policies designed
                specifically for Airbnb/VRBO properties.
              </p>
            </HighlightBox>

            <ContentSection id="setting-up">
              <h2>Setting Up Your Rental</h2>

              <h3>Furnishing for Success</h3>
              <p>
                Vacation rentals compete on amenities and presentation. Essential
                furnishings include:
              </p>
              <ul>
                <li><strong>Comfortable Beds</strong> — Quality mattresses are non-negotiable</li>
                <li><strong>Living Area</strong> — Ample seating for the group size</li>
                <li><strong>Dining</strong> — Table and seating for all guests</li>
                <li><strong>Kitchen</strong> — Fully equipped for cooking</li>
                <li><strong>Outdoor Living</strong> — Deck furniture, grill, outdoor shower</li>
                <li><strong>Beach Gear</strong> — Chairs, umbrella, cooler, toys</li>
              </ul>

              <h3>Professional Photography</h3>
              <p>
                Photography makes or breaks rental listings. Invest in:
              </p>
              <ul>
                <li>Professional photographer with real estate experience</li>
                <li>Wide-angle shots of main living areas</li>
                <li>Detail shots of amenities and finishes</li>
                <li>Outdoor and view photos</li>
                <li>Updated photos after any renovations</li>
              </ul>

              <h3>Smart Home Setup</h3>
              <p>
                Technology simplifies remote management:
              </p>
              <ul>
                <li><strong>Smart Locks</strong> — Keyless entry with unique codes per guest</li>
                <li><strong>Smart Thermostat</strong> — Monitor and control remotely</li>
                <li><strong>Noise Monitors</strong> — Detect parties without invading privacy</li>
                <li><strong>WiFi</strong> — Fast, reliable internet is essential</li>
              </ul>
            </ContentSection>

            <ContentSection id="listing-optimization">
              <h2>Listing Optimization</h2>

              <h3>Writing Effective Listings</h3>
              <p>
                Your listing is your sales pitch. Best practices:
              </p>
              <ul>
                <li><strong>Compelling Title</strong> — Highlight unique features (Gulf views, pool, boat access)</li>
                <li><strong>Detailed Description</strong> — Paint a picture of the guest experience</li>
                <li><strong>Honest Accuracy</strong> — Set correct expectations to avoid negative reviews</li>
                <li><strong>Local Tips</strong> — Include restaurant and activity recommendations</li>
                <li><strong>Clear House Rules</strong> — Set expectations upfront</li>
              </ul>

              <h3>Platform Selection</h3>
              <p>
                Most successful rentals list on multiple platforms:
              </p>
              <ul>
                <li><strong>VRBO</strong> — Strong for families and longer stays</li>
                <li><strong>Airbnb</strong> — Broad reach, younger demographics</li>
                <li><strong>Direct Booking</strong> — Higher margins, repeat guests</li>
                <li><strong>Local Management Sites</strong> — Regional exposure</li>
              </ul>
              <p>
                Use channel management software to sync calendars and avoid
                double bookings when listing on multiple platforms.
              </p>
            </ContentSection>

            <ContentSection id="pricing-strategy">
              <h2>Pricing Strategy</h2>

              <h3>Seasonal Pricing</h3>
              <p>
                Port Aransas has distinct seasons that should inform pricing:
              </p>

              <div className="my-6 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-display text-lg text-primary-900 mb-3">
                  Seasonal Rate Guidelines (3BR Home)
                </h4>
                <ul className="text-sm text-neutral-700 space-y-2 mb-0">
                  <li><strong>Peak Summer (June-July):</strong> $350-500/night, 7-night minimum</li>
                  <li><strong>Shoulder Summer (May, August):</strong> $275-400/night, 3-night minimum</li>
                  <li><strong>Spring Break (March):</strong> $400-550/night, 7-night minimum</li>
                  <li><strong>Fall (Sept-Nov):</strong> $200-300/night, 2-night minimum</li>
                  <li><strong>Winter (Dec-Feb):</strong> $150-250/night, 2-night minimum</li>
                  <li><strong>Holidays:</strong> Premium pricing, longer minimums</li>
                </ul>
              </div>

              <h3>Dynamic Pricing</h3>
              <p>
                Consider using dynamic pricing tools that adjust rates based on:
              </p>
              <ul>
                <li>Local demand and events</li>
                <li>Day of week</li>
                <li>Competitor pricing</li>
                <li>Booking lead time</li>
                <li>Gap filling for orphan nights</li>
              </ul>
              <p>
                Popular tools include PriceLabs, Beyond Pricing, and Wheelhouse.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                Reviews Drive Bookings
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                In vacation rentals, reviews are everything. Properties with 4.8+
                ratings and 50+ reviews dramatically outperform competitors. Focus
                on cleanliness, communication, and accurate listings. Follow up
                with guests to encourage reviews.
              </p>
            </HighlightBox>

            <ContentSection id="guest-experience">
              <h2>Creating Great Guest Experiences</h2>

              <h3>Communication</h3>
              <p>
                Prompt, helpful communication sets the tone:
              </p>
              <ul>
                <li>Respond to inquiries within an hour when possible</li>
                <li>Send detailed check-in instructions 1-2 days before arrival</li>
                <li>Check in after arrival to ensure everything is satisfactory</li>
                <li>Be available for questions during the stay</li>
                <li>Thank guests and request reviews after checkout</li>
              </ul>

              <h3>Welcome Materials</h3>
              <p>
                Provide guests with helpful information:
              </p>
              <ul>
                <li>House manual with WiFi, TV, appliance instructions</li>
                <li>Local recommendations for restaurants, activities</li>
                <li>Beach information (parking, driving, rules)</li>
                <li>Emergency contacts and procedures</li>
                <li>Checkout instructions</li>
              </ul>

              <h3>Special Touches</h3>
              <p>
                Small gestures create memorable experiences:
              </p>
              <ul>
                <li>Welcome basket with local treats or coffee</li>
                <li>Beach gear ready to go</li>
                <li>Games and entertainment for rainy days</li>
                <li>Local coffee beans or restaurant gift cards</li>
                <li>Personalized welcome note</li>
              </ul>
            </ContentSection>

            <ContentSection id="cleaning-maintenance">
              <h2>Cleaning &amp; Maintenance</h2>

              <h3>Turnover Cleaning</h3>
              <p>
                Professional cleaning between guests is essential:
              </p>
              <ul>
                <li>Deep clean all surfaces, especially kitchens and bathrooms</li>
                <li>Fresh linens and made beds</li>
                <li>Restocked supplies (paper products, soap, coffee)</li>
                <li>Outdoor areas cleaned and grills scraped</li>
                <li>Property inspection for damage or issues</li>
              </ul>
              <p>
                Most cleaners charge $150-300 per turnover depending on property
                size. This cost is typically passed to guests as a cleaning fee.
              </p>

              <h3>Ongoing Maintenance</h3>
              <p>
                Preventive maintenance reduces guest complaints and costly repairs:
              </p>
              <ul>
                <li>HVAC filter changes and annual service</li>
                <li>Appliance maintenance and timely replacement</li>
                <li>Exterior cleaning (salt buildup, mold prevention)</li>
                <li>Deck and outdoor furniture maintenance</li>
                <li>Deep cleaning of soft furnishings quarterly</li>
              </ul>
            </ContentSection>

            <ContentSection id="handling-issues">
              <h2>Handling Issues</h2>

              <h3>Common Problems</h3>
              <p>
                Even well-managed rentals encounter issues:
              </p>
              <ul>
                <li><strong>HVAC Failures</strong> — Have backup options for summer emergencies</li>
                <li><strong>Plumbing Issues</strong> — Know a reliable plumber for quick response</li>
                <li><strong>Noise Complaints</strong> — Clear party policies and monitoring</li>
                <li><strong>Damage</strong> — Document with photos, collect security deposits</li>
                <li><strong>Weather</strong> — Have cancellation policies for tropical storms</li>
              </ul>

              <h3>Negative Reviews</h3>
              <p>
                Handle negative reviews professionally:
              </p>
              <ul>
                <li>Respond promptly and courteously</li>
                <li>Acknowledge the issue without being defensive</li>
                <li>Explain what you&apos;ve done to address the problem</li>
                <li>Invite the guest to return</li>
              </ul>
            </ContentSection>

            <ContentSection id="management-options">
              <h2>Management Options</h2>

              <h3>Self-Management</h3>
              <p>
                Benefits: Higher net income, complete control
              </p>
              <p>
                Challenges: Time-intensive, requires local contacts, handles all
                guest communication
              </p>

              <h3>Professional Management</h3>
              <p>
                Benefits: Hands-off, professional marketing, local presence
              </p>
              <p>
                Costs: 20-35% of gross rental income
              </p>
              <p>
                When selecting a manager, ask about:
              </p>
              <ul>
                <li>Fee structure (flat vs. percentage, included services)</li>
                <li>Marketing approach and platforms used</li>
                <li>Response times and guest communication</li>
                <li>Cleaning and maintenance coordination</li>
                <li>Owner reporting and transparency</li>
                <li>References from current owners</li>
              </ul>
            </ContentSection>

            <ContentSection id="maximizing-income">
              <h2>Maximizing Income</h2>
              <p>
                Top performers in the Port Aransas market share these traits:
              </p>
              <ul>
                <li><strong>Excellent Reviews</strong> — 4.8+ rating with volume of reviews</li>
                <li><strong>Professional Photos</strong> — High-quality, updated imagery</li>
                <li><strong>Smart Pricing</strong> — Dynamic rates that optimize occupancy and revenue</li>
                <li><strong>Fast Response</strong> — Quick answers to guest inquiries</li>
                <li><strong>Consistent Quality</strong> — Every stay meets high standards</li>
                <li><strong>Repeat Guests</strong> — Direct booking relationships for return visitors</li>
                <li><strong>Continuous Improvement</strong> — Regular updates and amenity additions</li>
              </ul>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Looking for a Vacation Rental Property?"
          description="Browse properties with proven rental potential or let us help you find the perfect investment."
          primaryCTA={{ text: "View Properties", href: "/properties" }}
          secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
