"use client"

import { cn } from "@/lib/utils"
import type { Message } from "ai/react"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div
      className={cn("flex gap-3", isUser && "flex-row-reverse")}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm",
          isUser
            ? "bg-primary-100 text-primary-600"
            : "bg-accent-100 text-accent-600"
        )}
      >
        {isUser ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ) : (
          "🏖️"
        )}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
          isUser
            ? "bg-primary-600 text-white rounded-tr-sm"
            : "bg-white border border-neutral-200 text-neutral-700 rounded-tl-sm shadow-sm"
        )}
      >
        {message.content}
      </div>
    </div>
  )
}
