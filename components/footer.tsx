import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-blue-800 text-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">BOORA TRANSPORT</h3>
            <p className="text-sm text-gray-300">Professional transport and logistics services across the UK.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy-terms-of-use" className="text-gray-300 hover:text-white">
                  Privacy Policy & Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/home-relocation" className="text-gray-300 hover:text-white">
                  Home Relocation
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-removal" className="text-gray-300 hover:text-white">
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link href="/services/parcel-delivery" className="text-gray-300 hover:text-white">
                  Parcel Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              {/* <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-yellow-400" />
                <span className="text-gray-300">123 Transport Avenue, London, UK</span>
              </li> */}
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-yellow-400" />
                <Link href="tel:+447778677675" className="text-gray-300 hover:text-white">
                  +44 777 867 7675
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-yellow-400" />
                <Link href="mailto:booratransportlogistics@gmail.com" className="text-gray-300 hover:text-white">
                  booratransportlogistics@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} BOORA TRANSPORT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
