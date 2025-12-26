import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnalyticsProvider } from "@/components/providers/analytics-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { GlobalSchemas } from "@/components/seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portaransasestates.com"),
  title: {
    default: "Port Aransas Estates | Premium Coastal Real Estate",
    template: "%s | Port Aransas Estates",
  },
  description:
    "Discover exceptional beach homes, condos, and investment properties in Port Aransas, TX. Your trusted partner for Texas coastal real estate.",
  keywords: [
    "Port Aransas real estate",
    "Port Aransas homes for sale",
    "beach house Texas",
    "Mustang Island real estate",
    "Texas Gulf Coast property",
    "Port Aransas investment property",
  ],
  authors: [{ name: "Port Aransas Estates" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portaransasestates.com",
    siteName: "Port Aransas Estates",
    title: "Port Aransas Estates | Premium Coastal Real Estate",
    description:
      "Discover exceptional beach homes, condos, and investment properties in Port Aransas, TX.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Port Aransas Estates - Premium Coastal Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Port Aransas Estates | Premium Coastal Real Estate",
    description:
      "Discover exceptional beach homes, condos, and investment properties in Port Aransas, TX.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      </head>
      <body className="font-body antialiased">
        <GlobalSchemas />
        <LenisProvider>
          <AnalyticsProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AnalyticsProvider>
        </LenisProvider>
        {/* Premium grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
