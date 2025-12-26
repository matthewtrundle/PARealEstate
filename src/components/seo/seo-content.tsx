import { cn } from "@/lib/utils"

interface SEOContentProps {
  children: React.ReactNode
  className?: string
}

/**
 * Prose wrapper for long-form SEO content.
 * Provides consistent typography for headings, paragraphs, lists, etc.
 */
export function SEOContent({ children, className }: SEOContentProps) {
  return (
    <article
      className={cn(
        // Base prose styles
        "prose prose-lg max-w-none",
        // Headings - editorial serif
        "prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight",
        "prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary-900",
        "prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary-800",
        "prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-primary-700",
        // Paragraphs
        "prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6",
        // Links
        "prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-800 hover:prose-a:underline",
        // Lists
        "prose-li:text-neutral-700 prose-li:my-2",
        "prose-ul:my-6 prose-ol:my-6",
        // Blockquotes
        "prose-blockquote:border-l-4 prose-blockquote:border-accent-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600",
        // Strong/bold
        "prose-strong:text-primary-900 prose-strong:font-semibold",
        // Images
        "prose-img:rounded-lg prose-img:shadow-md",
        className
      )}
    >
      {children}
    </article>
  )
}

/**
 * Section wrapper for content within SEOContent
 * Use for visually separating content sections
 */
interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ContentSection({ children, className, id }: ContentSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {children}
    </section>
  )
}

/**
 * Highlight box for important information
 */
interface HighlightBoxProps {
  children: React.ReactNode
  title?: string
  variant?: "info" | "tip" | "warning"
  className?: string
}

export function HighlightBox({ children, title, variant = "info", className }: HighlightBoxProps) {
  return (
    <div
      className={cn(
        "my-8 p-6 rounded-lg border-l-4",
        {
          "bg-primary-50 border-primary-500": variant === "info",
          "bg-accent-50 border-accent-500": variant === "tip",
          "bg-orange-50 border-orange-500": variant === "warning",
        },
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>}
      {children}
    </div>
  )
}

/**
 * Stats grid for displaying key numbers
 */
interface StatItem {
  label: string
  value: string
}

interface StatsGridProps {
  stats: StatItem[]
  className?: string
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 my-10", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg">
          <div className="text-3xl md:text-4xl font-display text-primary-900 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-neutral-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

/**
 * Image with caption for content
 */
interface ContentImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function ContentImage({ src, alt, caption, className }: ContentImageProps) {
  return (
    <figure className={cn("my-10", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-lg"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
