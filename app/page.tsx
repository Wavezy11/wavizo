"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ChevronUp, Code, Globe, Laptop, Mail, MessageSquare, Phone, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuoteModal } from "@/components/quote-modal"

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span className="font-bold text-xl">Wavizo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#over-ons" className="text-gray-700 hover:text-purple-600 transition-colors">
              Over Ons
            </Link>
            <Link href="#diensten" className="text-gray-700 hover:text-purple-600 transition-colors">
              Diensten
            </Link>
            <Link href="#prijzen" className="text-gray-700 hover:text-purple-600 transition-colors">
              Prijzen
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="#contact" className="hidden md:flex">
          <Button className="bg-black text-white hover:bg-purple-700">Contact</Button>
        </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Uw bedrijf verdient een <span className="text-purple-600">geweldige</span> online aanwezigheid
              </h1>
              <p className="text-lg text-gray-700">
                Wij maken op maat gemaakte websites die klanten aantrekken en uw bedrijf laten groeien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-black text-white hover:bg-purple-700 text-lg py-6 px-8" onClick={openQuoteModal}>
                  Vraag een offerte aan
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 text-lg py-6 px-8"
                  onClick={() => document.getElementById("diensten")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Bekijk onze diensten
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-video md:aspect-square rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Wavizo Webdesign"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Ons Section */}
      <section id="over-ons" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Over Wavizo"
                  width={700}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-64 h-64 bg-purple-100 rounded-lg"></div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Over Wavizo</h2>
              <p className="text-lg text-gray-700">
                Bij Wavizo creëren we unieke websites die passen bij de visie van uw bedrijf. Ons team van experts biedt
                maatwerkoplossingen voor bedrijven van elke omvang, met een focus op design, functionaliteit en
                gebruikerservaring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Expertise</h3>
                    <p className="text-gray-600">Jaren ervaring in webdesign</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Kwaliteit</h3>
                    <p className="text-gray-600">Hoogwaardige websites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Maatwerk</h3>
                    <p className="text-gray-600">Volledig aangepast aan uw wensen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Support</h3>
                    <p className="text-gray-600">24/7 ondersteuning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Diensten</h2>
            <p className="text-lg text-gray-700">
              Wij bieden een breed scala aan diensten om uw online aanwezigheid te versterken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-purple-600" />
                </div>
                <CardTitle>Webdesign op maat</CardTitle>
                <CardDescription>Unieke websites die perfect passen bij uw merk</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We ontwerpen websites die niet alleen mooi zijn, maar ook functioneel en gebruiksvriendelijk. Elk
                  ontwerp is uniek en volledig aangepast aan uw bedrijf.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-purple-600" />
                </div>
                <CardTitle>Mobielvriendelijke websites</CardTitle>
                <CardDescription>Perfect werkend op alle apparaten</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Alle websites die we maken zijn volledig responsief en werken perfect op mobiele telefoons, tablets en
                  desktops.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-purple-600" />
                </div>
                <CardTitle>E-commerce oplossingen</CardTitle>
                <CardDescription>Verkoop uw producten online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We bouwen professionele webshops waarmee u eenvoudig uw producten online kunt verkopen. Inclusief
                  betalingssystemen en voorraadbeheer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="text-purple-600" />
                </div>
                <CardTitle>SEO-optimalisatie</CardTitle>
                <CardDescription>Beter vindbaar in Google</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We optimaliseren uw website voor zoekmachines zodat potentiële klanten u gemakkelijk kunnen vinden.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-purple-600" />
                </div>
                <CardTitle>Content creatie</CardTitle>
                <CardDescription>Professionele teksten en afbeeldingen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We helpen u met het creëren van professionele content voor uw website, inclusief teksten en
                  afbeeldingen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-purple-600" />
                </div>
                <CardTitle>Onderhoud en updates</CardTitle>
                <CardDescription>Zorgeloos beheer van uw website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We zorgen ervoor dat uw website altijd up-to-date en veilig is met regelmatige updates en onderhoud.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prijzen Section */}
      <section id="prijzen" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Prijzen</h2>
            <p className="text-lg text-gray-700">Transparante prijzen zonder verborgen kosten</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Basis Pakket</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">€599</span>
                  <span className="text-gray-500 ml-1">eenmalig</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Professionele website (5 pagina's)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Contactformulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Basis SEO-optimalisatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>3 maanden gratis onderhoud</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black text-white hover:bg-purple-700" onClick={openQuoteModal}>
                  Kies Basis Pakket
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-2 border-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Populair
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Premium Pakket</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">€999</span>
                  <span className="text-gray-500 ml-1">eenmalig</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Professionele website (10 pagina's)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Geavanceerd contactformulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Uitgebreide SEO-optimalisatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Social media integratie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>6 maanden gratis onderhoud</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700" onClick={openQuoteModal}>
                  Kies Premium Pakket
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Zakelijk Pakket</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">€1499</span>
                  <span className="text-gray-500 ml-1">eenmalig</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Professionele website (onbeperkt pagina's)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>E-commerce functionaliteit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Premium SEO-pakket</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Content creatie (5 pagina's)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>12 maanden gratis onderhoud</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black text-white hover:bg-purple-700" onClick={openQuoteModal}>
                  Kies Zakelijk Pakket
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Heeft u specifieke wensen of heeft u een maatwerk oplossing nodig?</p>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100" onClick={openQuoteModal}>
              Vraag een offerte op maat aan
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Portfolio</h2>
            <p className="text-lg text-gray-700">Bekijk enkele van onze recente projecten</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                  alt={`Portfolio Project ${item}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Project {item}</h3>
                  <p className="text-gray-200">Webdesign / Branding</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-black text-white hover:bg-purple-700">Bekijk meer projecten</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
            <p className="text-lg text-gray-700">Ontdek waarom klanten voor Wavizo kiezen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jan de Vries",
                company: "Bakkerij De Vries",
                text: "We zijn ontzettend blij met de website die Wavizo voor ons heeft gemaakt. Het proces was snel, professioneel, en het resultaat is precies wat we zochten!",
              },
              {
                name: "Lisa Jansen",
                company: "Jansen Interieur",
                text: "Wavizo heeft onze oude website getransformeerd naar een moderne en gebruiksvriendelijke website. Onze klanten kunnen nu gemakkelijk onze portfolio bekijken en contact met ons opnemen.",
              },
              {
                name: "Peter Bakker",
                company: "Bakker Elektronica",
                text: "De e-commerce website die Wavizo voor ons heeft gebouwd heeft onze online verkoop met 40% verhoogd. De website is snel, gebruiksvriendelijk en ziet er fantastisch uit.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om uw online aanwezigheid te verbeteren?</h2>
            <p className="text-xl mb-8 text-gray-300">Neem vandaag nog contact met ons op voor een gratis consult</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-purple-200 text-lg py-6 px-8" onClick={openQuoteModal}>
                Vraag een offerte aan
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
                onClick={() => document.getElementById("diensten")?.scrollIntoView({ behavior: "smooth" })}
              >
                Bekijk onze diensten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neem Contact Op</h2>
            <p className="text-lg text-gray-700">
              Heeft u vragen? Neem contact met ons op en we helpen u graag verder!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-gray-700">info@wavizo.nl</p>
                  <p className="text-gray-500 mt-1">We reageren binnen 24 uur</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefoon</h3>
                  <p className="text-gray-700">+31 6 12345678</p>
                  <p className="text-gray-500 mt-1">Ma-Vr: 9:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Onderwerp van uw bericht"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Uw bericht..."
                  ></textarea>
                </div>
                <Button className="w-full bg-black text-white hover:bg-purple-700">Verstuur bericht</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold">W</span>
                </div>
                <span className="font-bold text-xl text-white">Wavizo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Wij maken op maat gemaakte websites die klanten aantrekken en uw bedrijf laten groeien.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Snelle Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#over-ons" className="text-gray-400 hover:text-white transition-colors">
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="#diensten" className="text-gray-400 hover:text-white transition-colors">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="#prijzen" className="text-gray-400 hover:text-white transition-colors">
                    Prijzen
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Diensten</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Webdesign
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    SEO-optimalisatie
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Content creatie
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Onderhoud
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="text-purple-400 w-5 h-5" />
                  <span className="text-gray-400">info@wavizo.nl</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-purple-400 w-5 h-5" />
                  <span className="text-gray-400">+31 6 12345678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Wavizo. Alle rechten voorbehouden.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacybeleid
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Algemene voorwaarden
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-colors z-40"
        aria-label="Terug naar boven"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  )
}

