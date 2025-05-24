import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Users, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import CommitteeCard from "@/components/committee-card"
import FeaturedPost from "@/components/featured-post"
import ScrollReveal from "@/components/animations/scroll-reveal"
import AnimatedText from "@/components/animations/animated-text"
import Parallax from "@/components/animations/parallax"
import FloatingElement from "@/components/animations/floating-element"
import BackgroundParticles from "@/components/animations/background-particles"
import Globe from "@/components/animations/globe"

export default function Home() {
  // Sample data - in a real app, this would come from a CMS or database
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
        <BackgroundParticles />
        <div className="absolute inset-0 z-0">
          <Parallax speed={-0.2}>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="MUN Conference"
              fill
              className="object-cover brightness-50"
              priority
            />
          </Parallax>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <AnimatedText text="Global Model United Nations 2025" className="text-4xl md:text-6xl font-bold mb-4" />
          <ScrollReveal delay={0.5}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join delegates from around the world to debate, negotiate, and solve global challenges
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="relative overflow-hidden group">
                <Link href="/register">
                  <span className="relative z-10">Register Now</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300"
                asChild
              >
                <Link href="/committees">View Committees</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <FloatingElement className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" yOffset={15}>
          <div className="animate-bounce text-white flex flex-col items-center">
            <span className="sr-only">Scroll down</span>
            <ChevronRight className="h-8 w-8 rotate-90" />
          </div>
        </FloatingElement>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-10 opacity-10 z-0" yOffset={20} duration={5}>
          <div className="text-slate-400 text-[200px] font-bold">MUN</div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-10 opacity-10 z-0" yOffset={20} duration={6} delay={1}>
          <div className="text-slate-400 text-[200px] font-bold">2025</div>
        </FloatingElement>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <AnimatedText text="Join Us This Summer" className="text-3xl font-bold mb-6" />
              <p className="text-slate-600 mb-8">
                Our annual Model United Nations conference brings together students from around the world to discuss
                pressing global issues, develop solutions through diplomacy, and build lasting connections.
              </p>
              <div className="space-y-4">
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-center gap-3 group">
                    <Calendar className="h-6 w-6 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      July 15-18, 2025
                    </span>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.3}>
                  <div className="flex items-center gap-3 group">
                    <MapPin className="h-6 w-6 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      International Convention Center, New York
                    </span>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.4}>
                  <div className="flex items-center gap-3 group">
                    <Users className="h-6 w-6 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Expected 500+ delegates from 50+ countries
                    </span>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="right" delay={0.5}>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-slate-800 font-medium hover:text-slate-600 group"
                  >
                    Learn more about our conference
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </ScrollReveal>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6 text-center">Conference Countdown</h3>
                <CountdownTimer targetDate={eventDate} />
                <div className="mt-8">
                  <Globe />
                </div>
                <div className="mt-8 text-center">
                  <Button asChild className="relative overflow-hidden group">
                    <Link href="/register">
                      <span className="relative z-10">Secure Your Spot</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText text="Our Committees" className="text-3xl font-bold mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our diverse range of committees designed for delegates of all experience levels
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <ScrollReveal key={committee.id} delay={index * 0.2}>
                <CommitteeCard committee={committee} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.6}>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild className="group">
                <Link href="/committees" className="inline-flex items-center">
                  View All Committees
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedText text="Latest Updates" className="text-3xl font-bold mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                Stay informed with the latest news and announcements about our conference
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.2} direction={index % 2 === 0 ? "right" : "left"}>
                <FeaturedPost post={post} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild className="group">
                <Link href="/blog" className="inline-flex items-center">
                  Visit Our Blog
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white relative overflow-hidden">
        <Parallax speed={0.1} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Background"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </Parallax>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <AnimatedText text="Ready to Join the Diplomatic Community?" className="text-3xl font-bold mb-4" />
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Register today to secure your spot at the Global Model United Nations 2025
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100 transition-all duration-300 relative overflow-hidden group"
                asChild
              >
                <Link href="/register">
                  <span className="relative z-10">Register Now</span>
                  <span className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
