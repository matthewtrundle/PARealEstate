"use client"

import { motion } from "framer-motion"
import { getRandomFunFact } from "@/lib/chat-context"
import { useState, useEffect } from "react"

interface ChatPopupProps {
  onOpen: () => void
  onDismiss: () => void
}

export function ChatPopup({ onOpen, onDismiss }: ChatPopupProps) {
  const [funFact, setFunFact] = useState("")

  useEffect(() => {
    setFunFact(getRandomFunFact())
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Header with wave decoration */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-3 text-white relative">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <div>
              <p className="font-semibold text-sm">Hey there!</p>
              <p className="text-xs text-primary-100">Sandy here</p>
            </div>
          </div>
          {/* Dismiss button */}
          <button
            onClick={onDismiss}
            className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-neutral-600 mb-3">
            {funFact}
          </p>
          <p className="text-sm text-neutral-500 mb-4">
            Got questions about Port Aransas? I&apos;d love to help!
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onOpen}
              className="flex-1 px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition-colors"
            >
              Chat with me
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2.5 text-neutral-500 text-sm hover:text-neutral-700 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Pointer arrow */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-neutral-200 rotate-45" />
      </div>
    </motion.div>
  )
}
