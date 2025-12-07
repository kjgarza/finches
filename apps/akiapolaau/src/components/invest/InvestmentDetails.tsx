"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { RadioGroup, RadioGroupItem } from "@repo/ui"
import { Checkbox } from "@repo/ui"
import { CreditCard, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface InvestmentDetailsProps {
  amount: string
  onAmountChange: (value: string) => void
  paymentMethod: string
  onPaymentMethodChange: (value: string) => void
  autoRenew: boolean
  onAutoRenewChange: (checked: boolean) => void
}

export function InvestmentDetails({
  amount,
  onAmountChange,
  paymentMethod,
  onPaymentMethodChange,
  autoRenew,
  onAutoRenewChange,
}: InvestmentDetailsProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Detalles de la Inversión</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount">Monto a Invertir</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              className="pl-7"
            />
          </div>
          <p className="text-xs text-muted-foreground">Monto mínimo: $100.00</p>
        </div>

        {/* Payment Method */}
        <div className="space-y-3">
          <Label>Método de Pago</Label>
          <RadioGroup value={paymentMethod} onValueChange={onPaymentMethodChange}>
            <div className="space-y-3">
              {/* SPEI */}
              <div className="relative">
                <RadioGroupItem value="spei" id="spei" className="sr-only" />
                <Label
                  htmlFor="spei"
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50",
                    paymentMethod === "spei"
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  )}
                >
                  <div className="p-2 rounded-lg bg-info/10 shrink-0">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Envío de recursos (SPEI)</p>
                    <p className="text-sm text-muted-foreground">
                      Transferencia bancaria inmediata
                    </p>
                  </div>
                </Label>
              </div>

              {/* Domiciliation */}
              <div className="relative">
                <RadioGroupItem value="domiciliation" id="domiciliation" className="sr-only" />
                <Label
                  htmlFor="domiciliation"
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50",
                    paymentMethod === "domiciliation"
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  )}
                >
                  <div className="p-2 rounded-lg bg-success/10 shrink-0">
                    <CreditCard className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Domiciliación</p>
                    <p className="text-sm text-muted-foreground">
                      Cargo automático a cuenta
                    </p>
                  </div>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Auto Renew */}
        <div className="flex items-start gap-3 p-4 border rounded-lg">
          <Checkbox
            id="auto-renew"
            checked={autoRenew}
            onCheckedChange={onAutoRenewChange}
          />
          <div className="space-y-1">
            <Label htmlFor="auto-renew" className="cursor-pointer font-semibold">
              Reinvertir automáticamente
            </Label>
            <p className="text-sm text-muted-foreground">
              Tu inversión se renovará automáticamente en las mismas condiciones
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
