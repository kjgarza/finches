"use client"

import { Button } from "@repo/ui"
import { Plus } from "lucide-react"

interface GreetingHeaderProps {
  userName?: string
  onNewInvestment?: () => void
}

export function GreetingHeader({ 
  userName = "Juan",
  onNewInvestment 
}: GreetingHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Buen día, {userName}</h1>
        <p className="text-sm text-muted-foreground">
          Aquí tienes un resumen de tu portafolio de inversiones
        </p>
      </div>
      <Button className="gap-2 px-5" onClick={onNewInvestment}>
        <Plus className="h-4 w-4" />
        Nueva Inversión
      </Button>
    </div>
  )
}
