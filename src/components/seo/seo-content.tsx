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
        // Headings - editorial serif with better spacing
        "prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight",
        "[&_h2]:![text-decoration:none] [&_h3]:![text-decoration:none] [&_h4]:![text-decoration:none]",
        // H2 - Major section headers with divider
        "prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-primary-900",
        "prose-h2:pt-8 prose-h2:border-t prose-h2:border-neutral-200",
        "first:prose-h2:mt-0 first:prose-h2:pt-0 first:prose-h2:border-t-0",
        // H3 - Subsection headers with background highlight
        "[&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-primary-800",
        "[&_h3]:bg-primary-50 [&_h3]:px-4 [&_h3]:py-3 [&_h3]:rounded-lg [&_h3]:border-l-4 [&_h3]:border-primary-500",
        // H4 - Minor headers
        "prose-h4:text-base prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-primary-700 prose-h4:font-semibold",
        // Paragraphs - better line height and spacing
        "prose-p:text-neutral-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-base",
        // Links
        "prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-800 hover:prose-a:underline",
        // Lists - improved spacing and readability
        "prose-li:text-neutral-700 prose-li:my-2 prose-li:leading-relaxed",
        "[&_ul]:my-6 [&_ul]:mb-8 [&_ol]:my-6 [&_ol]:mb-8",
        "[&_ul]:list-none [&_ol]:list-decimal [&_ol]:pl-6",
        // Custom bullet styling for ul
        "[&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:py-1",
        "[&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.75em]",
        "[&_ul>li]:before:w-2 [&_ul>li]:before:h-2 [&_ul>li]:before:bg-accent-500 [&_ul>li]:before:rounded-full",
        // Blockquotes
        "prose-blockquote:border-l-4 prose-blockquote:border-accent-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600",
        "prose-blockquote:bg-neutral-50 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-lg",
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
    <section id={id} className={cn("scroll-mt-24 mb-12", className)}>
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

const highlightIcons = {
  info: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tip: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  warning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
}

export function HighlightBox({ children, title, variant = "info", className }: HighlightBoxProps) {
  return (
    <div
      className={cn(
        "my-10 p-6 rounded-xl border-l-4 shadow-sm not-prose",
        {
          "bg-primary-50 border-primary-500": variant === "info",
          "bg-amber-50 border-accent-500": variant === "tip",
          "bg-orange-50 border-orange-500": variant === "warning",
        },
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex-shrink-0 mt-0.5",
          {
            "text-primary-600": variant === "info",
            "text-accent-600": variant === "tip",
            "text-orange-600": variant === "warning",
          }
        )}>
          {highlightIcons[variant]}
        </div>
        <div>
          {title && <h4 className="text-lg font-display font-semibold text-neutral-900 mb-2">{title}</h4>}
          <div className="text-neutral-700 text-base leading-relaxed [&_p]:mb-0">{children}</div>
        </div>
      </div>
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
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 my-12 not-prose", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
          <div className="text-3xl md:text-4xl font-display font-semibold text-primary-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">{stat.label}</div>
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
