"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Committee {
  id: number
  name: string
  topic: string
  image: string
  level: string
}

interface CommitteeCardProps {
  committee: Committee
}

export default function CommitteeCard({ committee }: CommitteeCardProps) {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-blue-100 text-blue-800"
      case "advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <motion.div
          className="relative h-48 w-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={committee.image || "/placeholder.svg"}
            alt={committee.name}
            fill
            className="object-cover transition-transform duration-500"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {committee.name}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className={getLevelColor(committee.level)}>{committee.level}</Badge>
            </motion.div>
          </div>
          <motion.p
            className="text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {committee.topic}
          </motion.p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            href={`/committees/${committee.id}`}
            className="text-sm font-medium text-slate-900 hover:underline relative group"
          >
            Learn more about this committee
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
