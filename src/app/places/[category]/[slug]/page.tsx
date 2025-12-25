import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PlaceTemplate } from "@/components/seo/templates"
import {
  getPlaceByCategoryAndSlug,
  generatePlaceStaticParams,
  getCategoryLabel,
} from "@/data"

interface PageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return generatePlaceStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params
  const place = getPlaceByCategoryAndSlug(category, slug)

  if (!place) {
    return {
      title: "Place Not Found | Port Aransas",
    }
  }

  const categoryLabel = getCategoryLabel(place.category)

  return {
    title: `${place.name} | ${categoryLabel} in Port Aransas`,
    description: place.description,
    keywords: place.seoKeywords,
    openGraph: {
      title: `${place.name} | Port Aransas ${categoryLabel}`,
      description: place.description,
      type: "website",
    },
  }
}

export default async function PlacePage({ params }: PageProps) {
  const { category, slug } = await params
  const place = getPlaceByCategoryAndSlug(category, slug)

  if (!place) {
    notFound()
  }

  return <PlaceTemplate place={place} />
}
