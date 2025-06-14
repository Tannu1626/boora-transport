import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, TrendingUp, MessageSquare, CalendarCheck, Clock } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-2 border-blue-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          <TrendingUp className="h-4 w-4 text-blue-800" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-800">128</div>
          <p className="text-xs text-gray-500">
            <span className="text-green-500 inline-flex items-center">
              +12% <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
      <Card className="border-2 border-blue-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
          <CalendarCheck className="h-4 w-4 text-blue-800" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-800">24</div>
          <p className="text-xs text-gray-500">
            <span className="text-red-500 inline-flex items-center">
              +4% <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            from last week
          </p>
        </CardContent>
      </Card>
      <Card className="border-2 border-blue-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
          <MessageSquare className="h-4 w-4 text-blue-800" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-800">12</div>
          <p className="text-xs text-gray-500">
            <span className="text-green-500 inline-flex items-center">
              -3 <ArrowDownRight className="h-3 w-3 ml-1" />
            </span>{" "}
            from yesterday
          </p>
        </CardContent>
      </Card>
      <Card className="border-2 border-blue-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
          <Clock className="h-4 w-4 text-blue-800" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-800">2.4h</div>
          <p className="text-xs text-gray-500">
            <span className="text-green-500 inline-flex items-center">
              -15% <ArrowDownRight className="h-3 w-3 ml-1" />
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
