"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="relative h-48 md:h-auto md:w-1/3 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <CardContent className="flex-1 p-6">
            <motion.div
              className="flex items-center text-sm text-muted-foreground mb-2" // Changed from text-slate-500
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CalendarIcon className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {post.title}
            </motion.h3>
            <motion.p
              className="text-card-foreground/80 mb-4" // Changed from text-slate-600
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.excerpt}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-accent hover:underline relative group" // Changed from text-slate-900
              >
                Read more
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span> {/* Changed from bg-slate-900 */}
              </Link>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
