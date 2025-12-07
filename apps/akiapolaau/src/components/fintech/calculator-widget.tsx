"use client"

import * as React from "react"
import { ArrowLeftRight } from "lucide-react"
import { Card } from "@repo/ui"
import { Button } from "@repo/ui"
import { cn } from "@/lib/utils"
import { CurrencyInput } from "./currency-input"

export interface CalculatorWidgetProps {
  udiRate: number
  className?: string
}

export function CalculatorWidget({ udiRate, className }: CalculatorWidgetProps) {
  const [mxnValue, setMxnValue] = React.useState<number | undefined>(1000)
  const [udiValue, setUdiValue] = React.useState<number | undefined>()
  const [direction, setDirection] = React.useState<"mxn-to-udi" | "udi-to-mxn">("mxn-to-udi")

  React.useEffect(() => {
    if (direction === "mxn-to-udi" && mxnValue !== undefined) {
      setUdiValue(Number((mxnValue / udiRate).toFixed(6)))
    } else if (direction === "udi-to-mxn" && udiValue !== undefined) {
      setMxnValue(Number((udiValue * udiRate).toFixed(2)))
    }
  }, [mxnValue, udiValue, udiRate, direction])

  const handleSwitch = () => {
    setDirection(prev => prev === "mxn-to-udi" ? "udi-to-mxn" : "mxn-to-udi")
  }

  return (
    <Card className={cn("p-6 space-y-4", className)}>
      <div>
        <h3 className="font-semibold">Calculadora UDI</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Valor UDI: ${udiRate.toFixed(6)}
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium mb-2 block">
            {direction === "mxn-to-udi" ? "Monto en MXN" : "Resultado en MXN"}
          </label>
          <CurrencyInput
            value={mxnValue}
            onValueChange={direction === "mxn-to-udi" ? setMxnValue : undefined}
            disabled={direction === "udi-to-mxn"}
            placeholder="$0.00"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleSwitch}
            className="rounded-full"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            {direction === "udi-to-mxn" ? "Monto en UDIs" : "Resultado en UDIs"}
          </label>
          <div className="relative">
            <input
              type="number"
              value={udiValue || ""}
              onChange={(e) => {
                if (direction === "udi-to-mxn") {
                  const value = e.target.value ? Number(e.target.value) : undefined
                  setUdiValue(value)
                }
              }}
              disabled={direction === "mxn-to-udi"}
              placeholder="0.000000"
              step="0.000001"
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm motion-safe:transition-colors motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              )}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
