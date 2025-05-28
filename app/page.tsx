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
      title: "Registration Now Open for ASBMUN",
      excerpt: "Early bird registration is now available for delegates and chairs.",
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
      {/* Hero Section with ASBMUN Logo */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full opacity-30 animate-pulse-custom"></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/20 rounded-full opacity-15 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/20 rounded-full opacity-25 animate-breathe"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* ASBMUN Logo - Primary Visual Element */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse-custom"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-primary/20 hover:scale-105 transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASBMUN%20Logo%20Final.jpg-0zwsydTCTVrQV4GVwCxKZf7LvNHT2b.jpeg"
                  alt="ASBMUN - The Asian School Model United Nations"
                  width={400}
                  height={400}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-slide-in-up">
              ASBMUN
            </h1>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-primary animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              The Asian School Model United Nations
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join delegates from around the world to debate, negotiate, and solve global challenges
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/register"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent/90 px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="/committees"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-primary bg-background/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-foreground hover:bg-background hover:border-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View Committees
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Conference Details Cards */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-background/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Conference Dates</h3>
              <p className="text-primary">July 15-18, 2025</p>
            </div>
            <div className="bg-background/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-primary">The Asian School, New Delhi</p>
            </div>
            <div className="bg-background/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Expected Attendance</h3>
              <p className="text-primary">500+ delegates from 50+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <WhyJoinSection />

      {/* Event Details Section */}
      <section className="py-16 bg-card text-card-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Us This Summer</h2>
              <p className="text-card-foreground/80 mb-8">
                ASBMUN brings together students from around the world to discuss pressing global issues, develop
                solutions through diplomacy, and build lasting connections at The Asian School.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span>July 15-18, 2025</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span>The Asian School, New Delhi</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Users className="h-6 w-6 text-accent" />
                  <span>Expected 500+ delegates from 50+ countries</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center font-medium text-accent hover:text-accent/90 transition-colors"
                >
                  Learn more about ASBMUN
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-background/50 p-8 rounded-xl shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Conference Countdown</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-3xl font-bold text-foreground">
                        {Math.floor((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-foreground/70">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-3xl font-bold text-foreground">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-foreground/70">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-3xl font-bold text-foreground">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60)) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-foreground/70">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-3xl font-bold text-foreground">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / 1000) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-foreground/70">Seconds</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
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
      <section className="py-16 relative overflow-hidden bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Committees</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our diverse range of committees designed for delegates of all experience levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-primary/20"
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
                    <h3 className="text-xl font-bold text-card-foreground">{committee.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        committee.level === "Advanced"
                          ? "bg-accent/20 text-accent"
                          : committee.level === "Intermediate"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary-foreground" // Adjusted for Beginner
                      }`}
                    >
                      {committee.level}
                    </span>
                  </div>
                  <p className="text-card-foreground/70">{committee.topic}</p>
                  <div className="mt-4">
                    <Link
                      href={`/committees/${committee.id}`}
                      className="text-sm font-medium text-accent hover:underline"
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
              className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-base font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              View All Committees
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-card text-card-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-card-foreground/70 max-w-2xl mx-auto mb-8">
              Stay informed with the latest news and announcements about ASBMUN
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center text-sm text-primary mb-2">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{post.title}</h3>
                    <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-accent hover:underline"
                    >
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
              className="inline-flex items-center justify-center rounded-md border border-accent bg-transparent px-6 py-3 text-base font-medium text-accent hover:bg-accent/10 transition-colors"
            >
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Diplomatic Community?</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">Register today to secure your spot at ASBMUN</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
