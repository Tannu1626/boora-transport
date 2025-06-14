"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BookingForm } from "@/components/booking-form"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setSelectedService(service)
    }
  }, [searchParams])

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
            Book Your Transport
          </h1>
          <p className="text-gray-500 md:text-xl">
            Fill out the form below to request a booking. Our team will contact you to confirm the details.
          </p>
        </div>
        <BookingForm initialService={selectedService} />
      </div>
    </div>
  )
}
