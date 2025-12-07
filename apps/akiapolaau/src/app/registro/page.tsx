"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@repo/ui"
import { Card } from "@repo/ui"
import { CheckCircle2, ChevronLeft } from "lucide-react"
import { Step1Credentials } from "@/components/registro/step-1-credentials"
import { Step2Personal } from "@/components/registro/step-2-personal"
import { Step3Banking } from "@/components/registro/step-3-banking"
import { Step4Contract } from "@/components/registro/step-4-contract"

export default function RegistroPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({})
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
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-trust">
            Cetesdirecto
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          {/* Stepper */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number
                        ? "bg-trust text-trust-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className="text-xs mt-2 text-center">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? "bg-trust" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <Card className="p-8">
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
          </Card>

          {/* Navigation */}
          {currentStep > 1 && currentStep < 4 && (
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
