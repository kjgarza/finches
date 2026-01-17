"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@repo/ui"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@repo/ui"
import { VisuallyHidden } from "@repo/ui"
import { Footer } from "@/components/footer"
import { CheckCircle2, ChevronLeft, Menu } from "lucide-react"
import { Step1Credentials } from "@/components/registro/step-1-credentials"
import { Step2Personal } from "@/components/registro/step-2-personal"
import { Step3Banking } from "@/components/registro/step-3-banking"
import { Step4Contract } from "@/components/registro/step-4-contract"
import prefillData from "../../../data/registro-prefill.json"

export default function RegistroPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({
    ...prefillData.step1,
    ...prefillData.step2,
    ...prefillData.step3
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { number: 1, title: "Credenciales" },
    { number: 2, title: "Datos personales" },
    { number: 3, title: "Información bancaria" },
    { number: 4, title: "Contrato" },
  ]

  const handleNext = (stepData: any) => {
    setFormData({ ...formData, ...stepData })
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (finalData: any) => {
    setIsSubmitting(true)
    const completeData = { ...formData, ...finalData }

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeData),
      })

      if (!response.ok) {
        throw new Error("Error en el registro")
      }

      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      alert("Error al registrar. Intente nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

      {/* Main Content */}
      <main className="relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-trust/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl relative">
          <div className="space-y-10">
            {/* Page Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Abre tu cuenta</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Completa los siguientes pasos para comenzar a invertir en instrumentos gubernamentales
              </p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-br from-trust to-accent text-white shadow-lg shadow-trust/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className={`text-xs md:text-sm mt-2 text-center hidden sm:block ${currentStep >= step.number ? "text-trust font-medium" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 md:mx-4 rounded-full transition-colors duration-300 ${
                        currentStep > step.number ? "bg-gradient-to-r from-trust to-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-background/80 backdrop-blur-sm border border-trust/10 rounded-2xl p-6 md:p-10 shadow-xl">
              {currentStep === 1 && (
                <Step1Credentials onNext={handleNext} initialData={formData} />
              )}
              {currentStep === 2 && (
                <Step2Personal onNext={handleNext} initialData={formData} />
              )}
              {currentStep === 3 && (
                <Step3Banking onNext={handleNext} initialData={formData} />
              )}
              {currentStep === 4 && (
                <Step4Contract
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>

            {/* Navigation */}
            {currentStep > 1 && currentStep < 4 && (
              <div className="flex justify-start">
                <Button variant="outline" onClick={handlePrevious} className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
