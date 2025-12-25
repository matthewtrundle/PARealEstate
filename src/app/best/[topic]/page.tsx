import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BestOfTemplate } from "@/components/seo/templates"
import { getBestOfBySlug, generateBestOfStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    topic: string
  }>
}

export async function generateStaticParams() {
  return generateBestOfStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params
  const list = getBestOfBySlug(topic)

  if (!list) {
    return {
      title: "Not Found | Port Aransas",
    }
  }

  return {
    title: `${list.title} | Port Aransas Guide`,
    description: list.description,
    keywords: list.seoKeywords,
    openGraph: {
      title: list.title,
      description: list.description,
      type: "article",
    },
  }
}

export default async function BestOfPage({ params }: PageProps) {
  const { topic } = await params
  const list = getBestOfBySlug(topic)

  if (!list) {
    notFound()
  }

  return <BestOfTemplate list={list} />
}
