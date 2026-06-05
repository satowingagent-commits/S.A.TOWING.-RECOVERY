import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-[#070300]">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-[family-name:var(--font-marker)] text-sm font-bold tracking-widest uppercase text-[#c87820] block mb-4">
          Get In Touch
        </span>
        <h2 
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-none mb-12 text-[#ffcc44]"
          style={{ textShadow: '0 0 20px rgba(204,34,0,0.4)' }}
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="mb-7">
              <div className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Phone
              </div>
              <div className="font-sans text-lg">
                <a href="tel:+12104348699" className="text-[#ffcc44] hover:text-[#ff4400] transition-colors">
                  210-434-8699
                </a>
              </div>
            </div>

            <div className="mb-7">
              <div className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Email
              </div>
              <div className="font-sans text-lg">
                <a href="mailto:satowingagent@gmail.com" className="text-[#ffcc44] hover:text-[#ff4400] transition-colors">
                  satowingagent@gmail.com
                </a>
              </div>
            </div>

            <div className="mb-7">
              <div className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Scheduling
              </div>
              <div className="font-sans text-lg">
                <a 
                  href="https://scheduler.cleardata.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ffcc44] hover:text-[#ff4400] transition-colors"
                >
                  scheduler.cleardata.io
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-7">
              <div className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Hours
              </div>
              <div className="font-sans text-lg text-[#ffcc44]">
                Mon–Fri: 9AM–3PM
              </div>
            </div>

            <div className="mb-7">
              <div className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Service Area
              </div>
              <div className="font-sans text-lg text-[#ffcc44]">
                Contact us for coverage details
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://scheduler.cleardata.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block font-mono text-base font-bold tracking-widest uppercase bg-[#cc2200] text-[#ffcc44] px-8 py-4 rounded hover:bg-[#ff4400] transition-colors"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#070300] border-t border-[#3a1200] py-8 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-wide text-[#ffcc44] uppercase">
          S.A. Towing & Recovery
        </div>
        
        <ul className="flex flex-wrap items-center justify-center gap-6 list-none">
          <li>
            <Link href="#services" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#appointments" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
              Schedule
            </Link>
          </li>
        </ul>
        
        <div className="font-[family-name:var(--font-marker)] text-xs text-[#c87820]">
          © 2025 S.A. Towing & Recovery. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
