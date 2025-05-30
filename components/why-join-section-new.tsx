"use client"

import { useEffect, useRef, useState } from "react"

export default function WhyJoinSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-asbmun-black via-asbmun-black to-asbmun-black/90 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-asbmun-mocha rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-asbmun-orange rounded-full opacity-10 animate-pulse-custom"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-asbmun-mocha rounded-full opacity-10 animate-breathe"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-asbmun-orange rounded-full opacity-10 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-pulse-custom">WHY JOIN ASBMUN?</h2>
          <p className="text-xl text-asbmun-mocha max-w-4xl mx-auto">
            Transform your future through diplomacy, leadership, and global engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Leadership Skills Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl hover-lift animate-float relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <div className="grid grid-cols-6 gap-3 mb-8">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    i === 11 ? "bg-asbmun-orange animate-glow" : "bg-asbmun-mocha/30"
                  } animate-pulse-custom`}
                />
              ))}
            </div>
            <h3 className="text-3xl font-bold text-asbmun-black leading-tight">
              DEVELOP
              <br />
              LEADERSHIP
              <br />
              SKILLS
            </h3>
          </div>

          {/* Public Speaking Card */}
          <div className={`bg-gradient-to-br from-asbmun-mocha to-asbmun-mocha/80 rounded-3xl p-8 shadow-2xl hover-lift animate-float text-white relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <h3 className="text-3xl font-bold mb-8 leading-tight">
              ENHANCE
              <br />
              PUBLIC
              <br />
              SPEAKING
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(42)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-2 bg-white rounded-full opacity-60 animate-breathe"
                />
              ))}
            </div>
          </div>

          {/* Debate Skills Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl hover-lift animate-float relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <h3 className="text-3xl font-bold text-asbmun-black mb-8 leading-tight">
              BUILD
              <br />
              DEBATE
              <br />
              SKILLS
            </h3>
            <div className="flex justify-center items-end h-32">
              <div className="relative">
                <div className="flex space-x-4">
                  <div className="relative">
                    <div className="w-16 h-20 bg-gradient-to-b from-asbmun-orange to-asbmun-orange/80 rounded-t-full"></div>
                    <div className="w-4 h-4 bg-asbmun-orange/70 rounded-full absolute top-0 left-6 animate-breathe"></div>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-20 bg-gradient-to-b from-asbmun-mocha to-asbmun-mocha/80 rounded-t-full"></div>
                    <div className="w-4 h-4 bg-asbmun-mocha/70 rounded-full absolute top-0 left-6 animate-breathe"></div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-4 w-6 h-4 bg-white rounded-full opacity-80 animate-float"></div>
                <div className="absolute -top-6 right-2 w-4 h-3 bg-white rounded-full opacity-80 animate-float"></div>
              </div>
            </div>
          </div>

          {/* Global Issues Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl hover-lift animate-float relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <h3 className="text-3xl font-bold text-asbmun-black mb-6 leading-tight">
              LEARN
              <br />
              ABOUT
              <br />
              GLOBAL
              <br />
              ISSUES
            </h3>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-asbmun-mocha/70 via-asbmun-mocha/50 to-asbmun-mocha/70 rounded-full animate-pulse-custom relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-8 h-6 bg-asbmun-mocha rounded-full opacity-80"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-4 bg-asbmun-mocha rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-3 bg-asbmun-mocha rounded-full opacity-80 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-asbmun-orange rounded-full animate-float"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-asbmun-orange/70 rounded-full animate-float"></div>
              </div>
            </div>
          </div>

          {/* Critical Thinking Card */}
          <div className={`bg-gradient-to-br from-asbmun-black to-asbmun-black/90 rounded-3xl p-8 shadow-2xl hover-lift animate-float text-white relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-16 bg-gradient-to-br from-asbmun-mocha/70 to-asbmun-mocha/50 rounded-full animate-pulse-custom relative">
                  <div className="absolute inset-2 border-2 border-white rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-asbmun-orange rounded-full animate-breathe"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-asbmun-orange/70 rounded-full animate-breathe"></div>
              </div>
            </div>
            <h3 className="text-3xl font-bold leading-tight text-center">
              DEVELOP
              <br />
              CRITICAL
              <br />
              THINKING
            </h3>
          </div>

          {/* Networking Card */}
          <div className={`bg-gradient-to-br from-asbmun-orange to-asbmun-orange/80 rounded-3xl p-8 shadow-2xl hover-lift animate-float text-asbmun-black relative overflow-hidden ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            <h3 className="text-3xl font-bold mb-8 leading-tight">
              BUILD
              <br />
              GLOBAL
              <br />
              NETWORK
            </h3>
            <div className="flex justify-center">
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full ${
                        i === 4 ? "bg-asbmun-black animate-glow" : "bg-asbmun-black/60"
                      } animate-pulse-custom`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-asbmun-black/30 rounded-full animate-rotate-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}