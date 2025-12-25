import {
  HeroSection,
  FeaturedProperties,
  ValueProps,
  WaveBallSection,
  SellersSection,
  Testimonials,
  LeadFormSection,
  CTASection,
  SalesTicker,
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <SalesTicker variant="banner" />
      <HeroSection />
      <FeaturedProperties />
      <ValueProps />
      <WaveBallSection />
      <SellersSection />
      <Testimonials />
      <LeadFormSection />
      <CTASection />
    </>
  )
}
