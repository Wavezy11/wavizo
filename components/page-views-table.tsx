"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PageViewsTable() {
  // In een echte applicatie zou je deze data ophalen van een analytics API
  const pageViews = [
    {
      page: "/",
      title: "Homepage",
      views: 3245,
      uniqueVisitors: 2102,
      avgTimeOnPage: "1m 45s",
      bounceRate: "32%",
    },
    {
      page: "/diensten",
      title: "Diensten",
      views: 1432,
      uniqueVisitors: 1021,
      avgTimeOnPage: "2m 12s",
      bounceRate: "28%",
    },
    {
      page: "/prijzen",
      title: "Prijzen",
      views: 1128,
      uniqueVisitors: 876,
      avgTimeOnPage: "3m 05s",
      bounceRate: "24%",
    },
    {
      page: "/portfolio",
      title: "Portfolio",
      views: 864,
      uniqueVisitors: 654,
      avgTimeOnPage: "1m 52s",
      bounceRate: "35%",
    },
    {
      page: "/contact",
      title: "Contact",
      views: 760,
      uniqueVisitors: 542,
      avgTimeOnPage: "1m 20s",
      bounceRate: "42%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pagina</TableHead>
          <TableHead className="text-right">Weergaven</TableHead>
          <TableHead className="text-right">Unieke bezoekers</TableHead>
          <TableHead className="text-right">Gem. tijd op pagina</TableHead>
          <TableHead className="text-right">Bouncepercentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pageViews.map((page) => (
          <TableRow key={page.page}>
            <TableCell className="font-medium">
              <div>{page.title}</div>
              <div className="text-xs text-muted-foreground">{page.page}</div>
            </TableCell>
            <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">{page.uniqueVisitors.toLocaleString()}</TableCell>
            <TableCell className="text-right">{page.avgTimeOnPage}</TableCell>
            <TableCell className="text-right">{page.bounceRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

