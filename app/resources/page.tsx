import Link from "next/link"
import { FileText, Download, BookOpen, Video, FileQuestion, Globe, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Resources | Global Model United Nations 2025",
  description: "Access resources for the Global Model United Nations Conference 2025",
}

export default function ResourcesPage() {
  // Sample data - in a real app, this would come from a CMS or database
  const resources = {
    guides: [
      {
        id: 1,
        title: "Delegate Handbook",
        description: "A comprehensive guide for delegates participating in GMUN 2025",
        icon: <FileText className="h-8 w-8 text-slate-700" />,
        link: "/resources/delegate-handbook.pdf",
      },
      {
        id: 2,
        title: "Rules of Procedure",
        description: "Official rules of procedure for all committees at GMUN 2025",
        icon: <BookOpen className="h-8 w-8 text-slate-700" />,
        link: "/resources/rules-of-procedure.pdf",
      },
      {
        id: 3,
        title: "Position Paper Guide",
        description: "Guidelines for writing effective position papers",
        icon: <FileText className="h-8 w-8 text-slate-700" />,
        link: "/resources/position-paper-guide.pdf",
      },
      {
        id: 4,
        title: "Resolution Writing Guide",
        description: "How to draft and format UN resolutions",
        icon: <FileText className="h-8 w-8 text-slate-700" />,
        link: "/resources/resolution-guide.pdf",
      },
      {
        id: 5,
        title: "MUN Glossary",
        description: "Complete glossary of Model UN terms and definitions",
        icon: <Book className="h-8 w-8 text-orange-500" />,
        link: "/resources/glossary",
      },
    ],
    templates: [
      {
        id: 1,
        title: "Position Paper Template",
        description: "Standard template for position papers",
        icon: <Download className="h-8 w-8 text-slate-700" />,
        link: "/resources/position-paper-template.docx",
      },
      {
        id: 2,
        title: "Resolution Template",
        description: "Standard template for draft resolutions",
        icon: <Download className="h-8 w-8 text-slate-700" />,
        link: "/resources/resolution-template.docx",
      },
      {
        id: 3,
        title: "Working Paper Template",
        description: "Standard template for working papers",
        icon: <Download className="h-8 w-8 text-slate-700" />,
        link: "/resources/working-paper-template.docx",
      },
    ],
    training: [
      {
        id: 1,
        title: "Public Speaking Workshop",
        description: "Improve your public speaking skills for MUN debates",
        icon: <Video className="h-8 w-8 text-slate-700" />,
        link: "/resources/public-speaking-workshop",
      },
      {
        id: 2,
        title: "Negotiation Tactics",
        description: "Learn effective negotiation strategies for MUN conferences",
        icon: <Video className="h-8 w-8 text-slate-700" />,
        link: "/resources/negotiation-tactics",
      },
      {
        id: 3,
        title: "Research Methodology",
        description: "How to research your country's position effectively",
        icon: <Video className="h-8 w-8 text-slate-700" />,
        link: "/resources/research-methodology",
      },
    ],
    research: [
      {
        id: 1,
        title: "UN Official Website",
        description: "Access official UN documents and resources",
        icon: <Globe className="h-8 w-8 text-slate-700" />,
        link: "https://www.un.org",
        external: true,
      },
      {
        id: 2,
        title: "UN Digital Library",
        description: "Search for UN documents, voting records, and resolutions",
        icon: <Globe className="h-8 w-8 text-slate-700" />,
        link: "https://digitallibrary.un.org",
        external: true,
      },
      {
        id: 3,
        title: "CIA World Factbook",
        description: "Country profiles with demographic, economic, and political information",
        icon: <Globe className="h-8 w-8 text-slate-700" />,
        link: "https://www.cia.gov/the-world-factbook/",
        external: true,
      },
    ],
  }

  return (
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Access guides, templates, and training materials to help you prepare for GMUN 2025
          </p>
        </div>

        {/* Featured Glossary Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-4 mx-auto">
                <Book className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Model UN Glossary</CardTitle>
              <CardDescription className="text-lg">
                Your complete reference for all MUN terminology and specialized terms
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/resources/glossary">Explore Glossary</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="guides">Guides & Handbooks</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="training">Training Materials</TabsTrigger>
            <TabsTrigger value="research">Research Links</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.guides.map((resource) => (
                <Card key={resource.id} className="flex flex-col h-full hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{resource.icon}</div>
                    <CardTitle className="text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" asChild>
                      <Link href={resource.link}>
                        {resource.title === "MUN Glossary" ? "View Glossary" : "Download PDF"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.templates.map((resource) => (
                <Card key={resource.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{resource.icon}</div>
                    <CardTitle className="text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" asChild>
                      <Link href={resource.link}>Download Template</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.training.map((resource) => (
                <Card key={resource.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{resource.icon}</div>
                    <CardTitle className="text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" asChild>
                      <Link href={resource.link}>Access Workshop</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.research.map((resource) => (
                <Card key={resource.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{resource.icon}</div>
                    <CardTitle className="text-center">{resource.title}</CardTitle>
                    <CardDescription className="text-center">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" variant="outline" asChild>
                      <Link
                        href={resource.link}
                        target={resource.external ? "_blank" : undefined}
                        rel={resource.external ? "noopener noreferrer" : undefined}
                      >
                        Visit Website
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-slate-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">What is a position paper?</h3>
                  <p className="text-slate-600">
                    A position paper is a document that outlines your country's stance on the committee topics. It
                    should include your country's policies, actions taken, and proposed solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">How long should my position paper be?</h3>
                  <p className="text-slate-600">
                    Position papers should be 1-2 pages per topic, double-spaced, using 12-point Times New Roman font.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">When are position papers due?</h3>
                  <p className="text-slate-600">
                    Position papers are due two weeks after committee assignments are announced.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">How can I prepare for the conference?</h3>
                  <p className="text-slate-600">
                    Research your country's position, practice public speaking, review the rules of procedure, and
                    familiarize yourself with parliamentary procedure.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileQuestion className="h-8 w-8 text-slate-700 mr-3" />
                <h3 className="text-xl font-bold">Need Help?</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Can't find what you're looking for? Our team is here to help you prepare for the conference.
              </p>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/workshops">Join a Workshop</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
