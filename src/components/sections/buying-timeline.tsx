"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

const timelineSteps = [
  {
    step: 1,
    title: "Get Pre-Approved",
    duration: "1-3 days",
    description: "Connect with a lender to understand your buying power. We can recommend trusted local lenders who specialize in coastal properties and vacation homes.",
    tips: [
      "Gather pay stubs, tax returns, and bank statements",
      "Check your credit score beforehand",
      "Compare rates from multiple lenders",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Define Your Criteria",
    duration: "1-2 days",
    description: "Work with us to identify your must-haves: beach proximity, rental income potential, number of bedrooms, pool, boat access, and more.",
    tips: [
      "Consider primary residence vs. investment",
      "Research HOA rules for rentals",
      "Think about future appreciation",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Tour Properties",
    duration: "1-4 weeks",
    description: "Visit your top picks in person. We'll schedule tours, provide neighborhood insights, and help you envision life in each property.",
    tips: [
      "Visit at different times of day",
      "Check out the beach access",
      "Talk to neighbors if possible",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Make an Offer",
    duration: "1-3 days",
    description: "We'll analyze comparable sales, craft a competitive offer, and negotiate on your behalf to get you the best deal.",
    tips: [
      "Be ready to move quickly in hot markets",
      "Consider earnest money requirements",
      "Include contingencies that protect you",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Under Contract",
    duration: "30-45 days",
    description: "Complete inspections, appraisal, and secure your financing. We'll coordinate everything and keep you informed at every step.",
    tips: [
      "Order wind/flood insurance quotes early",
      "Schedule home and termite inspections",
      "Review HOA documents carefully",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Close & Celebrate!",
    duration: "1 day",
    description: "Sign the final paperwork, receive your keys, and welcome to your new Port Aransas beach home!",
    tips: [
      "Bring valid ID to closing",
      "Wire funds the day before",
      "Schedule utilities transfer",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
]

export function BuyingTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Section className="bg-neutral-50">
      <Container>
        <Reveal className="text-center mb-12 md:mb-16">
          <span className="text-primary-600 text-sm tracking-wider uppercase font-medium block mb-4">
            Your Journey
          </span>
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-display font-semibold text-neutral-900 tracking-tight mb-4">
            The Home Buying Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From pre-approval to keys in hand, we guide you through every step
          </p>
        </Reveal>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-200 hidden md:block" />
          <div
            className="absolute top-6 left-0 h-0.5 bg-primary-600 hidden md:block transition-all duration-500"
            style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
          />

          {/* Step Indicators */}
          <div className="flex justify-between relative">
            {timelineSteps.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "flex flex-col items-center group relative z-10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
                )}
              >
                {/* Circle */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                    index <= activeStep
                      ? "bg-primary-600 border-primary-600 text-white"
                      : "bg-white border-neutral-300 text-neutral-400 group-hover:border-primary-400"
                  )}
                >
                  {index < activeStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{step.step}</span>
                  )}
                </div>

                {/* Label - Hidden on mobile */}
                <span
                  className={cn(
                    "hidden md:block mt-3 text-xs font-medium transition-colors max-w-[80px] text-center leading-tight",
                    index === activeStep ? "text-primary-600" : "text-neutral-500"
                  )}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
              {/* Left: Main Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                    {timelineSteps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                      Step {timelineSteps[activeStep].step}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-neutral-900">
                      {timelineSteps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {timelineSteps[activeStep].duration}
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  {timelineSteps[activeStep].description}
                </p>
              </div>

              {/* Right: Tips */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <h4 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Pro Tips
                </h4>
                <ul className="space-y-3">
                  {timelineSteps[activeStep].tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center px-8 py-4 bg-neutral-50 border-t border-neutral-100">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  activeStep === 0
                    ? "text-neutral-300 cursor-not-allowed"
                    : "text-neutral-600 hover:text-primary-600"
                )}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <div className="flex gap-1.5">
                {timelineSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeStep ? "bg-primary-600 w-4" : "bg-neutral-300 hover:bg-neutral-400"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveStep(Math.min(timelineSteps.length - 1, activeStep + 1))}
                disabled={activeStep === timelineSteps.length - 1}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  activeStep === timelineSteps.length - 1
                    ? "text-neutral-300 cursor-not-allowed"
                    : "text-neutral-600 hover:text-primary-600"
                )}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
