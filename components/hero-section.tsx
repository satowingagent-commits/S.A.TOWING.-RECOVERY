"use client";

import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Banner Image - Full Width */}
      <div className="w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/satowingbanner-xw4qmTpRbltDNwo6i5scxANPNixpCU.jpg"
          alt="S.A. Towing & Recovery LLC - 1603 Frio City Rd, San Antonio, Texas 78226 - 210-434-TOWW(8699)"
          width={1920}
          height={320}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      
      {/* Truck showcase section */}
      <div className="relative bg-gradient-to-b from-background via-card to-background py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Truck Image */}
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truckpic1%20%281%29-j6WFJrcWRNmX4rFQpd9AWt2OHlsUCR.jpg"
                alt="S.A. Towing Recovery Truck"
                width={800}
                height={533}
                className="w-full h-auto"
              />
            </div>
            
            {/* Right - CTA Content */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Professional Recovery &amp; Repossession Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Serving San Antonio and surrounding areas with reliable, professional towing and vehicle recovery services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="tel:2104348699">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 210-434-8699
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#appointments">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Pickup
                  </a>
                </Button>
              </div>
              
              {/* Quick info */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> 1603 Frio City Rd, San Antonio, TX 78226
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
