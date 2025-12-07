"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { Switch } from "@repo/ui"
import { Badge } from "@repo/ui"
import { Calendar, Repeat, DollarSign, TrendingUp, Plus } from "lucide-react"

export default function AhorroRecurrentePage() {
  const [isActive, setIsActive] = useState(true)

  const recurringInvestments = [
    {
      id: 1,
      name: "Ahorro Mensual CETES",
      amount: "$5,000",
      frequency: "Mensual",
      instrument: "CETES 28 días",
      nextDate: "15 Ene 2025",
      status: "Activo",
      totalInvested: "$60,000"
    },
    {
      id: 2,
      name: "Ahorro Quincenal",
      amount: "$2,500",
      frequency: "Quincenal",
      instrument: "BONDDIA",
      nextDate: "31 Dic 2024",
      status: "Activo",
      totalInvested: "$30,000"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Ahorro Recurrente</h1>
          <p className="text-sm text-muted-foreground">
            Programa inversiones automáticas y alcanza tus metas
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Ahorro
        </Button>
      </div>

      {/* Active Plans */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Planes Activos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {recurringInvestments.map((plan) => (
            <Card key={plan.id} className="rounded-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription>{plan.instrument}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <DollarSign className="h-3 w-3" />
                      Monto
                    </div>
                    <p className="text-2xl font-bold">{plan.amount}</p>
                    <p className="text-xs text-muted-foreground">{plan.frequency}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3" />
                      Próxima inversión
                    </div>
                    <p className="text-lg font-semibold">{plan.nextDate}</p>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total invertido:</span>
                    <span className="font-semibold">{plan.totalInvested}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Pausar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <Card className="rounded-xl border-info/20 bg-gradient-to-br from-info/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Repeat className="h-5 w-5 text-blue-600" />
            Beneficios del Ahorro Recurrente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-info/10">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold">Disciplina Financiera</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Invierte automáticamente sin tener que recordarlo
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold">Compra Promediada</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Reduce el riesgo invirtiendo en diferentes momentos
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Calendar className="h-4 w-4 text-amber-600" />
                </div>
                <h3 className="font-semibold">Flexibilidad Total</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Pausa, modifica o cancela en cualquier momento
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Setup */}
      <Card className="rounded-xl max-w-2xl">
        <CardHeader>
          <CardTitle>Configuración Rápida</CardTitle>
          <CardDescription>
            Crea un nuevo plan de ahorro recurrente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="recurring-amount">Monto</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                <Input
                  id="recurring-amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-7"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">Frecuencia</Label>
              <Select>
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="biweekly">Quincenal</SelectItem>
                  <SelectItem value="monthly">Mensual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="recurring-instrument">Instrumento</Label>
            <Select>
              <SelectTrigger id="recurring-instrument">
                <SelectValue placeholder="Selecciona instrumento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cetes28">CETES 28 días - 11.25%</SelectItem>
                <SelectItem value="bonddia">BONDDIA - 10.80%</SelectItem>
                <SelectItem value="cetes91">CETES 91 días - 11.40%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-0.5">
              <Label>Iniciar automáticamente</Label>
              <p className="text-sm text-muted-foreground">
                El plan comenzará el próximo día de pago
              </p>
            </div>
            <Switch checked={isActive} onCheckedChange={setIsActive} />
          </div>

          <Button className="w-full">
            Crear Plan de Ahorro
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
