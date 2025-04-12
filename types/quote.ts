export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  company: string
  description: string
  budget: string
  status: "pending" | "contacted" | "completed" | "rejected"
  createdAt: Date
}

