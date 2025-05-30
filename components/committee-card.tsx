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
        return "bg-asbmun-orange text-asbmun-black border border-asbmun-black"
      case "intermediate":
        return "bg-asbmun-mocha text-white border border-asbmun-orange"
      case "advanced":
        return "bg-asbmun-black text-asbmun-orange border border-asbmun-orange"
      default:
        return "bg-asbmun-mocha text-white border border-asbmun-orange"
    }
  }

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
      <Card className="overflow-hidden transition-all hover:shadow-xl bg-asbmun-black border-2 border-asbmun-mocha hover:border-asbmun-orange">
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
            className="absolute inset-0 bg-gradient-to-t from-asbmun-black/80 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <CardContent className="p-6 bg-asbmun-black">
          <div className="flex justify-between items-start mb-2">
            <motion.h3
              className="text-xl font-bold text-white"
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
            className="text-asbmun-mocha"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {committee.topic}
          </motion.p>
        </CardContent>
        <CardFooter className="p-6 pt-0 bg-asbmun-black">
          <Link
            href={`/committees/${committee.id}`}
            className="text-sm font-medium text-asbmun-mocha hover:text-asbmun-orange transition-colors duration-300 relative group"
          >
            Learn more about this committee
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-asbmun-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
