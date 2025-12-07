import { Investment, RecurringSavingFrequency } from "@repo/utils"
import { addWeeks, addMonths, nextThursday } from "date-fns"

export function calculateMaturityValue(
  principal: number,
  annualRate: number,
  termDays: number
): number {
  const dailyRate = annualRate / 365 / 100
  const maturityValue = principal * (1 + dailyRate * termDays)
  return Number(maturityValue.toFixed(2))
}

export function calculateCompoundValue(
  principal: number,
  annualRate: number,
  periods: number
): number {
  const rate = annualRate / 100
  const compoundValue = principal * Math.pow(1 + rate / periods, periods)
  return Number(compoundValue.toFixed(2))
}

export function calculateGainPercentage(invested: number, current: number): number {
  if (invested === 0) return 0
  const percentage = ((current - invested) / invested) * 100
  return Number(percentage.toFixed(2))
}

export function calculatePortfolioMetrics(investments: Investment[]) {
  const totalInvested = investments.reduce((sum, inv) => sum + inv.principal, 0)
  const totalBalance = investments.reduce((sum, inv) => sum + inv.currentValue, 0)
  const totalGain = totalBalance - totalInvested
  const gainPercentage = calculateGainPercentage(totalInvested, totalBalance)

  const allocation = investments.reduce((acc, inv) => {
    const existing = acc.find((item) => item.instrument === inv.instrumentType)
    if (existing) {
      existing.value += inv.currentValue
    } else {
      acc.push({
        instrument: inv.instrumentType,
        value: inv.currentValue,
        percentage: 0,
      })
    }
    return acc
  }, [] as { instrument: string; value: number; percentage: number }[])

  allocation.forEach((item) => {
    item.percentage = (item.value / totalBalance) * 100
  })

  return {
    totalInvested,
    totalBalance,
    totalGain,
    gainPercentage,
    allocation,
  }
}

export function getNextAuctionDate(afterDate: Date = new Date()): Date {
  return nextThursday(afterDate)
}

export function udiToMxn(udiAmount: number, udiRate: number): number {
  return Number((udiAmount * udiRate).toFixed(2))
}

export function mxnToUdi(mxnAmount: number, udiRate: number): number {
  return Number((mxnAmount / udiRate).toFixed(6))
}

export function calculateNextExecutionDate(
  frequency: RecurringSavingFrequency,
  lastDate?: string
): Date {
  const baseDate = lastDate ? new Date(lastDate) : new Date()

  switch (frequency) {
    case RecurringSavingFrequency.WEEKLY:
      return addWeeks(baseDate, 1)
    case RecurringSavingFrequency.BIWEEKLY:
      return addWeeks(baseDate, 2)
    case RecurringSavingFrequency.MONTHLY:
      return addMonths(baseDate, 1)
    default:
      return addWeeks(baseDate, 1)
  }
}

export function isMatured(maturityDate: string): boolean {
  const maturity = new Date(maturityDate)
  const today = new Date()
  return maturity <= today
}
