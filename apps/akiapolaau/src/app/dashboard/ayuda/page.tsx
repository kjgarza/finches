"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui"
import { Badge } from "@repo/ui"
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, ExternalLink } from "lucide-react"

export default function AyudaPage() {
  const faqs = [
    {
      question: "¿Cómo puedo invertir en CETES?",
      answer: "Para invertir en CETES, ve a la sección 'Invertir', selecciona el plazo deseado (28, 91, 182 o 364 días), ingresa el monto que deseas invertir (mínimo $100), y confirma tu inversión. Los fondos se descontarán de tu cuenta y comenzarás a generar rendimientos."
    },
    {
      question: "¿Cuándo recibiré mis rendimientos?",
      answer: "Los rendimientos de CETES se pagan al vencimiento del plazo. Para BONDDIA, los rendimientos se calculan diariamente y puedes retirarlos en cualquier momento. Los rendimientos de UDIBONOS se pagan cada 6 meses."
    },
    {
      question: "¿Puedo retirar mi dinero antes del vencimiento?",
      answer: "BONDDIA te permite retirar tu inversión en cualquier momento. Para CETES y UDIBONOS, es necesario esperar hasta la fecha de vencimiento. Si necesitas liquidez, considera invertir en BONDDIA."
    },
    {
      question: "¿Hay comisiones por invertir?",
      answer: "No cobramos comisiones por la compra de instrumentos gubernamentales. Algunas operaciones como retiros a cuentas de terceros pueden tener cargos mínimos."
    },
    {
      question: "¿Cómo configuro el ahorro recurrente?",
      answer: "En la sección 'Ahorro Recurrente', haz clic en 'Nuevo Ahorro', selecciona el monto, frecuencia (semanal, quincenal o mensual), y el instrumento. El sistema realizará automáticamente las inversiones en las fechas programadas."
    },
    {
      question: "¿Qué son los UDIBONOS?",
      answer: "Los UDIBONOS son bonos de inversión protegidos contra la inflación. Su rendimiento se ajusta con base en el valor de la UDI, lo que los hace ideales para inversiones a largo plazo."
    }
  ]

  const guides = [
    {
      title: "Guía del Inversionista Principiante",
      description: "Todo lo que necesitas saber para comenzar",
      icon: BookOpen,
      time: "10 min de lectura"
    },
    {
      title: "Cómo Maximizar tus Rendimientos",
      description: "Estrategias de inversión efectivas",
      icon: Video,
      time: "Video de 15 min"
    },
    {
      title: "Entendiendo los Instrumentos",
      description: "CETES, BONDDIA y UDIBONOS explicados",
      icon: FileText,
      time: "5 min de lectura"
    }
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div>
        <h1 className="text-2xl font-bold">Centro de Ayuda</h1>
        <p className="text-sm text-muted-foreground">
          Encuentra respuestas y soporte
        </p>
      </div>

      {/* Search */}
      <Card className="rounded-xl">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="¿En qué podemos ayudarte?"
              className="pl-10 h-12 text-base"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Contact */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-info/10">
              <MessageCircle className="h-6 w-6 text-info" />
            </div>
            <div>
              <h3 className="font-semibold">Chat en Vivo</h3>
              <p className="text-sm text-muted-foreground">Disponible 24/7</p>
            </div>
            <Button className="w-full gap-2">
              Iniciar Chat
              <Badge variant="secondary" className="ml-auto">
                En línea
              </Badge>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-success/10">
              <Phone className="h-6 w-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <p className="text-sm text-muted-foreground">800 123 4567</p>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Phone className="h-4 w-4" />
              Llamar Ahora
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-accent">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Mail className="h-4 w-4" />
              Enviar Email
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Guides */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Guías y Tutoriales</CardTitle>
          <CardDescription>
            Aprende a aprovechar al máximo tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {guides.map((guide, i) => {
              const Icon = guide.icon
              return (
                <div
                  key={i}
                  className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-info/10">
                      <Icon className="h-5 w-5 text-info" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{guide.time}</span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Preguntas Frecuentes</CardTitle>
          <CardDescription>
            Respuestas a las preguntas más comunes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="rounded-xl border-info/20 bg-gradient-to-br from-info/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold mb-2">¿No encontraste lo que buscabas?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta
              </p>
              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Contactar Soporte
              </Button>
            </div>
            <div className="hidden md:block p-4 rounded-full bg-info/10">
              <BookOpen className="h-8 w-8 text-info" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
