import { SanAntonioSkyline } from './san-antonio-skyline'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-24 pb-16 overflow-hidden bg-[#070300]">
      {/* Skyline SVG Background */}
      <SanAntonioSkyline />
      
      {/* Gradient Overlays */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 50% 100%, rgba(204,34,0,0.4) 0%, transparent 65%),
            radial-gradient(ellipse 50% 35% at 50% 95%, rgba(255,68,0,0.25) 0%, transparent 55%)
          `
        }}
      />
      
      {/* Content */}
      <div className="relative z-[2] max-w-[1100px] mx-auto w-full">
        <div 
          className="inline-block font-[family-name:var(--font-marker)] text-sm font-bold tracking-widest uppercase border border-[#3a1200] px-3 py-1 rounded-sm mb-6 bg-[#180800]/80 text-[#c87820]"
        >
          Licensed & Insured · Serving Banks & Lenders
        </div>
        
        <h1 
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] uppercase tracking-tight max-w-[900px] text-[#ffcc44]"
          style={{ 
            textShadow: '0 0 30px rgba(204,34,0,0.6), 0 0 60px rgba(204,34,0,0.3)'
          }}
        >
          Repossession<br />
          <span className="text-[#cc2200]">&amp; Recovery</span><br />
          Done Right.
        </h1>
        
        <p 
          className="mt-8 max-w-[520px] text-lg leading-relaxed font-[family-name:var(--font-marker)] text-[#c87820]"
        >
          S.A. Towing & Recovery specializes in professional vehicle repossession, off-road and water recovery, and secure impound storage — trusted by banks, credit unions, and buy-here-pay-here dealers.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-10">
          <a 
            href="https://scheduler.cleardata.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-base font-bold tracking-widest uppercase px-8 py-4 rounded transition-all hover:-translate-y-0.5 bg-[#cc2200] text-[#ffcc44] hover:bg-[#ff4400]"
          >
            Schedule via Cleardata
          </a>
          <a 
            href="#services"
            className="font-mono text-base font-bold tracking-widest uppercase px-8 py-4 rounded border-2 border-[#3a1200] text-[#c87820] hover:border-[#cc2200] hover:text-[#ffcc44] transition-colors"
          >
            Our Services
          </a>
        </div>
        
        <div 
          className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-10 border-t border-[#3a1200]/50"
        >
          <div>
            <div 
              className="font-mono text-4xl font-bold text-[#ffcc44]"
              style={{ 
                textShadow: '0 0 20px rgba(204,34,0,0.5)'
              }}
            >
              M–F
            </div>
            <div className="font-sans text-xs font-bold tracking-widest uppercase mt-1 text-[#c87820]">
              9AM – 3PM
            </div>
          </div>
          <div>
            <div 
              className="font-mono text-4xl font-bold text-[#ffcc44]"
              style={{ 
                textShadow: '0 0 20px rgba(204,34,0,0.5)'
              }}
            >
              100%
            </div>
            <div className="font-sans text-xs font-bold tracking-widest uppercase mt-1 text-[#c87820]">
              Licensed & Insured
            </div>
          </div>
          <div>
            <div 
              className="font-mono text-4xl font-bold text-[#ffcc44]"
              style={{ 
                textShadow: '0 0 20px rgba(204,34,0,0.5)'
              }}
            >
              3
            </div>
            <div className="font-sans text-xs font-bold tracking-widest uppercase mt-1 text-[#c87820]">
              Core Services
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
