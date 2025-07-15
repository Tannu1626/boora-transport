"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

interface BookingFormProps {
  initialService?: string | null
}

export function BookingForm({ initialService = null }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<string | undefined>(initialService || undefined)

  useEffect(() => {
    if (initialService) {
      setService(initialService)
    }
  }, [initialService])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      pickup: formData.get('pickup') as string,
      destination: formData.get('destination') as string,
      floor: formData.get('floor') as string,
      drop: formData.get('drop') as string,
      date: formData.get('date') as string,
      houseType: formData.get('houseType') as string,
      time: formData.get('time') as string,
      plan: formData.get('plan') as string,
      details: formData.get('details') as string,
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create booking')
      }

      toast({
        title: "Booking request submitted",
        description: "We'll contact you shortly to confirm your booking.",
      })
      alert("Booking request submitted. We'll contact you shortly to confirm your booking.")

      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your booking request failed to submit. Please try again.",
        variant: "destructive",
      })
      alert("Something went wrong. Your booking request failed to submit. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 border-2 rounded-lg bg-white border-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="+44 7123 456789" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Type</Label>
          <Select name="service" value={service} onValueChange={setService} required>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home-relocation">Home Relocation</SelectItem>
              <SelectItem value="furniture-removal">Furniture Removal</SelectItem>
              <SelectItem value="parcel-delivery">Parcel Delivery</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pickup">Pickup Location</Label>
          <Input id="pickup" name="pickup" placeholder="123 Main St, London" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" name="destination" placeholder="456 Other St, Manchester" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="floor">Pickup Floor</Label>
          <Input id="floor" name="floor" placeholder="e.g., Ground Floor, 2nd Floor" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="drop">Drop Floor</Label>
          <Input id="drop" name="drop" placeholder="e.g., Ground Floor, 2nd Floor" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ""} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="houseType">House Type</Label>
          <Select name="houseType" required>
            <SelectTrigger id="houseType">
              <SelectValue placeholder="Select house type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-bed">1 Bed House</SelectItem>
              <SelectItem value="2-bed">2 Bed House</SelectItem>
              <SelectItem value="3-bed">3 Bed House</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time</Label>
          <Select name="time">
            <SelectTrigger id="time">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8:00 - 12:00)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12:00 - 16:00)</SelectItem>
              <SelectItem value="evening">Evening (16:00 - 20:00)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* plans Basic, Standard, Premium */}
        <div className="space-y-2">
          <Label htmlFor="plan">Plan</Label>
          <Select name="plan">
            <SelectTrigger id="plan">
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Basic">Basic</SelectItem>
              <SelectItem value="Standard">Standard</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="details">Additional Details</Label>
        <Textarea
          id="details"
          name="details"
          placeholder="Please provide any additional information about your booking..."
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900" disabled={loading}>
        {loading ? "Submitting..." : "Request Booking"}
      </Button>
    </form>
  )
}
