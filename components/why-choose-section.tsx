import { Shield, Clock, DollarSign, Award } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Average arrival time of 30 minutes or less, 24 hours a day, 7 days a week.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "All our drivers are certified professionals with comprehensive insurance coverage.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Transparent, upfront pricing with no hidden fees. Free estimates available.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Over 15 years of experience serving the local community with excellence.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Trusted Towing Professionals
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              When you&apos;re stranded on the road, you need a team you can trust. S.A. Towing & Recovery has been serving our community for over 15 years, providing reliable and professional towing services.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden relative">
              {/* Abstract tow truck illustration */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-8">
                {/* Road */}
                <path d="M0,320 Q200,280 400,320" stroke="currentColor" strokeWidth="40" fill="none" className="text-muted" />
                <path d="M0,320 Q200,280 400,320" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="20,20" className="text-primary" />
                
                {/* Tow truck body */}
                <rect x="80" y="180" width="180" height="100" rx="8" className="fill-primary" />
                <rect x="260" y="220" width="80" height="60" rx="4" className="fill-primary" />
                
                {/* Cab */}
                <path d="M80,180 L80,140 Q80,120 100,120 L160,120 Q180,120 180,140 L180,180" className="fill-foreground" />
                
                {/* Windows */}
                <rect x="95" y="135" width="70" height="35" rx="2" className="fill-muted" />
                
                {/* Hook arm */}
                <path d="M320,220 L340,160 L360,160" stroke="currentColor" strokeWidth="8" fill="none" className="text-foreground" strokeLinecap="round" />
                <circle cx="360" cy="160" r="12" className="fill-foreground" />
                <path d="M360,172 L360,200 Q360,210 350,210 L350,200" stroke="currentColor" strokeWidth="4" fill="none" className="text-foreground" strokeLinecap="round" />
                
                {/* Wheels */}
                <circle cx="130" cy="290" r="30" className="fill-foreground" />
                <circle cx="130" cy="290" r="15" className="fill-muted" />
                <circle cx="220" cy="290" r="30" className="fill-foreground" />
                <circle cx="220" cy="290" r="15" className="fill-muted" />
                <circle cx="300" cy="290" r="25" className="fill-foreground" />
                <circle cx="300" cy="290" r="12" className="fill-muted" />
                
                {/* Details */}
                <rect x="85" y="245" width="30" height="8" rx="2" className="fill-foreground" />
                <rect x="230" y="235" width="15" height="30" rx="2" className="fill-foreground" />
              </svg>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
