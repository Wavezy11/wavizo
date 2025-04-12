import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart2, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="flex items-center h-16 px-6 border-b">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span>Wavizo</span>
          </Link>
        </div>
        <div className="flex-1 px-4 py-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/statistics">
              <BarChart2 className="mr-2 h-4 w-4" />
              Statistieken
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/customers">
              <Users className="mr-2 h-4 w-4" />
              Klanten
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <Settings className="mr-2 h-4 w-4" />
              Instellingen
            </Link>
          </Button>
        </div>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Uitloggen
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white flex items-center px-6 sticky top-0 z-10">
          <div className="md:hidden mr-4">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu openen</span>
            </Button>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="sr-only">Notificaties</span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-medium text-sm">A</span>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

