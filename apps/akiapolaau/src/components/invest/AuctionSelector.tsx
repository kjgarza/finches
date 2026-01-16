"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { Calendar } from "lucide-react"

// interface AuctionInfo {
//   selectedDate: string
//   nextAuction: {
//     date: string
//     time: string
//   }
// }

interface AuctionSelectorProps {
  value: string
  onChange: (value: string) => void
  nextAuction: { date: string; time: string }
}

export function AuctionSelector({ value, onChange, nextAuction }: AuctionSelectorProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Fecha de Subasta</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="auction-date">Selecciona la fecha</Label>
            <Input
              id="auction-date"
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <Card className="border-blue-200 bg-info/10">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-info mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-info-foreground">
                    Próxima Subasta
                  </p>
                  <p className="text-xs text-info-foreground/80 mt-1">
                    {nextAuction.date}
                  </p>
                  <p className="text-xs text-info-foreground/70">
                    {nextAuction.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
