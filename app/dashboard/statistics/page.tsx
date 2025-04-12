import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { StatisticsOverview } from "@/components/statistics-overview"
import { VisitorsChart } from "@/components/visitors-chart"
import { PageViewsTable } from "@/components/page-views-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StatisticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Website Statistieken" text="Bekijk bezoekersgegevens en inzichten over je website." />

      <div className="p-6 space-y-6">
        <StatisticsOverview />

        <Tabs defaultValue="visitors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="visitors">Bezoekers</TabsTrigger>
            <TabsTrigger value="pages">Pagina's</TabsTrigger>
            <TabsTrigger value="sources">Bronnen</TabsTrigger>
          </TabsList>

          <TabsContent value="visitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bezoekers Overzicht</CardTitle>
                <CardDescription>Aantal bezoekers over de afgelopen 30 dagen</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <VisitorsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Populaire Pagina's</CardTitle>
                <CardDescription>De meest bezochte pagina's op je website</CardDescription>
              </CardHeader>
              <CardContent>
                <PageViewsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Verkeersbronnen</CardTitle>
                <CardDescription>Waar je bezoekers vandaan komen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Verkeersbronnen data wordt geladen...
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

