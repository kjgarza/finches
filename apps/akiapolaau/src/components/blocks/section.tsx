import type { HTMLAttributes } from "react"
import { cn } from "@repo/utils"

export type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: "default" | "bordered" | "muted"
}

export function Section({ className, variant = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "app-section",
        variant === "bordered" && "border-t",
        variant === "muted" && "bg-muted/30",
        className
      )}
      {...props}
    />
  )
}
