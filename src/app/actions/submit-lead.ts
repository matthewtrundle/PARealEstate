"use server"

import { z } from "zod"

// Lead form validation schema
const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z.string().max(1000, "Message is too long").optional(),
  propertyInterest: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "either"]).default("email"),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.string().optional(),
  source: z.string().optional(),
})

export type LeadFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

const initialState: LeadFormState = {
  success: false,
  message: "",
}

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  // Extract form data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    message: (formData.get("message") as string) || undefined,
    propertyInterest: (formData.get("propertyInterest") as string) || undefined,
    preferredContact:
      (formData.get("preferredContact") as "email" | "phone" | "either") ||
      "email",
    checkIn: (formData.get("checkIn") as string) || undefined,
    checkOut: (formData.get("checkOut") as string) || undefined,
    guests: (formData.get("guests") as string) || undefined,
    source: (formData.get("source") as string) || "website",
  }

  // Validate
  const validated = leadFormSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      message: "Please check the form for errors",
      errors: validated.error.flatten().fieldErrors,
    }
  }

  try {
    // Log the lead (in production, send to CRM/email)
    console.log("=== NEW LEAD RECEIVED ===")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", validated.data.name)
    console.log("Email:", validated.data.email)
    console.log("Phone:", validated.data.phone || "Not provided")
    console.log("Property Interest:", validated.data.propertyInterest || "General inquiry")
    console.log("Preferred Contact:", validated.data.preferredContact)
    console.log("Check-in:", validated.data.checkIn || "Flexible")
    console.log("Check-out:", validated.data.checkOut || "Flexible")
    console.log("Guests:", validated.data.guests || "Not specified")
    console.log("Message:", validated.data.message || "No message")
    console.log("Source:", validated.data.source)
    console.log("========================")

    // TODO: Integrate with:
    // - Email service (Resend, SendGrid)
    // - CRM (HubSpot, Airtable)
    // - Slack notification

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      success: true,
      message:
        "Thank you for your inquiry! Our team will contact you within 2 hours.",
    }
  } catch (error) {
    console.error("Lead submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    }
  }
}
