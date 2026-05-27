import { HeroSection } from "@/components/hero-section";
import { VinLookupSection } from "@/components/vin-lookup-section";
import { AppointmentsSection } from "@/components/appointments-section";
import { AiSupportSection } from "@/components/ai-support-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VinLookupSection />
      <AppointmentsSection />
      <AiSupportSection />
      <Footer />
    </main>
  );
}
