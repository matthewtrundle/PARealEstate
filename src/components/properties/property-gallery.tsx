"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface PropertyGalleryProps {
  images: {
    hero: string
    gallery: GalleryImage[]
  }
  propertyName: string
}

export function PropertyGallery({ images, propertyName }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const allImages = [{ src: images.hero, alt: propertyName }, ...images.gallery]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-100 relative">
        <Image
          src={allImages[activeIndex].src}
          alt={allImages[activeIndex].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority={activeIndex === 0}
        />

        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-white transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-white transition-colors shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {activeIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all relative",
                index === activeIndex
                  ? "ring-2 ring-primary-500 ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
