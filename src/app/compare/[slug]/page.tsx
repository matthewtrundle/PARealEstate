import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CompareTemplate } from "@/components/seo/templates"
import { getComparisonBySlug, generateComparisonStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return generateComparisonStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const comparison = getComparisonBySlug(slug)

  if (!comparison) {
    return {
      title: "Comparison Not Found | Port Aransas",
    }
  }

  return {
    title: `${comparison.title} | Port Aransas Guide`,
    description: comparison.description,
    keywords: comparison.seoKeywords,
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: "article",
    },
  }
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params
  const comparison = getComparisonBySlug(slug)

  if (!comparison) {
    notFound()
  }

  return <CompareTemplate comparison={comparison} />
}
