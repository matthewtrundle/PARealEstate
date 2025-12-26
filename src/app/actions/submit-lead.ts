"use server"

import { z } from "zod"
import { Resend } from "resend"
import { render } from "@react-email/components"
import { InquiryConfirmation } from "@/emails/inquiry-confirmation"
import { LeadNotification } from "@/emails/lead-notification"

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
  propertyType: z.string().optional(),
  priceRange: z.string().optional(),
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
    propertyType: (formData.get("propertyType") as string) || undefined,
    priceRange: (formData.get("priceRange") as string) || undefined,
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

    // Send emails if API key is configured
    if (process.env.RESEND_API_KEY) {
      const submittedAt = new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago",
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })

      // 1. Send notification to owner (professional template)
      const notificationEmailHtml = await render(
        LeadNotification({
          name: validated.data.name,
          email: validated.data.email,
          phone: validated.data.phone,
          preferredContact: validated.data.preferredContact,
          propertyInterest: validated.data.propertyInterest,
          propertyType: validated.data.propertyType,
          priceRange: validated.data.priceRange,
          message: validated.data.message,
          checkIn: validated.data.checkIn,
          checkOut: validated.data.checkOut,
          guests: validated.data.guests,
          source: validated.data.source,
          submittedAt,
        })
      )

      const ownerEmailResult = await resend.emails.send({
        from: "Port Aransas Estates <onboarding@resend.dev>",
        to: NOTIFICATION_EMAIL,
        subject: `New Lead: ${validated.data.name} - ${validated.data.propertyType || validated.data.propertyInterest || "General Inquiry"}`,
        html: notificationEmailHtml,
      })
      console.log("Owner notification sent:", ownerEmailResult)

      // 2. Send confirmation email to user
      const confirmationEmailHtml = await render(
        InquiryConfirmation({
          name: validated.data.name,
          propertyInterest: validated.data.propertyInterest,
          propertyType: validated.data.propertyType,
          priceRange: validated.data.priceRange,
          source: validated.data.source,
        })
      )

      // Note: If using onboarding@resend.dev (free tier), this will only work
      // for verified email addresses. To send to any email, verify your domain
      // at https://resend.com/domains
      const userEmailResult = await resend.emails.send({
        from: "Port Aransas Estates <onboarding@resend.dev>",
        to: validated.data.email,
        subject: "Thanks for reaching out! - Port Aransas Estates",
        html: confirmationEmailHtml,
      })
      console.log("User confirmation sent:", userEmailResult)
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
