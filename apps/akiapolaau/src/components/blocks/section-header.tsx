import type { HTMLAttributes } from "react"
import { cn } from "@repo/utils"

export type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  description?: string
}

export function SectionHeader({
  title,
  description,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("section-header", className)} {...props}>
      <h3 className="section-title">{title}</h3>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  )
}
