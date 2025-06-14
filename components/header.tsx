"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-800">BOORA TRANSPORT</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/booking">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">Book Now</Button>
          </Link>
        </div>
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-blue-800 hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <Link href="/booking">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">Book Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
