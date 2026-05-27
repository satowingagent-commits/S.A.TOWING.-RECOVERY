import { Truck, Car, Wrench, Battery, KeyRound, Fuel, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Truck,
    title: "Heavy Duty Towing",
    description: "Professional towing for trucks, RVs, and commercial vehicles up to 50 tons.",
  },
  {
    icon: Car,
    title: "Light Duty Towing",
    description: "Safe and secure towing for cars, motorcycles, and small vehicles.",
  },
  {
    icon: Wrench,
    title: "Accident Recovery",
    description: "Expert recovery services for accident scenes with damage-free handling.",
  },
  {
    icon: Battery,
    title: "Jump Start Service",
    description: "Quick battery jump starts to get you back on the road fast.",
  },
  {
    icon: KeyRound,
    title: "Lockout Assistance",
    description: "Locked out? We&apos;ll get you back in your vehicle safely.",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description: "Emergency fuel delivery when you run out on the road.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive roadside assistance and towing services to keep you moving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
