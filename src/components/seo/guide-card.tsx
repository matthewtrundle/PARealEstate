import Link from "next/link"
import { cn } from "@/lib/utils"

interface GuideCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  category?: string
  className?: string
}

export function GuideCard({
  title,
  description,
  href,
  icon,
  category,
  className,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-neutral-100 hover:border-accent-200 transition-all duration-300",
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-100 transition-colors">
          <span className="text-accent-600 text-2xl">{icon}</span>
        </div>
      )}

      {/* Category */}
      {category && (
        <span className="text-xs font-medium uppercase tracking-wider text-accent-600 mb-2 block">
          {category}
        </span>
      )}

      {/* Title */}
      <h3 className="font-display text-xl text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 text-sm line-clamp-3">
        {description}
      </p>

      {/* Read more arrow */}
      <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-800 transition-colors">
        Read Guide
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}

/**
 * Grid wrapper for guide cards
 */
interface GuideGridProps {
  children: React.ReactNode
  columns?: 2 | 3
  className?: string
}

export function GuideGrid({ children, columns = 3, className }: GuideGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
