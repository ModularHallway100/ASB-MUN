import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground"> {/* Use theme variables */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASBMUN%20Logo%20Final.jpg-0zwsydTCTVrQV4GVwCxKZf7LvNHT2b.jpeg"
                  alt="ASBMUN Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">ASBMUN</h3> {/* Inherits text-foreground */}
            </div>
            <p className="text-muted-foreground mb-4">The Asian School Model United Nations</p> {/* text-gray-300 to text-muted-foreground */}
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"> {/* text-gray-300 to text-muted-foreground, hover:text-asbmun-orange to hover:text-accent */}
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3> {/* Inherits text-foreground */}
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-muted-foreground hover:text-accent transition-colors">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Info</h3> {/* Inherits text-foreground */}
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-accent transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-accent transition-colors">
                  Conference Schedule
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-muted-foreground hover:text-accent transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3> {/* Inherits text-foreground */}
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" /> {/* text-asbmun-mocha to text-accent */}
                <a href="mailto:info@asbmun.org" className="text-muted-foreground hover:text-accent transition-colors">
                  info@asbmun.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" /> {/* text-asbmun-mocha to text-accent */}
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 12345 67890
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors"> {/* text-white to text-foreground */}
                Send us a message
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 mt-8 pt-8 text-center text-muted-foreground text-sm"> {/* border-asbmun-mocha/30 to border-primary/30, text-gray-400 to text-muted-foreground */}
          <p>&copy; {new Date().getFullYear()} ASBMUN - The Asian School Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
