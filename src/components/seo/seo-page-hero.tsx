import { cn } from "@/lib/utils"
import { Container } from "@/components/layout"
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs"

interface SEOPageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  breadcrumbs?: BreadcrumbItem[]
  className?: string
  size?: "default" | "compact" | "large"
}

export function SEOPageHero({
  title,
  subtitle,
  backgroundImage = "/images/hero/beach-aerial.jpg",
  breadcrumbs,
  className,
  size = "default",
}: SEOPageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        {
          "py-20 md:py-28": size === "default",
          "py-16 md:py-20": size === "compact",
          "py-28 md:py-36": size === "large",
        },
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/70 to-primary-950/90" />

      {/* Content */}
      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
