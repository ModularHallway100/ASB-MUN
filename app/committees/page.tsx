import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Committees | Global Model United Nations 2025",
  description: "Explore the committees at the Global Model United Nations Conference 2025",
}

export default function CommitteesPage() {
  // Sample data - in a real app, this would come from a CMS or database
  const committees = [
    {
      id: 1,
      name: "United Nations Security Council",
      topic: "Addressing Conflicts in the Middle East",
      description:
        "The Security Council has primary responsibility for the maintenance of international peace and security. Delegates will debate and draft resolutions on ongoing conflicts in the Middle East region.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Advanced",
      category: "specialized",
    },
    {
      id: 2,
      name: "World Health Organization",
      topic: "Global Health Crisis Management",
      description:
        "The WHO is responsible for international public health. Delegates will address global health crises, pandemic preparedness, and healthcare inequality.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Intermediate",
      category: "specialized",
    },
    {
      id: 3,
      name: "Human Rights Council",
      topic: "Rights of Indigenous Peoples",
      description:
        "The Human Rights Council is an inter-governmental body responsible for strengthening the promotion and protection of human rights. Delegates will focus on the rights of indigenous peoples worldwide.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Beginner",
      category: "specialized",
    },
    {
      id: 4,
      name: "General Assembly First Committee",
      topic: "Disarmament and International Security",
      description:
        "The First Committee deals with disarmament, global challenges and threats to peace that affect the international community. Delegates will discuss nuclear disarmament and arms control.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Beginner",
      category: "general",
    },
    {
      id: 5,
      name: "General Assembly Second Committee",
      topic: "Economic and Financial",
      description:
        "The Second Committee addresses economic growth and development issues. Delegates will focus on sustainable development, poverty eradication, and global economic cooperation.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Beginner",
      category: "general",
    },
    {
      id: 6,
      name: "Economic and Social Council",
      topic: "Sustainable Development Goals",
      description:
        "ECOSOC is responsible for coordinating the economic and social work of the United Nations. Delegates will work on advancing the implementation of the Sustainable Development Goals.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Intermediate",
      category: "specialized",
    },
    {
      id: 7,
      name: "International Court of Justice",
      topic: "Maritime Boundary Disputes",
      description:
        "The ICJ is the principal judicial organ of the United Nations. Delegates will act as judges to settle legal disputes between states regarding maritime boundaries.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Advanced",
      category: "crisis",
    },
    {
      id: 8,
      name: "Historical Security Council",
      topic: "The Cuban Missile Crisis, 1962",
      description:
        "This committee simulates the Security Council during the Cuban Missile Crisis. Delegates will represent countries as they were in 1962 and address this historical crisis.",
      image: "/placeholder.svg?height=200&width=300",
      level: "Advanced",
      category: "crisis",
    },
  ]

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
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Committees</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our diverse range of committees designed for delegates of all experience levels
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Committees</TabsTrigger>
            <TabsTrigger value="general">General Assembly</TabsTrigger>
            <TabsTrigger value="specialized">Specialized</TabsTrigger>
            <TabsTrigger value="crisis">Crisis</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee) => (
                <Card key={committee.id} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src={committee.image || "/placeholder.svg"}
                      alt={committee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{committee.name}</CardTitle>
                      <Badge className={getLevelColor(committee.level)}>{committee.level}</Badge>
                    </div>
                    <CardDescription>{committee.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{committee.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/committees/${committee.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees
                .filter((committee) => committee.category === "general")
                .map((committee) => (
                  <Card key={committee.id} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={committee.image || "/placeholder.svg"}
                        alt={committee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{committee.name}</CardTitle>
                        <Badge className={getLevelColor(committee.level)}>{committee.level}</Badge>
                      </div>
                      <CardDescription>{committee.topic}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">{committee.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/committees/${committee.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="specialized" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees
                .filter((committee) => committee.category === "specialized")
                .map((committee) => (
                  <Card key={committee.id} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={committee.image || "/placeholder.svg"}
                        alt={committee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{committee.name}</CardTitle>
                        <Badge className={getLevelColor(committee.level)}>{committee.level}</Badge>
                      </div>
                      <CardDescription>{committee.topic}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">{committee.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/committees/${committee.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="crisis" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees
                .filter((committee) => committee.category === "crisis")
                .map((committee) => (
                  <Card key={committee.id} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={committee.image || "/placeholder.svg"}
                        alt={committee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{committee.name}</CardTitle>
                        <Badge className={getLevelColor(committee.level)}>{committee.level}</Badge>
                      </div>
                      <CardDescription>{committee.topic}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">{committee.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`/committees/${committee.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-slate-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Committee Assignment Process</h2>
              <p className="text-slate-600 mb-4">
                Delegates will be assigned to committees based on their preferences and experience level. We strive to
                create a balanced and educational experience for all participants.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    1
                  </span>
                  <span>Indicate your committee preferences during registration</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    2
                  </span>
                  <span>Our team reviews all applications and assigns committees</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    3
                  </span>
                  <span>Committee assignments are sent via email one month before the conference</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    4
                  </span>
                  <span>Country assignments and position papers are due two weeks after committee assignments</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Committee Session"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
