export function ClientsSection() {
  const primaryClients = [
    'Banks & Credit Unions',
    'Buy-Here-Pay-Here Dealers',
    'Private Lenders',
    'Finance Companies',
    'Fleet & Commercial Lenders',
  ]

  const whyChoose = [
    'Licensed, bonded, and fully insured',
    'Assignment & paperwork management',
    'Detailed condition reports on every vehicle',
    'Secure impound with lender access',
    'Fast response times, Mon–Fri, 9AM–3PM',
    'Professional, compliant operations',
  ]

  return (
    <section id="clients" className="py-24 px-4 md:px-8 bg-[#070300]">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-[family-name:var(--font-marker)] text-sm font-bold tracking-widest uppercase text-[#c87820] block mb-4">
          Who We Serve
        </span>
        <h2 
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-none mb-6 text-[#ffcc44]"
          style={{ textShadow: '0 0 20px rgba(204,34,0,0.4)' }}
        >
          Built for Lenders & Institutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-12">
          <div>
            <p className="font-[family-name:var(--font-marker)] text-[#c87820] leading-relaxed">
              We partner with financial institutions and auto dealers who need reliable, compliant repossession and recovery on their schedule. Our clients trust us with their assets because we treat every assignment with precision and professionalism.
            </p>
            <div className="mt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#c87820] mb-4">
                Our Primary Clients
              </p>
              <ul className="flex flex-col gap-3">
                {primaryClients.map((client) => (
                  <li key={client} className="flex items-center gap-3 font-[family-name:var(--font-marker)] text-[#ffcc44]">
                    <span className="w-3 h-3 rounded-full bg-[#cc2200] flex-shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#c87820] mb-4">
              Why Choose S.A. Towing
            </p>
            <ul className="flex flex-col gap-3">
              {whyChoose.map((reason) => (
                <li key={reason} className="flex items-center gap-3 font-[family-name:var(--font-marker)] text-[#ffcc44]">
                  <span className="w-3 h-3 rounded-full bg-[#cc2200] flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
