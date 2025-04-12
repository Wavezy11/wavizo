"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Mail, Phone } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company: string
  quoteCount: number
  lastQuoteDate: Date | null
  createdAt: Date
}

interface CustomerTableProps {
  customers: Customer[]
}

export function CustomerTable({ customers }: CustomerTableProps) {
  const [localCustomers, setLocalCustomers] = useState<Customer[]>(customers)

  const formatDate = (date: Date | null) => {
    if (!date) return "-"
    return new Date(date).toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="rounded-md border bg-white">
      {localCustomers.length === 0 ? (
        <div className="p-8 text-center">
          <h3 className="text-lg font-medium">Geen klanten</h3>
          <p className="text-gray-500 mt-2">Er zijn nog geen klanten die een offerte hebben aangevraagd.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Naam</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Bedrijf</TableHead>
              <TableHead className="text-right">Offertes</TableHead>
              <TableHead>Laatste offerte</TableHead>
              <TableHead>Klant sinds</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {localCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Mail className="h-3.5 w-3.5 mr-2 text-gray-500" />
                      <a href={`mailto:${customer.email}`} className="text-sm hover:underline">
                        {customer.email}
                      </a>
                    </div>
                    {customer.phone && (
                      <div className="flex items-center mt-1">
                        <Phone className="h-3.5 w-3.5 mr-2 text-gray-500" />
                        <a href={`tel:${customer.phone}`} className="text-sm hover:underline">
                          {customer.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{customer.company || "-"}</TableCell>
                <TableCell className="text-right">{customer.quoteCount}</TableCell>
                <TableCell>{formatDate(customer.lastQuoteDate)}</TableCell>
                <TableCell>{formatDate(customer.createdAt)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu openen</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Bekijk details</DropdownMenuItem>
                      <DropdownMenuItem>Bewerk klant</DropdownMenuItem>
                      <DropdownMenuItem>Stuur e-mail</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

