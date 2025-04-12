"use server"

import { revalidatePath } from "next/cache"
import { Resend } from "resend"
import prisma from "@/lib/prisma"

// Initialiseer Resend met je API key
const resend = new Resend(process.env.RESEND_API_KEY || "")

export async function submitQuoteRequest(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Formuliergegevens ophalen
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const company = (formData.get("company") as string) || null
    const description = formData.get("description") as string
    const budget = (formData.get("budget") as string) || null

    // Validatie
    if (!name || !email || !description) {
      return {
        success: false,
        message: "Vul alle verplichte velden in.",
      }
    }

    // Zoek bestaande klant of maak een nieuwe aan
    let customer = await prisma.customer.findUnique({
      where: { email },
    })

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name,
          email,
          phone,
          company,
        },
      })
    } else {
      // Update bestaande klant met eventuele nieuwe informatie
      customer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          name,
          phone,
          company,
        },
      })
    }

    // Maak een nieuwe offerte-aanvraag
    const quote = await prisma.quote.create({
      data: {
        description,
        budget,
        status: "pending",
        customerId: customer.id,
      },
    })

    // E-mail naar het bedrijf sturen
    try {
      await resend.emails.send({
        from: "Wavizo Website <noreply@wavizo.nl>",
        to: ["info@wavizo.nl"],
        subject: `Nieuwe offerte-aanvraag van ${name}`,
        html: `
          <h1>Nieuwe offerte-aanvraag</h1>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone || "Niet opgegeven"}</p>
          <p><strong>Bedrijf:</strong> ${company || "Niet opgegeven"}</p>
          <p><strong>Budget:</strong> ${budget || "Niet opgegeven"}</p>
          <p><strong>Beschrijving:</strong> ${description}</p>
        `,
      })

      // Bevestigingsmail naar de klant sturen
      await resend.emails.send({
        from: "Wavizo <info@wavizo.nl>",
        to: [email],
        subject: "Bedankt voor je offerte-aanvraag bij Wavizo",
        html: `
          <h1>Bedankt voor je offerte-aanvraag!</h1>
          <p>Beste ${name},</p>
          <p>We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.</p>
          <p>Hieronder vind je een overzicht van je aanvraag:</p>
          <ul>
            <li><strong>Naam:</strong> ${name}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>Telefoon:</strong> ${phone || "Niet opgegeven"}</li>
            <li><strong>Bedrijf:</strong> ${company || "Niet opgegeven"}</li>
            <li><strong>Budget:</strong> ${budget || "Niet opgegeven"}</li>
            <li><strong>Beschrijving:</strong> ${description}</li>
          </ul>
          <p>Met vriendelijke groet,<br>Het Wavizo team</p>
        `,
      })
    } catch (emailError) {
      console.error("Fout bij het versturen van e-mails:", emailError)
      // We laten de aanvraag doorgaan, zelfs als het versturen van e-mails mislukt
    }

    // Cache invalideren zodat de nieuwe aanvraag zichtbaar is in het dashboard
    revalidatePath("/dashboard")

    return {
      success: true,
      message: "Je offerte-aanvraag is succesvol verzonden! We nemen zo snel mogelijk contact met je op.",
    }
  } catch (error) {
    console.error("Fout bij het verwerken van de offerte-aanvraag:", error)
    return {
      success: false,
      message: "Er is een fout opgetreden bij het verwerken van je aanvraag. Probeer het later opnieuw.",
    }
  }
}

export async function getQuoteRequests() {
  try {
    // Haal alle offerte-aanvragen op met klantgegevens
    const quotes = await prisma.quote.findMany({
      include: {
        customer: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Transformeer de data naar het formaat dat de frontend verwacht
    return quotes.map((quote) => ({
      id: quote.id,
      name: quote.customer.name,
      email: quote.customer.email,
      phone: quote.customer.phone || "",
      company: quote.customer.company || "",
      description: quote.description,
      budget: quote.budget || "",
      status: quote.status as "pending" | "contacted" | "completed" | "rejected",
      createdAt: quote.createdAt,
    }))
  } catch (error) {
    console.error("Fout bij het ophalen van offerte-aanvragen:", error)
    return []
  }
}

export async function updateQuoteStatus(
  id: string,
  status: "pending" | "contacted" | "completed" | "rejected",
): Promise<{ success: boolean }> {
  try {
    await prisma.quote.update({
      where: { id },
      data: { status },
    })

    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Fout bij het bijwerken van de offerte-status:", error)
    return { success: false }
  }
}

