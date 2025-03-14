"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  // Add client-side mounting check to prevent hydration errors
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Y Combinator badge */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
          <Image
            src="https://web-assets.same.dev/112526012/2717952994.svg+xml"
            alt="Y Combinator"
            width={20}
            height={20}
            unoptimized
          />
          <p className="text-sm">
            Respaldados por <span className="font-semibold">Y Combinator</span>
          </p>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl mb-4">Paga, ahorra y gana un 8% anual</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu cuenta global en dólares digitales (USDc)
            </h1>
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
            <div className="mt-8 flex items-center">
              <Image
                src="https://web-assets.same.dev/1434137765/4285331138.svg+xml"
                alt="Rating"
                width={120}
                height={24}
                unoptimized
              />
            </div>
          </div>
          {mounted && (
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] w-full">
                <Image
                  src="https://web-assets.same.dev/1902198814/2614091836.svg+xml"
                  alt="Kontigo App"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  unoptimized
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-70">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-200/20 to-orange-500/30 rounded-full blur-3xl"></div>
              </div>
              <Image
                src="https://web-assets.same.dev/1830118601/672514640.svg+xml"
                alt="Decoration"
                width={500}
                height={500}
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"
                unoptimized
              />
              <Image
                src="https://web-assets.same.dev/390756973/1274678578.svg+xml"
                alt="Floating Orange"
                width={120}
                height={120}
                className="absolute top-[20%] right-[10%] animate-float"
                unoptimized
              />
              <Image
                src="https://web-assets.same.dev/2367669099/2100800645.svg+xml"
                alt="Floating Black"
                width={100}
                height={100}
                className="absolute bottom-[15%] left-[5%] animate-float delay-500"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
