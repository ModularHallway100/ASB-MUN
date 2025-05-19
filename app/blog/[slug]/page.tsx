import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, User, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollProgress from "@/components/animations/scroll-progress"
import ScrollReveal from "@/components/animations/scroll-reveal"
import AnimatedText from "@/components/animations/animated-text"

export const metadata: Metadata = {
  title: "Blog Post | Global Model United Nations 2025",
  description: "Read the latest updates about the Global Model United Nations Conference 2025",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the post data based on the slug
  const post = {
    title: "Registration Now Open for GMUN 2025",
    excerpt:
      "We are excited to announce that registration for the Global Model United Nations 2025 is now open. Early bird registration is available until January 31, 2025.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <h2>Early Bird Registration</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <h2>Registration Fees</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <h2>How to Register</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
      <p>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.</p>
    `,
    date: "May 10, 2025",
    author: "GMUN Secretariat",
    image: "/placeholder.svg?height=600&width=1200",
    slug: params.slug,
  }

  return (
    <main className="flex-1 py-12 md:py-24">
      <ScrollProgress />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link href="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </ScrollReveal>

          <div className="mb-8">
            <ScrollReveal>
              <AnimatedText text={post.title} className="text-3xl md:text-4xl font-bold mb-4" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center text-sm text-slate-500 gap-4 mb-6">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 flex justify-between items-center border-t border-b border-slate-200 py-6">
              <Button variant="outline" asChild>
                <Link href="/blog">Back to Blog</Link>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
