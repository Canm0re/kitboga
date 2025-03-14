import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Estamos en Y Combinator!",
    excerpt: "A solo 4 meses de su creación, la fintech colombiana Kontigo ya es acelerada por Y Combinator.",
    image: "https://web-assets.same.dev/4221673361/849522504.png",
    date: "Hace 1 semana",
    url: "https://www.ycombinator.com/companies/kontigo"
  },
  {
    id: 2,
    title: "La súperapp financiera en dólares",
    excerpt: "La cuenta global en dólares digitales que permitirá canalizar de manera institucional más de $5.4 billones...",
    image: "https://web-assets.same.dev/2206741642/849522504.png",
    date: "Marzo 1, 2024",
    url: "https://hispanopost.com/lanzan-kontigo-una-nueva-app-de-san-digital-en-venezuela-para-ahorrar-y-comprar-por-cuotas/"
  },
  {
    id: 3,
    title: "Kontigo: la plataforma de ahorro colectivo",
    excerpt: "Una plataforma que cautivó la atención de Silicon Valley, el epicentro mundial de la tecnología.",
    image: "https://web-assets.same.dev/2507244996/849522504.png",
    date: "Feb 21, 2024",
    url: "https://eldiario.com/2024/02/21/kontigo-plataforma-ahorro-colectivo/"
  }
]

export default function BlogPage() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">BLOG</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Noticias y novedades
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con nuestras últimas actualizaciones y descubre cómo estamos mejorando para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <span>Noticia</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={post.url} target="_blank">
                    Ver artículo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Vuelve pronto para ver más artículos sobre finanzas, criptomonedas y consejos para manejar tu dinero.
          </p>
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <Link href="/">
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
