"use client"

import { WifiOff } from "lucide-react"
import { Button } from "@repo/ui"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <WifiOff className="mx-auto h-24 w-24 text-muted-foreground mb-8" />
        <h1 className="text-3xl font-bold mb-4">Sin conexión</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          No tienes conexión a internet en este momento. 
          Por favor, verifica tu conexión e intenta nuevamente.
        </p>
        <Button
          onClick={() => window.location.reload()}
          size="lg"
        >
          Reintentar
        </Button>
      </div>
    </div>
  )
}
