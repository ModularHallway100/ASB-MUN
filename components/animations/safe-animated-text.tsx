"use client"

import { motion } from "framer-motion"
import { useSafeAnimation } from "@/hooks/use-safe-animation"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  fallbackClassName?: string
}

export default function SafeAnimatedText({
  text,
  className = "",
  delay = 0,
  fallbackClassName = "",
}: AnimatedTextProps) {
  const canAnimate = useSafeAnimation(300)
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // If animations aren't ready yet, render plain text
  if (!canAnimate) {
    return <h2 className={`${className} ${fallbackClassName}`}>{text}</h2>
  }

  return (
    <motion.div
      className={`overflow-hidden inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
