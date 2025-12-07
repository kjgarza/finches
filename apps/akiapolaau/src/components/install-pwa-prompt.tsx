"use client"

import { useState, useEffect } from "react"
import { Download, X } from "lucide-react"
import { Button, Card, CardContent } from "@repo/ui"
import { usePWA } from "@/hooks/use-pwa"

export function InstallPWAPrompt() {
  const { canInstall, isInstalled, promptInstall } = usePWA()
  const [isDismissed, setIsDismissed] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the prompt before
    const dismissed = localStorage.getItem("pwa-install-dismissed")
    if (dismissed) {
      setIsDismissed(true)
    }

    // Show prompt after 30 seconds if conditions are met
    const timer = setTimeout(() => {
      if (canInstall && !isInstalled && !dismissed) {
        setShowPrompt(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [canInstall, isInstalled])

  const handleInstall = async () => {
    const installed = await promptInstall()
    if (installed) {
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    setIsDismissed(true)
    localStorage.setItem("pwa-install-dismissed", "true")
  }

  if (!showPrompt || isDismissed || isInstalled) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="border-primary shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Instalar aplicación</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Instala CetesDirecto en tu dispositivo para un acceso rápido y experiencia optimizada.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleInstall} className="flex-1">
              Instalar
            </Button>
            <Button variant="outline" onClick={handleDismiss}>
              Más tarde
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
