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
      {/* Hero Section with ASBMUN Logo - 60% Black Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-asbmun-black">
        {/* Animated Background Elements - 30% Mocha, 10% Orange distribution */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mocha elements (30% of visual space) */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-asbmun-mocha rounded-full opacity-15 animate-float"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-asbmun-mocha rounded-full opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 right-10 w-36 h-36 bg-asbmun-mocha rounded-full opacity-12 animate-breathe"></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-asbmun-mocha rounded-full opacity-18 animate-float" style={{ animationDelay: "1s" }}></div>
          
          {/* Orange accent elements (10% of visual space) */}
          <div className="absolute top-40 right-20 w-20 h-20 bg-asbmun-orange rounded-full opacity-40 animate-pulse-custom"></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-asbmun-orange rounded-full opacity-35 animate-breathe" style={{ animationDelay: "0.5s" }}></div>
          
          {/* Subtle gradient overlay to enhance depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-asbmun-black/95 via-asbmun-black/90 to-asbmun-black/95"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* ASBMUN Logo - Primary Visual Element with Enhanced Color Integration */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Outer glow effect using mocha and orange (30% + 10%) */}
              <div className="absolute -inset-6 bg-gradient-to-r from-asbmun-mocha/30 via-asbmun-orange/40 to-asbmun-mocha/30 rounded-full opacity-25 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse-custom"></div>
              
              {/* Logo container with black background (60%) and mocha border (30%) */}
              <div className="relative bg-asbmun-black/90 backdrop-blur-sm rounded-full p-8 shadow-2xl border-2 border-asbmun-mocha/30 hover:scale-105 hover:border-asbmun-orange/50 transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASBMUN%20Logo%20Final.jpg-0zwsydTCTVrQV4GVwCxKZf7LvNHT2b.jpeg"
                  alt="ASBMUN - The Asian School Model United Nations"
                  width={400}
                  height={400}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float drop-shadow-2xl"
                  priority
                />
                
                {/* Orange accent ring (10% accent) */}
                <div className="absolute inset-0 rounded-full border border-asbmun-orange/20 animate-pulse-custom"></div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-asbmun-mocha to-asbmun-orange bg-clip-text text-transparent animate-slide-in-up">
              ASBMUN
            </h1>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-asbmun-mocha animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              The Asian School Model United Nations
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-white max-w-3xl mx-auto leading-relaxed animate-slide-in-up"
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
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-asbmun-orange to-asbmun-orange/90 px-8 py-4 text-lg font-semibold text-asbmun-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-asbmun-orange/90 to-asbmun-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="/committees"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-asbmun-mocha bg-asbmun-black/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-asbmun-black hover:border-asbmun-orange transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View Committees
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Conference Details Cards - Following 60-30-10 Color Scheme */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Card 1 - Black background (60%) with mocha accents (30%) */}
            <div className="bg-asbmun-black/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-asbmun-mocha/30 hover:shadow-xl hover:border-asbmun-orange/50 transition-all duration-300 hover:-translate-y-2 group">
              <Calendar className="w-8 h-8 text-asbmun-orange mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Conference Dates</h3>
              <p className="text-asbmun-mocha group-hover:text-asbmun-orange transition-colors duration-300">July 15-18, 2025</p>
            </div>
            
            {/* Card 2 - Mocha background (30%) with black text */}
            <div className="bg-asbmun-mocha/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-asbmun-black/30 hover:shadow-xl hover:border-asbmun-orange/50 transition-all duration-300 hover:-translate-y-2 group">
              <MapPin className="w-8 h-8 text-asbmun-orange mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-asbmun-black mb-2">Location</h3>
              <p className="text-asbmun-black/80 group-hover:text-asbmun-black transition-colors duration-300">The Asian School, New Delhi</p>
            </div>
            
            {/* Card 3 - Black background (60%) with orange accents (10%) */}
            <div className="bg-asbmun-black/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-asbmun-mocha/30 hover:shadow-xl hover:border-asbmun-orange/50 transition-all duration-300 hover:-translate-y-2 group">
              <Users className="w-8 h-8 text-asbmun-orange mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Expected Attendance</h3>
              <p className="text-asbmun-mocha group-hover:text-asbmun-orange transition-colors duration-300">500+ delegates from 50+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <WhyJoinSection />

      {/* Event Details Section - Mocha Background (30%) */}
      <section className="py-16 bg-asbmun-mocha/20 border-t-2 border-asbmun-black/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-asbmun-black/90 rounded-2xl p-8 shadow-xl border border-asbmun-mocha/30">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Us This Summer</h2>
              <p className="text-asbmun-mocha mb-8 leading-relaxed">
                ASBMUN brings together students from around the world to discuss pressing global issues, develop
                solutions through diplomacy, and build lasting connections at The Asian School.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group hover:bg-asbmun-mocha/10 p-3 rounded-lg transition-all duration-300">
                  <Calendar className="h-6 w-6 text-asbmun-orange group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-asbmun-orange transition-colors duration-300">July 15-18, 2025</span>
                </div>
                <div className="flex items-center gap-3 group hover:bg-asbmun-mocha/10 p-3 rounded-lg transition-all duration-300">
                  <MapPin className="h-6 w-6 text-asbmun-orange group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-asbmun-orange transition-colors duration-300">The Asian School, New Delhi</span>
                </div>
                <div className="flex items-center gap-3 group hover:bg-asbmun-mocha/10 p-3 rounded-lg transition-all duration-300">
                  <Users className="h-6 w-6 text-asbmun-orange group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-asbmun-orange transition-colors duration-300">Expected 500+ delegates from 50+ countries</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-asbmun-mocha font-medium hover:text-asbmun-orange transition-colors duration-300 group"
                >
                  Learn more about ASBMUN
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div>
              {/* Countdown Card - Mocha Background (30%) with Black Accents */}
              <div className="bg-asbmun-mocha/90 p-8 rounded-2xl shadow-xl border-2 border-asbmun-black/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-asbmun-black">Conference Countdown</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-asbmun-black/90 rounded-lg p-3 border border-asbmun-orange/30 hover:border-asbmun-orange transition-colors duration-300">
                      <div className="text-3xl font-bold text-asbmun-orange">
                        {Math.floor((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-asbmun-black font-medium">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-asbmun-black/90 rounded-lg p-3 border border-asbmun-orange/30 hover:border-asbmun-orange transition-colors duration-300">
                      <div className="text-3xl font-bold text-asbmun-orange">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-asbmun-black font-medium">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-asbmun-black/90 rounded-lg p-3 border border-asbmun-orange/30 hover:border-asbmun-orange transition-colors duration-300">
                      <div className="text-3xl font-bold text-asbmun-orange">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / (1000 * 60)) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-asbmun-black font-medium">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-asbmun-black/90 rounded-lg p-3 border border-asbmun-orange/30 hover:border-asbmun-orange transition-colors duration-300">
                      <div className="text-3xl font-bold text-asbmun-orange">
                        {Math.floor(((eventDate.getTime() - new Date().getTime()) / 1000) % 60)}
                      </div>
                    </div>
                    <div className="text-sm mt-2 text-asbmun-black font-medium">Seconds</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-xl bg-asbmun-orange px-6 py-3 text-base font-semibold text-asbmun-black hover:bg-asbmun-orange/90 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Secure Your Spot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section - Black Background (60%) */}
      <section className="py-16 relative overflow-hidden bg-asbmun-black border-t-2 border-asbmun-mocha/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Committees</h2>
            <p className="text-asbmun-mocha max-w-2xl mx-auto">
              Explore our diverse range of committees designed for delegates of all experience levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <div
                key={committee.id}
                className={`${
                  index === 1 
                    ? "bg-asbmun-mocha/90" // Middle card - Mocha background (30%)
                    : index === 2
                      ? "bg-asbmun-orange/90" // Last card - Orange background (10%)
                      : "bg-asbmun-black/90" // First card - Black background (60%)
                } rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-asbmun-orange/40 hover:border-asbmun-orange group`}
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
                    <h3 className={`text-xl font-bold ${
                      index === 1 ? "text-asbmun-black" : index === 2 ? "text-asbmun-black" : "text-white"
                    }`}>
                      {committee.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        committee.level === "Advanced"
                          ? "bg-asbmun-orange text-asbmun-black border-asbmun-black"
                          : committee.level === "Intermediate"
                            ? "bg-asbmun-mocha text-white border-asbmun-orange"
                            : "bg-asbmun-black text-asbmun-orange border-asbmun-orange"
                      }`}
                    >
                      {committee.level}
                    </span>
                  </div>
                  <p className={`${
                    index === 1 ? "text-asbmun-black/80" : index === 2 ? "text-asbmun-black/80" : "text-asbmun-mocha"
                  }`}>
                    {committee.topic}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/committees/${committee.id}`}
                      className={`text-sm font-semibold transition-colors duration-300 group-hover:underline ${
                        index === 1 ? "text-asbmun-orange hover:text-asbmun-orange/80" : 
                        index === 2 ? "text-asbmun-black hover:text-asbmun-black/80" :
                        "text-asbmun-mocha hover:text-asbmun-orange"
                      }`}
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
              className="inline-flex items-center justify-center rounded-xl border-2 border-asbmun-mocha bg-asbmun-mocha/90 px-8 py-4 text-base font-semibold text-asbmun-black hover:bg-asbmun-orange hover:border-asbmun-orange hover:scale-105 transition-all duration-300 shadow-lg group"
            >
              View All Committees
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section - Mocha Background (30%) */}
      <section className="py-16 bg-asbmun-mocha/30 border-t-2 border-asbmun-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-asbmun-black">Latest Updates</h2>
            <p className="text-asbmun-black/80 max-w-2xl mx-auto mb-8">
              Stay informed with the latest news and announcements about ASBMUN
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`${
                  index === 0 
                    ? "bg-asbmun-black/90 text-white" // First card - Black background (60%)
                    : "bg-asbmun-mocha/90 text-white" // Second card - Mocha background (30%)
                } rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-asbmun-orange/40 hover:border-asbmun-orange group`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className={`flex items-center text-sm mb-2 ${
                      index === 0 ? "text-asbmun-mocha" : "text-asbmun-orange"
                    }`}>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      index === 0 ? "text-white" : "text-white"
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`mb-4 ${
                      index === 0 ? "text-asbmun-mocha" : "text-white/90"
                    }`}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-asbmun-orange hover:text-asbmun-orange/80 transition-colors duration-300 group-hover:underline"
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
              className="inline-flex items-center justify-center rounded-xl border-2 border-asbmun-black bg-asbmun-black/90 px-8 py-4 text-base font-semibold text-white hover:bg-asbmun-orange hover:border-asbmun-orange hover:text-asbmun-black hover:scale-105 transition-all duration-300 shadow-lg group"
            >
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Black Background (60%) with Orange Accents (10%) */}
      <section className="py-20 bg-asbmun-black text-white relative overflow-hidden border-t-2 border-asbmun-mocha/30">
        {/* Enhanced background with mocha and orange elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-asbmun-mocha rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-asbmun-orange rounded-full opacity-20 animate-pulse-custom"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-asbmun-mocha rounded-full opacity-8 animate-breathe"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-asbmun-black via-asbmun-black/95 to-asbmun-black/90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-asbmun-mocha to-asbmun-orange bg-clip-text text-transparent">
            Ready to Join the Diplomatic Community?
          </h2>
          <p className="text-xl text-asbmun-mocha max-w-3xl mx-auto mb-10 leading-relaxed">
            Register today to secure your spot at ASBMUN and become part of the next generation of global leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-asbmun-orange px-10 py-4 text-lg font-semibold text-asbmun-black hover:bg-asbmun-orange/90 hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-asbmun-mocha bg-transparent px-10 py-4 text-lg font-semibold text-white hover:bg-asbmun-mocha/20 hover:border-asbmun-orange hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
