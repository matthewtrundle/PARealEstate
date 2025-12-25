import { Metadata } from "next"
import { notFound } from "next/navigation"
import { LifestyleTemplate } from "@/components/seo/templates"
import { getLifestyleScenarioBySlug, generateLifestyleStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    scenario: string
  }>
}

export async function generateStaticParams() {
  return generateLifestyleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scenario } = await params
  const scenarioData = getLifestyleScenarioBySlug(scenario)

  if (!scenarioData) {
    return {
      title: "Not Found | Port Aransas",
    }
  }

  return {
    title: `${scenarioData.title} | Living in Port Aransas`,
    description: scenarioData.description,
    keywords: scenarioData.seoKeywords,
    openGraph: {
      title: scenarioData.headline,
      description: scenarioData.description,
      type: "article",
    },
  }
}

export default async function LifestylePage({ params }: PageProps) {
  const { scenario } = await params
  const scenarioData = getLifestyleScenarioBySlug(scenario)

  if (!scenarioData) {
    notFound()
  }

  return <LifestyleTemplate scenario={scenarioData} />
}
