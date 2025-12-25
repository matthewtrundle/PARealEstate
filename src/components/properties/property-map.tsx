"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Port Aransas neighborhoods with approximate coordinates
const neighborhoods = [
  { id: "cinnamon-shore", name: "Cinnamon Shore", x: 72, y: 35, properties: 24, avgPrice: 1250000 },
  { id: "mustang-island", name: "Mustang Island", x: 55, y: 50, properties: 38, avgPrice: 875000 },
  { id: "pirates-bay", name: "Pirates Bay", x: 40, y: 42, properties: 15, avgPrice: 725000 },
  { id: "beachwalk", name: "Beachwalk", x: 65, y: 55, properties: 12, avgPrice: 650000 },
  { id: "downtown", name: "Downtown", x: 35, y: 60, properties: 28, avgPrice: 485000 },
  { id: "port-royal", name: "Port Royal", x: 25, y: 48, properties: 8, avgPrice: 950000 },
]

// Sample properties for demo
const sampleProperties = [
  { id: 1, neighborhood: "cinnamon-shore", name: "Gulf View Estate", price: 1450000, beds: 4, baths: 3, x: 74, y: 33 },
  { id: 2, neighborhood: "cinnamon-shore", name: "Beach Cottage", price: 985000, beds: 3, baths: 2, x: 70, y: 37 },
  { id: 3, neighborhood: "mustang-island", name: "Oceanfront Condo", price: 725000, beds: 2, baths: 2, x: 58, y: 48 },
  { id: 4, neighborhood: "mustang-island", name: "Island Retreat", price: 1100000, beds: 4, baths: 3, x: 52, y: 52 },
  { id: 5, neighborhood: "pirates-bay", name: "Canal Home", price: 875000, beds: 3, baths: 2.5, x: 42, y: 40 },
  { id: 6, neighborhood: "downtown", name: "Historic Bungalow", price: 425000, beds: 2, baths: 1, x: 33, y: 58 },
  { id: 7, neighborhood: "beachwalk", name: "Family Beach Home", price: 695000, beds: 3, baths: 2, x: 67, y: 53 },
  { id: 8, neighborhood: "port-royal", name: "Waterfront Villa", price: 1250000, beds: 5, baths: 4, x: 23, y: 46 },
]

function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`
  }
  return `$${(price / 1000).toFixed(0)}K`
}

interface PropertyMapProps {
  className?: string
  onPropertySelect?: (propertyId: number) => void
}

export function PropertyMap({ className, onPropertySelect }: PropertyMapProps) {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null)
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"neighborhoods" | "properties">("neighborhoods")

  const filteredProperties = useMemo(() => {
    if (!selectedNeighborhood) return sampleProperties
    return sampleProperties.filter((p) => p.neighborhood === selectedNeighborhood)
  }, [selectedNeighborhood])

  return (
    <div className={cn("relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden", className)}>
      {/* Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <button
          onClick={() => {
            setViewMode("neighborhoods")
            setSelectedNeighborhood(null)
          }}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm",
            viewMode === "neighborhoods"
              ? "bg-primary-600 text-white"
              : "bg-white text-neutral-700 hover:bg-neutral-50"
          )}
        >
          Neighborhoods
        </button>
        <button
          onClick={() => setViewMode("properties")}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm",
            viewMode === "properties"
              ? "bg-primary-600 text-white"
              : "bg-white text-neutral-700 hover:bg-neutral-50"
          )}
        >
          Properties
        </button>
      </div>

      {/* Filter by neighborhood when in properties view */}
      {viewMode === "properties" && (
        <div className="absolute top-4 right-4 z-20">
          <select
            value={selectedNeighborhood || ""}
            onChange={(e) => setSelectedNeighborhood(e.target.value || null)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-neutral-700 border-0 shadow-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Areas</option>
            {neighborhoods.map((n) => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Map Container */}
      <div className="relative aspect-[16/10] md:aspect-[16/9]">
        {/* Stylized Map Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Water */}
          <rect x="0" y="0" width="100" height="100" fill="#e0f2fe" />

          {/* Waves pattern */}
          <g opacity="0.3">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d={`M -10 ${15 + i * 10} Q 25 ${10 + i * 10} 50 ${15 + i * 10} T 110 ${15 + i * 10}`}
                stroke="#0ea5e9"
                strokeWidth="0.3"
                fill="none"
              />
            ))}
          </g>

          {/* Land mass - Port Aransas shape */}
          <path
            d="M 15 30 Q 20 25 30 28 L 45 35 Q 60 30 75 32 L 85 38 Q 88 45 85 55 L 80 65 Q 70 72 55 70 L 40 68 Q 25 70 18 62 L 15 50 Q 12 40 15 30 Z"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="0.5"
          />

          {/* Beach area */}
          <path
            d="M 75 32 Q 82 35 85 38 Q 88 45 85 55 L 80 60 Q 78 50 76 40 Z"
            fill="#fde68a"
            opacity="0.6"
          />

          {/* Roads */}
          <g stroke="#94a3b8" strokeWidth="0.4" fill="none" opacity="0.5">
            <path d="M 20 45 L 80 45" />
            <path d="M 40 30 L 40 70" />
            <path d="M 60 32 L 60 68" />
          </g>
        </svg>

        {/* Neighborhood Markers */}
        {viewMode === "neighborhoods" && (
          <div className="absolute inset-0">
            {neighborhoods.map((hood) => (
              <motion.button
                key={hood.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: neighborhoods.indexOf(hood) * 0.1, type: "spring" }}
                onClick={() => {
                  setSelectedNeighborhood(hood.id)
                  setViewMode("properties")
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${hood.x}%`, top: `${hood.y}%` }}
              >
                {/* Pulse animation */}
                <span className="absolute inset-0 -m-2 rounded-full bg-primary-400 animate-ping opacity-20" />

                {/* Main marker */}
                <div className="relative w-10 h-10 rounded-full bg-primary-600 shadow-lg flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform">
                  {hood.properties}
                </div>

                {/* Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="font-medium text-neutral-900 text-sm">{hood.name}</div>
                  <div className="text-xs text-neutral-500">Avg: {formatPrice(hood.avgPrice)}</div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Property Markers */}
        {viewMode === "properties" && (
          <div className="absolute inset-0">
            <AnimatePresence>
              {filteredProperties.map((property, index) => (
                <motion.button
                  key={property.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  onClick={() => onPropertySelect?.(property.id)}
                  onMouseEnter={() => setHoveredProperty(property.id)}
                  onMouseLeave={() => setHoveredProperty(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${property.x}%`, top: `${property.y}%` }}
                >
                  {/* Property pin */}
                  <div
                    className={cn(
                      "relative px-2 py-1 rounded-full shadow-lg text-xs font-bold transition-all",
                      hoveredProperty === property.id
                        ? "bg-accent-500 text-white scale-110 z-10"
                        : "bg-white text-neutral-900"
                    )}
                  >
                    {formatPrice(property.price)}
                    {/* Pin tail */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                        hoveredProperty === property.id ? "border-t-accent-500" : "border-t-white"
                      )}
                    />
                  </div>

                  {/* Property card on hover */}
                  <AnimatePresence>
                    {hoveredProperty === property.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white rounded-xl shadow-xl p-4 w-56 pointer-events-none z-20"
                      >
                        <div className="font-medium text-neutral-900">{property.name}</div>
                        <div className="text-lg font-bold text-primary-600 mt-1">
                          {formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-neutral-500 mt-1">
                          {property.beds} bed • {property.baths} bath
                        </div>
                        <div className="text-xs text-primary-600 mt-2 font-medium">
                          Click to view details →
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-4 py-3">
        <div className="text-xs font-medium text-neutral-500 mb-2">
          {viewMode === "neighborhoods" ? "Click a neighborhood to explore" : `${filteredProperties.length} properties`}
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-600">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-primary-600" />
            Active Listings
          </span>
        </div>
      </div>
    </div>
  )
}
