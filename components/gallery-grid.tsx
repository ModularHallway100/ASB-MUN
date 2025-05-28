"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Photo {
  id: number
  src: string
  alt: string
  caption: string
}

interface GalleryGridProps {
  photos: Photo[]
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      opacity: 1,
    },
  }

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "next" | "prev") => {
    if (!selectedPhoto) return

    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % photos.length
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length
    }

    setSelectedPhoto(photos[newIndex])
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, zIndex: 1 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(photo)}
            onMouseEnter={() => {
              setCursorText("View")
              setCursorVariant("hover")
            }}
            onMouseLeave={() => {
              setCursorText("")
              setCursorVariant("default")
            }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end"
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="p-3 w-full bg-black bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={{ y: 100 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-foreground text-sm">{photo.caption}</p> {/* text-white to text-foreground */}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 bg-black bg-opacity-70 text-foreground rounded-full flex items-center justify-center pointer-events-none z-50" // text-white to text-foreground
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorVariant === "hover" && <span className="text-sm font-medium">View</span>}
      </motion.div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-background"> {/* bg-black to bg-background */}
          <AnimatePresence mode="wait">
            {selectedPhoto && (
              <motion.div
                key={selectedPhoto.id}
                className="relative h-[80vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />

                <motion.button
                  className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-foreground hover:bg-opacity-70" // text-white to text-foreground
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>

                <motion.button
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-foreground hover:bg-opacity-70" // text-white to text-foreground
                  onClick={() => navigatePhoto("prev")}
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>

                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-foreground hover:bg-opacity-70" // text-white to text-foreground
                  onClick={() => navigatePhoto("next")}
                  whileHover={{ scale: 1.1, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {selectedPhoto && (
            <motion.div
              className="p-4 bg-card text-card-foreground" // bg-white to bg-card, add text-card-foreground
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <DialogTitle>{selectedPhoto.caption}</DialogTitle> {/* Will inherit text-card-foreground */}
              <DialogDescription>{selectedPhoto.alt}</DialogDescription> {/* Will use text-muted-foreground */}
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
