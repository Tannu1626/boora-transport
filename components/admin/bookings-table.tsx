"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { isSupabaseConfigured } from "@/lib/supabase"

// Mock data for bookings
const bookings = [
  {
    id: "B-1001",
    customer: "John Smith",
    service: "home-relocation",
    pickup: "London",
    destination: "Manchester",
    date: "2025-06-15",
    status: "confirmed",
  },
  {
    id: "B-1002",
    customer: "Emma Johnson",
    service: "parcel-delivery",
    pickup: "Birmingham",
    destination: "Glasgow",
    date: "2025-06-14",
    status: "in-transit",
  },
  {
    id: "B-1003",
    customer: "Michael Brown",
    service: "furniture-removal",
    pickup: "Liverpool",
    destination: "N/A",
    date: "2025-06-20",
    status: "pending",
  },
  {
    id: "B-1004",
    customer: "Sarah Davis",
    service: "parcel-delivery",
    pickup: "Edinburgh",
    destination: "London",
    date: "2025-06-13",
    status: "completed",
  },
  {
    id: "B-1005",
    customer: "Robert Wilson",
    service: "home-relocation",
    pickup: "Leeds",
    destination: "Bristol",
    date: "2025-06-16",
    status: "confirmed",
  },
  {
    id: "B-1006",
    customer: "Jennifer Martinez",
    service: "furniture-removal",
    pickup: "Cardiff",
    destination: "N/A",
    date: "2025-06-18",
    status: "pending",
  },
  {
    id: "B-1007",
    customer: "David Thompson",
    service: "parcel-delivery",
    pickup: "Newcastle",
    destination: "Southampton",
    date: "2025-06-12",
    status: "in-transit",
  },
]

export function BookingsTable() {
  const supabaseAvailable = isSupabaseConfigured()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.destination.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-blue-500">Confirmed</Badge>
      case "in-transit":
        return <Badge className="bg-yellow-500">In Transit</Badge>
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="border-blue-800 text-blue-800">
            Pending
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getServiceName = (service: string) => {
    switch (service) {
      case "home-relocation":
        return "Home Relocation"
      case "furniture-removal":
        return "Furniture Removal"
      case "parcel-delivery":
        return "Parcel Delivery"
      default:
        return service
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search bookings..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="in-transit">In Transit</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-blue-100">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{getServiceName(booking.service)}</TableCell>
                  <TableCell>
                    {booking.pickup} {booking.destination !== "N/A" ? `→ ${booking.destination}` : ""}
                  </TableCell>
                  \<TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  if (!supabaseAvailable) {
    return (
      <div className="p-4 border border-yellow-300 bg-yellow-50 rounded-md">
        <h3 className="font-bold text-yellow-800">Supabase Not Configured</h3>
        <p className="text-yellow-700">
          This is a demo view with mock data. To enable full functionality, please configure your Supabase environment
          variables.
        </p>
        <div className="mt-4">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  placeholder="Search bookings..."
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
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border border-blue-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{getServiceName(booking.service)}</TableCell>
                        <TableCell>
                          {booking.pickup} {booking.destination !== "N/A" ? `→ ${booking.destination}` : ""}
                        </TableCell>
                        \<TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                        No bookings found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
