"use client"

import { TrendingUp, TrendingDown, PieChart } from "lucide-react"
import { Card } from "@repo/ui"
import { cn } from "@/lib/utils"

export interface PortfolioSummaryProps {
  totalBalance: number
  totalInvested: number
  totalGain: number
  gainPercentage: number
  allocation: {
    instrument: string
    percentage: number
    value: number
  }[]
  className?: string
}

export function PortfolioSummary({
  totalBalance,
  totalInvested,
  totalGain,
  gainPercentage,
  allocation,
  className,
}: PortfolioSummaryProps) {
  const isPositive = totalGain >= 0

  return (
    <div className={cn("space-y-4", className)}>
      <Card className="p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Balance total</p>
          <h2 className="text-3xl font-bold mt-1">
            ${totalBalance.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">Total invertido</p>
            <p className="text-lg font-semibold mt-1">
              ${totalInvested.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Ganancia total</p>
            <div
              className={cn(
                "flex items-center gap-2 mt-1",
                isPositive ? "text-success" : "text-loss"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-5 w-5" />
              ) : (
                <TrendingDown className="h-5 w-5" />
              )}
              <div>
                <p className="text-lg font-semibold">
                  ${Math.abs(totalGain).toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm">
                  {isPositive ? "+" : "-"}{Math.abs(gainPercentage).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {allocation.length > 0 && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Distribución de activos</h3>
          </div>
          <div className="space-y-3">
            {allocation.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{item.instrument}</span>
                  <span className="text-muted-foreground">
                    ${item.value.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-trust h-full motion-safe:transition-all motion-reduce:transition-none"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium w-12 text-right">
                    {item.percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
