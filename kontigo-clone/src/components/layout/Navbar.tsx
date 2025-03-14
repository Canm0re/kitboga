"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/kontigoCard", label: "Kontigo Card" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  // Use a client-side only initializer with useEffect to prevent hydration errors
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Only after component mounts, we can safely use browser APIs and state
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://web-assets.same.dev/413925553/2361357133.svg+xml"
            alt="Kontigo"
            width={110}
            height={28}
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="orange" className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90">
            <Link href="/kontigoCard">Reserva tu KontigoCard</Link>
          </Button>

          {mounted && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium p-2 hover:bg-secondary rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="orange" className="mt-4 bg-primary text-white hover:bg-primary/90">
                    <Link href="/kontigoCard" onClick={() => setIsOpen(false)}>
                      Reserva tu KontigoCard
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
