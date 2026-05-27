"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyRound, Truck, Calendar, ExternalLink } from "lucide-react";

export function AppointmentsSection() {
  return (
    <section id="appointments" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Book Appointment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schedule your redemption or transport pickup through ClearPlan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Redemption Pickup Card */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                <KeyRound className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Redemption Pickup</CardTitle>
              <CardDescription className="text-muted-foreground">
                Schedule to retrieve your vehicle with proper documentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Bring valid ID and proof of ownership
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  All fees must be paid at pickup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Hours: Monday-Friday, 9AM-3PM
                </li>
              </ul>
              <a
                href="https://www.clearplan.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule on ClearPlan
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Transport Pickup Card */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Transport Pickup</CardTitle>
              <CardDescription className="text-muted-foreground">
                Schedule transport company vehicle pickup
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Use VIN lookup above to check release status
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Transport release documents must be uploaded
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Verify key availability before scheduling
                </li>
              </ul>
              <a
                href="https://www.clearplan.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule on ClearPlan
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Note */}
        <p className="text-center text-muted-foreground mt-8">
          Questions? Call us at{" "}
          <a href="tel:210-434-8699" className="text-primary hover:underline font-semibold">
            210-434-TOWW (8699)
          </a>{" "}
          or email{" "}
          <a href="mailto:satowing@sbcglobal.net" className="text-primary hover:underline">
            satowing@sbcglobal.net
          </a>
        </p>
      </div>
    </section>
  );
}
