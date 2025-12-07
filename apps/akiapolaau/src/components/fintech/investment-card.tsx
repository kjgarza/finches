"use client"

import { TrendingUp, TrendingDown, Calendar, Coins } from "lucide-react"
import { Card } from "@repo/ui"
import { cn } from "@/lib/utils"

export interface InvestmentCardProps {
  instrument: string
  term: number
  rate: number
  maturityDate: string
  currentValue: number
  investedValue: number
  status: "active" | "matured" | "pending"
  className?: string
}

export function InvestmentCard({
  instrument,
  term,
  rate,
  maturityDate,
  currentValue,
  investedValue,
  status,
  className,
}: InvestmentCardProps) {
  const gain = currentValue - investedValue
  const gainPercentage = (gain / investedValue) * 100
  const isPositive = gain >= 0

  return (
    <Card className={cn("p-4 space-y-3", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{instrument}</h3>
          <p className="text-sm text-muted-foreground">{term} días</p>
        </div>
        <div
          className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            status === "active" && "bg-trust/10 text-trust",
            status === "matured" && "bg-success/10 text-success",
            status === "pending" && "bg-warning/10 text-warning"
          )}
        >
          {status === "active" && "Activo"}
          {status === "matured" && "Vencido"}
          {status === "pending" && "Pendiente"}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Coins className="h-3 w-3" />
            <span className="text-xs">Tasa</span>
          </div>
          <p className="text-sm font-semibold">{rate.toFixed(2)}%</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span className="text-xs">Vencimiento</span>
          </div>
          <p className="text-sm font-semibold">{maturityDate}</p>
        </div>
      </div>

      <div className="pt-3 border-t space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Invertido</span>
          <span className="text-sm font-medium">
            ${investedValue.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Valor actual</span>
          <span className="text-base font-semibold">
            ${currentValue.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Ganancia</span>
          <div
            className={cn(
              "flex items-center gap-1 text-sm font-semibold",
              isPositive ? "text-success" : "text-loss"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span>
              ${Math.abs(gain).toLocaleString("es-MX", { minimumFractionDigits: 2 })}
            </span>
            <span className="text-xs">
              ({isPositive ? "+" : "-"}{Math.abs(gainPercentage).toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
