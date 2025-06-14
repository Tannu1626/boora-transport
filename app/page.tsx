import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { Truck, Home, Sofa, Package } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">BOORA TRANSPORT</h1>
                <p className="max-w-[600px] text-gray-100 md:text-xl">
                  Reliable moving and delivery services across the UK. Home relocation, furniture removal, and parcel
                  delivery made easy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/booking">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                    Book Now
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-blue-600 hover:bg-white hover:text-blue-800"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <img
                alt="Transport Van"
                className="rounded-xl object-cover"
                height="400"
                src="/image.png"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Our Services
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional transport solutions tailored to your needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <ServiceCard
              icon={<Home className="h-12 w-12 text-blue-800" />}
              title="Home Relocation"
              description="Complete home moving services with careful handling of your belongings. We make your move stress-free."
              link="/services/home-relocation"
            />
            <ServiceCard
              icon={<Sofa className="h-12 w-12 text-blue-800" />}
              title="Furniture Removal"
              description="Professional furniture removal and disposal services. From single items to full house clearances."
              link="/services/furniture-removal"
            />
            <ServiceCard
              icon={<Package className="h-12 w-12 text-blue-800" />}
              title="Parcel Delivery"
              description="Fast and reliable parcel delivery services across the UK. Secure handling and timely delivery guaranteed."
              link="/services/parcel-delivery"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Why Choose Us
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                BOORA TRANSPORT delivers excellence in every journey
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-yellow-100 p-3 mb-4">
                <Truck className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Reliable Service</h3>
              <p className="text-gray-600">Punctual, dependable, and professional service every time.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-yellow-100 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-yellow-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Fully Insured</h3>
              <p className="text-gray-600">Your belongings are protected with our comprehensive insurance coverage.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-yellow-100 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-yellow-500"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Experienced Team</h3>
              <p className="text-gray-600">Our skilled professionals handle your items with care and expertise.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-yellow-100 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-yellow-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Customer Focused</h3>
              <p className="text-gray-600">We prioritize your needs and provide personalized service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                  Book Your Transport
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Quick and easy booking process. Get an instant quote and schedule your transport.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2 lg:max-w-none">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                What Our Clients Say
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <TestimonialCard
              name="Sarah Johnson"
              location="London"
              quote="BOORA TRANSPORT made my house move completely stress-free. The team was professional, careful with my belongings, and finished ahead of schedule!"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="James Wilson"
              location="Manchester"
              quote="I needed urgent furniture removal after a last-minute sale. BOORA responded quickly and handled everything with care. Excellent service!"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Emma Thompson"
              location="Birmingham"
              quote="I use BOORA regularly for parcel deliveries for my small business. Always on time, always professional. Highly recommended!"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your transport needs and get a personalized quote.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-800"
                >
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
      </section>
    </div>
  )
}
