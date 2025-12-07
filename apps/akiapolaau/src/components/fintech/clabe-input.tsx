"use client"

import * as React from "react"
import { PatternFormat, PatternFormatProps } from "react-number-format"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@repo/ui"

export interface ClabeInputProps extends Omit<PatternFormatProps, "value" | "onValueChange"> {
  value?: string
  onValueChange?: (value: string) => void
  error?: string
  showCopyButton?: boolean
}

export const ClabeInput = React.forwardRef<HTMLInputElement, ClabeInputProps>(
  ({ className, value, onValueChange, error, showCopyButton = false, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
      if (value && value.length === 18 && typeof navigator !== "undefined") {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      }
    }

    return (
      <div className="space-y-1">
        <div className="relative">
          <PatternFormat
            getInputRef={ref}
            value={value}
            onValueChange={(values) => {
              onValueChange?.(values.value)
            }}
            // @ts-ignore - format prop is correct for PatternFormat
            format="#### #### #### ####"
            mask="_"
            allowEmptyFormatting
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm motion-safe:transition-colors motion-reduce:transition-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-mono",
              error && "border-destructive",
              showCopyButton && "pr-10",
              className
            )}
            {...props}
          />
          {showCopyButton && value && value.length === 18 && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

ClabeInput.displayName = "ClabeInput"
