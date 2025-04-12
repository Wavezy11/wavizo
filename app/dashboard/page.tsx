import { getQuoteRequests, updateQuoteStatus } from "@/app/actions/quote-actions"
import { QuoteTable } from "@/components/quote-table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default async function DashboardPage() {
  const quotes = await getQuoteRequests()

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardShell>
        <DashboardHeader heading="Offerte-aanvragen" text="Bekijk en beheer alle offerte-aanvragen van je website." />
        <div className="p-6">
          <QuoteTable quotes={quotes} updateStatus={updateQuoteStatus} />
        </div>
      </DashboardShell>
    </div>
  )
}

