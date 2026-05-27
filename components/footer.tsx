import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-primary text-center mb-8">
          Contact Information
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Phone</p>
            <a 
              href="tel:2104348699" 
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              210-434-TOWW (8699)
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Email</p>
            <a 
              href="mailto:satowing@sbcglobal.net" 
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              satowing@sbcglobal.net
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Address</p>
            <p className="text-foreground font-medium text-sm">
              1603 Frio City Rd<br />
              San Antonio, TX 78226
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Office Hours</p>
            <p className="text-foreground font-medium">
              Mon-Fri 9AM-3PM
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} S.A. Towing &amp; Recovery LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
