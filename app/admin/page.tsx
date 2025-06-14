import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingsTable } from "@/components/admin/bookings-table"
// import { MessagesTable } from "@/components/admin/messages-table"
import { DashboardStats } from "@/components/admin/dashboard-stats"

export const metadata = {
  title: "Admin Dashboard - BOORA TRANSPORT",
  description: "Admin dashboard for BOORA TRANSPORT.",
}

export default async function AdminDashboard() {
  // In a real app, you would check authentication here
  // For now, we'll just render the dashboard

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-blue-800">Admin Dashboard</h1>
            <p className="text-gray-500">Manage bookings, messages, and view analytics.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        <DashboardStats />

        <Tabs defaultValue="bookings">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="bookings" className="mt-6">
            <BookingsTable />
          </TabsContent>
          <TabsContent value="messages" className="mt-6">
            {/* <MessagesTable /> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
