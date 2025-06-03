'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Steps", href: "#steps" },
    { label: "Why Us", href: "#why" },
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="/" className="text-xl font-bold text-purple-600">StyleMateAI</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 transition">
              {link.label}
            </a>
          ))}
          <a href="/sign-in">
            <Button className="ml-4">Start Styling</Button>
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/sign-in" onClick={() => setMenuOpen(false)}>
              <Button className="w-full mt-2">Start Styling</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
