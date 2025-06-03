'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sparkles, Shirt, Calendar, Heart, Settings,
  Menu, X, Home, Palette, BarChart3
} from 'lucide-react'

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "AI Stylist", href: "/dashboard/ai-stylist", icon: Sparkles },
  { name: "Wardrobe", href: "/dashboard/wardrobe", icon: Shirt },
  { name: "Outfits", href: "/dashboard/outfits", icon: Palette },
  { name: "Favorites", href: "/dashboard/favorites", icon: Heart },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleMateAI
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "bg-purple-100 text-purple-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${isActive ? "text-purple-500" : "text-gray-400 group-hover:text-gray-500"}`}
                  />
                  {item.name}
                  {item.name === "Calendar" && (
                    <Badge variant="secondary" className="ml-auto text-xs">Soon</Badge>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleMateAI
              </span>
            </div>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "bg-purple-100 text-purple-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${isActive ? "text-purple-500" : "text-gray-400 group-hover:text-gray-500"}`}
                  />
                  {item.name}
                  {item.name === "Calendar" && (
                    <Badge variant="secondary" className="ml-auto text-xs">Soon</Badge>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-10 bg-white shadow-sm border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="px-4 border-r border-pink-200 text-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="w-full" />
            <div className="ml-4 flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex"
                onClick={() => router.push("/dashboard/ai-stylist")}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Styled
              </Button>
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { avatarBox: "w-8 h-8" } }}
              />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
// This layout component provides a responsive sidebar and top navigation for the dashboard.