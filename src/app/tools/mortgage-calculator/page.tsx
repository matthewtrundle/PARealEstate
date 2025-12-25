"use client"

import { useState, useMemo } from "react"
import { Metadata } from "next"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { Button } from "@/components/ui"

// Note: metadata export won't work in client component, but we need interactivity
// In production, you'd split this into server/client components

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`
}

export default function MortgageCalculatorPage() {
  // Inputs
  const [homePrice, setHomePrice] = useState(650000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(7.0)
  const [loanTerm, setLoanTerm] = useState(30)
  const [propertyTax, setPropertyTax] = useState(1.7) // % of home value
  const [insurance, setInsurance] = useState(12000) // Annual
  const [hoa, setHoa] = useState(300) // Monthly

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Mortgage Calculator" },
  ]

  // Calculations
  const calculations = useMemo(() => {
    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    // Monthly principal & interest (using standard mortgage formula)
    const monthlyPI =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Monthly property tax
    const monthlyTax = (homePrice * (propertyTax / 100)) / 12

    // Monthly insurance
    const monthlyInsurance = insurance / 12

    // Total monthly payment
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + hoa

    // Total cost over loan term
    const totalPayments = monthlyPI * numPayments
    const totalInterest = totalPayments - loanAmount

    return {
      downPayment,
      loanAmount,
      monthlyPI: isNaN(monthlyPI) ? 0 : monthlyPI,
      monthlyTax,
      monthlyInsurance,
      monthlyHOA: hoa,
      totalMonthly: isNaN(totalMonthly) ? 0 : totalMonthly,
      totalPayments: isNaN(totalPayments) ? 0 : totalPayments,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    }
  }, [homePrice, downPaymentPercent, interestRate, loanTerm, propertyTax, insurance, hoa])

  // Payment breakdown for chart
  const breakdownData = [
    { label: "Principal & Interest", value: calculations.monthlyPI, color: "bg-primary-600" },
    { label: "Property Tax", value: calculations.monthlyTax, color: "bg-primary-400" },
    { label: "Insurance", value: calculations.monthlyInsurance, color: "bg-accent-500" },
    { label: "HOA", value: calculations.monthlyHOA, color: "bg-neutral-400" },
  ]

  return (
    <>
      <SEOPageHero
        title="Mortgage Calculator"
        subtitle="Calculate your monthly mortgage payment for Port Aransas properties"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
              <h2 className="font-display text-xl text-neutral-900 mb-6">
                Loan Details
              </h2>

              <div className="space-y-6">
                {/* Home Price */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Home Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={3000000}
                    step={10000}
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full mt-2 accent-primary-600"
                  />
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Down Payment: {formatCurrency(calculations.downPayment)} ({downPaymentPercent}%)
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>5%</span>
                    <span>25%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Interest Rate: {formatPercent(interestRate)}
                  </label>
                  <input
                    type="range"
                    min={4}
                    max={10}
                    step={0.125}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>4%</span>
                    <span>7%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Loan Term
                  </label>
                  <div className="flex gap-3">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
                          loanTerm === term
                            ? "bg-primary-600 text-white border-primary-600"
                            : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300"
                        }`}
                      >
                        {term} years
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-neutral-100" />

                <h3 className="font-display text-lg text-neutral-900">
                  Additional Costs
                </h3>

                {/* Property Tax Rate */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Tax Rate: {formatPercent(propertyTax)} ({formatCurrency(homePrice * propertyTax / 100)}/year)
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="w-full accent-primary-600"
                  />
                </div>

                {/* Annual Insurance */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Annual Insurance (Flood + Windstorm + Homeowners)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Port Aransas properties typically require $8,000-$15,000/year in combined insurance
                  </p>
                </div>

                {/* HOA */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Monthly HOA Fees
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={hoa}
                      onChange={(e) => setHoa(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Monthly Payment Card */}
              <div className="bg-primary-900 text-white rounded-xl p-6">
                <p className="text-sm text-primary-200 mb-1">Estimated Monthly Payment</p>
                <p className="text-4xl font-display font-semibold">
                  {formatCurrency(calculations.totalMonthly)}
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  {loanTerm}-year fixed at {formatPercent(interestRate)}
                </p>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Monthly Breakdown</h3>

                {/* Visual bar */}
                <div className="h-4 rounded-full overflow-hidden flex mb-4">
                  {breakdownData.map((item, i) => (
                    <div
                      key={i}
                      className={`${item.color}`}
                      style={{ width: `${(item.value / calculations.totalMonthly) * 100}%` }}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  {breakdownData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm text-neutral-600">{item.label}</span>
                      </div>
                      <span className="text-sm font-medium text-neutral-900">
                        {formatCurrency(item.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loan Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Loan Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Loan Amount</span>
                    <span className="text-sm font-medium">{formatCurrency(calculations.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Down Payment</span>
                    <span className="text-sm font-medium">{formatCurrency(calculations.downPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Total Interest Paid</span>
                    <span className="text-sm font-medium">{formatCurrency(calculations.totalInterest)}</span>
                  </div>
                  <hr className="border-neutral-100" />
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-neutral-900">Total Cost</span>
                    <span className="text-sm font-semibold text-neutral-900">
                      {formatCurrency(calculations.totalPayments + calculations.downPayment)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">Ready to buy?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Get pre-approved and start your Port Aransas home search.
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/contact">Get Pre-Approved</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
            <p className="text-xs text-neutral-500">
              <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only.
              Actual payments may vary based on your specific situation, lender requirements, and current
              market conditions. Property taxes and insurance costs for coastal properties can be significantly
              higher than inland properties. Contact a lender for accurate pre-approval and payment information.
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Your Port Aransas Home"
          description="Browse available properties within your budget"
          primaryCTA={{ text: "View Properties", href: "/properties" }}
        />
      </Container>
    </>
  )
}
