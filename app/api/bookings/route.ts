import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { sendBookingConfirmationEmails } from '@/lib/email-service'

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  service: z.string().min(1, 'Service is required'),
  pickup: z.string().min(1, 'Pickup location is required'),
  destination: z.string().min(1, 'Destination is required'),
  floor: z.string().min(1, 'Pickup floor is required'),
  drop: z.string().min(1, 'Drop floor is required'),
  date: z.string().optional().nullable(),
  houseType: z.string().min(1, 'House type is required'),
  time: z.string().optional().nullable(),
  plan: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = bookingSchema.parse(body)
    
    // Convert date string to Date object if provided
    let bookingDate = null
    if (validatedData.date) {
      bookingDate = new Date(validatedData.date)
    }
    
    // Save to database
    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        pickup: validatedData.pickup,
        destination: validatedData.destination,
        floor: validatedData.floor,
        drop: validatedData.drop,
        date: bookingDate,
        houseType: validatedData.houseType,
        time: validatedData.time,
        plan: validatedData.plan,
        details: validatedData.details,
      },
    })

    // Send confirmation emails
    try {
      await sendBookingConfirmationEmails({
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        service: booking.service,
        pickup: booking.pickup,
        destination: booking.destination,
        floor: booking.floor,
        drop: booking.drop,
        date: booking.date,
        houseType: booking.houseType,
        time: booking.time,
        plan: booking.plan,
        details: booking.details,
      })
    } catch (emailError) {
      console.error('Failed to send booking emails:', emailError)
      // Continue - booking was created successfully
    }
    
    return NextResponse.json(
      { 
        message: 'Booking created successfully',
        id: booking.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Error creating booking:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Validation error',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET route to retrieve bookings (for admin)
// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const status = searchParams.get('status')
    
//     const whereClause = status ? { status: status.toUpperCase() as any } : {}
    
//     const bookings = await prisma.booking.findMany({
//       where: whereClause,
//       orderBy: { createdAt: 'desc' },
//     })
    
//     return NextResponse.json(bookings)
//   } catch (error) {
//     console.error('Error fetching bookings:', error)
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }