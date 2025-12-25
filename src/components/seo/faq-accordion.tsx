"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  // Generate JSON-LD structured data for FAQ rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* FAQ Accordion */}
      <Accordion.Root type="single" collapsible className={cn("space-y-4", className)}>
        {items.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors group">
                <span className="font-display text-lg text-primary-900 pr-4">
                  {item.question}
                </span>
                <svg
                  className="w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                {item.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  )
}
