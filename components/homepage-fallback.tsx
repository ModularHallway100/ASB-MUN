import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomepageFallback() {
  return (
    <main className="flex-1">
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Global Model United Nations 2025</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join delegates from around the world to debate, negotiate, and solve global challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/committees">View Committees</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
