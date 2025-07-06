import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "House & Furniture Removal in London | Boora Transport & Logistics Ltd",
  description: "Boora Transport provides insured home removals, furniture delivery & parcel transport across London. Save 15% standard & get 20% off luxury item handling.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <WhatsAppButton />
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
