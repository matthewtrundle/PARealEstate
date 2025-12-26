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

export default function ClosingCostCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState(650000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [isBuyer, setIsBuyer] = useState(true) // true = buyer, false = seller

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Closing Cost Calculator" },
  ]

  const calculations = useMemo(() => {
    const downPayment = purchasePrice * (downPaymentPercent / 100)
    const loanAmount = purchasePrice - downPayment

    if (isBuyer) {
      // Buyer closing costs
      const loanOrigination = loanAmount * 0.01 // 1% origination
      const appraisal = 600
      const creditReport = 50
      const titleInsurance = purchasePrice * 0.005 // 0.5% of purchase price
      const titleSearch = 400
      const escrowFee = 1200
      const recording = 150
      const survey = 500
      const homeInspection = 500
      const attorneyFees = 800
      const prepaidInterest = (loanAmount * 0.07) / 12 // Approx 1 month
      const prepaidInsurance = 12000 // 1 year upfront
      const prepaidTaxes = (purchasePrice * 0.017) / 12 * 3 // 3 months escrow
      const floodCertification = 25

      const costs = {
        loanOrigination: { label: "Loan Origination (1%)", value: loanOrigination },
        appraisal: { label: "Appraisal", value: appraisal },
        creditReport: { label: "Credit Report", value: creditReport },
        titleInsurance: { label: "Title Insurance", value: titleInsurance },
        titleSearch: { label: "Title Search", value: titleSearch },
        escrowFee: { label: "Escrow/Closing Fee", value: escrowFee },
        recording: { label: "Recording Fees", value: recording },
        survey: { label: "Survey", value: survey },
        homeInspection: { label: "Home Inspection", value: homeInspection },
        attorneyFees: { label: "Attorney Fees", value: attorneyFees },
        prepaidInterest: { label: "Prepaid Interest (~1 month)", value: prepaidInterest },
        prepaidInsurance: { label: "Prepaid Insurance (1 year)", value: prepaidInsurance },
        prepaidTaxes: { label: "Prepaid Taxes (3 months)", value: prepaidTaxes },
        floodCert: { label: "Flood Certification", value: floodCertification },
      }

      const total = Object.values(costs).reduce((sum, item) => sum + item.value, 0)
      const percentOfPrice = (total / purchasePrice) * 100

      return { costs, total, percentOfPrice, downPayment, totalCashNeeded: total + downPayment }
    } else {
      // Seller closing costs
      const realEstateCommission = purchasePrice * 0.06 // 6% total
      const titleInsurance = purchasePrice * 0.003 // Owner's policy
      const escrowFee = 1200
      const recording = 150
      const prorations = 500 // Taxes, HOA prorations
      const docPrep = 250
      const transferTax = 0 // Texas doesn't have transfer tax
      const payoffFees = 250
      const repairs = 0 // User might need to estimate

      const costs = {
        realEstateCommission: { label: "Real Estate Commission (6%)", value: realEstateCommission },
        titleInsurance: { label: "Owner's Title Policy", value: titleInsurance },
        escrowFee: { label: "Escrow/Closing Fee", value: escrowFee },
        recording: { label: "Recording Fees", value: recording },
        prorations: { label: "Tax/HOA Prorations", value: prorations },
        docPrep: { label: "Document Preparation", value: docPrep },
        payoffFees: { label: "Loan Payoff Fees", value: payoffFees },
      }

      const total = Object.values(costs).reduce((sum, item) => sum + item.value, 0)
      const percentOfPrice = (total / purchasePrice) * 100

      return { costs, total, percentOfPrice, netProceeds: purchasePrice - total }
    }
  }, [purchasePrice, downPaymentPercent, isBuyer])

  return (
    <>
      <SEOPageHero
        title="Closing Cost Calculator"
        subtitle="Estimate your closing costs when buying or selling in Port Aransas"
        breadcrumbs={breadcrumbs}
        size="compact"
      />

      <Section spacing="generous" className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-neutral-100 p-6 md:p-8">
              {/* Buyer/Seller Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setIsBuyer(true)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    isBuyer
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  I&apos;m Buying
                </button>
                <button
                  onClick={() => setIsBuyer(false)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    !isBuyer
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  I&apos;m Selling
                </button>
              </div>

              <h2 className="font-display text-xl text-neutral-900 mb-6">
                {isBuyer ? "Purchase Details" : "Sale Details"}
              </h2>

              <div className="space-y-6">
                {/* Purchase/Sale Price */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {isBuyer ? "Purchase Price" : "Sale Price"}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={3000000}
                    step={25000}
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full mt-2 accent-primary-600"
                  />
                </div>

                {isBuyer && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Down Payment: {downPaymentPercent}%
                    </label>
                    <input
                      type="range"
                      min={5}
                      max={50}
                      step={5}
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="mt-8">
                <h3 className="font-display text-lg text-neutral-900 mb-4">
                  Estimated Closing Costs
                </h3>
                <div className="space-y-3">
                  {Object.values(calculations.costs).map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-neutral-100">
                      <span className="text-sm text-neutral-600">{item.label}</span>
                      <span className="text-sm font-medium">{formatCurrency(item.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Total */}
              <div className="bg-primary-900 text-white rounded-xl p-6">
                <p className="text-sm text-primary-200 mb-1">Estimated Closing Costs</p>
                <p className="text-4xl font-display font-semibold">
                  {formatCurrency(calculations.total)}
                </p>
                <p className="text-sm text-primary-300 mt-2">
                  {calculations.percentOfPrice.toFixed(1)}% of {isBuyer ? "purchase" : "sale"} price
                </p>
              </div>

              {isBuyer ? (
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h3 className="font-medium text-neutral-900 mb-4">Total Cash Needed</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-600">Down Payment</span>
                      <span className="text-sm font-medium">{formatCurrency(calculations.downPayment!)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-600">Closing Costs</span>
                      <span className="text-sm font-medium">{formatCurrency(calculations.total)}</span>
                    </div>
                    <hr className="border-neutral-100" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-neutral-900">Total</span>
                      <span className="text-neutral-900">
                        {formatCurrency(calculations.totalCashNeeded!)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                  <h3 className="font-medium text-neutral-900 mb-4">Estimated Net Proceeds</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-600">Sale Price</span>
                      <span className="text-sm font-medium">{formatCurrency(purchasePrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-neutral-600">Closing Costs</span>
                      <span className="text-sm font-medium text-red-600">
                        -{formatCurrency(calculations.total)}
                      </span>
                    </div>
                    <hr className="border-neutral-100" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-neutral-900">Net Proceeds*</span>
                      <span className="text-neutral-900">
                        {formatCurrency(calculations.netProceeds!)}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      *Before mortgage payoff
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-2">
                  {isBuyer ? "Ready to Buy?" : "Ready to Sell?"}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {isBuyer
                    ? "Get pre-approved and start your home search."
                    : "Get a free home valuation and selling consultation."}
                </p>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
            <p className="text-xs text-neutral-500">
              <strong>Disclaimer:</strong> These are estimates only. Actual closing costs vary based on
              lender fees, title company, specific transaction details, and negotiated terms. Some costs
              may be negotiable between buyer and seller. Consult with your real estate agent and lender
              for accurate closing cost estimates specific to your transaction.
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <CTABanner
          title={isBuyer ? "Find Your Beach Home" : "Sell Your Property"}
          description={
            isBuyer
              ? "Browse available properties in Port Aransas"
              : "Get a free market analysis of your property"
          }
          primaryCTA={{ text: isBuyer ? "Schedule Consultation" : "Get Valuation", href: "/contact" }}
        />
      </Container>
    </>
  )
}
