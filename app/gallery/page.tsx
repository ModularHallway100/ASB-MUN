import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryGrid from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery | Global Model United Nations 2025",
  description: "View photos and videos from past Global Model United Nations conferences",
}

export default function GalleryPage() {
  // Sample data - in a real app, this would come from a CMS or database
  const photos = {
    "2024": [
      {
        id: 1,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Opening Ceremony 2024",
        caption: "Opening Ceremony",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Security Council Session 2024",
        caption: "Security Council Session",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Delegates Working on Resolutions 2024",
        caption: "Delegates Working on Resolutions",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Keynote Speaker 2024",
        caption: "Keynote Speaker",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Gala Dinner 2024",
        caption: "Gala Dinner",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Award Ceremony 2024",
        caption: "Award Ceremony",
      },
      {
        id: 7,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Delegates in Committee 2024",
        caption: "Delegates in Committee",
      },
      {
        id: 8,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Cultural Night 2024",
        caption: "Cultural Night",
      },
    ],
    "2023": [
      {
        id: 9,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Opening Ceremony 2023",
        caption: "Opening Ceremony",
      },
      {
        id: 10,
        src: "/placeholder.svg?height=600&width=800",
        alt: "General Assembly Session 2023",
        caption: "General Assembly Session",
      },
      {
        id: 11,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Delegates Networking 2023",
        caption: "Delegates Networking",
      },
      {
        id: 12,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Panel Discussion 2023",
        caption: "Panel Discussion",
      },
      {
        id: 13,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Social Event 2023",
        caption: "Social Event",
      },
      {
        id: 14,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Closing Ceremony 2023",
        caption: "Closing Ceremony",
      },
    ],
    "2022": [
      {
        id: 15,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Opening Ceremony 2022",
        caption: "Opening Ceremony",
      },
      {
        id: 16,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Committee Session 2022",
        caption: "Committee Session",
      },
      {
        id: 17,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Delegates Voting 2022",
        caption: "Delegates Voting",
      },
      {
        id: 18,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Workshop Session 2022",
        caption: "Workshop Session",
      },
      {
        id: 19,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Gala Night 2022",
        caption: "Gala Night",
      },
      {
        id: 20,
        src: "/placeholder.svg?height=600&width=800",
        alt: "Award Winners 2022",
        caption: "Award Winners",
      },
    ],
  }

  const videos = [
    {
      id: 1,
      title: "GMUN 2024 Highlights",
      description: "A recap of the best moments from GMUN 2024",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Opening Ceremony 2024",
      description: "Full recording of the opening ceremony",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Secretary-General's Address",
      description: "Speech by the Secretary-General at GMUN 2024",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "GMUN 2023 Highlights",
      description: "A recap of the best moments from GMUN 2023",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  return (
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore photos and videos from past Global Model United Nations conferences
          </p>
        </div>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-6">
            <Tabs defaultValue="2024">
              <TabsList className="mb-6">
                <TabsTrigger value="2024">ASBMUN 2024</TabsTrigger>
                <TabsTrigger value="2023">ASBMUN 2023</TabsTrigger>
                <TabsTrigger value="2022">ASBMUN 2022</TabsTrigger>
              </TabsList>

              <TabsContent value="2024">
                <GalleryGrid photos={photos["2024"]} />
              </TabsContent>

              <TabsContent value="2023">
                <GalleryGrid photos={photos["2023"]} />
              </TabsContent>

              <TabsContent value="2022">
                <GalleryGrid photos={photos["2022"]} />
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.videoUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-slate-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-slate-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Photos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Did you attend a previous GMUN conference? Share your photos with us to be featured in our gallery!
          </p>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Photo Collage"
              width={600}
              height={300}
              className="rounded-lg mb-6"
            />
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Email your high-resolution photos to{" "}
            <a href="mailto:gallery@gmun2025.org" className="text-primary hover:underline">
              gallery@gmun2025.org
            </a>{" "}
            with your name, the year you attended, and a brief description.
          </p>
        </div>
      </div>
    </main>
  )
}
