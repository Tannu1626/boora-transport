import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="flex flex-col items-center text-center h-full border-2 border-blue-100 hover:border-blue-300 transition-all">
      <CardHeader>
        <div className="mb-4 rounded-full bg-blue-50 p-4 w-20 h-20 flex items-center justify-center mx-auto">
          {icon}
        </div>
        <CardTitle className="text-xl text-blue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={link}>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 w-full">Learn More</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
