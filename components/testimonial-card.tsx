import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  image: string
}

export function TestimonialCard({ name, location, quote, image }: TestimonialCardProps) {
  return (
    <Card className="h-full border-2 border-blue-100">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden h-12 w-12 border-2 border-pink-200">
            <img
              alt={`${name} profile picture`}
              className="object-cover"
              height="48"
              src={image || "/placeholder.svg"}
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48"
            />
          </div>
          <div>
            <h3 className="font-semibold text-blue-800">{name}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic">"{quote}"</p>
      </CardContent>
    </Card>
  )
}
