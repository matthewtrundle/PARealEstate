import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"

interface CTABannerProps {
  title?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: "default" | "compact" | "dark"
  className?: string
}

export function CTABanner({
  title = "Ready to Find Your Port Aransas Home?",
  description = "Browse our curated selection of coastal properties or speak with our local experts to start your search.",
  primaryCTA = {
    text: "View Properties",
    href: "/properties",
  },
  secondaryCTA,
  variant = "default",
  className,
}: CTABannerProps) {
  const isDark = variant === "dark"

  // Default secondary CTA only if primary is View Properties
  const showSecondaryCTA = secondaryCTA || (primaryCTA.text === "View Properties" ? {
    text: "Contact Us",
    href: "/contact",
  } : null)

  return (
    <section
      className={cn(
        "my-16 rounded-2xl p-8 md:p-12",
        {
          "bg-gradient-to-br from-primary-50 to-accent-50": !isDark,
          "bg-gradient-to-br from-primary-900 to-primary-950": isDark,
        },
        className
      )}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={cn(
            "font-display text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4",
            isDark ? "text-white" : "text-primary-900"
          )}
        >
          {title}
        </h2>

        <p
          className={cn(
            "text-lg mb-8 max-w-2xl mx-auto",
            isDark ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="cta"
            size="lg"
            className="px-8"
            asChild
          >
            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>

          {showSecondaryCTA && (
            <Button
              variant={isDark ? "outline" : "secondary"}
              size="lg"
              className={cn(
                "px-8",
                isDark && "border-white text-white hover:bg-white/10"
              )}
              asChild
            >
              <Link href={showSecondaryCTA.href}>{showSecondaryCTA.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * Inline CTA for use within content
 */
interface InlineCTAProps {
  text: string
  href: string
  className?: string
}

export function InlineCTA({ text, href, className }: InlineCTAProps) {
  return (
    <div className={cn("my-8 p-6 bg-accent-50 rounded-lg border border-accent-200", className)}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-900 font-medium">{text}</p>
        <Button variant="cta" size="md" asChild>
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
