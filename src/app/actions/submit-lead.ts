"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY)

// Email recipient
const NOTIFICATION_EMAIL = "matthewtrundle@gmail.com"

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
    // Log the lead
    console.log("=== NEW LEAD RECEIVED ===")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", validated.data.name)
    console.log("Email:", validated.data.email)
    console.log("========================")

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Port Aransas Estates <onboarding@resend.dev>",
        to: NOTIFICATION_EMAIL,
        subject: `New Lead: ${validated.data.name} - ${validated.data.propertyInterest || "General Inquiry"}`,
        html: `
          <h2>New Lead from Port Aransas Estates Website</h2>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}</p>
          <hr />
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${validated.data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validated.data.email}">${validated.data.email}</a></p>
          <p><strong>Phone:</strong> ${validated.data.phone || "Not provided"}</p>
          <p><strong>Preferred Contact:</strong> ${validated.data.preferredContact}</p>
          <hr />
          <h3>Inquiry Details</h3>
          <p><strong>Property Interest:</strong> ${validated.data.propertyInterest || "General inquiry"}</p>
          <p><strong>Check-in:</strong> ${validated.data.checkIn || "Flexible"}</p>
          <p><strong>Check-out:</strong> ${validated.data.checkOut || "Flexible"}</p>
          <p><strong>Guests:</strong> ${validated.data.guests || "Not specified"}</p>
          <hr />
          <h3>Message</h3>
          <p>${validated.data.message || "No message provided"}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Source: ${validated.data.source}</p>
        `,
      })
    }

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
