import Link from "next/link"
import Image from "next/image"
import { Button } from "@repo/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Footer } from "@/components/footer"
import { TrendingUp, Shield, Clock, DollarSign, ArrowRight, Users, Building2, CheckCircle2 } from "lucide-react"
import siteInfo from "@/data/site-info.json"

export default function HomePage() {
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
          <div className="flex gap-2 items-center">
            <ThemeSwitcher />
            <Link href="/registro">
              <Button variant="ghost">Abrir Cuenta</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-trust hover:bg-trust/90">Iniciar Sesión</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            🏛️ Inversiones respaldadas por el gobierno mexicano
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Invierte en tu futuro con{" "}
            <span className="bg-gradient-to-r from-trust to-info bg-clip-text text-transparent">CETES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-xl">
            Accede a CETES, BONDDIA y UDIBONOS desde $100 pesos. Simple, seguro y con los mejores rendimientos del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/registro">
              <Button size="lg" className="gap-2 bg-trust hover:bg-trust/90 text-trust-foreground">
                Comenzar ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button size="lg" variant="outline">
                Ver cómo funciona
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight mb-4">¿Por qué Cetesdirecto?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La forma más simple y segura de invertir en instrumentos gubernamentales
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-trust/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust to-trust/60 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-trust-foreground" />
                </div>
                <CardTitle className="text-lg">100% Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Inversiones respaldadas por el gobierno mexicano con garantía total
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-success/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-success/60 flex items-center justify-center mb-2">
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
            <Card className="border-2 hover:border-info/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-info to-info/60 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-info-foreground" />
                </div>
                <CardTitle className="text-lg">Mejores Tasas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rendimientos competitivos con tasas superiores a las cuentas tradicionales
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-warning/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-warning to-warning/60 flex items-center justify-center mb-2">
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
          <Card>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-trust to-info text-trust-foreground flex items-center justify-center font-bold text-2xl mb-4">
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
          <Card>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-success to-success/70 text-success-foreground flex items-center justify-center font-bold text-2xl mb-4">
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
          <Card>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-info to-info/70 text-info-foreground flex items-center justify-center font-bold text-2xl mb-4">
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
      <section className="border-t bg-gradient-to-br from-trust/10 to-info/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Respaldados por más de 2 millones de clientes</h3>
            <p className="text-muted-foreground">Únete a la comunidad de inversionistas más grande de México</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-trust" />
                <p className="text-4xl font-bold mb-2">{siteInfo.stats.clients}+</p>
                <p className="text-sm text-muted-foreground">Clientes activos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-success" />
                <p className="text-4xl font-bold mb-2">{siteInfo.stats.invested}</p>
                <p className="text-sm text-muted-foreground">Pesos invertidos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-info" />
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
          <Card>
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
          <Card>
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
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <Shield className="h-16 w-16 text-trust mb-2" />
                <p className="text-sm text-muted-foreground">
                  Al invertir tus recursos con Cetesdirecto, tienes acceso directo a los títulos colocados en las subastas primarias del Banco de México.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold tracking-tight mb-4">Requisitos</h3>
              <p className="text-muted-foreground">
                Abre tu cuenta en línea, sólo necesitas:
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {siteInfo.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/registro">
                    <Button size="lg" className="gap-2">
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
