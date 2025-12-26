import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { SEOPageHero } from "@/components/seo"
import { LeadForm } from "@/components/forms/lead-form"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Port Aransas Estates. Our team is ready to help you find your perfect beach home or investment property.",
}

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ]

  return (
    <>
      <SEOPageHero
        title="Contact Us"
        subtitle="Let's start the conversation about your Port Aransas property"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-neutral-100 p-8">
              <h2 className="text-xl font-display font-semibold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <LeadForm source="contact-page" />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Location & Hours */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">About Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Location</p>
                      <p className="font-medium text-neutral-900">
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Hours</p>
                      <p className="font-medium text-neutral-900">{SITE_CONFIG.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-medium text-neutral-900">Quick Response</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  We typically respond to all inquiries {SITE_CONFIG.responseTime}. Submit the form and we&apos;ll be in touch!
                </p>
              </div>

              {/* Why Contact Us */}
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-3">Why Work With Us</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Local Port Aransas experts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized service
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No obligation consultation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
