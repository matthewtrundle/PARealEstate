"use client"

import { useState, useMemo } from "react"
import { Container, Section } from "@/components/layout"
import { SEOPageHero, CTABanner } from "@/components/seo"
import { Button } from "@/components/ui"

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function AffordabilityCalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState(150000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [downPayment, setDownPayment] = useState(150000)
  const [interestRate, setInterestRate] = useState(7.0)
  const [loanTerm, setLoanTerm] = useState(30)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.7)
  const [annualInsurance, setAnnualInsurance] = useState(12000)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Affordability Calculator" },
  ]

  const calculations = useMemo(() => {
    const monthlyIncome = annualIncome / 12

    // Conservative DTI limits
    const frontEndRatio = 0.28 // Housing costs should be < 28% of income
    const backEndRatio = 0.36 // Total debts should be < 36% of income

    // Max housing payment based on front-end ratio
    const maxHousingPayment = monthlyIncome * frontEndRatio

    // Max total debt payment based on back-end ratio
    const maxTotalDebt = monthlyIncome * backEndRatio
    const maxHousingAfterDebts = maxTotalDebt - monthlyDebts

    // Use the lower of the two
    const maxMonthlyPayment = Math.min(maxHousingPayment, maxHousingAfterDebts)

    // Calculate monthly costs that aren't P&I
    // We need to estimate since these depend on home price
    // Use iterative approach
    let maxHomePrice = 0
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    // Iterate to find max home price
    for (let price = 100000; price <= 5000000; price += 10000) {
      const loanAmount = price - downPayment
      if (loanAmount <= 0) continue

      const monthlyPI =
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)

      const monthlyTax = (price * (propertyTaxRate / 100)) / 12
      const monthlyInsurance = annualInsurance / 12
      const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance

      if (totalMonthly <= maxMonthlyPayment) {
        maxHomePrice = price
      } else {
        break
      }
    }

    // Calculate payment at max price
    const loanAmount = maxHomePrice - downPayment
    const monthlyPI =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    const monthlyTax = (maxHomePrice * (propertyTaxRate / 100)) / 12
    const monthlyInsurance = annualInsurance / 12

    // Comfortable and stretch budgets
    const comfortablePrice = maxHomePrice * 0.85
    const stretchPrice = maxHomePrice * 1.1

    return {
      maxHomePrice,
      comfortablePrice,
      stretchPrice,
      maxMonthlyPayment,
      monthlyPI: isNaN(monthlyPI) ? 0 : monthlyPI,
      monthlyTax,
      monthlyInsurance,
      loanAmount,
      dtiRatio: ((maxMonthlyPayment + monthlyDebts) / monthlyIncome) * 100,
    }
  }, [annualIncome, monthlyDebts, downPayment, interestRate, loanTerm, propertyTaxRate, annualInsurance])

  return (
    <>
      <SEOPageHero
        title="Affordability Calculator"
        subtitle="Find out how much home you can afford in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
              <h2 className="font-display text-xl text-neutral-900 mb-6">
                Your Financial Details
              </h2>

              <div className="space-y-6">
                {/* Annual Income */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Annual Household Income (before taxes)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Monthly Debts */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Monthly Debt Payments (car loans, credit cards, student loans)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Available Down Payment
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <hr className="border-neutral-100" />

                <h3 className="font-display text-lg text-neutral-900">Loan Assumptions</h3>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={10}
                    step={0.125}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-primary-600"
                  />
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

                {/* Property Tax */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Tax Rate: {propertyTaxRate}%
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                    className="w-full accent-primary-600"
                  />
                </div>

                {/* Insurance */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Annual Insurance (Flood + Wind + Home)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={annualInsurance}
                      onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Coastal properties typically require $8,000-$15,000+ annually
                  </p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Main Result */}
              <div className="bg-primary-900 text-white rounded-xl p-6">
                <p className="text-sm text-primary-200 mb-1">You Can Afford Up To</p>
                <p className="text-4xl font-display font-semibold">
                  {formatCurrency(calculations.maxHomePrice)}
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  Based on 36% debt-to-income ratio
                </p>
              </div>

              {/* Budget Ranges */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Budget Ranges</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-green-800">Comfortable</span>
                      <span className="font-semibold text-green-900">
                        {formatCurrency(calculations.comfortablePrice)}
                      </span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">Room for unexpected expenses</p>
                  </div>

                  <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary-800">Maximum</span>
                      <span className="font-semibold text-primary-900">
                        {formatCurrency(calculations.maxHomePrice)}
                      </span>
                    </div>
                    <p className="text-xs text-primary-700 mt-1">At the limit of affordability</p>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-amber-800">Stretch</span>
                      <span className="font-semibold text-amber-900">
                        {formatCurrency(calculations.stretchPrice)}
                      </span>
                    </div>
                    <p className="text-xs text-amber-700 mt-1">May require higher income or lower rate</p>
                  </div>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Monthly Payment</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Principal & Interest</span>
                    <span className="font-medium">{formatCurrency(calculations.monthlyPI)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Property Tax</span>
                    <span className="font-medium">{formatCurrency(calculations.monthlyTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Insurance</span>
                    <span className="font-medium">{formatCurrency(calculations.monthlyInsurance)}</span>
                  </div>
                  <hr className="border-neutral-100 my-2" />
                  <div className="flex justify-between font-semibold">
                    <span className="text-neutral-900">Total</span>
                    <span className="text-neutral-900">{formatCurrency(calculations.maxMonthlyPayment)}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">Get Pre-Approved</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Know exactly what you can afford with a lender pre-approval.
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Find Homes in Your Budget"
          description="Browse Port Aransas properties within your price range"
          primaryCTA={{ text: "View Properties", href: "/properties" }}
        />
      </Container>
    </>
  )
}
