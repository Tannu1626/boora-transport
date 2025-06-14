import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Parcel Delivery Services - BOORA TRANSPORT",
  description: "Fast and reliable parcel delivery services across the UK.",
}

export default function ParcelDeliveryPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
            Parcel Delivery Services
          </h1>
          <p className="text-gray-500 md:text-xl">Fast, reliable, and secure parcel delivery services across the UK.</p>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Parcel Delivery Service"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Our Parcel Delivery Service</h2>
          <p className="text-gray-600">
            BOORA TRANSPORT offers efficient and reliable parcel delivery services for individuals and businesses
            throughout the UK. Whether you need to send a single package or have regular shipping requirements, our
            dedicated team ensures your parcels reach their destination safely and on time.
          </p>
          <p className="text-gray-600">
            Using our modern fleet of vans and experienced drivers, we provide a professional delivery service that you
            can depend on. From documents and small packages to larger items, we handle your shipments with care and
            attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">What We Offer</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Same-day local delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Next-day UK-wide service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Secure handling of packages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Tracking and delivery confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Business contract services</span>
              </li>
              {/* <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Insurance options available</span>
              </li> */}
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Flexible collection times</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">Types of Parcels We Deliver</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Documents and letters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Small packages and gifts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>E-commerce orders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Business supplies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Fragile items (with special handling)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Larger boxes and packages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Regular shipments for businesses</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Our Delivery Process</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Booking</h4>
                <p className="text-gray-600">
                  Contact us with your delivery details, including collection and delivery addresses, parcel size, and
                  preferred timeframe.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Collection</h4>
                <p className="text-gray-600">
                  Our driver arrives at the specified time to collect your parcel, ensuring it's properly secured for
                  transport.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Transport</h4>
                <p className="text-gray-600">
                  Your parcel is transported safely to its destination using the most efficient route.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Delivery</h4>
                <p className="text-gray-600">
                  We deliver your parcel to the recipient, obtaining proof of delivery where required.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Confirmation</h4>
                <p className="text-gray-600">
                  You receive confirmation once your parcel has been successfully delivered.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-blue-800">How quickly can you deliver my parcel?</h3>
              <p className="text-gray-600">
                For local deliveries, we offer same-day service if booked before noon. For UK-wide deliveries, we
                typically offer next-day service, depending on the destination.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Is there a weight or size limit for parcels?</h3>
              <p className="text-gray-600">
                We can handle parcels up to 30kg in weight. For size, our standard service accommodates parcels up to
                1.2m x 0.6m x 0.6m. For larger items, please contact us for a custom quote.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Do you provide packaging materials?</h3>
              <p className="text-gray-600">
                We don't typically provide packaging materials, so please ensure your items are properly packaged before
                collection. However, we can advise on appropriate packaging for different types of items.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Can I track my parcel?</h3>
              <p className="text-gray-600">
                Yes, we provide tracking information for all deliveries. You'll receive updates on the status of your
                parcel throughout the delivery process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Send a Parcel?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to arrange your parcel delivery and experience our fast, reliable service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                Contact Us
              </Button>
            </Link>
            <Link href="/booking?service=parcel-delivery">
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
