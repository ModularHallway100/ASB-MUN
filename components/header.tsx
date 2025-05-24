"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Committees", href: "/committees" },
    {
      name: "Resources",
      href: "/resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Resources", href: "/resources" },
        { name: "MUN Glossary", href: "/resources/glossary" },
        { name: "Guides & Handbooks", href: "/resources#guides" },
        { name: "Templates", href: "/resources#templates" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-slate-800">GMUN 2025</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setResourcesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setResourcesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-slate-900 relative group flex items-center",
                    pathname === item.href || (item.hasDropdown && pathname.startsWith("/resources"))
                      ? "text-slate-900"
                      : "text-slate-600",
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full",
                      pathname === item.href || (item.hasDropdown && pathname.startsWith("/resources"))
                        ? "w-full"
                        : "w-0",
                    )}
                  ></span>
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-slate-200 py-2"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navigation.length * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Register
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 text-base font-medium",
                    pathname === item.href ? "text-slate-900" : "text-slate-600",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block py-1 text-sm text-slate-600 hover:text-slate-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
              className="pt-4"
            >
              <Link
                href="/register"
                className="block w-full rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
