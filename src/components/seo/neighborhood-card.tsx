import Link from "next/link"
import { cn } from "@/lib/utils"

interface NeighborhoodCardProps {
  name: string
  slug: string
  image: string
  description: string
  priceRange?: string
  propertyCount?: number
  className?: string
}

export function NeighborhoodCard({
  name,
  slug,
  image,
  description,
  priceRange,
  propertyCount,
  className,
}: NeighborhoodCardProps) {
  return (
    <Link
      href={`/neighborhoods/${slug}`}
      className={cn(
        "group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
          {name}
        </h3>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          {priceRange && (
            <span className="text-accent-600 font-medium">{priceRange}</span>
          )}
          {propertyCount !== undefined && (
            <span className="text-neutral-500">
              {propertyCount} {propertyCount === 1 ? "property" : "properties"}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

/**
 * Grid wrapper for neighborhood cards
 */
interface NeighborhoodGridProps {
  children: React.ReactNode
  className?: string
}

export function NeighborhoodGrid({ children, className }: NeighborhoodGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {children}
    </div>
  )
}
