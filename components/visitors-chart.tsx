"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock data voor de grafiek
const generateMockData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Genereer wat willekeurige data met een realistisch patroon
    // Weekenden hebben meestal minder bezoekers
    const day = date.getDay() // 0 = zondag, 6 = zaterdag
    const isWeekend = day === 0 || day === 6

    const visitors = Math.floor(Math.random() * 50) + (isWeekend ? 30 : 70)
    const newUsers = Math.floor(visitors * (Math.random() * 0.3 + 0.4)) // 40-70% nieuwe gebruikers

    data.push({
      date: date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit" }),
      visitors,
      newUsers,
    })
  }

  return data
}

export function VisitorsChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(generateMockData())
  }, [])

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip />
          <Bar dataKey="visitors" fill="#000000" radius={[4, 4, 0, 0]} name="Totaal bezoekers" />
          <Bar dataKey="newUsers" fill="#8884d8" radius={[4, 4, 0, 0]} name="Nieuwe bezoekers" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

