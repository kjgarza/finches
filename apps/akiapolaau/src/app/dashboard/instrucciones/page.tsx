"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Badge } from "@repo/ui"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui"
import { FileText, Download, Eye, Clock, CheckCircle2, Plus } from "lucide-react"

export default function InstruccionesPage() {
  const instructions = [
    {
      id: "INS-001",
      type: "Retiro",
      instrument: "CETES 28 días",
      amount: "$50,000",
      date: "15 Dic 2024",
      status: "Pendiente",
      executionDate: "18 Dic 2024"
    },
    {
      id: "INS-002",
      type: "Renovación",
      instrument: "BONDDIA",
      amount: "$25,000",
      date: "10 Dic 2024",
      status: "Procesada",
      executionDate: "13 Dic 2024"
    },
    {
      id: "INS-003",
      type: "Compra",
      instrument: "UDIBONOS",
      amount: "$100,000",
      date: "05 Dic 2024",
      status: "Completada",
      executionDate: "06 Dic 2024"
    }
  ]

  const statusColors = {
    "Pendiente": "bg-warning/5 text-warning border-warning/20",
    "Procesada": "bg-info/5 text-info border-info/20",
    "Completada": "bg-success/5 text-success border-success/20"
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Instrucciones</h1>
          <p className="text-sm text-muted-foreground">
            Gestiona tus instrucciones de inversión y retiro
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nueva Instrucción
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pendientes</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="p-3 rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Procesadas</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="p-3 rounded-lg bg-info/10">
                <FileText className="h-5 w-5 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completadas</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="p-3 rounded-lg bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions Table */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Historial de Instrucciones</CardTitle>
          <CardDescription>
            Lista completa de todas tus instrucciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Instrumento</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Fecha Creación</TableHead>
                <TableHead>Fecha Ejecución</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {instructions.map((instruction) => (
                <TableRow key={instruction.id}>
                  <TableCell className="font-medium">{instruction.id}</TableCell>
                  <TableCell>{instruction.type}</TableCell>
                  <TableCell>{instruction.instrument}</TableCell>
                  <TableCell className="font-semibold">{instruction.amount}</TableCell>
                  <TableCell>{instruction.date}</TableCell>
                  <TableCell>{instruction.executionDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={statusColors[instruction.status as keyof typeof statusColors]}
                    >
                      {instruction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Types of Instructions */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Tipos de Instrucciones</CardTitle>
          <CardDescription>
            Conoce los diferentes tipos de instrucciones disponibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-info/10">
                  <FileText className="h-4 w-4 text-info" />
                </div>
                <h3 className="font-semibold">Compra</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Adquiere nuevos instrumentos de inversión
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <Download className="h-4 w-4 text-success" />
                </div>
                <h3 className="font-semibold">Retiro</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Retira fondos de tus inversiones
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Clock className="h-4 w-4 text-warning" />
                </div>
                <h3 className="font-semibold">Renovación</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Renueva automáticamente tus inversiones
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-semibold">Cancelación</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Cancela instrucciones pendientes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
