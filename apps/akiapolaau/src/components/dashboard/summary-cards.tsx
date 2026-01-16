"use client"

import { Card, CardContent } from "@repo/ui"
import { TrendingUp, DollarSign, Calendar, Repeat, CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"

interface SummaryCard {
  label: string
  value: string | number
  trend?: number
  icon: ReactNode
  status?: "active" | "inactive"
}

const cards: SummaryCard[] = [
  {
    label: "Valor Total",
    value: "$125,430.00",
    trend: 2.4,
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    label: "Rendimientos",
    value: "$3,245.50",
    trend: 5.2,
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    label: "Vencimiento Próximo",
    value: "$15,000.00",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    label: "Ahorro Recurrente",
    value: "$2,500.00",
    icon: <Repeat className="h-5 w-5" />
  },
  {
    label: "Estado",
    value: "Activo",
    status: "active",
    icon: <CheckCircle2 className="h-5 w-5" />
  }
]

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                {card.icon}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{card.value}</p>
              {card.trend !== undefined && (
                <span className={`text-xs font-medium ${
                  card.trend > 0 ? "text-success" : "text-loss"
                }`}>
                  {card.trend > 0 ? "+" : ""}{card.trend}%
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
