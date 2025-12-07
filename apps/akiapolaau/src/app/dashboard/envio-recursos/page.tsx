"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { Badge } from "@repo/ui"
import { ArrowUpRight, Building2, CreditCard, Info, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function EnvioRecursosPage() {
  const [copied, setCopied] = useState(false)

  const bankAccount = {
    bank: "Banco Nacional de México",
    accountNumber: "1234567890",
    clabe: "012345678901234567",
    accountHolder: "Juan Pérez García"
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Envío de Recursos</h1>
          <p className="text-sm text-muted-foreground">
            Transfiere fondos a tu cuenta Cetesdirecto
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bank Transfer */}
        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-info/10">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>Transferencia Bancaria</CardTitle>
                <CardDescription>Deposita desde tu banco</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Banco</p>
                  <p className="font-medium">{bankAccount.bank}</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">CLABE</p>
                  <p className="font-mono font-medium">{bankAccount.clabe}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(bankAccount.clabe)}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Titular</p>
                  <p className="font-medium">{bankAccount.accountHolder}</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Número de Cuenta</p>
                  <p className="font-mono font-medium">{bankAccount.accountNumber}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(bankAccount.accountNumber)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="border-blue-200 bg-info/5">
              <CardContent className="flex items-start gap-2 p-3">
                <Info className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs font-medium">Tiempo de procesamiento</p>
                  <p className="text-xs text-muted-foreground">
                    Las transferencias SPEI se reflejan en 1-2 horas hábiles
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Card Deposit */}
        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-success/10">
                <CreditCard className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <CardTitle>Depósito con Tarjeta</CardTitle>
                <CardDescription>Usa tu tarjeta de débito</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Monto a depositar</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Mínimo: $100 | Máximo: $500,000
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">Tarjeta</Label>
              <Select>
                <SelectTrigger id="card">
                  <SelectValue placeholder="Selecciona una tarjeta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card1">•••• 4532 (BBVA)</SelectItem>
                  <SelectItem value="card2">•••• 7890 (Santander)</SelectItem>
                  <SelectItem value="new">+ Agregar nueva tarjeta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Comisión:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-bold">$0.00</span>
              </div>
            </div>

            <Button className="w-full gap-2">
              <ArrowUpRight className="h-4 w-4" />
              Depositar
            </Button>

            <Card className="border-amber-200 bg-warning/5">
              <CardContent className="flex items-start gap-2 p-3">
                <Info className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs font-medium">Disponibilidad inmediata</p>
                  <p className="text-xs text-muted-foreground">
                    Los fondos estarán disponibles inmediatamente
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      {/* Recent Deposits */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Depósitos Recientes</CardTitle>
          <CardDescription>Historial de tus últimos depósitos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { amount: "$10,000", date: "15 Dic 2024", method: "Transferencia", status: "Completado" },
              { amount: "$5,000", date: "10 Dic 2024", method: "Tarjeta", status: "Completado" },
              { amount: "$25,000", date: "05 Dic 2024", method: "Transferencia", status: "Completado" }
            ].map((deposit, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{deposit.amount}</p>
                    <p className="text-sm text-muted-foreground">{deposit.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                    {deposit.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{deposit.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
