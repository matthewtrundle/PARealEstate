"use client"

import { useState, useActionState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { HomeIcon, CondoIcon, TownhomeIcon, TrendingUpIcon } from "@/components/icons"
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"

const priceRanges = [
  { label: "Under $500K", value: "under-500k" },
  { label: "$500K - $750K", value: "500k-750k" },
  { label: "$750K - $1M", value: "750k-1m" },
  { label: "$1M - $1.5M", value: "1m-1.5m" },
  { label: "$1.5M+", value: "1.5m-plus" },
]

const propertyTypes = [
  { id: "single-family", label: "Single Family", icon: <HomeIcon size={18} /> },
  { id: "condo", label: "Condo", icon: <CondoIcon size={18} /> },
  { id: "townhome", label: "Townhome", icon: <TownhomeIcon size={18} /> },
  { id: "investment", label: "Investment", icon: <TrendingUpIcon size={18} /> },
]

const neighborhoods = [
  "Cinnamon Shore",
  "Mustang Island",
  "Pirates Bay",
  "Beachwalk",
  "Downtown",
  "Port Royal",
]

const initialState: LeadFormState = {
  success: false,
  message: "",
}

interface PropertyAlertsFormProps {
  className?: string
  variant?: "inline" | "card"
}

export function PropertyAlertsForm({ className, variant = "card" }: PropertyAlertsFormProps) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState(submitLead, initialState)

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const toggleNeighborhood = (name: string) => {
    setSelectedNeighborhoods((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  if (state.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "text-center py-12",
          variant === "card" && "bg-white rounded-2xl shadow-lg border border-neutral-100 px-8"
        )}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
          You&apos;re All Set!
        </h3>
        <p className="text-neutral-600">
          {state.message || "We'll be in touch with properties matching your criteria."}
        </p>
      </motion.div>
    )
  }

  return (
    <div
      className={cn(
        variant === "card" && "bg-white rounded-2xl shadow-lg border border-neutral-100 p-6 md:p-8",
        className
      )}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
          Get New Listing Alerts
        </h3>
        <p className="text-neutral-600 text-sm">
          Be the first to know when properties matching your criteria hit the market
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              s === step ? "w-8 bg-primary-600" : s < step ? "w-4 bg-primary-400" : "w-4 bg-neutral-200"
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Price Range */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              What&apos;s your price range?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {priceRanges.map((range, index) => (
                <button
                  key={range.label}
                  onClick={() => setSelectedPriceRange(index)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all border",
                    selectedPriceRange === index
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300"
                  )}
                >
                  {range.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={selectedPriceRange === null}
              className="w-full mt-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </motion.div>
        )}

        {/* Step 2: Property Type & Neighborhoods */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Property types (select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all border flex items-center gap-2",
                    selectedTypes.includes(type.id)
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-primary-300"
                  )}
                >
                  <span>{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Preferred neighborhoods
            </label>
            <div className="flex flex-wrap gap-2 mb-6">
              {neighborhoods.map((hood) => (
                <button
                  key={hood}
                  onClick={() => toggleNeighborhood(hood)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
                    selectedNeighborhoods.includes(hood)
                      ? "bg-accent-500 text-white border-accent-500"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-accent-300"
                  )}
                >
                  {hood}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <form ref={formRef} action={formAction}>
              {/* Hidden fields for form data */}
              <input type="hidden" name="source" value="property-alerts" />
              <input type="hidden" name="priceRange" value={selectedPriceRange !== null ? priceRanges[selectedPriceRange].value : ""} />
              <input type="hidden" name="propertyType" value={selectedTypes.join(", ")} />
              <input
                type="hidden"
                name="message"
                value={`Property Alert Preferences:\n- Price Range: ${selectedPriceRange !== null ? priceRanges[selectedPriceRange].label : "Any"}\n- Property Types: ${selectedTypes.length > 0 ? selectedTypes.join(", ") : "Any"}\n- Neighborhoods: ${selectedNeighborhoods.length > 0 ? selectedNeighborhoods.join(", ") : "Any"}`}
              />

              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
              />

              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-6"
              />

              {/* Summary */}
              <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-medium text-neutral-900 mb-2">Your Alert Preferences</h4>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Price: {selectedPriceRange !== null ? priceRanges[selectedPriceRange].label : "Any"}</li>
                  <li>• Types: {selectedTypes.length > 0 ? selectedTypes.join(", ") : "Any"}</li>
                  <li>• Areas: {selectedNeighborhoods.length > 0 ? selectedNeighborhoods.join(", ") : "Any"}</li>
                </ul>
              </div>

              {state.message && !state.success && (
                <p className="text-sm text-red-500 mb-4">{state.message}</p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!email || !name || isPending}
                  className="flex-1 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Setting up...
                    </>
                  ) : (
                    "Create Alert"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
