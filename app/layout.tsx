import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S.A. Towing & Recovery | Repossession & Vehicle Recovery in San Antonio, TX',
  description: 'S.A. Towing & Recovery (SA Towing) provides professional vehicle repossession, off-road and water recovery, transport, and secure impound storage in San Antonio, TX. Trusted by banks, credit unions, lien holders, and buy-here-pay-here dealers.',
  keywords: 'SA Towing, S.A. Towing, satowing, repossession, repo, vehicle recovery, car recovery, auto repossession, impound storage, vehicle transport, skip tracing, lien holder recovery, recovery agent, towing San Antonio, repossession San Antonio TX',
  authors: [{ name: 'S.A. Towing & Recovery' }],
  robots: 'index, follow, max-image-preview:large',
  openGraph: {
    type: 'website',
    siteName: 'S.A. Towing & Recovery',
    title: 'S.A. Towing & Recovery | Repossession & Vehicle Recovery in San Antonio, TX',
    description: 'Professional vehicle repossession, recovery, transport, and secure impound storage in San Antonio, TX. Trusted by banks, credit unions, lien holders, and dealers.',
    url: 'https://satowing.live/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.A. Towing & Recovery | Repossession & Vehicle Recovery in San Antonio, TX',
    description: 'Professional vehicle repossession, recovery, transport, and secure impound storage in San Antonio, TX. Trusted by banks, credit unions, lien holders, and dealers.',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'San Antonio',
  },
}

export const viewport = {
  themeColor: '#cc2200',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="canonical" href="https://satowing.live/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["AutoRepair", "TowingService", "LocalBusiness"],
              "name": "S.A. Towing & Recovery",
              "alternateName": ["SA Towing", "SA Towing & Recovery", "S.A. Towing"],
              "description": "Professional vehicle repossession, off-road and water recovery, transport, and secure impound storage serving banks, credit unions, lien holders, and dealerships in San Antonio, TX.",
              "url": "https://satowing.live/",
              "telephone": "+1-210-434-8699",
              "email": "satowingagent@gmail.com",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "San Antonio",
                "addressRegion": "TX"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Antonio",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "15:00"
              }],
              "knowsAbout": ["Vehicle Repossession", "Auto Recovery", "Skip Tracing", "Impound Storage", "Vehicle Transport"],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Repossession",
                    "description": "Professional vehicle repossession for lien holders, clients, and dealerships, including skip tracing, assignment management, and secure transport with full documentation."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Recovery for Lien Holders & Clients",
                    "description": "Field recovery, off-road extractions, and complex vehicle recovery for lien holders, clients, and dealerships."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transport & Impound Storage",
                    "description": "Secure vehicle transport and impound storage with proper logging and chain-of-custody documentation."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
