"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitQuoteRequest } from "@/app/actions/quote-actions"
import { Check, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const response = await submitQuoteRequest(formData)

      setSuccess(response.success)
      setMessage(response.message)
      setSubmitted(true)

      if (response.success) {
        // Reset het formulier na 3 seconden en sluit de modal
        setTimeout(() => {
          onClose()
          setSubmitted(false)
          setIsSubmitting(false)
        }, 3000)
      } else {
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Fout bij het verzenden van het formulier:", error)
      setSuccess(false)
      setMessage("Er is een fout opgetreden. Probeer het later opnieuw.")
      setSubmitted(true)
      setIsSubmitting(false)
    }
  }

  function handleClose() {
    if (!isSubmitting) {
      onClose()
      // Reset de status na het sluiten
      setTimeout(() => {
        setSubmitted(false)
        setMessage("")
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Vraag een offerte aan</DialogTitle>
              <DialogDescription>
                Vul het onderstaande formulier in en wij nemen zo snel mogelijk contact met je op.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input id="phone" name="phone" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Bedrijfsnaam</Label>
                  <Input id="company" name="company" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select name="budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecteer je budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="< €500">Minder dan €500</SelectItem>
                    <SelectItem value="€500 - €1000">€500 - €1000</SelectItem>
                    <SelectItem value="€1000 - €2000">€1000 - €2000</SelectItem>
                    <SelectItem value="> €2000">Meer dan €2000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschrijf je project *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Vertel ons over je project, wensen en verwachtingen..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
                  Annuleren
                </Button>
                <Button type="submit" className="bg-black hover:bg-purple-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    "Offerte aanvragen"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            {success ? (
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2">{success ? "Bedankt!" : "Oeps!"}</h3>
            <p className="text-gray-600 mb-6">{message}</p>
            {!success && <Button onClick={() => setSubmitted(false)}>Probeer opnieuw</Button>}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

