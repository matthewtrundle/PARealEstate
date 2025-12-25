import { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventTemplate } from "@/components/seo/templates"
import { getEventBySlug, generateEventStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return generateEventStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {
      title: "Event Not Found | Port Aransas",
    }
  }

  return {
    title: `${event.name} | Port Aransas Events`,
    description: event.description,
    keywords: event.seoKeywords,
    openGraph: {
      title: event.name,
      description: event.description,
      type: "article",
    },
  }
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return <EventTemplate event={event} />
}
