import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Blog | Global Model United Nations 2025",
  description: "Latest news and updates about the Global Model United Nations Conference 2025",
}

export default function BlogPage() {
  // Sample data - in a real app, this would come from a CMS or database
  const featuredPost = {
    id: 1,
    title: "Registration Now Open for GMUN 2025",
    excerpt:
      "We are excited to announce that registration for the Global Model United Nations 2025 is now open. Early bird registration is available until January 31, 2025.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "May 10, 2025",
    author: "GMUN Secretariat",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "registration-open",
  }

  const posts = [
    {
      id: 2,
      title: "Announcing Our Keynote Speaker",
      excerpt: "We're excited to welcome Ambassador Sarah Johnson as our keynote speaker for GMUN 2025.",
      date: "May 5, 2025",
      author: "GMUN Secretariat",
      image: "/placeholder.svg?height=400&width=600",
      slug: "keynote-speaker",
    },
    {
      id: 3,
      title: "Committee Topics Announced",
      excerpt: "Explore the topics that will be discussed in each committee at GMUN 2025.",
      date: "April 28, 2025",
      author: "GMUN Secretariat",
      image: "/placeholder.svg?height=400&width=600",
      slug: "committee-topics",
    },
    {
      id: 4,
      title: "Venue and Accommodation Information",
      excerpt: "Details about the conference venue and recommended accommodation options for delegates.",
      date: "April 15, 2025",
      author: "GMUN Secretariat",
      image: "/placeholder.svg?height=400&width=600",
      slug: "venue-accommodation",
    },
    {
      id: 5,
      title: "Preparing for Your First MUN Conference",
      excerpt: "Tips and advice for first-time delegates attending a Model UN conference.",
      date: "April 8, 2025",
      author: "GMUN Secretariat",
      image: "/placeholder.svg?height=400&width=600",
      slug: "first-time-delegates",
    },
    {
      id: 6,
      title: "Scholarship Applications Now Open",
      excerpt: "Apply for financial assistance to attend GMUN 2025. Deadline is June 30, 2025.",
      date: "April 1, 2025",
      author: "GMUN Secretariat",
      image: "/placeholder.svg?height=400&width=600",
      slug: "scholarship-applications",
    },
  ]

  const categories = [
    { name: "Announcements", count: 8 },
    { name: "Preparation", count: 5 },
    { name: "Tips & Advice", count: 7 },
    { name: "Past Conferences", count: 4 },
    { name: "Interviews", count: 3 },
  ]

  return (
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest news and announcements about GMUN 2025
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center text-sm text-slate-500 mb-1">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-slate-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Search */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Search blog posts..." />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex justify-between items-center text-slate-700 hover:text-primary"
                      >
                        <span>{category.name}</span>
                        <span className="bg-slate-100 px-2 py-1 rounded-full text-xs">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Updates</CardTitle>
                <CardDescription>
                  Get the latest news and updates about GMUN 2025 delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
