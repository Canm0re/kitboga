"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sofía Jiménez",
    image: "https://web-assets.same.dev/2158861731/849522504.png",
    text: "Feliz día, solo les estoy escribiendo para decirles que ya confirme con mi banco que el dinero ya llegó y lo único que tengo que hacer es ir a la agencia para decirles que se refleje en mi cuenta. Gracias como siempre"
  },
  {
    id: 2,
    name: "Carlos Martínez",
    image: "https://web-assets.same.dev/2800757142/849522504.png",
    text: "Los felicito por generar confianza y seguridad. Hice mi primer depósito y ya me fue acreditado, aun sigo aprendiendo pero cuando llegue cada quincena, seguire ahorrando gracias a ustedes. Bendiciones, sigan así"
  },
  {
    id: 3,
    name: "Antonio Fernández",
    image: "https://web-assets.same.dev/4245640960/849522504.png",
    text: "Excelente atención, no les doy un 100%, para mí ustedes tienen un 1000%. Los recomiendo. Mis respetos."
  },
  {
    id: 4,
    name: "Lucia Perez",
    image: "https://web-assets.same.dev/3468860275/849522504.png",
    text: "Hola! Me encanta lo que he leído y que bueno haberme tropezado con una plataforma financiera como esta! Voy a organizarme para iniciar, pero con seguridad no me arrepentiré y no desaprovechar una oportunidad como esta."
  },
  {
    id: 5,
    name: "Ana Gabriela Rodríguez",
    image: "https://web-assets.same.dev/3929700365/849522504.png",
    text: "Quedaré atenta a las nuevas actualizaciones. Porque así sea de a poquito, quiero seguir ahorrando con ustedes."
  },
  {
    id: 6,
    name: "Miguel Ramírez",
    image: "https://web-assets.same.dev/3971188377/849522504.png",
    text: "Apostando a esta gran iniciativa."
  },
  {
    id: 7,
    name: "Rafael Torres",
    image: "https://web-assets.same.dev/666185599/849522504.png",
    text: "Excelente gracias por la atención y el apoyo de todos los asesores Kontigo que estuvieron atentos a la exposición de mi caso de verdad. Dios los siga bendiciendo a cada uno por su labor."
  },
  {
    id: 8,
    name: "Eliana Cardona",
    image: "https://web-assets.same.dev/740179179/849522504.png",
    text: "He hecho varios depósitos en Kontigo y estoy conforme. Mil felicitaciones."
  },
  {
    id: 9,
    name: "Fernanda Pérez",
    image: "https://web-assets.same.dev/3252752973/849522504.png",
    text: "Voy a depositar cada 15 días Dios mediante para ver cuanto ahorro, gracias."
  },
  {
    id: 10,
    name: "Sergio Castillo",
    image: "https://web-assets.same.dev/3971188377/849522504.png",
    text: "Amigos, han sido gran apoyo en nuestra economía familiar. Kontigo ha sido mi única alternativa para poder ahorrar en dólares."
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">TESTIMONIOS</h3>
          <h2 className="text-3xl font-bold mb-2">Ellos ya confían en nosotros</h2>
          <p className="text-muted-foreground">Más de 10.000 usuarios nos recomiendan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                </div>
                <p className="text-muted-foreground text-sm">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
