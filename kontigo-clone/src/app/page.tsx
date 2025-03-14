import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { DigitalWalletSection } from "@/components/sections/DigitalWalletSection";
import { RemittanceSection } from "@/components/sections/RemittanceSection";
import { WhatsappSection } from "@/components/sections/WhatsappSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <DigitalWalletSection />
      <RemittanceSection />
      <WhatsappSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
