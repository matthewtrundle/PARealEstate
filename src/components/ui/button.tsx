"use client"

import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles - hover scale 1.05 with 0.2s ease for micro-interaction
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-500",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500",
        outline:
          "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500",
        ghost:
          "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-500",
        cta:
          "bg-secondary-500 text-neutral-900 hover:bg-secondary-400 shadow-lg hover:shadow-xl focus-visible:ring-secondary-500",
        link:
          "text-primary-500 underline-offset-4 hover:underline focus-visible:ring-primary-500",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md gap-1.5",
        md: "h-11 px-6 text-base rounded-lg gap-2",
        lg: "h-14 px-8 text-lg rounded-xl gap-2.5",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // When using asChild, the child must be a single element
    // We can't add the loading spinner when using asChild
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
