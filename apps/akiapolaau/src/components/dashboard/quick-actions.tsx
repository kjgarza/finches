"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@repo/ui"
import { Plus, Repeat, Send } from "lucide-react"
import type { ReactNode } from "react"

interface QuickAction {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
}

interface QuickActionsProps {
  onNewInvestment?: () => void
}

export function QuickActions({ onNewInvestment }: QuickActionsProps) {
  const router = useRouter()

  const actions: QuickAction[] = [
    {
      icon: <Plus className="h-6 w-6" />,
      title: "Nueva Inversión",
      description: "Invierte en CETES, BONDDIA o UDIBONOS",
      onClick: () => onNewInvestment?.()
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "Configurar Ahorro",
      description: "Programa inversiones automáticas",
      onClick: () => router.push("/dashboard/ahorro-recurrente")
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Enviar Recursos",
      description: "Transfiere fondos a tu cuenta",
      onClick: () => router.push("/dashboard/envio-recursos")
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((action) => (
        <Card 
          key={action.title}
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={action.onClick}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                {action.icon}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
