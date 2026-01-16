"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Alert, AlertDescription } from "@repo/ui"
import { Info } from "lucide-react"

export interface InvestmentSummaryData {
  instrument: string
  term: string
  amount: number
  rate: number
  estimatedYield: number
  maturityTotal: number
}

interface InvestmentSummaryProps {
  data: InvestmentSummaryData
  onConfirm: () => void
  onCancel: () => void
  isValid: boolean
}

export function InvestmentSummary({
  data,
  onConfirm,
  onCancel,
  isValid,
}: InvestmentSummaryProps) {
  return (
    <Card className="rounded-xl sticky top-4">
      <CardHeader>
        <CardTitle>Resumen de Inversión</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary Details */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Instrumento:</span>
            <span className="font-semibold">{data.instrument || "—"}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Plazo:</span>
            <span className="font-semibold">{data.term || "—"}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Monto:</span>
            <span className="font-semibold">
              ${data.amount ? data.amount.toLocaleString("es-MX", { minimumFractionDigits: 2 }) : "0.00"}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tasa:</span>
            <span className="font-semibold text-success">
              {data.rate}% anual
            </span>
          </div>
          
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Rendimiento estimado:</span>
              <span className="font-semibold text-success">
                +${data.estimatedYield.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between text-base mt-2">
              <span className="font-medium">Total al vencimiento:</span>
              <span className="font-bold">
                ${data.maturityTotal.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* Alert */}
        <Alert variant="default" className="border-blue-200 bg-info/10">
          <Info className="h-4 w-4 text-info" />
          <AlertDescription className="text-xs text-info-foreground">
            La inversión se procesará el día de la subasta seleccionada.
          </AlertDescription>
        </Alert>

        {/* Actions */}
        <div className="space-y-2">
          <Button
            className="w-full"
            size="lg"
            onClick={onConfirm}
            disabled={!isValid}
          >
            Confirmar Inversión
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
