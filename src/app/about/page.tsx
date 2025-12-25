import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { Button } from "@/components/ui"
import { SITE_CONFIG } from "@/lib/constants"
import { SunIcon, UserIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "About Us | Port Aransas Real Estate Experts",
  description: "Meet the team at Port Aransas Estates. Local experts dedicated to helping you find your perfect beach home, investment property, or vacation rental in Port Aransas, Texas.",
}

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Agent",
    bio: "With over 15 years of experience in Port Aransas real estate, Sarah knows every corner of the island. She specializes in beachfront properties and investment opportunities.",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Michael Torres",
    role: "Senior Agent",
    bio: "A Port Aransas native, Michael brings deep local knowledge and connections. He excels at finding hidden gems and negotiating the best deals for his clients.",
    image: "/images/team/michael.jpg",
  },
  {
    name: "Jennifer Chen",
    role: "Investment Specialist",
    bio: "Jennifer focuses on vacation rental properties and investment analysis. She helps clients maximize their ROI with data-driven property recommendations.",
    image: "/images/team/jennifer.jpg",
  },
]

const values = [
  {
    title: "Local Expertise",
    description: "We live here, we work here, and we know Port Aransas inside and out. From the best fishing spots to the quietest beaches, we share our local knowledge with every client.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Client-First Approach",
    description: "Your goals are our goals. Whether you're buying your dream beach home or investing in rental property, we tailor our approach to your unique needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    description: "No surprises, no hidden fees. We believe in clear communication and honest guidance throughout your real estate journey.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Market Knowledge",
    description: "We stay on top of market trends, pricing data, and new developments. Our insights help you make informed decisions and smart investments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ]

  return (
    <>
      <SEOPageHero
        title="About Port Aransas Estates"
        subtitle="Your trusted partners in Port Aransas real estate since 2009"
        breadcrumbs={breadcrumbs}
        size="default"
      />

      {/* Our Story */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
                Our Story
              </span>
              <h2 className="text-fluid-3xl font-display font-semibold text-neutral-900 tracking-tight mb-6">
                Helping You Find Home on the Texas Coast
              </h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Port Aransas Estates was founded with a simple mission: to help people discover the
                  magic of coastal living in Port Aransas, Texas. What started as a passion for
                  beach life has grown into a full-service real estate team dedicated to making
                  your coastal dreams a reality.
                </p>
                <p>
                  Over the years, we've helped hundreds of families find their perfect beach home,
                  guided investors to profitable rental properties, and connected sellers with
                  qualified buyers. Our success is built on relationships, local expertise, and
                  a genuine love for this community.
                </p>
                <p>
                  Whether you're searching for a Gulf-front estate, a cozy beach cottage, or a
                  smart investment property, we're here to guide you every step of the way.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <SunIcon size={80} className="text-primary-600" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
              What Sets Us Apart
            </span>
            <h2 className="text-fluid-3xl font-display font-semibold text-neutral-900 tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
              Meet The Team
            </span>
            <h2 className="text-fluid-3xl font-display font-semibold text-neutral-900 tracking-tight mb-4">
              Your Port Aransas Experts
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our team combines decades of real estate experience with deep local knowledge
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <UserIcon size={64} className="text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-neutral-900 text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section className="bg-primary-900 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-fluid-3xl font-display font-semibold tracking-tight mb-6">
                Ready to Start Your Search?
              </h2>
              <p className="text-lg text-primary-200 mb-8">
                Get in touch with our team today. We're here to answer your questions,
                schedule showings, and help you find your perfect Port Aransas property.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">Call us</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-medium hover:text-accent-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">Email us</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium hover:text-accent-400 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">Office Hours</p>
                    <p className="font-medium">{SITE_CONFIG.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button variant="cta" size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
