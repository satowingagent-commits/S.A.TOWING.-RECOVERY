import { Truck, Sun, Package } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-[#0e0500]">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-[family-name:var(--font-marker)] text-sm font-bold tracking-widest uppercase text-[#c87820] block mb-4">
          What We Do
        </span>
        <h2 
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-none mb-6 text-[#ffcc44]"
          style={{ textShadow: '0 0 20px rgba(204,34,0,0.4)' }}
        >
          Our Services
        </h2>
        <p className="font-[family-name:var(--font-marker)] text-[#c87820] leading-relaxed max-w-[560px]">
          Full-service repossession and recovery for lien holders, clients, and dealerships — plus impound recovery, auction transports, and breakdown recovery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-14 border-2 border-[#3a1200] rounded-md overflow-hidden">
          {/* Repossession - Fire Red-Orange with Bold Black Text */}
          <div className="bg-gradient-to-br from-[#FF6B00] via-[#FF4500] to-[#CC2200] p-10 hover:from-[#FF8C00] hover:via-[#FF5500] hover:to-[#DD3300] transition-all">
            <Truck className="w-11 h-11 text-black mb-6" strokeWidth={2.5} />
            <h3 className="font-mono text-xl font-black uppercase tracking-wide mb-3 text-black">
              Repossession
            </h3>
            <p className="font-[family-name:var(--font-marker)] text-sm text-black font-bold leading-relaxed">
              Professional vehicle repossession for lien holders, clients, and dealerships. We handle skip tracing, assignment management, and secure transport with full documentation.
            </p>
          </div>

          {/* Recovery - Fire Red-Orange with Bold Black Text */}
          <div className="bg-gradient-to-br from-[#FF6B00] via-[#FF4500] to-[#CC2200] p-10 hover:from-[#FF8C00] hover:via-[#FF5500] hover:to-[#DD3300] transition-all">
            <Sun className="w-11 h-11 text-black mb-6" strokeWidth={2.5} />
            <h3 className="font-mono text-xl font-black uppercase tracking-wide mb-3 text-black">
              Recovery for Lien Holders & Clients
            </h3>
            <p className="font-[family-name:var(--font-marker)] text-sm text-black font-bold leading-relaxed">
              Vehicle recovery services for lien holders, clients, and dealerships. We handle field recovery, off-road extractions, and complex situations others won&apos;t attempt.
            </p>
          </div>

          {/* Transport & Storage - Fire Red-Orange with Bold Black Text */}
          <div className="bg-gradient-to-br from-[#FF6B00] via-[#FF4500] to-[#CC2200] p-10 hover:from-[#FF8C00] hover:via-[#FF5500] hover:to-[#DD3300] transition-all">
            <Package className="w-11 h-11 text-black mb-6" strokeWidth={2.5} />
            <h3 className="font-mono text-xl font-black uppercase tracking-wide mb-3 text-black">
              Transport & Impound Storage
            </h3>
            <p className="font-[family-name:var(--font-marker)] text-sm text-black font-bold leading-relaxed">
              Secure vehicle transport and impound storage with proper logging and chain-of-custody documentation. We keep vehicles safe and accessible for lender inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
