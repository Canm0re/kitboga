import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function KontigoCardPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-orange-400 mb-2">KONTIGO CARD</h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Bienvenido a tu<br />Libertad Financiera!
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              La primera tarjeta de crédito y débito internacional en dólares que te da rentabilidad.
            </p>

            <div className="mt-8">
              <Button asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="#">
                  Reserva tu puesto
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="https://web-assets.same.dev/102440402/1568320287.svg+xml"
                alt="Kontigo Card"
                fill
                style={{ objectFit: "contain" }}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-60"></div>
      </section>

      {/* Features - Placeholders for the complete page */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Te presentamos el primer P2P inteligente del mundo</h2>
            <p className="text-muted-foreground mt-4">
              Cambia tus Pesos o Bolívares a dólares mediante una experiencia como ninguna otra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">Característica {item}</h3>
                <p className="text-muted-foreground">
                  Más funcionalidades serán detalladas pronto. ¡Mantente atento!
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link href="#">
                Reserva tu puesto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
