import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ClientsSection } from '@/components/clients-section'
import { AppointmentsSection } from '@/components/appointments-section'
import { ContactSection, Footer } from '@/components/contact-section'
import { ChatWidget } from '@/components/chat-widget'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <AppointmentsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
