"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Users, Eye, MousePointerClick, Clock } from "lucide-react"

export function StatisticsOverview() {
  // In een echte applicatie zou je deze data ophalen van een analytics API
  const stats = [
    {
      title: "Totaal Bezoekers",
      value: "2,853",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Unieke bezoekers deze maand",
    },
    {
      title: "Paginaweergaven",
      value: "7,429",
      change: "+18.2%",
      trend: "up",
      icon: Eye,
      description: "Totaal aantal paginaweergaven",
    },
    {
      title: "Conversieratio",
      value: "3.2%",
      change: "-0.4%",
      trend: "down",
      icon: MousePointerClick,
      description: "Bezoekers die een offerte aanvragen",
    },
    {
      title: "Gem. Sessieduur",
      value: "2m 45s",
      change: "+0.8%",
      trend: "up",
      icon: Clock,
      description: "Gemiddelde tijd op de website",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div
              className={`flex items-center text-xs mt-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
            >
              {stat.trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
              <span>{stat.change} t.o.v. vorige maand</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

