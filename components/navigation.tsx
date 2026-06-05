'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-16 bg-[#070300]/95 backdrop-blur-sm border-b border-[#3a1200]">
      <Link 
        href="/" 
        className="font-[family-name:var(--font-heading)] font-bold text-lg md:text-xl tracking-wider text-[#ffcc44] uppercase"
        style={{ textShadow: '0 0 10px rgba(204,34,0,0.5)' }}
      >
        S.A. Towing & Recovery
      </Link>
      
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
        <li>
          <Link href="#services" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="#clients" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
            Who We Serve
          </Link>
        </li>
        <li>
          <Link href="#appointments" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
            Schedule
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-[family-name:var(--font-marker)] text-xs font-bold tracking-widest uppercase text-[#c87820] hover:text-[#ffcc44] transition-colors">
            Contact
          </Link>
        </li>
      </ul>
      
      <a 
        href="https://scheduler.cleardata.io/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-mono text-xs font-bold tracking-wider uppercase bg-[#cc2200] text-[#ffcc44] px-3 py-2 rounded hover:bg-[#ff4400] transition-colors"
      >
        Book Appointment
      </a>
    </nav>
  )
}
