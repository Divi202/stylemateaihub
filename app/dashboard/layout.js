"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Shirt,
  Palette,
  Calendar,
  Heart,
  BarChart3,
  Menu,
  Home,
} from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "AI Stylist", href: "/dashboard/ai-stylist", icon: Sparkles },
  { name: "Wardrobe", href: "/dashboard/wardrobe", icon: Shirt },
  { name: "Outfits", href: "#", icon: Palette, comingSoon: true },
  { name: "Favorites", href: "#", icon: Heart, comingSoon: true },
  { name: "Calendar", href: "#", icon: Calendar, comingSoon: true },
  { name: "Analytics", href: "#", icon: BarChart3, comingSoon: true },
];

export default function DashboardLayout({children}) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const { isLoaded, isSignedIn } = useAuth();

  // Redirect to sign-in page if not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return null; // Optionally, render a loading indicator
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`h-screen bg-white border-r border-gray-200 p-4 flex flex-col justify-between transition-all ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <span
              className={`text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ${
                collapsed ? "hidden" : "block"
              }`}
            >
              StyleMateAI
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                <item.icon className="w-5 h-5 text-purple-600" />
                {!collapsed && (
                  <>
                    <span>{item.name}</span>
                    {item.comingSoon && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        Soon
                      </Badge>
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t pt-4">
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{ elements: { avatarBox: "w-8 h-8" } }}
            />
            {!collapsed && (
              <span className="text-sm font-medium text-gray-700">Sara Chen</span>
            )}
          </div>
        </div>
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
