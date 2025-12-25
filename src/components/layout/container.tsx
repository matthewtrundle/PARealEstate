import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main"
  size?: "default" | "narrow" | "wide"
}

export function Container({
  className,
  as: Component = "div",
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-7xl": size === "default",
          "max-w-3xl": size === "narrow",
          "max-w-[1400px]": size === "wide",
        },
        className
      )}
      {...props}
    />
  )
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div"
  spacing?: "default" | "generous" | "compact"
}

export function Section({
  className,
  as: Component = "section",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        {
          // Default: balanced padding
          "py-12 md:py-16 lg:py-20": spacing === "default",
          // Generous: Abbey-style long vertical blocks
          "py-16 md:py-24 lg:py-32": spacing === "generous",
          // Compact: for dense sections
          "py-8 md:py-12 lg:py-16": spacing === "compact",
        },
        className
      )}
      {...props}
    />
  )
}

// Full-bleed section for background images with parallax capability
interface FullBleedSectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundImage?: string
  overlay?: boolean
  overlayOpacity?: number
}

export function FullBleedSection({
  className,
  children,
  backgroundImage,
  overlay = true,
  overlayOpacity = 0.5,
  ...props
}: FullBleedSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-32 lg:py-40 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay for text contrast */}
      {overlay && (
        <div
          className="absolute inset-0 bg-neutral-900"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
