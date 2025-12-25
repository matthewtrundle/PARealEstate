import { Metadata } from "next"
import Link from "next/link"
import { Container, Section } from "@/components/layout"
import { SEOPageHero } from "@/components/seo"

export const metadata: Metadata = {
  title: "Real Estate Tools & Calculators | Port Aransas Estates",
  description:
    "Free real estate tools and calculators for Port Aransas buyers and sellers. Mortgage calculator, home value estimator, investment ROI calculator, and more.",
  keywords: [
    "mortgage calculator Port Aransas",
    "home value estimator Texas",
    "real estate investment calculator",
    "Port Aransas property tools",
  ],
}

const tools = [
  {
    title: "Mortgage Calculator",
    description:
      "Calculate your monthly mortgage payment, including principal, interest, taxes, and insurance for Port Aransas properties.",
    href: "/tools/mortgage-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Home Value Estimator",
    description:
      "Get an estimated value for your Port Aransas property based on local market data and comparable sales.",
    href: "/tools/home-value-estimator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Investment ROI Calculator",
    description:
      "Analyze potential returns on vacation rental properties, including rental income, expenses, and cash flow projections.",
    href: "/tools/investment-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Affordability Calculator",
    description:
      "Determine how much home you can afford based on your income, debts, and down payment.",
    href: "/tools/affordability-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Closing Cost Estimator",
    description:
      "Estimate your closing costs when buying a property in Port Aransas, including taxes, insurance, and fees.",
    href: "/tools/closing-cost-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Rent vs Buy Calculator",
    description:
      "Compare the costs of renting vs buying a home to help make the best decision for your situation.",
    href: "/tools/rent-vs-buy",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

export default function ToolsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools & Calculators" },
  ]

  return (
    <>
      <SEOPageHero
        title="Real Estate Tools"
        subtitle="Free calculators and tools to help you make informed decisions about Port Aransas real estate"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 hover:border-primary-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-neutral-900 group-hover:text-primary-700 transition-colors mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  <span>Use Calculator</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
