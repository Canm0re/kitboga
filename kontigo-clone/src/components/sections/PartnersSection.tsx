"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const partners = [
  {
    src: "https://web-assets.same.dev/1072526692/898492970.svg+xml",
    alt: "Founders Inc",
    width: 120,
    height: 40
  },
  {
    src: "https://web-assets.same.dev/4070807758/1178248875.svg+xml",
    alt: "Orange Dao",
    width: 130,
    height: 40
  },
  {
    src: "https://web-assets.same.dev/2509543216/1632514845.svg+xml",
    alt: "Transpose Platform",
    width: 140,
    height: 40
  },
  {
    src: "https://web-assets.same.dev/3789389460/1263704535.svg+xml",
    alt: "Base",
    width: 100,
    height: 40
  },
  {
    src: "https://web-assets.same.dev/3010145217/3291371449.svg+xml",
    alt: "Circle",
    width: 110,
    height: 40
  },
  {
    src: "https://web-assets.same.dev/1702511076/2833608307.svg+xml",
    alt: "Thirdweb",
    width: 130,
    height: 40
  },
]

export function PartnersSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">RESPALDO</h3>
            <h2 className="text-2xl font-semibold">Aliados e inversionistas</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[60px]">
            {/* Loading placeholder */}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">RESPALDO</h3>
          <h2 className="text-2xl font-semibold">Aliados e inversionistas</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-auto w-auto max-h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
