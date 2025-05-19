import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GMUN 2025</h3>
            <p className="text-slate-300 mb-4">Global Model United Nations Conference 2025</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-slate-300 hover:text-white">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-slate-300 hover:text-white">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-slate-300 hover:text-white">
                  Conference Schedule
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-slate-300 hover:text-white">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-slate-300" />
                <a href="mailto:info@gmun2025.org" className="text-slate-300 hover:text-white">
                  info@gmun2025.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-slate-300" />
                <a href="tel:+12345678900" className="text-slate-300 hover:text-white">
                  +1 (234) 567-8900
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="text-white hover:underline">
                Send us a message
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Global Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
