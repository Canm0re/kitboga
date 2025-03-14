"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Tu dinero está 100% seguro",
  "Ahorra, paga y envía dólares sin comisión",
  "Tu cuenta personal y la de tu negocio en el mismo lugar",
  "Soporte 24/7",
  "El Zelle global que necesitabas"
]

export function DigitalWalletSection() {
  return (
    <section className="py-24 relative">
      {/* Background decorations - optional */}
      <div className="absolute inset-0 -z-10 opacity-30 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="https://web-assets.same.dev/2981968187/849522504.png"
                alt="Kontigo Cash Mockup"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-2 mb-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Kontigo Cash</p>
              <h2 className="text-3xl font-bold">Billetera digital en dólares</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Estás en el lugar correcto para manejar todo tu dinero en dólares y
              decirle adiós a la inflación. Te damos la bienvenida a Kontigo.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
        </div>
      </div>
    </section>
  )
}
