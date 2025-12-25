import { Metadata } from "next"
import { notFound } from "next/navigation"
import { MonthlyTemplate } from "@/components/seo/templates"
import { getMonthlyGuideBySlug, generateMonthlyStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    month: string
  }>
}

export async function generateStaticParams() {
  return generateMonthlyStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { month } = await params
  const guide = getMonthlyGuideBySlug(month)

  if (!guide) {
    return {
      title: "Guide Not Found | Port Aransas",
    }
  }

  return {
    title: `${guide.title} | Port Aransas Monthly Guide`,
    description: guide.description,
    keywords: guide.seoKeywords,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
  }
}

export default async function MonthlyGuidePage({ params }: PageProps) {
  const { month } = await params
  const guide = getMonthlyGuideBySlug(month)

  if (!guide) {
    notFound()
  }

  return <MonthlyTemplate guide={guide} />
}
