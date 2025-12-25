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

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`
}

export default function InvestmentCalculatorPage() {
  // Purchase inputs
  const [purchasePrice, setPurchasePrice] = useState(650000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(25)
  const [interestRate, setInterestRate] = useState(7.25)
  const [closingCostPercent, setClosingCostPercent] = useState(3)

  // Rental income inputs
  const [monthlyRent, setMonthlyRent] = useState(4500) // Average nightly rate * nights
  const [occupancyRate, setOccupancyRate] = useState(55) // % of year rented

  // Annual expenses
  const [propertyTax, setPropertyTax] = useState(11000)
  const [insurance, setInsurance] = useState(12000)
  const [hoaFees, setHoaFees] = useState(3600)
  const [managementFee, setManagementFee] = useState(25) // % of gross rent
  const [maintenancePercent, setMaintenancePercent] = useState(5) // % of gross rent
  const [utilities, setUtilities] = useState(3600)

  // Appreciation
  const [annualAppreciation, setAnnualAppreciation] = useState(4)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Investment Calculator" },
  ]

  const calculations = useMemo(() => {
    // Initial investment
    const downPayment = purchasePrice * (downPaymentPercent / 100)
    const closingCosts = purchasePrice * (closingCostPercent / 100)
    const totalCashInvested = downPayment + closingCosts
    const loanAmount = purchasePrice - downPayment

    // Monthly mortgage payment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = 30 * 12
    const monthlyMortgage =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Annual income
    const grossAnnualRent = monthlyRent * 12 * (occupancyRate / 100)

    // Annual expenses
    const annualMortgage = monthlyMortgage * 12
    const annualManagement = grossAnnualRent * (managementFee / 100)
    const annualMaintenance = grossAnnualRent * (maintenancePercent / 100)
    const totalAnnualExpenses =
      propertyTax + insurance + hoaFees + annualManagement + annualMaintenance + utilities + annualMortgage

    // Cash flow
    const netOperatingIncome = grossAnnualRent - (propertyTax + insurance + hoaFees + annualManagement + annualMaintenance + utilities)
    const annualCashFlow = grossAnnualRent - totalAnnualExpenses
    const monthlyCashFlow = annualCashFlow / 12

    // Returns
    const capRate = (netOperatingIncome / purchasePrice) * 100
    const cashOnCash = (annualCashFlow / totalCashInvested) * 100

    // 5-year projection
    const year5Value = purchasePrice * Math.pow(1 + annualAppreciation / 100, 5)
    const year5Equity = year5Value - loanAmount * 0.9 // Rough estimate of remaining loan
    const totalReturn5Year =
      annualCashFlow * 5 + (year5Value - purchasePrice)

    return {
      downPayment,
      closingCosts,
      totalCashInvested,
      loanAmount,
      monthlyMortgage: isNaN(monthlyMortgage) ? 0 : monthlyMortgage,
      grossAnnualRent,
      annualMortgage: isNaN(annualMortgage) ? 0 : annualMortgage,
      netOperatingIncome,
      annualCashFlow: isNaN(annualCashFlow) ? 0 : annualCashFlow,
      monthlyCashFlow: isNaN(monthlyCashFlow) ? 0 : monthlyCashFlow,
      capRate: isNaN(capRate) ? 0 : capRate,
      cashOnCash: isNaN(cashOnCash) ? 0 : cashOnCash,
      year5Value,
      totalReturn5Year: isNaN(totalReturn5Year) ? 0 : totalReturn5Year,
      expenses: {
        mortgage: annualMortgage,
        propertyTax,
        insurance,
        hoa: hoaFees,
        management: annualManagement,
        maintenance: annualMaintenance,
        utilities,
      },
    }
  }, [
    purchasePrice,
    downPaymentPercent,
    interestRate,
    closingCostPercent,
    monthlyRent,
    occupancyRate,
    propertyTax,
    insurance,
    hoaFees,
    managementFee,
    maintenancePercent,
    utilities,
    annualAppreciation,
  ])

  return (
    <>
      <SEOPageHero
        title="Investment ROI Calculator"
        subtitle="Analyze vacation rental returns for Port Aransas investment properties"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Purchase Details */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  Purchase Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Purchase Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Down Payment: {downPaymentPercent}%
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={100}
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
                      Closing Costs: {closingCostPercent}%
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={5}
                      step={0.5}
                      value={closingCostPercent}
                      onChange={(e) => setClosingCostPercent(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                </div>
              </div>

              {/* Rental Income */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  Rental Income
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Average Monthly Rental Income (at 100% occupancy)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">
                      Tip: 3BR homes often earn $4,000-6,000/month equivalent
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Occupancy Rate: {occupancyRate}%
                    </label>
                    <input
                      type="range"
                      min={30}
                      max={80}
                      value={occupancyRate}
                      onChange={(e) => setOccupancyRate(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Port Aransas averages 50-60% annual occupancy
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Expenses */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h2 className="font-display text-lg text-neutral-900 mb-4">
                  Annual Expenses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Property Tax
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Insurance (All)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={insurance}
                        onChange={(e) => setInsurance(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      HOA Fees
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={hoaFees}
                        onChange={(e) => setHoaFees(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Management: {managementFee}% of rent
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={35}
                      value={managementFee}
                      onChange={(e) => setManagementFee(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Maintenance: {maintenancePercent}% of rent
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={10}
                      value={maintenancePercent}
                      onChange={(e) => setMaintenancePercent(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Utilities
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                      <input
                        type="number"
                        value={utilities}
                        onChange={(e) => setUtilities(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Key Metrics */}
              <div className="bg-primary-900 text-white rounded-xl p-6">
                <p className="text-sm text-primary-200 mb-1">Monthly Cash Flow</p>
                <p className={`text-4xl font-display font-semibold ${calculations.monthlyCashFlow < 0 ? 'text-red-400' : ''}`}>
                  {formatCurrency(calculations.monthlyCashFlow)}
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  {calculations.monthlyCashFlow >= 0 ? 'Positive cash flow' : 'Negative cash flow'}
                </p>
              </div>

              {/* Returns */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Return Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-neutral-600">Cap Rate</span>
                      <p className="text-xs text-neutral-400">NOI / Price</p>
                    </div>
                    <span className="text-lg font-semibold text-neutral-900">
                      {formatPercent(calculations.capRate)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-neutral-600">Cash-on-Cash Return</span>
                      <p className="text-xs text-neutral-400">Annual cash flow / Cash invested</p>
                    </div>
                    <span className={`text-lg font-semibold ${calculations.cashOnCash < 0 ? 'text-red-600' : 'text-neutral-900'}`}>
                      {formatPercent(calculations.cashOnCash)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Investment Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Investment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total Cash Invested</span>
                    <span className="font-medium">{formatCurrency(calculations.totalCashInvested)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Gross Annual Rent</span>
                    <span className="font-medium">{formatCurrency(calculations.grossAnnualRent)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Annual Cash Flow</span>
                    <span className={`font-medium ${calculations.annualCashFlow < 0 ? 'text-red-600' : ''}`}>
                      {formatCurrency(calculations.annualCashFlow)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expense Breakdown */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Annual Expenses</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Mortgage</span>
                    <span>{formatCurrency(calculations.expenses.mortgage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Property Tax</span>
                    <span>{formatCurrency(calculations.expenses.propertyTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Insurance</span>
                    <span>{formatCurrency(calculations.expenses.insurance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">HOA</span>
                    <span>{formatCurrency(calculations.expenses.hoa)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Management</span>
                    <span>{formatCurrency(calculations.expenses.management)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Maintenance</span>
                    <span>{formatCurrency(calculations.expenses.maintenance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Utilities</span>
                    <span>{formatCurrency(calculations.expenses.utilities)}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">Find Investment Properties</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Browse vacation rentals with proven income potential.
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/properties">View Properties</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
            <p className="text-xs text-neutral-500">
              <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only.
              Actual returns depend on many factors including property condition, management quality, market
              conditions, and actual rental performance. Consult with a financial advisor and real estate
              professional before making investment decisions.
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title="Ready to Invest?"
          description="Let us help you find the perfect investment property in Port Aransas"
          primaryCTA={{ text: "View Properties", href: "/properties" }}
          secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </Container>
    </>
  )
}
