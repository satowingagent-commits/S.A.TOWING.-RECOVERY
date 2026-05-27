"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Car, 
  Key, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ChevronDown,
  ChevronUp,
  Filter
} from "lucide-react";
import { storedVehicles, type StoredVehicle } from "@/lib/vehicles-data";

export function InventorySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof StoredVehicle>("daysStored");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [expandedVehicle, setExpandedVehicle] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [makeFilter, setMakeFilter] = useState<string>("");

  const uniqueMakes = useMemo(() => {
    const makes = [...new Set(storedVehicles.map(v => v.make.toUpperCase()))].sort();
    return makes;
  }, []);

  const filteredVehicles = useMemo(() => {
    let result = [...storedVehicles];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(v => 
        v.vin.toLowerCase().includes(term) ||
        v.licensePlate.toLowerCase().includes(term) ||
        v.make.toLowerCase().includes(term) ||
        v.model.toLowerCase().includes(term) ||
        v.debtor.toLowerCase().includes(term) ||
        v.client.toLowerCase().includes(term)
      );
    }

    if (makeFilter) {
      result = result.filter(v => v.make.toUpperCase() === makeFilter);
    }

    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" 
          ? aVal.localeCompare(bVal) 
          : bVal.localeCompare(aVal);
      }
      
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      
      return 0;
    });

    return result;
  }, [searchTerm, makeFilter, sortField, sortDirection]);

  const toggleSort = (field: keyof StoredVehicle) => {
    if (sortField === field) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const SortIcon = ({ field }: { field: keyof StoredVehicle }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? 
      <ChevronUp className="h-4 w-4" /> : 
      <ChevronDown className="h-4 w-4" />;
  };

  return (
    <section id="inventory" className="py-16 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stored Vehicles Inventory
          </h2>
          <p className="text-muted-foreground">
            {storedVehicles.length} vehicles currently in storage
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by VIN, plate, make, model, debtor, or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-card border-border"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="h-12"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <div className="bg-card border border-border rounded-lg p-4 mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Make</label>
                <select 
                  value={makeFilter}
                  onChange={(e) => setMakeFilter(e.target.value)}
                  className="bg-muted border border-border rounded-md px-3 py-2 text-sm"
                >
                  <option value="">All Makes</option>
                  {uniqueMakes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setMakeFilter("");
                  setSearchTerm("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground mb-4">
          Showing {filteredVehicles.length} of {storedVehicles.length} vehicles
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-semibold">
                  <button 
                    onClick={() => toggleSort("year")}
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    Vehicle <SortIcon field="year" />
                  </button>
                </th>
                <th className="text-left p-3 font-semibold hidden md:table-cell">VIN</th>
                <th className="text-left p-3 font-semibold hidden lg:table-cell">Plate</th>
                <th className="text-left p-3 font-semibold">
                  <button 
                    onClick={() => toggleSort("daysStored")}
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    Days <SortIcon field="daysStored" />
                  </button>
                </th>
                <th className="text-left p-3 font-semibold hidden sm:table-cell">Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.map((vehicle) => (
                <>
                  <tr 
                    key={vehicle.caseNumber}
                    className="border-b border-border hover:bg-muted/50 cursor-pointer"
                    onClick={() => setExpandedVehicle(
                      expandedVehicle === vehicle.caseNumber ? null : vehicle.caseNumber
                    )}
                  >
                    <td className="p-3">
                      <div className="font-medium">{vehicle.year} {vehicle.make}</div>
                      <div className="text-sm text-muted-foreground">{vehicle.model}</div>
                    </td>
                    <td className="p-3 font-mono text-sm hidden md:table-cell">
                      ...{vehicle.vin.slice(-6)}
                    </td>
                    <td className="p-3 hidden lg:table-cell">
                      {vehicle.licensePlate || "-"}
                    </td>
                    <td className="p-3">
                      <span className={`font-semibold ${vehicle.daysStored > 365 ? "text-secondary" : vehicle.daysStored > 90 ? "text-primary" : "text-foreground"}`}>
                        {vehicle.daysStored}
                      </span>
                    </td>
                    <td className="p-3 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        {vehicle.hasKeys ? (
                          <Key className="h-4 w-4 text-green-500" />
                        ) : vehicle.hasKeys === false ? (
                          <Key className="h-4 w-4 text-muted-foreground" />
                        ) : null}
                        {vehicle.hasDamage && (
                          <AlertTriangle className="h-4 w-4 text-secondary" />
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      {expandedVehicle === vehicle.caseNumber ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </td>
                  </tr>
                  {expandedVehicle === vehicle.caseNumber && (
                    <tr key={`${vehicle.caseNumber}-expanded`} className="bg-muted/30">
                      <td colSpan={6} className="p-4">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Full VIN</div>
                            <div className="font-mono text-sm">{vehicle.vin}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Recovery Date</div>
                            <div>{new Date(vehicle.recoveryDate).toLocaleDateString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Client</div>
                            <div className="text-sm">{vehicle.client}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Condition</div>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="flex items-center gap-1 text-sm">
                                <Key className="h-3 w-3" />
                                {vehicle.hasKeys ? (
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                ) : vehicle.hasKeys === false ? (
                                  <XCircle className="h-3 w-3 text-muted-foreground" />
                                ) : "?"}
                              </span>
                              <span className="flex items-center gap-1 text-sm">
                                <AlertTriangle className="h-3 w-3" />
                                {vehicle.hasDamage ? "Dmg" : "OK"}
                              </span>
                              <span className="flex items-center gap-1 text-sm">
                                <Car className="h-3 w-3" />
                                {vehicle.isDrivable ? (
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                ) : vehicle.isDrivable === false ? (
                                  <XCircle className="h-3 w-3 text-muted-foreground" />
                                ) : "?"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No vehicles found matching your search criteria.
          </div>
        )}
      </div>
    </section>
  );
}
