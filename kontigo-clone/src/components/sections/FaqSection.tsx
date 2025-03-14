"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué es Kontigo?",
    answer: "Kontigo es una plataforma financiera que te permite manejar tus finanzas en dólares digitales (USDc). Ofrecemos servicios como billetera digital, transferencias sin comisión, inversiones con rendimiento y una tarjeta internacional."
  },
  {
    question: "¿Qué métodos de pago puedo usar con Kontigo?",
    answer: "Puedes usar diversos métodos de pago dependiendo de tu país, incluyendo transferencias bancarias, Pago Móvil, Zelle, Binance, PayPal y otros servicios locales."
  },
  {
    question: "¿Cómo puedo contactar al soporte de Kontigo?",
    answer: "Puedes contactarnos a través de WhatsApp al +57 322 361 4220, donde nuestro equipo de soporte estará disponible para ayudarte 24/7."
  },
  {
    question: "¿Cómo generan el rendimiento anual del 8%?",
    answer: "El rendimiento se genera a través de estrategias de inversión diversificadas en mercados de finanzas descentralizadas (DeFi), con un enfoque conservador que prioriza la seguridad de los fondos."
  },
  {
    question: "¿Quién los regula?",
    answer: "Kontigo está regulado por la Superintendencia Nacional de Criptoactivos y Actividades Conexas (SUNACRIP) bajo el Número LFCI-SUNA-001-2025."
  },
  {
    question: "¿Tienen tarjeta física?",
    answer: "Sí, contamos con la KontigoCard, una tarjeta híbrida (física y virtual) que te permite realizar pagos en cualquier parte del mundo donde acepten pagos con tarjeta."
  },
  {
    question: "¿Aceptan Zelle, Binance, PayPal, Pago Móvil, Wally, Nequi?",
    answer: "Sí, aceptamos múltiples métodos de pago incluyendo Zelle, Binance, PayPal y diversos servicios de pago locales dependiendo de tu país de residencia."
  }
]

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">PREGUNTAS FRECUENTES</h3>
          <h2 className="text-3xl font-bold mb-2">¿Aún tienes dudas?</h2>
          <p className="text-muted-foreground">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestra app y servicios.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
              <AccordionTrigger className="text-base font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link href="https://play.google.com/store/apps/details?id=com.kontigo.lat">
              Google Play
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://apps.apple.com/co/app/kontigo-lat/id6503321392">
              App Store
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
