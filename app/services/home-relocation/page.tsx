import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Home Relocation Services - BOORA TRANSPORT",
  description: "Professional home relocation services across the UK. We make moving homes stress-free.",
}

export default function HomeRelocationPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
            Home Relocation Services
          </h1>
          <p className="text-gray-500 md:text-xl">
            Professional and reliable home moving services to make your relocation stress-free.
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/homerelocation.jpeg"
            alt="Home Relocation Service"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Our Home Relocation Service</h2>
          <p className="text-gray-600">
            Moving home can be one of life's most stressful experiences. At BOORA TRANSPORT, we take the hassle out of
            relocating with our comprehensive home moving service. Whether you're moving to a studio flat or a
            five-bedroom house, our experienced team will ensure your belongings arrive safely at your new home.
          </p>
          <p className="text-gray-600">
            We understand that every move is unique, which is why we offer a personalized service tailored to your
            specific requirements. From careful packing and loading to transport and unloading, we handle every aspect
            of your move with professionalism and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">What We Offer</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Full house moves for properties of any size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Professional packing and unpacking services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Furniture disassembly and reassembly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Loading and unloading assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Special care for fragile and valuable items</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Student moves and flat relocations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Flexible scheduling including evenings and weekends</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">Why Choose Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Experienced and professional moving team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Fully insured service for peace of mind</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Clean, well-maintained vehicles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Punctual and reliable service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Excellent customer service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Coverage throughout the UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Our Process</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Initial Consultation</h4>
                <p className="text-gray-600">
                  We discuss your moving requirements, timeline, and any special considerations.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Customized Quote</h4>
                <p className="text-gray-600">We provide a transparent, detailed quote based on your specific needs.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Scheduling</h4>
                <p className="text-gray-600">We arrange a convenient date and time for your move.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Packing (Optional)</h4>
                <p className="text-gray-600">
                  If requested, we carefully pack your belongings using quality materials.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Moving Day</h4>
                <p className="text-gray-600">
                  Our team arrives on time, loads your belongings, and transports them to your new home.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Unloading & Setup</h4>
                <p className="text-gray-600">
                  We unload everything at your new property and place items according to your instructions.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-blue-800">How far in advance should I book?</h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 days in advance, especially for weekend moves. However, we can often
                accommodate last-minute bookings depending on availability.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Do I need to empty my drawers and wardrobes?</h3>
              <p className="text-gray-600">
                For safety and to prevent damage, we recommend emptying drawers of heavy items. Wardrobes can often be
                moved with clothes still hanging, but please discuss this with us during consultation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Are you insured?</h3>
              <p className="text-gray-600">
                Yes, we are fully insured for goods in transit and public liability, giving you complete peace of mind
                during your move.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Do you provide packing materials?</h3>
              <p className="text-gray-600">
                Yes, we can provide all necessary packing materials including boxes, bubble wrap, and tape for an
                additional fee.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Book Your Move?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your home relocation needs and get a personalized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                Contact Us
              </Button>
            </Link>
            <Link href="/booking?service=home-relocation">
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
