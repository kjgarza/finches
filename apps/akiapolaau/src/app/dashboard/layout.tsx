"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@repo/ui"
import { Avatar, AvatarFallback } from "@repo/ui"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@repo/ui"
import { VisuallyHidden } from "@repo/ui"
import { 
  Wallet,
  Repeat, 
  FileText, 
  Send,
  Activity,
  Settings,
  HelpCircle,
  Menu,
  Bell,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Portafolio", icon: Wallet },
    { href: "/dashboard/ahorro-recurrente", label: "Ahorro Recurrente", icon: Repeat },
    { href: "/dashboard/instrucciones", label: "Instrucciones", icon: FileText },
    { href: "/dashboard/envio-recursos", label: "Envío de Recursos", icon: Send },
    { href: "/dashboard/movimientos", label: "Movimientos", icon: Activity },
    { href: "/dashboard/configuracion", label: "Configuración", icon: Settings },
    { href: "/dashboard/ayuda", label: "Ayuda", icon: HelpCircle },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">Cetesdirecto</h1>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/dashboard")
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg motion-safe:transition-colors motion-reduce:transition-none",
                isActive 
                  ? "bg-primary text-primary-foreground font-medium shadow-sm" 
                  : "text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar - Always visible on large screens */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background z-50">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">Cetesdirecto</h1>
          </Link>
          <div className="flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <VisuallyHidden>
                  <SheetTitle>Menú de navegación</SheetTitle>
                </VisuallyHidden>
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64">
        {/* Top Header Bar */}
        <header className="fixed top-0 right-0 lg:left-64 h-16 border-b bg-background z-40">
          <div className="flex items-center justify-between h-full px-6">
            <div className="lg:hidden">
              <h1 className="text-xl font-bold text-primary">Cetesdirecto</h1>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">JP</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">Juan Pérez</span>
              </div>
              <Button className="gap-2" asChild>
                <Link href="/dashboard/nueva-inversion">
                  <Plus className="h-4 w-4" />
                  Nueva Inversión
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-16 min-h-screen flex flex-col">
          <div className="max-w-screen-xl mx-auto p-6 flex-1">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
