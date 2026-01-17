"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@repo/ui"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@repo/ui"
import { VisuallyHidden } from "@repo/ui"
import { Footer } from "@/components/footer"
import { Heart, Users, Sparkles, Menu } from "lucide-react"

export default function AcercaDePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-trust to-info bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              Cetesdirecto
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center">
            <Link href="/acerca-de">
              <Button variant="ghost">Acerca de</Button>
            </Link>
            <Link href="/registro">
              <Button variant="ghost">Abrir Cuenta</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-trust hover:bg-trust/90">Iniciar Sesión</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-2 items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
                <VisuallyHidden>
                  <SheetTitle>Menú de navegación</SheetTitle>
                </VisuallyHidden>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/acerca-de" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-base h-12">
                      Acerca de
                    </Button>
                  </Link>
                  <Link href="/registro" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-base h-12">
                      Abrir Cuenta
                    </Button>
                  </Link>
                  <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-trust hover:bg-trust/90 text-base h-12">
                      Iniciar Sesión
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative">
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-trust/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-trust to-accent mb-6 shadow-lg shadow-trust/20">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-trust to-accent bg-clip-text text-transparent">
                Acerca de Esta Aplicación
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                La historia detrás de este proyecto
              </p>
            </div>

            {/* Story Content */}
            <article className="space-y-16">
              {/* Section 1 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-12 bg-gradient-to-r from-trust to-accent rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold">¿Por qué nació este proyecto?</h2>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  Esta aplicación nació de una experiencia personal que muchas familias mexicanas comparten: la frustración de intentar ayudar a nuestros seres queridos a invertir de manera segura.
                </p>

                <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-trust/10">
                  <p className="text-base md:text-lg leading-relaxed">
                    Cuando intenté configurar una cuenta de Cetes Directo para mi madre, me encontré con un proceso complejo, confuso y poco accesible. Lo que debería haber sido un trámite sencillo se convirtió en una experiencia frustrante que tomó mucho más tiempo del necesario. En ese momento me di cuenta de que si una persona con conocimientos técnicos tenía dificultades, ¿qué tan difícil sería para alguien sin experiencia digital?
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-info/10">
                    <Sparkles className="h-6 w-6 text-info" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Una mejor manera de invertir</h2>
                </div>

                <p className="text-base md:text-lg leading-relaxed">
                  Esta aplicación reimagina cómo debería ser la experiencia de invertir en instrumentos gubernamentales. Está construida siguiendo las mejores prácticas en:
                </p>

                <div className="grid gap-4 md:gap-6 mt-8">
                  {[
                    {
                      title: "Accesibilidad",
                      description: "Diseñada para ser usable por personas de todas las edades y habilidades, con navegación clara, contraste adecuado, y soporte para lectores de pantalla."
                    },
                    {
                      title: "Experiencia de Usuario (UX)",
                      description: "Cada pantalla fue pensada para ser intuitiva, con flujos claros y lenguaje sencillo que no requiere conocimientos financieros avanzados."
                    },
                    {
                      title: "Diseño Responsivo",
                      description: "Funciona perfectamente en cualquier dispositivo, desde un teléfono móvil hasta una computadora de escritorio."
                    },
                    {
                      title: "Progressive Web App (PWA)",
                      description: "Puede instalarse en el dispositivo y funcionar sin conexión, para que siempre tengas acceso a tu información."
                    },
                    {
                      title: "Tecnologías Modernas",
                      description: "Construida con Next.js, React, y Tailwind CSS para garantizar un rendimiento óptimo y mantenibilidad a largo plazo."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-background border border-trust/10 rounded-xl p-6 hover:border-trust/30 hover:shadow-lg hover:shadow-trust/5 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-trust/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      <h3 className="font-bold text-lg mb-2 relative">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed relative">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-success/10">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Una esperanza para el futuro</h2>
                </div>

                <p className="text-base md:text-lg leading-relaxed">
                  Mi esperanza es que las personas encargadas de Cetes Directo vean este proyecto y se inspiren a mejorar su plataforma oficial. Los mexicanos merecen herramientas financieras que sean tan accesibles y fáciles de usar como las mejores aplicaciones del mundo.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Este no es solo un ejercicio técnico. Es una demostración de que es posible crear experiencias digitales que realmente pongan al usuario en el centro, que respeten su tiempo y que democraticen el acceso a inversiones seguras.
                </p>

                {/* Quote Block */}
                <div className="relative my-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-trust/10 to-accent/10 rounded-2xl blur-xl" />
                  <blockquote className="relative bg-background/80 backdrop-blur-sm border-l-4 border-trust rounded-r-2xl p-8 md:p-10 shadow-xl">
                    <p className="text-xl md:text-2xl italic font-light text-foreground/90 leading-relaxed">
                      Si una madre puede invertir sin ayuda, sabré que lo hemos logrado.
                    </p>
                  </blockquote>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 text-sm text-muted-foreground leading-relaxed border border-trust/10">
                  Esta es una aplicación de demostración creada con fines educativos y de prueba de concepto. No está afiliada con Cetes Directo, la Secretaría de Hacienda, ni Nacional Financiera.
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
