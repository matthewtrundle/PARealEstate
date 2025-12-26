import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs } from "@/components/seo"
import { LeadFormSection } from "@/components/sections"
import blogData from "@/data/blog-posts.json"
import { SITE_CONFIG } from "@/lib/constants"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function getPost(slug: string) {
  return blogData.posts.find((p) => p.slug === slug)
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  }

  // Related posts (same category, excluding current)
  const relatedPosts = blogData.posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Section className="bg-white pt-32 pb-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <article className="max-w-3xl mx-auto mt-8">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-neutral-500 text-sm">{post.readTime} min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-neutral-200">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">PA</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{post.author}</div>
                  <div className="text-sm text-neutral-500">{formatDate(post.publishedAt)}</div>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  )
                }
                return <p key={index}>{paragraph}</p>
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-2">Found this helpful?</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Share this article with someone who&apos;s considering Port Aransas real estate.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${SITE_CONFIG.url}/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm hover:border-primary-300 transition-colors"
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_CONFIG.url}/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm hover:border-primary-300 transition-colors"
                  >
                    Share on Facebook
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-4 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <LeadFormSection
        variant="dark"
        title="Ready to Find Your Port Aransas Property?"
        subtitle="Let our experts help you navigate the coastal real estate market."
      />
    </>
  )
}
