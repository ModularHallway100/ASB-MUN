"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 2

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(300, 300)
    containerRef.current.appendChild(renderer.domElement)

    // Globe geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64)

    // Globe material
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    })

    // Create globe mesh
    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      globe.rotation.y += 0.003
      globe.rotation.x += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="w-[300px] h-[300px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}
