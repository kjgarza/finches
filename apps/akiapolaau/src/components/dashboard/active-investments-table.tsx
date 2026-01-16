"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Badge } from "@repo/ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui"
import { MoreHorizontal, Eye, RefreshCw, XCircle } from "lucide-react"

interface InvestmentRow {
  id: string
  instrument: string
  amount: number
  yield: string
  maturity: string
  status: "Activo" | "Inactivo"
}

const investments: InvestmentRow[] = [
  {
    id: "1",
    instrument: "CETES 28 días",
    amount: 25000,
    yield: "11.25% anual",
    maturity: "15 Dic 2024",
    status: "Activo"
  },
  {
    id: "2",
    instrument: "BONDDIA",
    amount: 15000,
    yield: "10.80% anual",
    maturity: "Diario",
    status: "Activo"
  },
  {
    id: "3",
    instrument: "CETES 91 días",
    amount: 30000,
    yield: "11.40% anual",
    maturity: "22 Ene 2025",
    status: "Activo"
  },
  {
    id: "4",
    instrument: "UDIBONOS 3 años",
    amount: 50000,
    yield: "4.15% + inflación",
    maturity: "10 Nov 2027",
    status: "Activo"
  }
]

export function ActiveInvestmentsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle>Inversiones Activas</CardTitle>
          <CardDescription>
            Tus inversiones actuales y su rendimiento
          </CardDescription>
        </div>
        <Link href="/dashboard/invertir">
          <Button variant="link" className="text-primary">
            Ver todas
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Instrumento</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Rendimiento</TableHead>
                <TableHead>Vencimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="w-[50px]">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment) => (
                <TableRow key={investment.id}>
                  <TableCell className="font-medium">
                    {investment.instrument}
                  </TableCell>
                  <TableCell className="text-right">
                    ${investment.amount.toLocaleString('es-MX', { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2 
                    })}
                  </TableCell>
                  <TableCell>
                    <span className="text-success font-medium">
                      {investment.yield}
                    </span>
                  </TableCell>
                  <TableCell>{investment.maturity}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={investment.status === "Activo" ? "default" : "secondary"}
                    >
                      {investment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Renovar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancelar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
