import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, ChevronRight, ArrowRight } from "lucide-react"
import WhyJoinSection from "@/components/why-join-section"

export default function Home() {
  // Sample data
  const eventDate = new Date("2025-07-15")
  const committees = [
    {
      id: 1,
      name: "United Nations Security Council",
      topic: "Addressing Conflicts in the Middle East",
      image: "/placeholder.svg?height=200&width=300",
      level: "Advanced",
    },
    {
      id: 2,
      name: "World Health Organization",
      topic: "Global Health Crisis Management",
      image: "/placeholder.svg?height=200&width=300",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Human Rights Council",
      topic: "Rights of Indigenous Peoples",
      image: "/placeholder.svg?height=200&width=300",
      level: "Beginner",
    },
  ]

  const featuredPosts = [
    {
      id: 1,
      title: "Registration Now Open for MUN 2025",
      excerpt: "Early bird registration is now available for delegates and advisors.",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=200&width=300",
      slug: "registration-open",
    },
    {
      id: 2,
      title: "Announcing Our Keynote Speaker",
      excerpt: "We're excited to welcome Ambassador Sarah Johnson as our keynote speaker.",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=200&width=300",
      slug: "keynote-speaker",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="MUN Conference"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Global Model United Nations 2025</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join delegates from around the world to debate, negotiate, and solve global challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="/committees"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              View Committees
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <WhyJoinSection />

      {/* Event Details Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Us This Summer</h2>
              <p className="text-slate-600 mb-8">
                Our annual Model United Nations conference brings together students from around the world to discuss
                pressing global issues, develop solutions through diplomacy, and build lasting connections.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <Calendar className="h-6 w-6 text-slate-700" />
                  <span>July 15-18, 2025</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <MapPin className="h-6 w-6 text-slate-700" />
                  <span>International Convention Center, New York</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Users className="h-6 w-6 text-slate-700" />
                  <span>Expected 500+ delegates from 50+ countries</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-slate-800 font-medium hover:text-slate-600"
                >
                  Learn more about our conference
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Conference Countdown</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="text-3xl font-bold text-slate-800">
                        {Math.floor((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-slate-600">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="text-3xl font-bold text-slate-800">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-slate-600">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="text-3xl font-bold text-slate-800">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60)) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-slate-600">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="text-3xl font-bold text-slate-800">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / 1000) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-slate-600">Seconds</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-base font-medium text-white hover:bg-slate-800 transition-colors"
                  >
                    Secure Your Spot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Committees</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our diverse range of committees designed for delegates of all experience levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={committee.image || "/placeholder.svg"}
                    alt={committee.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{committee.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        committee.level === "Advanced"
                          ? "bg-purple-100 text-purple-800"
                          : committee.level === "Intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {committee.level}
                    </span>
                  </div>
                  <p className="text-slate-600">{committee.topic}</p>
                  <div className="mt-4">
                    <Link
                      href={`/committees/${committee.id}`}
                      className="text-sm font-medium text-slate-900 hover:underline"
                    >
                      Learn more about this committee
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/committees"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              View All Committees
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Stay informed with the latest news and announcements about our conference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-slate-900 hover:underline">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Diplomatic Community?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Register today to secure your spot at the Global Model United Nations 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-slate-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
