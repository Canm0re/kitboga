"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Moneda estable,<br />
          acceso global.
        </h2>

        <Button asChild
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-white/90"
        >
          <Link href="/kontigoCard">
            Reserva tu puesto
          </Link>
        </Button>
      </div>
    </section>
  )
}
