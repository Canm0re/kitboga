"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhatsappSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-2 mb-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">ASESOR INTELIGENTE</p>
              <h2 className="text-3xl font-bold">Transfiere USDc y obtén un asesor financiero personalizado en WhatsApp</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Chatbot inteligente que te permite realizar transacciones y recibir asesoría personalizada las 24 horas, los 7 días de la semana.
            </p>

            <Button asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
            >
              <Link href="https://wa.me/+573223614220">
                Contacta a tu asesor
              </Link>
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[500px] w-full">
              <Image
                src="https://web-assets.same.dev/1738418054/849522504.png"
                alt="WhatsApp Advisor"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
