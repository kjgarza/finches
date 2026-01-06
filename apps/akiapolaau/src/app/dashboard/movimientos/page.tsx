"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { Badge } from "@repo/ui"
import { ArrowUpRight, ArrowDownLeft, Repeat, Download, Search, Filter } from "lucide-react"

export default function MovimientosPage() {
  const movements = [
    {
      id: "MOV-001",
      type: "Depósito",
      description: "Transferencia SPEI",
      amount: "+$10,000.00",
      date: "15 Dic 2024, 10:30 AM",
      status: "Completado",
      balance: "$125,000.00"
    },
    {
      id: "MOV-002",
      type: "Inversión",
      description: "CETES 28 días",
      amount: "-$5,000.00",
      date: "14 Dic 2024, 3:15 PM",
      status: "Completado",
      balance: "$115,000.00"
    },
    {
      id: "MOV-003",
      type: "Retiro",
      description: "A cuenta bancaria *4532",
      amount: "-$15,000.00",
      date: "12 Dic 2024, 9:45 AM",
      status: "Completado",
      balance: "$120,000.00"
    },
    {
      id: "MOV-004",
      type: "Rendimiento",
      description: "BONDDIA - Noviembre",
      amount: "+$890.50",
      date: "01 Dic 2024, 12:00 PM",
      status: "Completado",
      balance: "$135,000.00"
    },
    {
      id: "MOV-005",
      type: "Inversión",
      description: "UDIBONOS",
      amount: "-$25,000.00",
      date: "28 Nov 2024, 2:20 PM",
      status: "Completado",
      balance: "$134,109.50"
    }
  ]

  const getMovementIcon = (type: string) => {
    switch (type) {
      case "Depósito":
      case "Rendimiento":
        return <ArrowDownLeft className="h-4 w-4 text-emerald-600" />
      case "Retiro":
      case "Inversión":
        return <ArrowUpRight className="h-4 w-4 text-blue-600" />
      default:
        return <Repeat className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getMovementColor = (type: string) => {
    switch (type) {
      case "Depósito":
      case "Rendimiento":
        return "text-emerald-600"
      case "Retiro":
      case "Inversión":
        return "text-blue-600"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold">Movimientos</h1>
          <p className="text-sm text-muted-foreground">
            Historial completo de transacciones
          </p>
        </div>
        <Button variant="outline" className="gap-2 w-full sm:w-auto">
          <Download className="h-4 w-4" />
          Exportar
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-2">
                <p className="text-sm font-medium text-muted-foreground">Ingresos</p>
                <p className="text-2xl font-bold text-emerald-600">+$52,890</p>
              </div>
              <div className="p-3 rounded-lg bg-success/10 shrink-0">
                <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-2">
                <p className="text-sm font-medium text-muted-foreground">Egresos</p>
                <p className="text-2xl font-bold text-blue-600">-$45,000</p>
              </div>
              <div className="p-3 rounded-lg bg-info/10 shrink-0">
                <ArrowUpRight className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-2">
                <p className="text-sm font-medium text-muted-foreground">Transacciones</p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <div className="p-3 rounded-lg bg-accent shrink-0">
                <Repeat className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="min-w-0">
              <p className="text-sm font-medium text-muted-foreground">Balance Neto</p>
              <p className="text-2xl font-bold text-emerald-600">+$7,890</p>
              <p className="text-xs text-muted-foreground mt-1">Este mes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="rounded-xl">
        <CardContent className="p-4">
          <div className="flex gap-3 flex-wrap">
            <div className="flex-1 min-w-0 w-full sm:w-auto sm:min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar movimientos..." className="pl-9" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="deposit">Depósitos</SelectItem>
                <SelectItem value="withdrawal">Retiros</SelectItem>
                <SelectItem value="investment">Inversiones</SelectItem>
                <SelectItem value="yield">Rendimientos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
                <SelectItem value="quarter">Último trimestre</SelectItem>
                <SelectItem value="year">Último año</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Movements List */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Transacciones Recientes</CardTitle>
          <CardDescription>
            Detalle de todas tus transacciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {movements.map((movement) => (
              <div
                key={movement.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-2 rounded-lg bg-muted shrink-0">
                    {getMovementIcon(movement.type)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold">{movement.type}</p>
                      <Badge variant="outline" className="text-xs">
                        {movement.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {movement.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {movement.date}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right shrink-0 pl-11 sm:pl-0">
                  <p className={`text-lg font-bold ${getMovementColor(movement.type)}`}>
                    {movement.amount}
                  </p>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    Balance: {movement.balance}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">
              Cargar más movimientos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
