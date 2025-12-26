import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface BaseLayoutProps {
  previewText: string
  children: React.ReactNode
}

export function BaseLayout({ previewText, children }: BaseLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>Port Aransas Estates</Text>
            <Text style={tagline}>Premium Coastal Real Estate</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>{children}</Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Port Aransas Estates
              <br />
              Port Aransas, TX 78373
            </Text>
            <Text style={footerLinks}>
              <Link href="https://portaransasestates.com" style={footerLink}>
                Website
              </Link>
              {" | "}
              <Link href="tel:+13615550123" style={footerLink}>
                (361) 555-0123
              </Link>
              {" | "}
              <Link
                href="mailto:info@portaransasestates.com"
                style={footerLink}
              >
                Email Us
              </Link>
            </Text>
            <Text style={copyright}>
              &copy; {new Date().getFullYear()} Port Aransas Estates. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
}

const header = {
  backgroundColor: "#0c4a6e",
  padding: "40px 48px",
  textAlign: "center" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0",
  letterSpacing: "-0.5px",
}

const tagline = {
  color: "#7dd3fc",
  fontSize: "14px",
  fontWeight: "400",
  margin: "8px 0 0 0",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
}

const content = {
  padding: "48px",
}

const footer = {
  backgroundColor: "#f1f5f9",
  padding: "32px 48px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
}

const footerLinks = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0 0 16px 0",
}

const footerLink = {
  color: "#0c4a6e",
  textDecoration: "none",
}

const copyright = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "0",
}
