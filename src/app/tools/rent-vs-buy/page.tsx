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

export default function RentVsBuyPage() {
  // Buying inputs
  const [homePrice, setHomePrice] = useState(650000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(7.0)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.7)
  const [annualInsurance, setAnnualInsurance] = useState(12000)
  const [monthlyHOA, setMonthlyHOA] = useState(300)
  const [maintenanceRate, setMaintenanceRate] = useState(1) // % of home value
  const [appreciation, setAppreciation] = useState(4)

  // Renting inputs
  const [monthlyRent, setMonthlyRent] = useState(3500)
  const [annualRentIncrease, setAnnualRentIncrease] = useState(3)

  // Time horizon
  const [years, setYears] = useState(7)

  // Investment return if renting
  const [investmentReturn, setInvestmentReturn] = useState(7)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Rent vs Buy Calculator" },
  ]

  const calculations = useMemo(() => {
    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = 30 * 12

    // Monthly mortgage P&I
    const monthlyMortgage =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Calculate buying costs over time
    let totalBuyingCost = downPayment
    let currentHomeValue = homePrice
    let loanBalance = loanAmount
    const yearlyBuyingData = []

    for (let year = 1; year <= years; year++) {
      // Annual costs
      const annualMortgage = monthlyMortgage * 12
      const annualTax = currentHomeValue * (propertyTaxRate / 100)
      const annualMaintenance = currentHomeValue * (maintenanceRate / 100)
      const annualHOA = monthlyHOA * 12

      // Total annual ownership cost
      const annualCost = annualMortgage + annualTax + annualInsurance + annualMaintenance + annualHOA

      // Update home value
      currentHomeValue *= 1 + appreciation / 100

      // Calculate equity (rough - doesn't account for exact amortization)
      const principalPaid = (annualMortgage * 0.25) * year // Rough estimate
      loanBalance = Math.max(0, loanAmount - principalPaid)

      totalBuyingCost += annualCost

      yearlyBuyingData.push({
        year,
        annualCost,
        homeValue: currentHomeValue,
        equity: currentHomeValue - loanBalance,
      })
    }

    // Calculate net cost of buying (total costs - equity gained)
    const finalEquity = currentHomeValue - loanBalance
    const netBuyingCost = totalBuyingCost - finalEquity + downPayment

    // Calculate renting costs over time
    let totalRentingCost = 0
    let currentRent = monthlyRent
    let investmentValue = downPayment // Invest the down payment instead
    const yearlyRentingData = []

    for (let year = 1; year <= years; year++) {
      const annualRent = currentRent * 12
      totalRentingCost += annualRent

      // Down payment grows with investment returns
      investmentValue *= 1 + investmentReturn / 100

      currentRent *= 1 + annualRentIncrease / 100

      yearlyRentingData.push({
        year,
        annualRent,
        investmentValue,
      })
    }

    // Net cost of renting (total rent - investment growth)
    const netRentingCost = totalRentingCost - (investmentValue - downPayment)

    // Monthly comparison (first year)
    const monthlyBuyingCost =
      monthlyMortgage +
      (homePrice * propertyTaxRate / 100) / 12 +
      annualInsurance / 12 +
      (homePrice * maintenanceRate / 100) / 12 +
      monthlyHOA

    return {
      monthlyMortgage: isNaN(monthlyMortgage) ? 0 : monthlyMortgage,
      monthlyBuyingCost: isNaN(monthlyBuyingCost) ? 0 : monthlyBuyingCost,
      monthlyRent,
      totalBuyingCost: isNaN(totalBuyingCost) ? 0 : totalBuyingCost,
      totalRentingCost,
      netBuyingCost: isNaN(netBuyingCost) ? 0 : netBuyingCost,
      netRentingCost,
      finalHomeValue: currentHomeValue,
      finalEquity: isNaN(finalEquity) ? 0 : finalEquity,
      finalInvestmentValue: investmentValue,
      buyIsBetter: netBuyingCost < netRentingCost,
      savings: Math.abs(netBuyingCost - netRentingCost),
    }
  }, [
    homePrice,
    downPaymentPercent,
    interestRate,
    propertyTaxRate,
    annualInsurance,
    monthlyHOA,
    maintenanceRate,
    appreciation,
    monthlyRent,
    annualRentIncrease,
    years,
    investmentReturn,
  ])

  return (
    <>
      <SEOPageHero
        title="Rent vs Buy Calculator"
        subtitle="Compare the true costs of renting versus buying in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Time Horizon */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  How long do you plan to stay?
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {[3, 5, 7, 10, 15].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                        years === y
                          ? "bg-primary-600 text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {y} years
                    </button>
                  ))}
                </div>
              </div>

              {/* Buying Costs */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  Buying Scenario
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Down Payment: {downPaymentPercent}%
                    </label>
                    <input
                      type="range"
                      min={5}
                      max={50}
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
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
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Expected Appreciation: {appreciation}%/year
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={8}
                      step={0.5}
                      value={appreciation}
                      onChange={(e) => setAppreciation(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                </div>
              </div>

              {/* Renting Costs */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  Renting Scenario
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Monthly Rent
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Annual Rent Increase: {annualRentIncrease}%
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={8}
                      step={0.5}
                      value={annualRentIncrease}
                      onChange={(e) => setAnnualRentIncrease(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Investment Return (if you invest the down payment): {investmentReturn}%
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={12}
                      step={0.5}
                      value={investmentReturn}
                      onChange={(e) => setInvestmentReturn(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Winner */}
              <div className={`rounded-xl p-6 ${
                calculations.buyIsBetter
                  ? "bg-green-600 text-white"
                  : "bg-amber-500 text-white"
              }`}>
                <p className="text-sm opacity-90 mb-1">After {years} Years</p>
                <p className="text-2xl font-display font-semibold mb-2">
                  {calculations.buyIsBetter ? "Buying is Better" : "Renting is Better"}
                </p>
                <p className="text-sm opacity-90">
                  You save {formatCurrency(calculations.savings)} by{" "}
                  {calculations.buyIsBetter ? "buying" : "renting"}
                </p>
              </div>

              {/* Monthly Comparison */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Monthly Cost (Year 1)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Buying</span>
                    <span className="font-semibold">{formatCurrency(calculations.monthlyBuyingCost)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Renting</span>
                    <span className="font-semibold">{formatCurrency(calculations.monthlyRent)}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden bg-neutral-100 flex">
                    <div
                      className="bg-primary-600"
                      style={{
                        width: `${(calculations.monthlyBuyingCost / (calculations.monthlyBuyingCost + calculations.monthlyRent)) * 100}%`,
                      }}
                    />
                    <div
                      className="bg-amber-500"
                      style={{
                        width: `${(calculations.monthlyRent / (calculations.monthlyBuyingCost + calculations.monthlyRent)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* After X Years */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">After {years} Years</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <p className="font-medium text-primary-900">If You Buy</p>
                    <div className="mt-2 space-y-1 text-primary-700">
                      <div className="flex justify-between">
                        <span>Home Value</span>
                        <span>{formatCurrency(calculations.finalHomeValue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Equity Built</span>
                        <span>{formatCurrency(calculations.finalEquity)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-900">If You Rent</p>
                    <div className="mt-2 space-y-1 text-amber-700">
                      <div className="flex justify-between">
                        <span>Total Rent Paid</span>
                        <span>{formatCurrency(calculations.totalRentingCost)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Investment Value</span>
                        <span>{formatCurrency(calculations.finalInvestmentValue)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">
                  Ready to Buy?
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Explore Port Aransas properties and start building equity.
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/properties">View Properties</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Make an Informed Decision"
          description="Speak with our team about buying vs renting in Port Aransas"
          primaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
