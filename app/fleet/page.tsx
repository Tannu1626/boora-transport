import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Our Fleet - BOORA TRANSPORT",
  description: "Explore our diverse fleet of transport vehicles.",
}

export default function FleetPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Fleet</h1>
          <p className="text-gray-500 md:text-xl max-w-[800px] mx-auto">
            BOORA TRANSPORT maintains a modern and diverse fleet of vehicles to meet all your transport needs. From
            small vans to large trucks, we have the right vehicle for your job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Small Van"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Small Vans</CardTitle>
              <CardDescription className="mt-2">
                Perfect for small deliveries and urban transport. Ideal for packages and small items.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">Up to 800kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Volume:</span>
                  <span className="text-sm">3-4 cubic meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">Urban deliveries, small packages</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Medium Truck"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Medium Trucks</CardTitle>
              <CardDescription className="mt-2">
                Versatile vehicles for medium-sized shipments. Great balance of capacity and maneuverability.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">Up to 7,500kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Volume:</span>
                  <span className="text-sm">20-30 cubic meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">Regional deliveries, furniture</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Heavy Duty Truck"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Heavy Duty Trucks</CardTitle>
              <CardDescription className="mt-2">
                Large capacity trucks for major shipments. Ideal for long-distance and heavy cargo.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">Up to 26,000kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Volume:</span>
                  <span className="text-sm">80-100 cubic meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">Long-haul freight, bulk goods</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Refrigerated Truck"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Refrigerated Trucks</CardTitle>
              <CardDescription className="mt-2">
                Temperature-controlled vehicles for perishable goods. Maintain product integrity during transit.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">Up to 15,000kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Temperature:</span>
                  <span className="text-sm">-25°C to +25°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">Food, pharmaceuticals, flowers</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Flatbed Truck"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Flatbed Trucks</CardTitle>
              <CardDescription className="mt-2">
                Open bed trucks for oversized and irregularly shaped cargo. Easy loading from all sides.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">Up to 20,000kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Length:</span>
                  <span className="text-sm">Up to 13.6 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">Construction materials, machinery</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Container Truck"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>Container Trucks</CardTitle>
              <CardDescription className="mt-2">
                Specialized vehicles for transporting shipping containers. Seamless intermodal transport.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">20ft and 40ft containers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Weight limit:</span>
                  <span className="text-sm">Up to 30,000kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Best for:</span>
                  <span className="text-sm">International shipping, port transfers</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-500 max-w-[600px] mx-auto mb-6">
            Don't see exactly what you need? Contact us to discuss custom transport solutions tailored to your specific
            requirements.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="mr-4">
              Contact Us
            </Button>
          </Link>
          <Link href="/booking">
            <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
