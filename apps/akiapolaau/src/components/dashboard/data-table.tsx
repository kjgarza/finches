"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Badge } from "@repo/ui"
import { Button } from "@repo/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui"
import { MoreHorizontal } from "lucide-react"

const mockData = [
  {
    id: 1,
    instrumento: "CETES 28 días",
    monto: "$45,000.00",
    rendimiento: "11.25%",
    vencimiento: "15 Dic 2024",
    estado: "Activo",
  },
  {
    id: 2,
    instrumento: "BONDDIA 182 días",
    monto: "$30,000.00",
    rendimiento: "10.80%",
    vencimiento: "20 Mar 2025",
    estado: "Activo",
  },
  {
    id: 3,
    instrumento: "CETES 91 días",
    monto: "$25,450.00",
    rendimiento: "11.15%",
    vencimiento: "28 Ene 2025",
    estado: "Activo",
  },
  {
    id: 4,
    instrumento: "UDIBONOS 1 año",
    monto: "$15,000.00",
    rendimiento: "5.50%",
    vencimiento: "10 Jun 2025",
    estado: "Activo",
  },
  {
    id: 5,
    instrumento: "CETES 28 días",
    monto: "$10,000.00",
    rendimiento: "11.20%",
    vencimiento: "05 Dic 2024",
    estado: "Por vencer",
  },
]

export function DataTable() {
  return (
    <Card className="rounded-xl">
      <CardHeader className="px-7">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Inversiones Activas</CardTitle>
            <CardDescription>
              Gestiona tus inversiones y su estado
            </CardDescription>
          </div>
          <Button variant="link" className="text-sm">
            Ver todas
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Instrumento</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead className="hidden sm:table-cell">Rendimiento</TableHead>
              <TableHead className="hidden md:table-cell">Vencimiento</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.instrumento}</TableCell>
                <TableCell>{item.monto}</TableCell>
                <TableCell className="hidden sm:table-cell">{item.rendimiento}</TableCell>
                <TableCell className="hidden md:table-cell">{item.vencimiento}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.estado === "Activo" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {item.estado}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                      <DropdownMenuItem>Renovar</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
