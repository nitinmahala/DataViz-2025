"use client"
import Link from "next/link"
import { useState } from "react"
import { Database, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-3xl font-extrabold tracking-wide text-white">
            DataViz 2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {["About", "Timeline", "How to Participate", "Prizes", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out hover:text-white hover:text-shadow-glow"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Register Button */}
        <div className="hidden md:block">
          <Button asChild className="text-lg font-medium px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:shadow-glow">
            <Link href="https://unstop.com/competitions/dataviz-2025-empowering-decisions-through-data-visualization-solutions-2k25-army-institute-of-technology-ai-1389578" target="_blank">
              Register Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute left-0 right-0 top-16 bg-black/80 backdrop-blur-lg p-5 flex flex-col items-center space-y-5 md:hidden">
          {["About", "Timeline", "How to Participate", "Prizes", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out hover:text-white hover:text-shadow-glow"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Register Button */}
          <Button asChild className="text-lg font-medium px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:shadow-glow">
            <Link href="https://unstop.com" target="_blank">
              Register Now
            </Link>
          </Button>
        </nav>
      )}
    </header>
  )
}
