"use client"

import { TrendingUp, Wallet, TrendingUpIcon, Calendar, PiggyBank } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui"

export function SectionCards() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card className="rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription className="text-sm font-medium">
            Valor Total
          </CardDescription>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Wallet className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold tabular-nums">
            $125,450.00
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-xs">
          <div className="flex gap-1 font-medium text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4" />
            +8.2% este mes
          </div>
          <div className="text-muted-foreground">
            Total de inversiones activas
          </div>
        </CardFooter>
      </Card>

      <Card className="rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription className="text-sm font-medium">
            Rendimientos
          </CardDescription>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUpIcon className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold tabular-nums">
            $8,925.50
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-xs">
          <div className="flex gap-1 font-medium text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4" />
            +12.5% anual
          </div>
          <div className="text-muted-foreground">
            Ganancias acumuladas este año
          </div>
        </CardFooter>
      </Card>

      <Card className="rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription className="text-sm font-medium">
            Vencimiento Próximo
          </CardDescription>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold tabular-nums">
            $45,000.00
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-xs">
          <div className="flex gap-1 font-medium text-foreground/80">
            15 Diciembre 2024
          </div>
          <div className="text-muted-foreground">
            CETES 28 días
          </div>
        </CardFooter>
      </Card>

      <Card className="rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription className="text-sm font-medium">
            Ahorro Recurrente
          </CardDescription>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <PiggyBank className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold tabular-nums">
            $2,500.00
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-xs">
          <div className="flex gap-1 font-medium text-foreground/80">
            Mensual
          </div>
          <div className="text-muted-foreground">
            Próximo cargo: 1 Enero 2025
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
