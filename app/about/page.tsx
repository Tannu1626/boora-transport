import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About Us - BOORA TRANSPORT",
  description: "Learn about BOORA TRANSPORT's history, mission, and values.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
            About BOORA TRANSPORT
          </h1>
          <p className="text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Your trusted partner in transport and logistics across the UK since 2025.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                BOORA TRANSPORT was founded in 2025 with a simple mission: to provide reliable, efficient, and
                cost-effective transport solutions for individuals and businesses across the UK. What started as a small
                local delivery service with just one van has grown into a comprehensive transport company serving
                clients throughout the country.
              </p>
              <p className="text-gray-600">
                Our founder recognized the need for a transport service that truly understood the unique challenges
                people face when moving homes, removing furniture, or sending parcels. With years of experience in the
                logistics industry, BOORA TRANSPORT was built on the principles of reliability, care, and customer
                satisfaction.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/about1.webp"
                alt="BOORA TRANSPORT History"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <img
                src="/images/about2.webp"
                alt="BOORA TRANSPORT Mission"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At BOORA TRANSPORT, our mission is to provide exceptional transport services that make moving, furniture
                removal, and parcel delivery as stress-free as possible for our clients. We strive to be the most
                reliable and customer-focused transport partner in the UK.
              </p>
              <p className="text-gray-600">
                We believe that successful transport is about more than just moving items from one place to another.
                It's about understanding our clients' needs, providing tailored solutions, and consistently delivering
                excellence in every aspect of our service.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-2 text-blue-800">Reliability</h3>
                <p className="text-gray-600">
                  We understand that our clients depend on timely service. We pride ourselves on our punctuality and
                  dependability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-2 text-blue-800">Care</h3>
                <p className="text-gray-600">
                  We handle your belongings as if they were our own, ensuring they arrive safely at their destination.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-2 text-blue-800">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency in all our dealings, providing fair pricing and clear
                  communication.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-2 text-blue-800">Excellence</h3>
                <p className="text-gray-600">
                  We continuously strive to improve our services and exceed customer expectations in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Team</h2>
            <p className="text-gray-600 mb-6">
              BOORA TRANSPORT employs a dedicated team of professionals, from experienced drivers to customer service
              representatives. Our team's diverse expertise allows us to provide comprehensive solutions to all your
              transport needs.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-2 border-pink-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-blue-800">Robert Boora</h3>
                <p className="text-gray-500">Founder & Director</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-2 border-pink-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-blue-800">Sarah Johnson</h3>
                <p className="text-gray-500">Operations Manager</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-2 border-pink-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-blue-800">Michael Chen</h3>
                <p className="text-gray-500">Lead Driver</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you need home relocation, furniture removal, or parcel delivery, BOORA TRANSPORT is here to help.
            Contact us today to discuss your transport needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                Contact Us
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
