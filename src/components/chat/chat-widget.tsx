"use client"

import { useState, useRef, useEffect } from "react"
import { useChat, type Message } from "ai/react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { ChatPopup } from "./chat-popup"

interface ChatWidgetProps {
  className?: string
}

export function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hey there! I'm Sandy, your Port Aransas guide. Whether you're curious about beachfront properties, the best fishing spots, or where to grab fresh seafood - I'm here to help. What would you like to know?",
      },
    ],
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Show popup after 15 seconds if user hasn't interacted
  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem("chatPopupShown")
    if (popupShown || hasInteracted) return

    const timer = setTimeout(() => {
      if (!isOpen && !hasInteracted) {
        setShowPopup(true)
        sessionStorage.setItem("chatPopupShown", "true")
      }
    }, 15000)

    return () => clearTimeout(timer)
  }, [isOpen, hasInteracted])

  const handleOpen = () => {
    setIsOpen(true)
    setShowPopup(false)
    setHasInteracted(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleDismissPopup = () => {
    setShowPopup(false)
    setHasInteracted(true)
  }

  return (
    <>
      {/* Popup that appears after 15 seconds */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <ChatPopup onOpen={handleOpen} onDismiss={handleDismissPopup} />
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className={cn(
              "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg",
              "flex items-center justify-center hover:bg-primary-700 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              className
            )}
            aria-label="Open chat"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-6 right-6 z-40 w-[380px] max-w-[calc(100vw-3rem)]",
              "bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden",
              "flex flex-col",
              className
            )}
            style={{ height: "min(600px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="bg-primary-600 text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">🏖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Sandy</h3>
                  <p className="text-xs text-primary-100">Port Aransas Expert</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span>Sandy is typing...</span>
                </div>
              )}
              {error && (
                <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-neutral-200 bg-white shrink-0"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Port Aransas..."
                  className={cn(
                    "flex-1 px-4 py-2.5 text-sm rounded-full border border-neutral-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                    "placeholder:text-neutral-400"
                  )}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={cn(
                    "w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center",
                    "hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  )}
                  aria-label="Send message"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
