import {
  Button,
  Column,
  Heading,
  Hr,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"
import { BaseLayout } from "./base-layout"

interface LeadNotificationProps {
  name: string
  email: string
  phone?: string
  preferredContact?: string
  propertyInterest?: string
  propertyType?: string
  priceRange?: string
  message?: string
  checkIn?: string
  checkOut?: string
  guests?: string
  source?: string
  submittedAt: string
}

function getPropertyTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    "beach-home": "Beachfront Home",
    "single-family": "Single Family Home",
    condo: "Condo",
    townhome: "Townhome",
    investment: "Investment Property",
    "second-home": "Second Home / Vacation Home",
    primary: "Primary Residence",
  }
  return type ? labels[type] || type : "Not specified"
}

function getPriceRangeLabel(range?: string): string {
  const labels: Record<string, string> = {
    "under-500k": "Under $500K",
    "500k-750k": "$500K - $750K",
    "750k-1m": "$750K - $1M",
    "1m-1.5m": "$1M - $1.5M",
    "1m-2m": "$1M - $2M",
    "1.5m-plus": "$1.5M+",
    "2m-plus": "$2M+",
  }
  return range ? labels[range] || range : "Not specified"
}

function getPreferredContactLabel(method?: string): string {
  const labels: Record<string, string> = {
    email: "Email",
    phone: "Phone",
    either: "Either",
  }
  return method ? labels[method] || method : "Email"
}

export function LeadNotification({
  name,
  email,
  phone,
  preferredContact,
  propertyInterest,
  propertyType,
  priceRange,
  message,
  checkIn,
  checkOut,
  guests,
  source,
  submittedAt,
}: LeadNotificationProps) {
  const previewText = `New Lead: ${name} - ${propertyType ? getPropertyTypeLabel(propertyType) : "General Inquiry"}`
  const propertyTypeLabel = getPropertyTypeLabel(propertyType)
  const priceRangeLabel = getPriceRangeLabel(priceRange)
  const contactMethodLabel = getPreferredContactLabel(preferredContact)

  return (
    <BaseLayout previewText={previewText}>
      {/* Lead Badge */}
      <Section style={badgeSection}>
        <Text style={badgeText}>NEW LEAD</Text>
      </Section>

      {/* Lead Name & Time */}
      <Heading style={heading}>{name}</Heading>
      <Text style={submittedText}>
        Submitted {submittedAt}
        {source && source !== "website" && (
          <span style={sourceTag}> via {source}</span>
        )}
      </Text>

      <Hr style={divider} />

      {/* Contact Card */}
      <Section style={contactCard}>
        <Text style={sectionTitle}>Contact Information</Text>

        <Row style={contactRow}>
          <Column style={contactIconCol}>
            <Text style={contactIcon}>&#x2709;</Text>
          </Column>
          <Column style={contactInfoCol}>
            <Text style={contactLabel}>Email</Text>
            <Link href={`mailto:${email}`} style={contactValue}>
              {email}
            </Link>
          </Column>
        </Row>

        {phone && (
          <Row style={contactRow}>
            <Column style={contactIconCol}>
              <Text style={contactIcon}>&#x260E;</Text>
            </Column>
            <Column style={contactInfoCol}>
              <Text style={contactLabel}>Phone</Text>
              <Link href={`tel:${phone}`} style={contactValue}>
                {phone}
              </Link>
            </Column>
          </Row>
        )}

        <Row style={contactRow}>
          <Column style={contactIconCol}>
            <Text style={contactIcon}>&#x2605;</Text>
          </Column>
          <Column style={contactInfoCol}>
            <Text style={contactLabel}>Preferred Contact</Text>
            <Text style={contactValueText}>{contactMethodLabel}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* Inquiry Details */}
      <Section style={detailsSection}>
        <Text style={sectionTitle}>Inquiry Details</Text>

        <Row style={detailRow}>
          <Column style={detailLabelCol}>
            <Text style={detailLabel}>Property Type</Text>
          </Column>
          <Column style={detailValueCol}>
            <Text style={detailValue}>{propertyTypeLabel}</Text>
          </Column>
        </Row>

        <Row style={detailRow}>
          <Column style={detailLabelCol}>
            <Text style={detailLabel}>Budget Range</Text>
          </Column>
          <Column style={detailValueCol}>
            <Text style={detailValue}>{priceRangeLabel}</Text>
          </Column>
        </Row>

        {propertyInterest && (
          <Row style={detailRow}>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>Property Interest</Text>
            </Column>
            <Column style={detailValueCol}>
              <Text style={detailValue}>{propertyInterest}</Text>
            </Column>
          </Row>
        )}

        {(checkIn || checkOut) && (
          <Row style={detailRow}>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>Dates</Text>
            </Column>
            <Column style={detailValueCol}>
              <Text style={detailValue}>
                {checkIn || "Flexible"} - {checkOut || "Flexible"}
              </Text>
            </Column>
          </Row>
        )}

        {guests && (
          <Row style={detailRow}>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>Guests</Text>
            </Column>
            <Column style={detailValueCol}>
              <Text style={detailValue}>{guests}</Text>
            </Column>
          </Row>
        )}
      </Section>

      {/* Message */}
      {message && (
        <>
          <Hr style={divider} />
          <Section style={messageSection}>
            <Text style={sectionTitle}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </>
      )}

      <Hr style={divider} />

      {/* Quick Actions */}
      <Section style={actionsSection}>
        <Button style={primaryButton} href={`mailto:${email}?subject=Re: Your Port Aransas Property Inquiry`}>
          Reply to {name.split(" ")[0]}
        </Button>
        {phone && (
          <Button style={secondaryButton} href={`tel:${phone}`}>
            Call Now
          </Button>
        )}
      </Section>

      {/* Footer Note */}
      <Section style={footerNote}>
        <Text style={footerNoteText}>
          This lead was submitted through your Port Aransas Estates website.
          Respond promptly for the best chance of conversion.
        </Text>
      </Section>
    </BaseLayout>
  )
}

// Styles
const badgeSection = {
  textAlign: "center" as const,
  marginBottom: "8px",
}

const badgeText = {
  backgroundColor: "#059669",
  borderRadius: "20px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0",
  padding: "6px 16px",
  textTransform: "uppercase" as const,
}

const heading = {
  color: "#0c4a6e",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "40px",
  margin: "0 0 8px 0",
  textAlign: "center" as const,
}

const submittedText = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

const sourceTag = {
  backgroundColor: "#f1f5f9",
  borderRadius: "4px",
  fontSize: "12px",
  marginLeft: "8px",
  padding: "2px 8px",
}

const divider = {
  borderColor: "#e2e8f0",
  margin: "28px 0",
}

const contactCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  padding: "24px",
}

const sectionTitle = {
  color: "#1e293b",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  margin: "0 0 20px 0",
  textTransform: "uppercase" as const,
}

const contactRow = {
  marginBottom: "16px",
}

const contactIconCol = {
  width: "40px",
  verticalAlign: "top" as const,
}

const contactIcon = {
  fontSize: "20px",
  margin: "0",
}

const contactInfoCol = {
  verticalAlign: "top" as const,
}

const contactLabel = {
  color: "#64748b",
  fontSize: "12px",
  margin: "0 0 2px 0",
  textTransform: "uppercase" as const,
}

const contactValue = {
  color: "#0c4a6e",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
}

const contactValueText = {
  color: "#0c4a6e",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

const detailsSection = {
  padding: "0",
}

const detailRow = {
  marginBottom: "12px",
}

const detailLabelCol = {
  width: "140px",
  verticalAlign: "top" as const,
}

const detailLabel = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
}

const detailValueCol = {
  verticalAlign: "top" as const,
}

const detailValue = {
  color: "#1e293b",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
}

const messageSection = {
  padding: "0",
}

const messageText = {
  backgroundColor: "#fffbeb",
  borderLeft: "4px solid #f59e0b",
  borderRadius: "0 8px 8px 0",
  color: "#1e293b",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0",
  padding: "16px 20px",
  whiteSpace: "pre-wrap" as const,
}

const actionsSection = {
  textAlign: "center" as const,
  margin: "8px 0",
}

const primaryButton = {
  backgroundColor: "#0c4a6e",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "600",
  padding: "14px 28px",
  textDecoration: "none",
  textAlign: "center" as const,
  marginRight: "12px",
  marginBottom: "12px",
}

const secondaryButton = {
  backgroundColor: "#ffffff",
  border: "2px solid #0c4a6e",
  borderRadius: "8px",
  color: "#0c4a6e",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "600",
  padding: "12px 28px",
  textDecoration: "none",
  textAlign: "center" as const,
  marginBottom: "12px",
}

const footerNote = {
  backgroundColor: "#f1f5f9",
  borderRadius: "8px",
  marginTop: "24px",
  padding: "16px 20px",
  textAlign: "center" as const,
}

const footerNoteText = {
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
}

export default LeadNotification
