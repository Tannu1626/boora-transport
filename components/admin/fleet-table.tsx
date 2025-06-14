"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search } from "lucide-react"

// Mock data for fleet
const vehicles = [
  {
    id: "V-5001",
    type: "Small Van",
    license: "ABC-1234",
    driver: "James Wilson",
    lastMaintenance: "2025-05-20",
    nextMaintenance: "2025-07-20",
    status: "available",
  },
  {
    id: "V-5002",
    type: "Medium Truck",
    license: "DEF-5678",
    driver: "Maria Garcia",
    lastMaintenance: "2025-05-15",
    nextMaintenance: "2025-07-15",
    status: "in-use",
  },
  {
    id: "V-5003",
    type: "Heavy Duty Truck",
    license: "GHI-9012",
    driver: "Robert Johnson",
    lastMaintenance: "2025-06-01",
    nextMaintenance: "2025-08-01",
    status: "maintenance",
  },
  {
    id: "V-5004",
    type: "Refrigerated Truck",
    license: "JKL-3456",
    driver: "Susan Brown",
    lastMaintenance: "2025-05-10",
    nextMaintenance: "2025-07-10",
    status: "available",
  },
  {
    id: "V-5005",
    type: "Flatbed Truck",
    license: "MNO-7890",
    driver: "David Lee",
    lastMaintenance: "2025-05-25",
    nextMaintenance: "2025-07-25",
    status: "in-use",
  },
  {
    id: "V-5006",
    type: "Container Truck",
    license: "PQR-1234",
    driver: "Jennifer Adams",
    lastMaintenance: "2025-06-05",
    nextMaintenance: "2025-08-05",
    status: "available",
  },
  {
    id: "V-5007",
    type: "Small Van",
    license: "STU-5678",
    driver: "Michael Clark",
    lastMaintenance: "2025-05-30",
    nextMaintenance: "2025-07-30",
    status: "out-of-service",
  },
]

export function FleetTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.license.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>
      case "in-use":
        return <Badge className="bg-blue-500">In Use</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-500">Maintenance</Badge>
      case "out-of-service":
        return <Badge variant="destructive">Out of Service</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Status:</span>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="in-use">In Use</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="out-of-service">Out of Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Last Maintenance</TableHead>
              <TableHead>Next Maintenance</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.id}</TableCell>
                  <TableCell>{vehicle.type}</TableCell>
                  <TableCell>{vehicle.license}</TableCell>
                  <TableCell>{vehicle.driver}</TableCell>
                  <TableCell>{new Date(vehicle.lastMaintenance).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(vehicle.nextMaintenance).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                        <DropdownMenuItem>Assign driver</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No vehicles found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
