import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kontigo | Tu asistente financiero",
  description: "Paga, ahorra y gana un 8% anual. Billetera digital en dólares y dile adiós a la inflación. Te damos la bienvenida a Kontigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </ClientBody>
    </html>
  );
}
