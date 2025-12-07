"use client"

import * as React from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format"
import { cn } from "@/lib/utils"

export interface CurrencyInputProps extends Omit<NumericFormatProps, "value" | "onValueChange"> {
  value?: number
  onValueChange?: (value: number | undefined) => void
  min?: number
  max?: number
  error?: string
}

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, value, onValueChange, min, max, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <NumericFormat
          getInputRef={ref}
          value={value}
          onValueChange={(values) => {
            const numValue = values.floatValue
            onValueChange?.(numValue)
          }}
          thousandSeparator=","
          decimalSeparator="."
          prefix="$"
          decimalScale={2}
          fixedDecimalScale
          allowNegative={false}
          isAllowed={(values) => {
            const { floatValue } = values
            if (floatValue === undefined) return true
            if (min !== undefined && floatValue < min) return false
            if (max !== undefined && floatValue > max) return false
            return true
          }}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm motion-safe:transition-colors motion-reduce:transition-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error && "border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

CurrencyInput.displayName = "CurrencyInput"
