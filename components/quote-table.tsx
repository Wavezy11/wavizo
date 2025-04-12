"use client"

import { useState } from "react"
import type { QuoteRequest } from "@/types/quote"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"

interface QuoteTableProps {
  quotes: QuoteRequest[]
  updateStatus: (
    id: string,
    status: "pending" | "contacted" | "completed" | "rejected",
  ) => Promise<{ success: boolean }>
}

export function QuoteTable({ quotes, updateStatus }: QuoteTableProps) {
  const [localQuotes, setLocalQuotes] = useState<QuoteRequest[]>(quotes)

  const handleStatusUpdate = async (id: string, status: "pending" | "contacted" | "completed" | "rejected") => {
    const result = await updateStatus(id, status)
    if (result.success) {
      setLocalQuotes((prev) => prev.map((quote) => (quote.id === id ? { ...quote, status } : quote)))
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            In afwachting
          </Badge>
        )
      case "contacted":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Contact opgenomen
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Afgerond
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Afgewezen
          </Badge>
        )
      default:
        return <Badge variant="outline">Onbekend</Badge>
    }
  }

  return (
    <div className="rounded-md border bg-white">
      {localQuotes.length === 0 ? (
        <div className="p-8 text-center">
          <h3 className="text-lg font-medium">Geen offerte-aanvragen</h3>
          <p className="text-gray-500 mt-2">Er zijn nog geen offerte-aanvragen ontvangen.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Datum</TableHead>
              <TableHead>Naam</TableHead>
              <TableHead>Bedrijf</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {localQuotes.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell className="font-medium">{formatDate(quote.createdAt)}</TableCell>
                <TableCell>{quote.name}</TableCell>
                <TableCell>{quote.company || "-"}</TableCell>
                <TableCell>{quote.email}</TableCell>
                <TableCell>{quote.budget || "-"}</TableCell>
                <TableCell>{getStatusBadge(quote.status)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu openen</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleStatusUpdate(quote.id, "pending")}>
                        Markeer als in afwachting
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(quote.id, "contacted")}>
                        Markeer als contact opgenomen
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(quote.id, "completed")}>
                        Markeer als afgerond
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(quote.id, "rejected")}>
                        Markeer als afgewezen
                      </DropdownMenuItem>
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

