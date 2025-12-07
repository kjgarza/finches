"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"
import { ToggleGroup, ToggleGroupItem } from "@repo/ui"

interface TermSelectorProps {
  value: string
  onValueChange: (value: string) => void
  terms: { value: string; label: string }[]
}

export function TermSelector({ value, onValueChange, terms }: TermSelectorProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Plazo</CardTitle>
      </CardHeader>
      <CardContent>
        <ToggleGroup
          type="single"
          value={value}
          onValueChange={onValueChange}
          className="flex flex-wrap gap-2"
        >
          {terms.map((term) => (
            <ToggleGroupItem
              key={term.value}
              value={term.value}
              className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {term.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardContent>
    </Card>
  )
}
