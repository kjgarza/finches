"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"
import { RadioGroup, RadioGroupItem } from "@repo/ui"
import { Label } from "@repo/ui"
import { Badge } from "@repo/ui"
import { cn } from "@repo/utils"

export interface InstrumentOption {
  id: "CETES" | "BONDDIA" | "UDIBONOS"
  label: string
  description: string
  rate: number
  status: "active" | "available"
}

interface InstrumentSelectorProps {
  value: string
  onValueChange: (value: string) => void
  instruments: InstrumentOption[]
}

export function InstrumentSelector({
  value,
  onValueChange,
  instruments,
}: InstrumentSelectorProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Instrumento</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={value} onValueChange={onValueChange} className="grid gap-4 md:grid-cols-3">
          {instruments.map((instrument) => (
            <div key={instrument.id} className="relative">
              <RadioGroupItem
                value={instrument.id}
                id={instrument.id}
                className="sr-only"
              />
              <Label
                htmlFor={instrument.id}
                className={cn(
                  "flex flex-col gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50",
                  value === instrument.id
                    ? "border-primary bg-primary/5"
                    : "border-muted"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-base">{instrument.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {instrument.description}
                    </p>
                  </div>
                  <Badge
                    variant={instrument.status === "active" ? "default" : "secondary"}
                    className="shrink-0"
                  >
                    {instrument.status === "active" ? "Activo" : "Disponible"}
                  </Badge>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-emerald-600">
                    {instrument.rate}%
                  </span>
                  <span className="text-xs text-muted-foreground">anual</span>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
