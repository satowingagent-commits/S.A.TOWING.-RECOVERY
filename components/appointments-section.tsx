export function AppointmentsSection() {
  const steps = [
    {
      num: '01',
      title: 'Click the link below',
      desc: 'Opens the Cleardata scheduling portal directly.',
    },
    {
      num: '02',
      title: 'Choose a service & time',
      desc: 'Select your service type and pick a date and time that works.',
    },
    {
      num: '03',
      title: 'Confirm & we\'ll handle it',
      desc: 'You\'ll receive a confirmation. Our team will be ready.',
    },
  ]

  return (
    <section id="appointments" className="py-24 px-4 md:px-8 bg-[#0e0500]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="font-[family-name:var(--font-marker)] text-sm font-bold tracking-widest uppercase text-[#c87820] block mb-4">
              Scheduling
            </span>
            <h2 
              className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-none mb-6 text-[#ffcc44]"
              style={{ textShadow: '0 0 20px rgba(204,34,0,0.4)' }}
            >
              Book an Appointment
            </h2>
            <p className="font-[family-name:var(--font-marker)] text-[#c87820] leading-relaxed max-w-[560px]">
              We use Cleardata to manage all appointment scheduling. It&apos;s fast, easy, and keeps everything organized on both ends.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div 
                    className="font-mono text-4xl font-bold text-[#3a1200] leading-none flex-shrink-0 w-10"
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-base tracking-wide uppercase mb-1 text-[#ffcc44]">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-marker)] text-sm text-[#c87820] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-[#180800] border border-[#3a1200] rounded-lg p-10 text-center">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase mb-3 text-[#ffcc44]">
                Schedule Now
              </h3>
              <p className="font-[family-name:var(--font-marker)] text-[#c87820] text-sm mb-8 leading-relaxed">
                Use our online scheduler to book a repossession, recovery, or storage appointment at your convenience.
              </p>
              <a 
                href="https://scheduler.cleardata.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#cc2200] text-[#ffcc44] py-4 px-8 rounded font-mono text-lg font-bold tracking-widest uppercase hover:bg-[#ff4400] transition-colors"
              >
                Open Cleardata Scheduler
              </a>
              <p className="font-[family-name:var(--font-marker)] text-xs text-[#c87820]/60 mt-4">
                Powered by Cleardata · Opens in a new tab
              </p>
            </div>

            <div className="bg-[#180800] border border-[#3a1200] rounded-lg p-6 mt-6">
              <p className="text-xs font-bold tracking-widest uppercase text-[#c87820] mb-2">
                Prefer to call?
              </p>
              <a 
                href="tel:+12104348699"
                className="font-sans text-2xl font-bold text-[#ffcc44] hover:text-[#ff4400] transition-colors"
              >
                210-434-8699
              </a>
              <p className="font-[family-name:var(--font-marker)] text-sm text-[#c87820] mt-2">
                Office Hours: Mon–Fri 9AM–3PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
