"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      })
      alert("Message sent. We'll get back to you as soon as possible.")
      
      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message failed to send. Please try again.",
        variant: "destructive",
      })
      alert("Something went wrong. Your message failed to send. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Contact Us</h1>
          <p className="text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Have questions or need more information? Our team is here to help. Reach out to us using any of the methods
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
              <p className="text-gray-500">Fill out the form and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" placeholder="+44 7123 456789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select name="subject">
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="home-relocation">Home Relocation</SelectItem>
                      <SelectItem value="furniture-removal">Furniture Removal</SelectItem>
                      <SelectItem value="parcel-delivery">Parcel Delivery</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-800">Contact Information</h2>
              <p className="text-gray-500">You can also reach us using the following contact details.</p>
            </div>

            <div className="space-y-4">
              {/* <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800">Address</h3>
                  <p className="text-gray-500">
                    123 Transport Avenue
                    <br />
                    London, SW1A 1AA
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800">Phone</h3>
                  <p className="text-gray-500">
                    <a href="tel:+447778677675" className="hover:text-blue-800">
                      +44 777 867 7675
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800">Email</h3>
                  <p className="text-gray-500">
                    <a href="mailto:booratransportlogistics@gmail.com" className="hover:text-blue-800">
                      booratransportlogistics@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800">Business Hours</h3>
                  <p className="text-gray-500">
                    Monday - Sunday: 7:00 AM - 7:00 PM
                    {/* <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed */}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border rounded-lg overflow-hidden h-[300px] w-full">
              {/* In a real app, this would be a Google Maps embed */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
