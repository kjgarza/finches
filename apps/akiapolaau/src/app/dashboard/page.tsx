"use client"

import { useRouter } from "next/navigation"
import { GreetingHeader } from "@/components/dashboard/greeting-header"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { PortfolioCharts } from "@/components/dashboard/portfolio-charts"
import { ActiveInvestmentsTable } from "@/components/dashboard/active-investments-table"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  const router = useRouter()

  const handleNewInvestment = () => {
    router.push("/dashboard/nueva-inversion")
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <GreetingHeader 
        userName="Juan"
        onNewInvestment={handleNewInvestment}
      />
      <SummaryCards />
      <PortfolioCharts />
      <ActiveInvestmentsTable />
      <QuickActions onNewInvestment={handleNewInvestment} />
    </div>
  )
}
