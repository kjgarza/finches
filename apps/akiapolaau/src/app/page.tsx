"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@repo/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@repo/ui"
import { VisuallyHidden } from "@repo/ui"
import { Footer } from "@/components/footer"
import { TrendingUp, Shield, Clock, DollarSign, ArrowRight, Users, Building2, CheckCircle2, Menu } from "lucide-react"
import siteInfo from "@/data/site-info.json"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Escudo Background - spans across page */}
      <div className="fixed right-0 top-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <Image
          src="/escudo.svg"
          alt=""
          width={1200}
          height={1200}
          priority={false}
          className="absolute -right-72 top-0 w-[700px] h-auto opacity-15 md:w-[900px] md:-right-88 lg:w-[1100px] lg:-right-94"
          style={{ filter: "sepia(0.3) saturate(1.2) hue-rotate(10deg)" }}
        />
      </div>

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

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center rounded-lg bg-trust/10 border border-trust/20 px-4 py-2 text-sm font-medium text-trust">
            <Shield className="h-4 w-4 mr-2" />
            Inversiones respaldadas por el gobierno mexicano
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Invierte en tu futuro con{" "}
            <span className="bg-gradient-to-r from-trust to-accent bg-clip-text text-transparent">CETES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-xl">
            Accede a CETES, BONDDIA y UDIBONOS desde $100 pesos. Simple, seguro y con los mejores rendimientos del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/registro">
              <Button size="lg" className="gap-2 bg-trust hover:bg-accent text-trust-foreground shadow-lg shadow-trust/20 transition-all duration-300">
                Comenzar ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button size="lg" variant="outline" className="border-trust/30 text-trust hover:bg-trust/5 hover:border-trust/50">
                Ver cómo funciona
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-trust/10 bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight mb-4">¿Por qué Cetesdirecto?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La forma más simple y segura de invertir en instrumentos gubernamentales
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-feature group z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust to-accent flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-trust/20 transition-shadow">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">100% Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Inversiones respaldadas por el gobierno mexicano con garantía total
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-feature group z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-success/70 flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-success/20 transition-shadow">
                  <DollarSign className="h-6 w-6 text-success-foreground" />
                </div>
                <CardTitle className="text-lg">Desde $100 MXN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Inversión mínima accesible para que todos puedan comenzar a invertir
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-feature group z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust to-accent flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-trust/20 transition-shadow">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Mejores Tasas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rendimientos competitivos con tasas superiores a las cuentas tradicionales
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-feature group z-10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-warning to-warning/70 flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-warning/20 transition-shadow">
                  <Clock className="h-6 w-6 text-warning-foreground" />
                </div>
                <CardTitle className="text-lg">Sin Comisiones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Proceso 100% digital sin cargos ocultos ni comisiones de apertura
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold tracking-tight mb-4">Cómo funciona</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comienza a invertir en 3 simples pasos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="card-feature">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-trust to-accent text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg shadow-trust/20">
                1
              </div>
              <CardTitle className="text-xl">Regístrate</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Crea tu cuenta en minutos con tu CURP y datos bancarios. Sin papeleo ni visitas a sucursales.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="card-feature">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-trust to-accent text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg shadow-trust/20">
                2
              </div>
              <CardTitle className="text-xl">Elige tu inversión</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Selecciona entre CETES, BONDDIA o UDIBONOS según tus objetivos financieros y plazos.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="card-feature z-10">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-trust to-accent text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg shadow-trust/20">
                3
              </div>
              <CardTitle className="text-xl">Recibe rendimientos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Observa crecer tu dinero en tiempo real y configura reinversión automática para maximizar ganancias.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-trust/10 bg-gradient-to-br from-trust/5 via-accent/5 to-trust/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Respaldados por más de 2 millones de clientes</h3>
            <p className="text-muted-foreground">Únete a la comunidad de inversionistas más grande de México</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-trust/20 hover:border-trust/40 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-trust to-accent flex items-center justify-center shadow-lg shadow-trust/20">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold mb-2">{siteInfo.stats.clients}+</p>
                <p className="text-sm text-muted-foreground">Clientes activos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-success/20 hover:border-success/40 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center shadow-lg shadow-success/20">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold mb-2">{siteInfo.stats.invested}</p>
                <p className="text-sm text-muted-foreground">Pesos invertidos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-trust/20 hover:border-trust/40 transition-colors z-10">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-trust to-accent flex items-center justify-center shadow-lg shadow-trust/20">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Respaldo gubernamental</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold tracking-tight mb-4">¡Más seguro imposible!</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creado por SHCP y operado por Nacional Financiera
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="card-feature border-t-4 border-t-trust">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative h-16 w-auto mb-2">
                  <Image
                    src={siteInfo.logos.hacienda}
                    alt="SHCP"
                    width={120}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Contamos con el respaldo directo del Gobierno de México, a través de la Secretaría de Hacienda y Crédito Público.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-feature border-t-4 border-t-trust">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative h-16 w-auto mb-2">
                  <Image
                    src={siteInfo.logos.nachinalfinanciera}
                    alt="Nafin"
                    width={120}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Tu cuenta en Cetesdirecto es manejada por Nacional Financiera, S.N.C., institución que opera desde 1934.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-feature border-t-4 border-t-trust z-10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-trust to-accent flex items-center justify-center shadow-lg shadow-trust/20 mb-2">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Al invertir tus recursos con Cetesdirecto, tienes acceso directo a los títulos colocados en las subastas primarias del Banco de México.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="border-t border-trust/10 bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold tracking-tight mb-4">Requisitos</h3>
              <p className="text-muted-foreground">
                Abre tu cuenta en línea, sólo necesitas:
              </p>
            </div>
            <Card className="border-t-4 border-t-trust shadow-lg shadow-trust/5">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {siteInfo.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-trust to-accent flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/registro">
                    <Button size="lg" className="gap-2 bg-trust hover:bg-accent text-white shadow-lg shadow-trust/20 transition-all duration-300">
                      Abrir cuenta ahora
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
