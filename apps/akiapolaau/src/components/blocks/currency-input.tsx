import type { InputHTMLAttributes } from "react"
import { Input } from "@repo/ui"
import { DollarSign } from "lucide-react"
import { cn } from "@repo/utils"

export type CurrencyInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function CurrencyInput({ className, ...props }: CurrencyInputProps) {
  return (
    <div className="currency-input-wrapper">
      <DollarSign className="currency-input-icon" />
      <Input
        type="number"
        className={cn("currency-input-field", className)}
        {...props}
      />
    </div>
  )
}
