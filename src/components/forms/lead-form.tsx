"use client"

import { useActionState, useEffect, useRef } from "react"
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"
import { Button } from "@/components/ui"
import { FormField } from "./form-field"
import { trackEvent } from "@/lib/analytics"
import { cn } from "@/lib/utils"

interface LeadFormProps {
  source?: string
  propertySlug?: string
  propertyName?: string
  variant?: "default" | "compact" | "inline"
  className?: string
}

const initialState: LeadFormState = {
  success: false,
  message: "",
}

export function LeadForm({
  source = "home",
  propertySlug,
  propertyName,
  variant = "default",
  className,
}: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const hasTrackedView = useRef(false)
  const hasTrackedStart = useRef(false)

  // Track form view
  useEffect(() => {
    if (!hasTrackedView.current) {
      trackEvent("LEAD_FORM_VIEWED", { source, propertySlug })
      hasTrackedView.current = true
    }
  }, [source, propertySlug])

  // Track form submission result
  useEffect(() => {
    if (state.success) {
      trackEvent("LEAD_FORM_SUBMITTED", { source, propertySlug })
      formRef.current?.reset()
    } else if (state.message && !state.success) {
      trackEvent("LEAD_FORM_ERROR", { source, propertySlug, error: state.message })
    }
  }, [state, source, propertySlug])

  // Track form start on first interaction
  const handleInteraction = () => {
    if (!hasTrackedStart.current) {
      trackEvent("LEAD_FORM_STARTED", { source, propertySlug })
      hasTrackedStart.current = true
    }
  }

  // Success state
  if (state.success) {
    return (
      <div className={cn("text-center p-8 bg-primary-50 rounded-xl", className)}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
          <svg
            className="w-8 h-8"
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
        </div>
        <h3 className="text-xl font-display text-primary-700 mb-2">
          Thank You!
        </h3>
        <p className="text-neutral-600">{state.message}</p>
        <p className="text-sm text-neutral-500 mt-4">
          Our team typically responds within 2 hours.
        </p>
      </div>
    )
  }

  // Compact variant (for sidebar/modal)
  if (variant === "compact") {
    return (
      <form
        ref={formRef}
        action={formAction}
        onFocus={handleInteraction}
        className={cn("space-y-4", className)}
      >
        <input type="hidden" name="source" value={source} />
        {propertySlug && (
          <input type="hidden" name="propertyInterest" value={propertySlug} />
        )}

        <FormField
          name="name"
          label="Name"
          placeholder="Your name"
          required
          error={state.errors?.name?.[0]}
        />

        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="your@email.com"
          required
          error={state.errors?.email?.[0]}
        />

        <FormField
          name="phone"
          label="Phone"
          type="tel"
          placeholder="(555) 123-4567"
          error={state.errors?.phone?.[0]}
        />

        <Button type="submit" variant="cta" size="lg" className="w-full" isLoading={isPending}>
          Get in Touch
        </Button>

        {state.message && !state.success && (
          <p className="text-sm text-red-500 text-center">{state.message}</p>
        )}
      </form>
    )
  }

  // Default full form
  return (
    <form
      ref={formRef}
      action={formAction}
      onFocus={handleInteraction}
      className={cn("space-y-6", className)}
    >
      <input type="hidden" name="source" value={source} />
      {propertySlug && (
        <input type="hidden" name="propertyInterest" value={propertySlug} />
      )}

      {propertyName && (
        <div className="p-4 bg-primary-50 rounded-lg mb-6">
          <p className="text-sm text-primary-600">
            Inquiring about: <span className="font-semibold">{propertyName}</span>
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          name="name"
          label="Your Name"
          placeholder="John Smith"
          required
          error={state.errors?.name?.[0]}
        />

        <FormField
          name="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
          error={state.errors?.email?.[0]}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          error={state.errors?.phone?.[0]}
        />

        <FormField
          name="preferredContact"
          label="Preferred Contact Method"
          as="select"
          options={[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ]}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          name="propertyType"
          label="Property Type Interest"
          as="select"
          options={[
            { value: "", label: "Select..." },
            { value: "beach-home", label: "Beachfront Home" },
            { value: "condo", label: "Condo" },
            { value: "investment", label: "Investment Property" },
            { value: "second-home", label: "Second Home/Vacation Home" },
            { value: "primary", label: "Primary Residence" },
          ]}
        />

        <FormField
          name="priceRange"
          label="Budget Range"
          as="select"
          options={[
            { value: "", label: "Select..." },
            { value: "under-500k", label: "Under $500K" },
            { value: "500k-750k", label: "$500K - $750K" },
            { value: "750k-1m", label: "$750K - $1M" },
            { value: "1m-2m", label: "$1M - $2M" },
            { value: "2m-plus", label: "$2M+" },
          ]}
        />
      </div>

      <FormField
        name="message"
        label="Tell us about your property goals"
        as="textarea"
        placeholder="What are you looking for? Any specific neighborhoods, features, or timeline?"
        rows={4}
      />

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Button type="submit" variant="cta" size="lg" isLoading={isPending}>
          Get in Touch
        </Button>

        <p className="text-sm text-neutral-500">
          We respond within 24 hours
        </p>
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  )
}
