"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useSafeAnimation } from "@/hooks/use-safe-animation"

export default function SafeBackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canAnimate = useSafeAnimation(800) // Longer delay for background elements

  useEffect(() => {
    if (!canAnimate) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    try {
      window.addEventListener("resize", resizeCanvas)
      resizeCanvas()
      animate()
    } catch (error) {
      console.error("Error initializing particles:", error)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [canAnimate])

  // Always render the canvas, but only animate when safe
  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: canAnimate ? 1 : 0 }}
      transition={{ duration: 1 }}
    />
  )
}
