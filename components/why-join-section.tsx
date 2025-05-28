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
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          75% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes breathe {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        
        @keyframes ovalFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-8px) rotate(180deg);
            opacity: 0.9;
          }
        }
        
        @keyframes shimmerMove {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(255, 128, 0, 0.3);
          }
          50% { 
            box-shadow: 0 0 25px rgba(255, 128, 0, 0.7);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .float-delayed {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .float-delayed-2 {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .float-delayed-3 {
          animation: float 3.2s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .float-delayed-4 {
          animation: float 3.8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .pulse-animation {
          animation: pulse 2.5s ease-in-out infinite;
        }
        
        .wave-animation {
          animation: wave 4s ease-in-out infinite;
        }
        
        .breathe-animation {
          animation: breathe 3s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
        
        .oval-float {
          animation: ovalFloat 3s ease-in-out infinite;
        }
        
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmerMove 3s ease-in-out infinite;
          transform: skewX(-15deg);
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-asbmun-black via-asbmun-black to-asbmun-black/90 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-asbmun-mocha rounded-full opacity-10 float-animation"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-asbmun-orange rounded-full opacity-10 float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-asbmun-mocha rounded-full opacity-10 float-delayed-2"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-asbmun-orange rounded-full opacity-10 float-delayed-3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? "slide-in" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 pulse-animation">WHY JOIN ASBMUN?</h2>
            <p className="text-xl text-asbmun-mocha max-w-4xl mx-auto">
              Transform your future through diplomacy, leadership, and global engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Leadership Skills Card */}
            <div
              className={`bg-white rounded-3xl p-8 shadow-2xl card-hover float-animation relative overflow-hidden ${isVisible ? "slide-in stagger-1" : "opacity-0"}`}
            >
              <div className="shimmer-overlay"></div>

              {/* Animated dot grid */}
              <div className="grid grid-cols-6 gap-3 mb-8">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      i === 11 ? "bg-asbmun-orange glow-effect" : "bg-asbmun-mocha/30"
                    } dot-pulse`}
                    style={{ animationDelay: `${i * 0.1}s` }}
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
            <div
              className={`bg-gradient-to-br from-asbmun-mocha to-asbmun-mocha/80 rounded-3xl p-8 shadow-2xl card-hover float-delayed text-white relative overflow-hidden ${isVisible ? "slide-in stagger-2" : "opacity-0"}`}
            >
              <div className="shimmer-overlay"></div>

              <h3 className="text-3xl font-bold mb-8 leading-tight">
                ENHANCE
                <br />
                PUBLIC
                <br />
                SPEAKING
              </h3>

              {/* Animated oval pattern */}
              <div className="grid grid-cols-7 gap-2">
                {[...Array(42)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-2 bg-white rounded-full opacity-60 oval-float"
                    style={{ animationDelay: `${(i * 0.05) % 2}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Debate Skills Card */}
            <div
              className={`bg-white rounded-3xl p-8 shadow-2xl card-hover float-delayed-2 relative overflow-hidden ${isVisible ? "slide-in stagger-3" : "opacity-0"}`}
            >
              <div className="shimmer-overlay"></div>

              <h3 className="text-3xl font-bold text-asbmun-black mb-8 leading-tight">
                BUILD
                <br />
                DEBATE
                <br />
                SKILLS
              </h3>

              {/* Animated debate illustration */}
              <div className="flex justify-center items-end h-32">
                <div className="relative">
                  <div className="flex space-x-4 wave-animation">
                    {/* Person 1 */}
                    <div className="relative">
                      <div className="w-16 h-20 bg-gradient-to-b from-asbmun-orange to-asbmun-orange/80 rounded-t-full"></div>
                      <div className="w-4 h-4 bg-asbmun-orange/70 rounded-full absolute top-0 left-6 breathe-animation"></div>
                    </div>

                    {/* Person 2 */}
                    <div className="relative">
                      <div className="w-16 h-20 bg-gradient-to-b from-asbmun-mocha to-asbmun-mocha/80 rounded-t-full"></div>
                      <div
                        className="w-4 h-4 bg-asbmun-mocha/70 rounded-full absolute top-0 left-6 breathe-animation"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Speech bubbles */}
                  <div className="absolute -top-8 -left-4 w-6 h-4 bg-white rounded-full opacity-80 float-animation"></div>
                  <div className="absolute -top-6 right-2 w-4 h-3 bg-white rounded-full opacity-80 float-delayed"></div>
                </div>
              </div>
            </div>

            {/* Global Issues Card */}
            <div
              className={`bg-white rounded-3xl p-8 shadow-2xl card-hover float-delayed-3 relative overflow-hidden ${isVisible ? "slide-in stagger-4" : "opacity-0"}`}
            >
              <div className="shimmer-overlay"></div>

              <h3 className="text-3xl font-bold text-asbmun-black mb-6 leading-tight">
                LEARN
                <br />
                ABOUT
                <br />
                GLOBAL
                <br />
                ISSUES
              </h3>

              {/* Animated globe */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-asbmun-mocha/70 via-asbmun-mocha/50 to-asbmun-mocha/70 rounded-full pulse-animation relative overflow-hidden">
                    {/* Continent shapes */}
                    <div className="absolute top-2 left-2 w-8 h-6 bg-asbmun-mocha rounded-full opacity-80"></div>
                    <div className="absolute bottom-3 right-3 w-6 h-4 bg-asbmun-mocha rounded-full opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-3 bg-asbmun-mocha rounded-full opacity-80 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-asbmun-orange rounded-full float-animation"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-asbmun-orange/70 rounded-full float-delayed"></div>
                </div>
              </div>
            </div>

            {/* Critical Thinking Card */}
            <div
              className={`bg-gradient-to-br from-asbmun-black to-asbmun-black/90 rounded-3xl p-8 shadow-2xl card-hover float-delayed-4 text-white relative overflow-hidden ${isVisible ? "slide-in stagger-5" : "opacity-0"}`}
            >
              <div className="shimmer-overlay"></div>

              <div className="flex justify-center mb-6">
                {/* Animated brain */}
                <div className="relative">
                  <div className="w-20 h-16 bg-gradient-to-br from-asbmun-mocha/70 to-asbmun-mocha/50 rounded-full pulse-animation relative">
                    {/* Brain pattern */}
                    <div className="absolute inset-2 border-2 border-white rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-\
