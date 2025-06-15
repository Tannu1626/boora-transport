import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Furniture Removal Services - BOORA TRANSPORT",
  description: "Professional furniture removal and disposal services across the UK.",
}

export default function FurnitureRemovalPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
            Furniture Removal Services
          </h1>
          <p className="text-gray-500 md:text-xl">
            Professional furniture removal and disposal services for homes and businesses.
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/furnitureremoval.png"
            alt="Furniture Removal Service"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Our Furniture Removal Service</h2>
          <p className="text-gray-600">
            Whether you're replacing old furniture, clearing an estate, or renovating your property, BOORA TRANSPORT
            provides efficient and reliable furniture removal services. We handle items of all sizes, from single pieces
            to complete house clearances, ensuring your unwanted furniture is removed with minimal disruption.
          </p>
          <p className="text-gray-600">
            Our team is equipped to handle heavy and bulky items safely, with the proper tools and techniques to prevent
            damage to your property during removal. We also offer environmentally responsible disposal options,
            including recycling and donation where possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">What We Offer</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Single item furniture collection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Full house clearance services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Office furniture removal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Eco-friendly disposal options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Furniture donation transport</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Disassembly service available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Same-day service (subject to availability)</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">Types of Furniture We Remove</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Sofas and armchairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Beds and mattresses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Wardrobes and dressers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Dining tables and chairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Office desks and chairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Appliances (fridges, washing machines, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Garden furniture</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Our Removal Process</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Assessment</h4>
                <p className="text-gray-600">
                  We discuss your furniture removal needs and provide a quote based on the items and requirements.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Scheduling</h4>
                <p className="text-gray-600">
                  We arrange a convenient time for collection that works with your schedule.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Removal</h4>
                <p className="text-gray-600">
                  Our team arrives on time, carefully removes your furniture, and loads it into our van.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-blue-900 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-blue-800">Responsible Disposal</h4>
                <p className="text-gray-600">
                  We dispose of your furniture responsibly, recycling or donating items where possible.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-blue-800">How quickly can you remove my furniture?</h3>
              <p className="text-gray-600">
                Depending on our schedule, we can often offer same-day or next-day service. For larger clearances, we
                recommend booking a few days in advance.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Do I need to disassemble furniture before collection?</h3>
              <p className="text-gray-600">
                No, our team can disassemble furniture if needed. However, if you prefer to disassemble items yourself,
                this can sometimes reduce the cost.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">What happens to the furniture after removal?</h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible disposal. Items in good condition may be donated to charity,
                while others are recycled or disposed of according to local regulations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Can you remove furniture from upstairs?</h3>
              <p className="text-gray-600">
                Yes, our team is experienced in removing furniture from all areas of a property, including upstairs
                rooms and flats with limited access.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Remove Your Furniture?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your furniture removal needs and get a personalized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                Contact Us
              </Button>
            </Link>
            <Link href="/booking?service=furniture-removal">
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
