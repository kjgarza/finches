import type { ReactNode, HTMLAttributes } from "react"
import { Card, CardContent } from "@repo/ui"
import { cn } from "@repo/utils"

export type MetricCardProps = HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode
  label: string
  value: string | number
  trend?: number
  iconBgColor?: string
}

export function MetricCard({
  icon,
  label,
  value,
  trend,
  iconBgColor = "bg-primary/10",
  className,
  ...props
}: MetricCardProps) {
  return (
    <Card className={className} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("metric-icon-wrapper", iconBgColor)}>
            {icon}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold">{value}</p>
          {trend !== undefined && (
            <span className={cn(
              "text-xs font-medium",
              trend > 0 ? "text-success" : "text-loss"
            )}>
              {trend > 0 ? "+" : ""}{trend}%
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
