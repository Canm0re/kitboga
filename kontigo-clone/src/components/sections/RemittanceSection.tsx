"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function RemittanceSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-2 mb-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">REMESAS</p>
              <h2 className="text-3xl font-bold">Envía dinero desde el exterior</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Envía dinero de forma gratuita, de inmediato y en USDc, como siempre debió haber sido!
            </p>

            <Button asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link href="/kontigoCard">
                Reserva tu puesto
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px]">
              {/* This would ideally be a world map with points and connections */}
              <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://web-assets.same.dev/2129161656/3185805910.png"
                  alt="World map showing remittance connections"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Connection points on the map could be added as small dots with animations */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping animation-delay-700"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping animation-delay-1200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
