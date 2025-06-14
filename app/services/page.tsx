import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Sofa, Package } from "lucide-react"

export const metadata = {
  title: "Our Services - BOORA TRANSPORT",
  description: "Explore the comprehensive transport and logistics services offered by BOORA TRANSPORT.",
}

export default function ServicesPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Our Services</h1>
          <p className="text-gray-500 md:text-xl max-w-[800px] mx-auto">
            BOORA TRANSPORT offers professional transport services tailored to meet your specific needs. From home
            relocation to parcel delivery, we have the expertise and resources to handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col border-2 border-blue-100">
            <CardHeader className="pb-4">
              <div className="mb-4 rounded-full bg-blue-50 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-blue-800" />
              </div>
              <CardTitle className="text-center text-blue-800">Home Relocation</CardTitle>
              <CardDescription className="text-center">
                Complete home moving services with careful handling of your belongings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Full house moves (any size property)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Careful packing and unpacking services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Disassembly and reassembly of furniture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Loading and unloading assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Special care for fragile items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Student moves and flat relocations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking?service=home-relocation" className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 border-blue-100">
            <CardHeader className="pb-4">
              <div className="mb-4 rounded-full bg-blue-50 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Sofa className="h-8 w-8 text-blue-800" />
              </div>
              <CardTitle className="text-center text-blue-800">Furniture Removal</CardTitle>
              <CardDescription className="text-center">
                Professional furniture removal and disposal services.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Single item furniture collection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Full house clearance services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Office furniture removal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Eco-friendly disposal options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Furniture donation transport</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Disassembly service available</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking?service=furniture-removal" className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 border-blue-100">
            <CardHeader className="pb-4">
              <div className="mb-4 rounded-full bg-blue-50 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-blue-800" />
              </div>
              <CardTitle className="text-center text-blue-800">Parcel Delivery</CardTitle>
              <CardDescription className="text-center">
                Fast and reliable parcel delivery services across the UK.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Same-day local delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Next-day UK-wide service</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Secure handling of packages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Tracking and delivery confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Business contract services</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2 text-yellow-500">•</span>
                  <span>Insurance options available</span>
                </li> */}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/booking?service=parcel-delivery" className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-pink-50 p-8 rounded-lg mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-800">Why Choose BOORA TRANSPORT?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional service with every job, no matter how big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Reliable & Punctual</h3>
              <p className="text-gray-600">
                We understand the importance of timing. Our team arrives on schedule and completes jobs efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Experienced Team</h3>
              <p className="text-gray-600">
                Our professional staff has years of experience handling all types of moves and deliveries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Fully Insured</h3>
              <p className="text-gray-600">
                Your belongings are protected with our comprehensive insurance coverage for peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer transparent, fair pricing with no hidden fees or unexpected charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your schedule, offering evening and weekend services when needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="font-bold text-lg mb-2 text-blue-800">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go the extra mile to ensure a positive experience.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your transport needs and get a personalized quote for our services.
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
