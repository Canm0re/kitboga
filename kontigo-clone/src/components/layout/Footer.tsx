"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const companyLinks = [
  { href: "https://www.linkedin.com/company/kontigolatam/", label: "Trabaja en Kontigo" },
  { href: "https://youtu.be/OUsJKu4ndHQ?si=XmOHOOT8_8S-9e53", label: "Sobre nosotros" },
  { href: "https://wa.me/+573223614220", label: "Contáctanos" },
  { href: "/termsAndConditions/returnsinfo", label: "Blog" },
]

const countries = [
  "Brasil", "Chile", "Colombia", "Ecuador", "España",
  "Estados Unidos", "México", "Perú", "Venezuela"
]

const products = [
  "Kontigo Cash", "Kochinitos", "QR de pagos", "Crédito Kontigo", "SAN digital"
]

const highlights = [
  "Ahorra en dólares", "Tarjeta híbrida", "Tarjeta de crédito",
  "Tarjeta de débito", "Transferencias en dólares", "Remesas por WhatsApp"
]

const legalLinks = [
  { href: "/termsAndConditions", label: "Términos y condiciones" },
  { href: "/privacy", label: "Privacidad" },
  { href: "https://wa.me/+573223614220", label: "Ayuda" },
  { href: "/termsAndConditions/returnsinfo", label: "Seguridad" },
]

export function Footer() {
  // Prevent hydration errors with client-side rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-background border-t pt-12 pb-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Desktop footer */}
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold mb-4">Países</h3>
            <ul className="space-y-2">
              {countries.map((country, index) => (
                <li key={index} className="text-sm">{country}</li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index} className="text-sm">{product}</li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold mb-4">Destacados</h3>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile accordions */}
          <div className="col-span-1 md:col-span-2 lg:hidden">
            {mounted && (
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="empresa">
                  <AccordionTrigger className="text-sm font-semibold">Empresa</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {companyLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} className="text-sm hover:text-primary">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="paises">
                  <AccordionTrigger className="text-sm font-semibold">Países</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {countries.map((country, index) => (
                        <li key={index} className="text-sm">{country}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="productos">
                  <AccordionTrigger className="text-sm font-semibold">Productos</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {products.map((product, index) => (
                        <li key={index} className="text-sm">{product}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="destacados">
                  <AccordionTrigger className="text-sm font-semibold">Destacados</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {highlights.map((highlight, index) => (
                        <li key={index} className="text-sm">{highlight}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="legal">
                  <AccordionTrigger className="text-sm font-semibold">Legal</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {legalLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} className="text-sm hover:text-primary">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        </div>

        {/* App store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2 h-12"
            asChild
          >
            <Link href="https://play.google.com/store/apps/details?id=com.kontigo.lat">
              <Image
                src="https://web-assets.same.dev/112526012/2717952994.svg+xml"
                alt="Google Play"
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
              Google Play
            </Link>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 h-12"
            asChild
          >
            <Link href="https://apps.apple.com/co/app/kontigo-lat/id6503321392">
              <Image
                src="https://web-assets.same.dev/112526012/2717952994.svg+xml"
                alt="App Store"
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
              App Store
            </Link>
          </Button>
        </div>

        {/* Language selector */}
        <div className="flex justify-center items-center gap-2 mt-6 text-sm">
          <button className="hover:text-primary transition-colors">Español</button>
          <span>/</span>
          <button className="hover:text-primary transition-colors">English</button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Link href="https://www.facebook.com/profile.php?id=61556180881261" className="text-muted-foreground hover:text-primary transition-colors">
            <Image
              src="https://web-assets.same.dev/408310163/2321744770.svg+xml"
              alt="Facebook"
              width={24}
              height={24}
              className="h-6 w-6"
              unoptimized
            />
          </Link>
          <Link href="https://x.com/kontigo_app" className="text-muted-foreground hover:text-primary transition-colors">
            <Image
              src="https://web-assets.same.dev/3105551855/1602827842.svg+xml"
              alt="Twitter"
              width={24}
              height={24}
              className="h-6 w-6"
              unoptimized
            />
          </Link>
          <Link href="https://wa.me/+573223614220" className="text-muted-foreground hover:text-primary transition-colors">
            <Image
              src="https://web-assets.same.dev/1428521177/3701768083.svg+xml"
              alt="WhatsApp"
              width={24}
              height={24}
              className="h-6 w-6"
              unoptimized
            />
          </Link>
          <Link href="https://www.instagram.com/kontigo.app/" className="text-muted-foreground hover:text-primary transition-colors">
            <Image
              src="https://web-assets.same.dev/4186071080/1622278065.svg+xml"
              alt="Instagram"
              width={24}
              height={24}
              className="h-6 w-6"
              unoptimized
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>© 2025 Kontigo, Inc. All rights reserved.</p>
          <p className="mt-4 max-w-4xl mx-auto">
            Kontigo, Inc. ('Kontigo') (i) es una institución con Licencia de funcionamiento para el intercambio regulada por la Superintendencia Nacional de Criptoactivos y Actividades Conexas (SUNACRIP) bajo el Número LFCI-SUNA-001-2025, representada mediante la subsidiaria y representante de marca Oha Technology C.A. sociedad constituida y existente de conformidad con las leyes de la República Bolivariana de Venezuela, con domicilio fiscal en Caracas, Venezuela e identificada con RIF J502383301. Fuera del territorio de la República Bolivariana de Venezuela, Kontigo, Inc no presta ni ofrece servicios financieros ni lleva a cabo ningún tipo de actividad propia de las entidades financieras que requieren autorización para su funcionamiento, (ii) no realiza actividades de captación de dinero conforme con la normativa estadounidense. Los activos digitales disponibles en los servicios ofrecidos por Kontigo no son reconocidos como moneda de curso legal conforme con la normativa americana.
          </p>
        </div>
      </div>
    </footer>
  )
}
