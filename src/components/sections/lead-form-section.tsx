import { Container, Section } from "@/components/layout"
import { LeadForm } from "@/components/forms"
import { cn } from "@/lib/utils"

interface LeadFormSectionProps {
  title?: string
  subtitle?: string
  variant?: "light" | "dark"
  source?: string
}

export function LeadFormSection({
  title = "Start Your Property Search",
  subtitle = "Tell us about your goals and we'll help you find the perfect coastal property",
  variant = "light",
  source = "home_form_section",
}: LeadFormSectionProps) {
  const isDark = variant === "dark"

  return (
    <Section
      className={cn(isDark ? "bg-primary-950" : "bg-neutral-50")}
      id="contact-form"
    >
      <Container size="narrow">
        <div className="text-center mb-10">
          <h2
            className={cn(
              "font-display text-fluid-3xl mb-4",
              isDark ? "text-white" : "text-neutral-900"
            )}
          >
            {title}
          </h2>
          <p className={cn("text-lg", isDark ? "text-neutral-300" : "text-neutral-600")}>
            {subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <LeadForm source={source} />
        </div>
      </Container>
    </Section>
  )
}
