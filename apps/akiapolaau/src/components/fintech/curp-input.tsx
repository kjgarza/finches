"use client"

import * as React from "react"
import { PatternFormat, PatternFormatProps } from "react-number-format"
import { CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CurpInputProps extends Omit<PatternFormatProps, "value" | "onValueChange"> {
  value?: string
  onValueChange?: (value: string) => void
  error?: string
  showValidation?: boolean
}

const CURP_REGEX = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/

export const CurpInput = React.forwardRef<HTMLInputElement, CurpInputProps>(
  ({ className, value, onValueChange, error, showValidation = true, ...props }, ref) => {
    const isValid = value ? CURP_REGEX.test(value) : false
    const showIndicator = showValidation && value && value.length === 18

    return (
      <div className="space-y-1">
        <div className="relative">
          <PatternFormat
            getInputRef={ref}
            value={value}
            onValueChange={(values) => {
              const upperValue = values.value.toUpperCase()
              onValueChange?.(upperValue)
            }}
            // @ts-ignore - format prop is correct for PatternFormat
            format="AAAA######AAAAAA##"
            allowEmptyFormatting={false}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm motion-safe:transition-colors motion-reduce:transition-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm uppercase font-mono",
              error && "border-destructive",
              showIndicator && "pr-10",
              className
            )}
            {...props}
          />
          {showIndicator && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isValid ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

CurpInput.displayName = "CurpInput"
