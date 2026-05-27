"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Car, Key, FileCheck, AlertCircle, CheckCircle2, XCircle, Truck } from "lucide-react";

type VehicleStatus = {
  found: boolean;
  vin6: string;
  releaseStatus: "ready" | "pending" | "hold";
  hasKeys: boolean;
  documentsUploaded: boolean;
  vehicleDescription?: string;
} | null;

// Demo data - in production, this would come from Supabase
const demoVehicles: Record<string, Omit<VehicleStatus & { found: true }, "vin6">> = {
  "ABC123": {
    found: true,
    releaseStatus: "ready",
    hasKeys: true,
    documentsUploaded: true,
    vehicleDescription: "2019 Honda Accord - Silver",
  },
  "XYZ789": {
    found: true,
    releaseStatus: "pending",
    hasKeys: false,
    documentsUploaded: false,
    vehicleDescription: "2021 Toyota Camry - Black",
  },
  "DEF456": {
    found: true,
    releaseStatus: "hold",
    hasKeys: true,
    documentsUploaded: false,
    vehicleDescription: "2020 Ford F-150 - White",
  },
};

export function VinLookupSection() {
  const [vin, setVin] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [vehicleStatus, setVehicleStatus] = useState<VehicleStatus>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vin.trim() || vin.length < 6) return;
    
    setIsSearching(true);
    setSearchPerformed(true);
    
    // Simulate API call - replace with actual Supabase query
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const vehicle = demoVehicles[vin.toUpperCase()];
    if (vehicle) {
      setVehicleStatus({ ...vehicle, vin6: vin.toUpperCase() });
    } else {
      setVehicleStatus(null);
    }
    
    setIsSearching(false);
  };

  const getReleaseStatusDisplay = (status: "ready" | "pending" | "hold") => {
    switch (status) {
      case "ready":
        return {
          icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
          text: "Ready for Release",
          color: "text-green-500",
          bg: "bg-green-500/10",
        };
      case "pending":
        return {
          icon: <AlertCircle className="h-6 w-6 text-yellow-500" />,
          text: "Pending Approval",
          color: "text-yellow-500",
          bg: "bg-yellow-500/10",
        };
      case "hold":
        return {
          icon: <XCircle className="h-6 w-6 text-red-500" />,
          text: "On Hold",
          color: "text-red-500",
          bg: "bg-red-500/10",
        };
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Truck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Transport Pickup Lookup
          </h2>
          <p className="text-muted-foreground mb-8">
            Enter the last 6 characters of the VIN to check vehicle release status
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <Input
            type="text"
            placeholder="Enter Last 6 Of VIN"
            value={vin}
            onChange={(e) => {
              setVin(e.target.value.toUpperCase());
              setSearchPerformed(false);
              setVehicleStatus(null);
            }}
            maxLength={6}
            className="flex-1 h-14 text-lg bg-card border-primary/50 focus:border-primary uppercase"
          />
          <Button 
            type="submit" 
            size="lg"
            disabled={isSearching || vin.length < 6}
            className="h-14 px-8 bg-secondary hover:bg-secondary/90"
          >
            <Search className="mr-2 h-5 w-5" />
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </form>

        {/* Search Results */}
        {searchPerformed && !isSearching && (
          <div className="mt-8">
            {vehicleStatus ? (
              <Card className="bg-card border-border overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Car className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {vehicleStatus.vehicleDescription || "Vehicle Found"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        VIN ending in: {vehicleStatus.vin6}
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    {/* Release Status */}
                    <div className={`flex items-center justify-between p-4 rounded-lg ${getReleaseStatusDisplay(vehicleStatus.releaseStatus).bg}`}>
                      <div className="flex items-center gap-3">
                        {getReleaseStatusDisplay(vehicleStatus.releaseStatus).icon}
                        <div>
                          <p className="font-medium text-foreground">Release Status</p>
                          <p className={`text-sm ${getReleaseStatusDisplay(vehicleStatus.releaseStatus).color}`}>
                            {getReleaseStatusDisplay(vehicleStatus.releaseStatus).text}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Keys Status */}
                    <div className={`flex items-center justify-between p-4 rounded-lg ${vehicleStatus.hasKeys ? "bg-green-500/10" : "bg-red-500/10"}`}>
                      <div className="flex items-center gap-3">
                        <Key className={`h-6 w-6 ${vehicleStatus.hasKeys ? "text-green-500" : "text-red-500"}`} />
                        <div>
                          <p className="font-medium text-foreground">Keys</p>
                          <p className={`text-sm ${vehicleStatus.hasKeys ? "text-green-500" : "text-red-500"}`}>
                            {vehicleStatus.hasKeys ? "Keys Available" : "No Keys"}
                          </p>
                        </div>
                      </div>
                      {vehicleStatus.hasKeys ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>

                    {/* Transport Documents Status */}
                    <div className={`flex items-center justify-between p-4 rounded-lg ${vehicleStatus.documentsUploaded ? "bg-green-500/10" : "bg-yellow-500/10"}`}>
                      <div className="flex items-center gap-3">
                        <FileCheck className={`h-6 w-6 ${vehicleStatus.documentsUploaded ? "text-green-500" : "text-yellow-500"}`} />
                        <div>
                          <p className="font-medium text-foreground">Transport Release Documents</p>
                          <p className={`text-sm ${vehicleStatus.documentsUploaded ? "text-green-500" : "text-yellow-500"}`}>
                            {vehicleStatus.documentsUploaded ? "Documents Uploaded" : "Documents Not Uploaded"}
                          </p>
                        </div>
                      </div>
                      {vehicleStatus.documentsUploaded ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>

                    {/* Action Button */}
                    {vehicleStatus.releaseStatus === "ready" && vehicleStatus.documentsUploaded && (
                      <a
                        href="https://www.clearplan.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                          Schedule Transport Pickup on ClearPlan
                        </Button>
                      </a>
                    )}

                    {vehicleStatus.releaseStatus !== "ready" && (
                      <p className="text-center text-muted-foreground text-sm mt-4">
                        Vehicle is not yet ready for transport pickup. Please contact us at{" "}
                        <a href="tel:210-434-8699" className="text-primary hover:underline">
                          210-434-TOWW (8699)
                        </a>{" "}
                        for more information.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vehicle Not Found</h3>
                  <p className="text-muted-foreground mb-4">
                    No vehicle found with VIN ending in: <span className="font-mono font-bold">{vin}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please verify the last 6 characters of your VIN and try again, or contact us at{" "}
                    <a href="tel:210-434-8699" className="text-primary hover:underline">
                      210-434-TOWW (8699)
                    </a>
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Demo Note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Demo VINs to test: ABC123 (ready), XYZ789 (pending), DEF456 (hold)
        </p>
      </div>
    </section>
  );
}
