import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import {
  SEOPageHero,
  SEOContent,
  ContentSection,
  HighlightBox,
  CTABanner,
} from "@/components/seo"

export const metadata: Metadata = {
  title: "History of Port Aransas | From Pirates to Paradise",
  description:
    "Discover the rich history of Port Aransas, Texas - from pirate legends and tarpon fishing to historic landmarks like the Tarpon Inn and Lydia Ann Lighthouse. Learn about the 8 Wonders of Port A.",
  keywords: [
    "Port Aransas history",
    "Tarpon Inn",
    "Lydia Ann Lighthouse",
    "Port Aransas jetties",
    "Texas coastal history",
    "Mustang Island history",
  ],
  openGraph: {
    title: "History of Port Aransas | From Pirates to Paradise",
    description:
      "Discover the rich history of Port Aransas, from pirate legends to historic landmarks.",
    type: "website",
  },
}

export default function HistoryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Port Aransas", href: "/about-port-aransas" },
    { label: "History" },
  ]

  return (
    <>
      <SEOPageHero
        title="The History of Port Aransas"
        subtitle="From pirate hideouts to fishing legends, discover the colorful story of Texas's beloved beach town"
        breadcrumbs={breadcrumbs}
        size="large"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container size="narrow">
          <SEOContent>
            <ContentSection>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Port Aransas has a history as colorful as its sunsets. From its days as a
                pirate refuge to its evolution into the &ldquo;Fishing Capital of Texas,&rdquo;
                this barrier island town has witnessed over 500 years of Texas coastal
                history. Today, many of its historic landmarks stand as testament to the
                generations who shaped this unique community.
              </p>
            </ContentSection>

            <ContentSection id="early-history">
              <h2>Early History &amp; Pirate Legends</h2>
              <p>
                Long before settlers arrived, Mustang Island was home to the Karankawa
                Native Americans who fished its waters and hunted along its shores.
                Spanish explorers mapped the Texas coast in the 16th century, but the
                island remained largely uninhabited by Europeans for centuries.
              </p>
              <p>
                According to local legend, the notorious pirate Jean Lafitte used Mustang
                Island as one of his favorite hideouts in the early 1800s. The island&apos;s
                remote location and natural harbor made it ideal for his operations. Some
                treasure hunters still believe that Lafitte&apos;s treasure remains buried
                somewhere on the island—though none has been found.
              </p>
            </ContentSection>

            <ContentSection id="tarpon-era">
              <h2>The Tarpon Era</h2>
              <p>
                The town was originally named &ldquo;Tarpon&rdquo; after the silver-scaled
                game fish that drew anglers from across the nation. During the late 1800s
                and early 1900s, tarpon fishing became the island&apos;s primary attraction,
                with wealthy sportsmen traveling to test their skills against the
                &ldquo;Silver King.&rdquo;
              </p>
              <p>
                In 1910, when the protective jetties were completed and the ship channel
                established, the city changed its name from Tarpon to Port Aransas. The
                new name reflected its growing importance as a port, though fishing
                remained central to its identity.
              </p>
            </ContentSection>

            <HighlightBox variant="tip">
              <h4 className="font-display text-lg text-primary-900 mb-2">
                The 8 Wonders of Port Aransas
              </h4>
              <p className="text-sm text-neutral-700 mb-0">
                In the early 2000s, the Port Aransas Preservation and Historical
                Association identified eight historic landmarks as the &ldquo;8 Wonders
                of Port Aransas.&rdquo; These sites represent the most significant
                historical and cultural treasures of the community.
              </p>
            </HighlightBox>

            <ContentSection id="tarpon-inn">
              <h2>The Tarpon Inn (1886)</h2>
              <p>
                The Tarpon Inn is the oldest surviving structure on Mustang Island and
                remains one of Port Aransas&apos;s most beloved landmarks. Built in 1886
                from Civil War-era barracks, the hotel has hosted countless notable guests
                over its nearly 140-year history.
              </p>
              <p>
                The inn&apos;s lobby walls are covered with over 7,000 tarpon scales, each
                signed by the angler who caught the fish. Among these scales is one
                signed by President Franklin D. Roosevelt, who fished in Port Aransas
                in 1937. The hotel weathered numerous hurricanes, including the devastating
                1919 storm that destroyed much of the town, and continues to welcome
                guests today.
              </p>
            </ContentSection>

            <ContentSection id="lighthouse">
              <h2>Lydia Ann Lighthouse (1857)</h2>
              <p>
                Officially known as the Aransas Pass Light Station, the Lydia Ann Lighthouse
                has guided mariners through the treacherous channel since 1857. Standing
                on Harbor Island, the lighthouse is only accessible by boat, adding to
                its mystique and appeal.
              </p>
              <p>
                The lighthouse is now privately owned but remains one of the most
                photographed landmarks in the area. Boat tours and kayak excursions
                offer the best views of this historic beacon, which continues to
                operate as an active aid to navigation.
              </p>
            </ContentSection>

            <ContentSection id="jetties">
              <h2>The Jetties (1919)</h2>
              <p>
                The Port Aransas jetties represent one of the most ambitious engineering
                projects on the Texas coast. Construction took five attempts over 50
                years before the granite structures were finally completed in 1919.
                Stretching into the Gulf of Mexico, the jetties stabilized the ship
                channel and transformed Port Aransas into a viable port.
              </p>
              <p>
                Today, the jetties are one of the most popular fishing spots in Texas.
                Anglers line the granite boulders year-round, casting for redfish,
                speckled trout, and the occasional tarpon. The jetties also offer
                spectacular views of ships entering and leaving the channel.
              </p>
            </ContentSection>

            <ContentSection id="chapel">
              <h2>Chapel on the Dunes (1930)</h2>
              <p>
                The oldest functional consecrated church on Mustang Island, Chapel on
                the Dunes was built by Aline Carter in 1930. Perched on a sandy bluff
                overlooking the Gulf of Mexico, the small wooden chapel has hosted
                weddings, memorial services, and Sunday worship for nearly a century.
              </p>
              <p>
                The chapel&apos;s simple beauty and stunning location make it a favorite
                venue for destination weddings. Despite its modest size, the church
                remains an active part of the community and a beloved historic landmark.
              </p>
            </ContentSection>

            <ContentSection id="farley">
              <h2>Farley Boat Works (1915)</h2>
              <p>
                Originally established in 1915, Farley Boat Works helped put Port Aransas
                on the map by building boats specifically designed for tarpon fishing.
                The distinctive &ldquo;Farley boat&rdquo; became synonymous with Port Aransas
                fishing and contributed to the town&apos;s reputation as a premier angling
                destination.
              </p>
              <p>
                After falling into disrepair, the boat works was restored and reopened
                in 2011 as part of the Port Aransas Museum. Today, visitors can watch
                traditional boat-building demonstrations and even participate in classes
                to build their own model skiffs.
              </p>
            </ContentSection>

            <ContentSection id="ut-marine">
              <h2>UT Marine Science Institute (1941)</h2>
              <p>
                The University of Texas Marine Science Institute was established in
                Port Aransas in 1941, becoming the first marine laboratory on the
                Texas Gulf Coast. The institute has conducted groundbreaking research
                on coastal ecosystems, fisheries, and marine life for over 80 years.
              </p>
              <p>
                The institute&apos;s presence has made Port Aransas a center for marine
                science education and research. Public programs and tours offer
                visitors the opportunity to learn about the unique marine environment
                of the Texas coast.
              </p>
            </ContentSection>

            <ContentSection id="modern-era">
              <h2>The Modern Era</h2>
              <p>
                Port Aransas has weathered numerous challenges over the years, including
                devastating hurricanes in 1919 and 2017 (Hurricane Harvey). Each time,
                the resilient community has rebuilt, often stronger than before.
              </p>
              <p>
                Today, Port Aransas balances its rich heritage with thoughtful development.
                New communities like Cinnamon Shore blend modern architecture with
                traditional coastal design, while preservation efforts protect the
                historic landmarks that make Port Aransas unique. The town continues
                to attract visitors and new residents drawn by its history, natural
                beauty, and authentic Texas character.
              </p>
            </ContentSection>
          </SEOContent>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Own a Piece of Port Aransas History"
          description="From historic downtown cottages to modern waterfront homes, find your place in this storied coastal community."
        />
      </Container>
    </>
  )
}
