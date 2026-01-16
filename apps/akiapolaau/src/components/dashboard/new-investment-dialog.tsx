"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { RadioGroup, RadioGroupItem } from "@repo/ui"
import { Checkbox } from "@repo/ui"
import { Card, CardContent } from "@repo/ui"
import { Badge } from "@repo/ui"
import { Alert, AlertDescription } from "@repo/ui"
import { Info, TrendingUp, Calendar, DollarSign } from "lucide-react"

interface NewInvestmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const instruments = [
  {
    id: "CETES",
    name: "CETES",
    description: "Certificados de la Tesorería de la Federación",
    rate: 11.25,
    status: "Activo" as const,
  },
  {
    id: "BONDDIA",
    name: "BONDDIA",
    description: "Liquidez diaria, retira cuando quieras",
    rate: 10.80,
    status: "Disponible" as const,
  },
  {
    id: "UDIBONOS",
    name: "UDIBONOS",
    description: "Protección contra inflación",
    rate: 4.15,
    status: "Disponible" as const,
  },
]

const terms = [
  { value: "28d", label: "28 días" },
  { value: "3m", label: "3 meses" },
  { value: "6m", label: "6 meses" },
  { value: "1y", label: "1 año" },
  { value: "3y", label: "3 años" },
]

export function NewInvestmentDialog({ open, onOpenChange }: NewInvestmentDialogProps) {
  const [selectedInstrument, setSelectedInstrument] = useState("")
  const [selectedTerm, setSelectedTerm] = useState("")
  const [amount, setAmount] = useState("")
  const [auctionDate, setAuctionDate] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("spei")
  const [autoRenew, setAutoRenew] = useState(false)

  const selectedInstrumentData = instruments.find((i) => i.id === selectedInstrument)
  const estimatedYield = amount && selectedInstrumentData 
    ? (parseFloat(amount) * selectedInstrumentData.rate / 100 / 12).toFixed(2)
    : "0.00"
  const maturityTotal = amount && selectedInstrumentData
    ? (parseFloat(amount) + parseFloat(estimatedYield)).toFixed(2)
    : "0.00"

  const handleConfirm = () => {
    // Handle investment confirmation
    console.log({
      instrument: selectedInstrument,
      term: selectedTerm,
      amount,
      auctionDate,
      paymentMethod,
      autoRenew,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Invertir</DialogTitle>
          <DialogDescription>
            Selecciona el instrumento y configura tu inversión
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Instrument Selector */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Instrumento de Inversión</Label>
              <RadioGroup value={selectedInstrument} onValueChange={setSelectedInstrument}>
                <div className="grid gap-3">
                  {instruments.map((instrument) => (
                    <label
                      key={instrument.id}
                      className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        selectedInstrument === instrument.id
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={instrument.id} className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">{instrument.name}</span>
                          <Badge variant="outline">{instrument.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {instrument.description}
                        </p>
                        <div className="flex items-center gap-1 text-success font-semibold">
                          <TrendingUp className="h-4 w-4" />
                          {instrument.rate}% anual
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Term Selector */}
            {selectedInstrument && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Plazo</Label>
                <div className="flex flex-wrap gap-2">
                  {terms.map((term) => (
                    <Button
                      key={term.value}
                      variant={selectedTerm === term.value ? "default" : "outline"}
                      onClick={() => setSelectedTerm(term.value)}
                      className="rounded-full"
                    >
                      {term.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Auction Date */}
            {selectedTerm && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="auction-date">Fecha de Subasta</Label>
                  <Input
                    id="auction-date"
                    type="date"
                    value={auctionDate}
                    onChange={(e) => setAuctionDate(e.target.value)}
                  />
                </div>
                <Card className="bg-info/5 border-info/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-info" />
                      <span className="text-sm font-medium">Próxima Subasta</span>
                    </div>
                    <p className="text-lg font-semibold">15 Dic 2024</p>
                    <p className="text-xs text-muted-foreground">10:00 AM</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Investment Amount */}
            {auctionDate && (
              <div className="space-y-2">
                <Label htmlFor="amount">Monto a Invertir</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10"
                    min="100"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Monto mínimo: $100.00</p>
              </div>
            )}

            {/* Payment Method */}
            {amount && (
              <div className="space-y-3">
                <Label className="text-base font-semibold">Método de Pago</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <label
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      paymentMethod === "spei"
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="spei" className="mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Envío de recursos (SPEI)</div>
                      <p className="text-sm text-muted-foreground">
                        Transferencia bancaria inmediata
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      paymentMethod === "domiciliation"
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="domiciliation" className="mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Domiciliación</div>
                      <p className="text-sm text-muted-foreground">
                        Cargo automático a cuenta
                      </p>
                    </div>
                  </label>
                </RadioGroup>
              </div>
            )}

            {/* Auto Renew */}
            {paymentMethod && (
              <div className="flex items-start space-x-3 p-4 rounded-xl border">
                <Checkbox
                  id="auto-renew"
                  checked={autoRenew}
                  onCheckedChange={(checked) => setAutoRenew(checked as boolean)}
                />
                <div className="space-y-1">
                  <Label
                    htmlFor="auto-renew"
                    className="text-sm font-semibold cursor-pointer"
                  >
                    Reinvertir automáticamente
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Tu inversión se renovará automáticamente en las mismas condiciones
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Summary */}
          <div className="w-full lg:w-[360px]">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Resumen de Inversión</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Instrumento:</span>
                    <span className="font-medium">
                      {selectedInstrumentData?.name || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Plazo:</span>
                    <span className="font-medium">
                      {terms.find((t) => t.value === selectedTerm)?.label || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monto:</span>
                    <span className="font-medium">
                      {amount ? `$${parseFloat(amount).toLocaleString('es-MX', { minimumFractionDigits: 2 })}` : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tasa:</span>
                    <span className="font-medium text-success">
                      {selectedInstrumentData ? `${selectedInstrumentData.rate}%` : "-"}
                    </span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Rendimiento estimado:</span>
                      <span className="font-semibold text-success">
                        ${estimatedYield}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Total al vencimiento:</span>
                      <span className="text-lg font-bold">
                        ${maturityTotal}
                      </span>
                    </div>
                  </div>
                </div>

                <Alert className="bg-info/5 border-info/20">
                  <Info className="h-4 w-4 text-info" />
                  <AlertDescription className="text-xs">
                    La inversión se procesará el día de la subasta seleccionada.
                  </AlertDescription>
                </Alert>

                <div className="space-y-2 pt-2">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleConfirm}
                    disabled={!selectedInstrument || !selectedTerm || !amount || !auctionDate}
                  >
                    Confirmar Inversión
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onOpenChange(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
