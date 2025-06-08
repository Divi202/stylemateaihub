import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Link } from "lucide-react"

export function AppSidebar() {
    const sidebarItems =[{
        name: "Dashboard",
        href: "/dashboard",
        icon: "Home",
    },{
        name: "AI Stylist",
        href: "/dashboard/ai-stylist",
        icon: "Sparkles",
    }, {
        name: "Wardrobe",
        href: "/dashboard/wardrobe",
        icon: "Shirt",
    }, {
        name: "Outfits",
        href: "/dashboard/outfits",
        icon: "Palette",
    }, {
        name: "Favorites",
        href: "/dashboard/favorites",
        icon: "Heart",
    }, {
        name: "Calendar",
        href: "/dashboard/calendar",
        icon: "Calendar",
    }, {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: "BarChart3",
    }, {
        name: "Settings",
        href: "/dashboard/settings",
        icon: "Settings"
    }]
  return (
    <Sidebar>
      <SidebarHeader> StyleMateAI</SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarContent>{sidebarItems.map((items)=>{
            return (
                <a key={items.name} href={items.href} className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors">
                  {items.name}
                </a>
            )
        })}</SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>



  )
}


export default AppSidebar;