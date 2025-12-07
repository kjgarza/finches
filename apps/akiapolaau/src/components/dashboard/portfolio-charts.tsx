"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui"
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui"

const performanceData = [
  { month: "Ene", value: 100000 },
  { month: "Feb", value: 102000 },
  { month: "Mar", value: 105500 },
  { month: "Abr", value: 108200 },
  { month: "May", value: 112000 },
  { month: "Jun", value: 115430 }
]

const distributionData = [
  { name: "CETES", value: 45, amount: 56443.50 },
  { name: "BONDDIA", value: 30, amount: 37629.00 },
  { name: "UDIBONOS", value: 25, amount: 31357.50 }
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]

export function PortfolioCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Chart A - Portfolio Performance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="space-y-1">
            <CardTitle>Rendimiento del Portafolio</CardTitle>
            <CardDescription>
              Evolución de tu inversión en el tiempo
            </CardDescription>
          </div>
          <Select defaultValue="6m">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Último mes</SelectItem>
              <SelectItem value="3m">Últimos 3 meses</SelectItem>
              <SelectItem value="6m">Últimos 6 meses</SelectItem>
              <SelectItem value="1y">Último año</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Valor",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs"
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--chart-1))" 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Chart B - Asset Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Activos</CardTitle>
          <CardDescription>
            Composición de tu portafolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="percentage" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="percentage">Porcentaje</TabsTrigger>
              <TabsTrigger value="value">Valor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="percentage" className="mt-0">
              <ChartContainer
                config={{
                  cetes: { label: "CETES", color: COLORS[0] },
                  bonddia: { label: "BONDDIA", color: COLORS[1] },
                  udibonos: { label: "UDIBONOS", color: COLORS[2] },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {distributionData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </TabsContent>

            <TabsContent value="value" className="mt-0">
              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">
                        ${item.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
