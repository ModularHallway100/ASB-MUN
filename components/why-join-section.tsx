"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

export default function WhyJoinSection() {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  // Remove the "once: true" to make animations repeat when scrolling in and out of view
  const isInView = useInView(sectionRef, { amount: 0.2 })

  // Start animations when in view
  if (isInView && !controls.isAnimating) {
    controls.start("visible")
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Continuous animation variants
  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const breatheVariants = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: [0.6, 0.9, 0.6],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const shimmerVariants = {
    initial: { opacity: 0.6, x: -100 },
    animate: {
      opacity: [0.2, 0.8, 0.2],
      x: ["-100%", "100%", "-100%"],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-navy-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          WHY JOIN GMUN?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Leadership Skills Card */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous floating animation
            animate={isInView ? floatVariants.animate : floatVariants.initial}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <div className="grid grid-cols-6 gap-2 mb-6">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-6 h-6 rounded-full ${i === 17 ? "bg-amber-300" : "bg-navy-600"}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                              ...(i === 17 && {
                                boxShadow: [
                                  "0 0 0 rgba(251, 191, 36, 0)",
                                  "0 0 20px rgba(251, 191, 36, 0.7)",
                                  "0 0 0 rgba(251, 191, 36, 0)",
                                ],
                              }),
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.4,
                        delay: i * 0.02,
                        ease: "backOut",
                        ...(i === 17 && {
                          boxShadow: {
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                          },
                        }),
                      }}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-navy-900 mt-auto">
                DEVELOP
                <br />
                LEADERSHIP SKILLS
              </h3>
            </div>
          </motion.div>

          {/* Public Speaking Card */}
          <motion.div
            className="bg-blue-500 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous pulse animation
            animate={isInView ? pulseVariants.animate : pulseVariants.initial}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white mb-6">
                  ENHANCE
                  <br />
                  PUBLIC
                  <br />
                  SPEAKING
                </h3>
                <div className="grid grid-cols-8 gap-1 relative">
                  {/* Add a shimmer effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20 z-10"
                    variants={shimmerVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                  />
                  {[...Array(48)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full opacity-60"
                      variants={breatheVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      transition={{
                        delay: (i * 0.01) % 0.5, // Create wave-like effect
                        duration: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Debate Skills Card */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous floating animation with different timing
            animate={
              isInView
                ? {
                    y: [0, -8, 0],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          >
            <div className="p-6 h-full flex flex-col">
              <h3 className="text-4xl font-bold text-navy-900 mb-6">
                BUILD
                <br />
                DEBATE
                <br />
                SKILLS
              </h3>
              <div className="flex-1 flex items-end justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Debate illustration"
                    width={200}
                    height={200}
                    className="mt-4"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Global Issues Card */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous floating animation with different timing
            animate={
              isInView
                ? {
                    y: [0, -5, 0],
                    transition: {
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          >
            <div className="p-6 h-full flex flex-col">
              <h3 className="text-4xl font-bold text-navy-900 mb-4">
                LEARN
                <br />
                ABOUT
                <br />
                GLOBAL
                <br />
                ISSUES
              </h3>
              <div className="flex-1 flex items-end justify-end">
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Add continuous rotation to the globe */}
                  <motion.div variants={rotateVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Globe"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Critical Thinking Card */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous pulse animation with different timing
            animate={
              isInView
                ? {
                    scale: [1, 1.02, 1],
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Add a subtle pulsing effect to the brain */}
                  <motion.div
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.05, 1],
                            filter: [
                              "drop-shadow(0 0 0 rgba(59, 130, 246, 0))",
                              "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                              "drop-shadow(0 0 0 rgba(59, 130, 246, 0))",
                            ],
                            transition: {
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            },
                          }
                        : {}
                    }
                  >
                    <Image src="/placeholder.svg?height=150&width=150" alt="Brain" width={150} height={150} />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="text-4xl font-bold text-navy-900 mt-4 text-center">
                CRITICAL
                <br />
                THINKING
              </h3>
            </div>
          </motion.div>

          {/* Network Card */}
          <motion.div
            className="bg-blue-500 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // Add continuous floating animation
            animate={isInView ? floatVariants.animate : floatVariants.initial}
          >
            <div className="p-6 h-full flex flex-col">
              <h3 className="text-4xl font-bold text-white">
                BUILD
                <br />
                YOUR
                <br />
                NETWORK
              </h3>
              <div className="flex-1 mt-6">
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 bg-white rounded-full opacity-60"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                      }}
                      // Add continuous pulsing for each dot
                      whileInView={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 2 + (i % 3), // Varied durations for more organic feel
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: (i * 0.1) % 1, // Staggered delays for wave effect
                        },
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          // Add a subtle attention-grabbing animation to the button
          whileInView={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-navy-900 hover:bg-gray-100 transition-colors relative overflow-hidden group"
          >
            {/* Add a subtle shine effect on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shine"></span>
            Join GMUN Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
