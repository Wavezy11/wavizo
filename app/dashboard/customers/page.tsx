import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CustomerTable } from "@/components/customer-table"
import prisma from "@/lib/prisma"

export default async function CustomersPage() {
  // Haal alle klanten op
  const customers = await prisma.customer.findMany({
    include: {
      quotes: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  // Transformeer de data voor de frontend
  const customersWithStats = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone || "",
    company: customer.company || "",
    quoteCount: customer.quotes.length,
    lastQuoteDate:
      customer.quotes.length > 0
        ? customer.quotes.reduce((latest, quote) => (latest > quote.createdAt ? latest : quote.createdAt), new Date(0))
        : null,
    createdAt: customer.createdAt,
  }))

  return (
    <DashboardShell>
      <DashboardHeader heading="Klanten" text="Bekijk en beheer alle klanten die een offerte hebben aangevraagd." />
      <div className="p-6">
        <CustomerTable customers={customersWithStats} />
      </div>
    </DashboardShell>
  )
}

