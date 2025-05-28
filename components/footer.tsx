import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-asbmun-black text-white">
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
              <h3 className="text-xl font-bold">ASBMUN</h3>
            </div>
            <p className="text-gray-300 mb-4">The Asian School Model United Nations</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Conference Schedule
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-asbmun-mocha" />
                <a href="mailto:info@asbmun.org" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  info@asbmun.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-asbmun-mocha" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-asbmun-orange transition-colors">
                  +91 12345 67890
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="text-white hover:text-asbmun-orange transition-colors">
                Send us a message
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-asbmun-mocha/30 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ASBMUN - The Asian School Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
