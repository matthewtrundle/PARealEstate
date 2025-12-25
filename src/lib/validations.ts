import { z } from "zod"

/**
 * Lead form validation schema
 */
export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .max(1000, "Message is too long")
    .optional(),
  propertyInterest: z
    .string()
    .optional(),
  preferredContact: z
    .enum(["email", "phone", "either"])
    .default("email"),
  dates: z
    .object({
      checkIn: z.string().optional(),
      checkOut: z.string().optional(),
    })
    .optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional(),
  subject: z
    .string()
    .min(2, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),
})

export type NewsletterData = z.infer<typeof newsletterSchema>
