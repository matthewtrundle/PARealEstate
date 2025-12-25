import { Container, Section } from "@/components/layout"
import { LeadForm } from "@/components/forms"

export function LeadFormSection() {
  return (
    <Section className="bg-neutral-50" id="contact-form">
      <Container size="narrow">
        <div className="text-center mb-10">
          <h2 className="font-display text-fluid-3xl text-neutral-900 mb-4">
            Start Your Property Search
          </h2>
          <p className="text-lg text-neutral-600">
            Tell us about your goals and we&apos;ll help you find the perfect coastal property
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <LeadForm source="home_form_section" />
        </div>
      </Container>
    </Section>
  )
}
