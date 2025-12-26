import {
  Button,
  Heading,
  Hr,
  Link,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"
import { BaseLayout } from "./base-layout"

interface InquiryConfirmationProps {
  name: string
  propertyInterest?: string
  propertyType?: string
  priceRange?: string
  source?: string
}

function getPropertyTypeLabel(type?: string): string {
  const labels: Record<string, string> = {
    "beach-home": "Beachfront Home",
    condo: "Condo",
    investment: "Investment Property",
    "second-home": "Second Home/Vacation Home",
    primary: "Primary Residence",
  }
  return type ? labels[type] || type : ""
}

function getPriceRangeLabel(range?: string): string {
  const labels: Record<string, string> = {
    "under-500k": "Under $500K",
    "500k-750k": "$500K - $750K",
    "750k-1m": "$750K - $1M",
    "1m-2m": "$1M - $2M",
    "2m-plus": "$2M+",
  }
  return range ? labels[range] || range : ""
}

export function InquiryConfirmation({
  name,
  propertyInterest,
  propertyType,
  priceRange,
  source,
}: InquiryConfirmationProps) {
  const firstName = name.split(" ")[0]
  const propertyTypeLabel = getPropertyTypeLabel(propertyType)
  const priceRangeLabel = getPriceRangeLabel(priceRange)

  const previewText = `Thanks for reaching out, ${firstName}! We'll be in touch shortly.`

  return (
    <BaseLayout previewText={previewText}>
      {/* Wave Icon */}
      <Section style={iconSection}>
        <Text style={waveIcon}>&#x1F30A;</Text>
      </Section>

      {/* Main Heading */}
      <Heading style={heading}>
        Thanks for reaching out, {firstName}!
      </Heading>

      <Text style={paragraph}>
        We&apos;ve received your inquiry and our team is already reviewing your
        request. One of our Port Aransas real estate specialists will be in
        touch with you shortly.
      </Text>

      {/* Response Time Box */}
      <Section style={highlightBox}>
        <Text style={highlightIcon}>&#x23F0;</Text>
        <Text style={highlightText}>
          <strong>Expected response time:</strong> Within 24 hours
          <br />
          <span style={{ fontSize: "14px", color: "#64748b" }}>
            Usually much faster during business hours (9am-6pm CST)
          </span>
        </Text>
      </Section>

      {/* What they submitted */}
      {(propertyTypeLabel || priceRangeLabel || propertyInterest) && (
        <>
          <Hr style={divider} />
          <Heading as="h3" style={subheading}>
            Your Inquiry Details
          </Heading>

          <Section style={detailsBox}>
            {propertyTypeLabel && (
              <Text style={detailItem}>
                <span style={detailLabel}>Property Type:</span>
                <span style={detailValue}>{propertyTypeLabel}</span>
              </Text>
            )}
            {priceRangeLabel && (
              <Text style={detailItem}>
                <span style={detailLabel}>Budget Range:</span>
                <span style={detailValue}>{priceRangeLabel}</span>
              </Text>
            )}
            {propertyInterest && !propertyType && (
              <Text style={detailItem}>
                <span style={detailLabel}>Property:</span>
                <span style={detailValue}>{propertyInterest}</span>
              </Text>
            )}
          </Section>
        </>
      )}

      <Hr style={divider} />

      {/* What to expect */}
      <Heading as="h3" style={subheading}>
        What Happens Next?
      </Heading>

      <Section style={stepsSection}>
        <Text style={stepItem}>
          <span style={stepNumber}>1</span>
          <span style={stepText}>
            <strong>Review</strong> &mdash; We&apos;ll review your requirements and
            identify properties that match your criteria
          </span>
        </Text>
        <Text style={stepItem}>
          <span style={stepNumber}>2</span>
          <span style={stepText}>
            <strong>Connect</strong> &mdash; A local specialist will reach out to
            discuss your goals and answer any questions
          </span>
        </Text>
        <Text style={stepItem}>
          <span style={stepNumber}>3</span>
          <span style={stepText}>
            <strong>Explore</strong> &mdash; We&apos;ll schedule viewings and guide
            you through the entire process
          </span>
        </Text>
      </Section>

      <Hr style={divider} />

      {/* CTA Section */}
      <Section style={ctaSection}>
        <Text style={ctaText}>
          In the meantime, explore our resources:
        </Text>
        <Button style={primaryButton} href="https://portaransasestates.com/portfolio">
          View Our Portfolio
        </Button>
        <Button style={secondaryButton} href="https://portaransasestates.com/guides">
          Browse Buyer Guides
        </Button>
      </Section>

      {/* Signature */}
      <Section style={signatureSection}>
        <Text style={signatureText}>
          Looking forward to helping you find your perfect coastal property!
        </Text>
        <Text style={signatureName}>
          The Port Aransas Estates Team
        </Text>
      </Section>
    </BaseLayout>
  )
}

// Styles
const iconSection = {
  textAlign: "center" as const,
  marginBottom: "16px",
}

const waveIcon = {
  fontSize: "48px",
  margin: "0",
}

const heading = {
  color: "#0c4a6e",
  fontSize: "28px",
  fontWeight: "600",
  lineHeight: "36px",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
}

const paragraph = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0 0 24px 0",
}

const highlightBox = {
  backgroundColor: "#f0f9ff",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
  marginBottom: "24px",
}

const highlightIcon = {
  fontSize: "32px",
  margin: "0 0 12px 0",
}

const highlightText = {
  color: "#0c4a6e",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
}

const divider = {
  borderColor: "#e2e8f0",
  margin: "32px 0",
}

const subheading = {
  color: "#1e293b",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 20px 0",
}

const detailsBox = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  padding: "20px",
}

const detailItem = {
  color: "#334155",
  fontSize: "15px",
  margin: "0 0 12px 0",
}

const detailLabel = {
  color: "#64748b",
  display: "inline-block",
  width: "120px",
}

const detailValue = {
  color: "#0c4a6e",
  fontWeight: "500",
}

const stepsSection = {
  marginBottom: "8px",
}

const stepItem = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 16px 0",
}

const stepNumber = {
  backgroundColor: "#0c4a6e",
  borderRadius: "50%",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  height: "28px",
  lineHeight: "28px",
  marginRight: "16px",
  textAlign: "center" as const,
  width: "28px",
  flexShrink: 0,
}

const stepText = {
  color: "#334155",
  fontSize: "15px",
  lineHeight: "24px",
}

const ctaSection = {
  textAlign: "center" as const,
  marginBottom: "8px",
}

const ctaText = {
  color: "#64748b",
  fontSize: "15px",
  margin: "0 0 20px 0",
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

const signatureSection = {
  marginTop: "32px",
  textAlign: "center" as const,
}

const signatureText = {
  color: "#64748b",
  fontSize: "15px",
  fontStyle: "italic",
  margin: "0 0 8px 0",
}

const signatureName = {
  color: "#0c4a6e",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

export default InquiryConfirmation
