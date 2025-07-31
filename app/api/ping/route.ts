// app/api/ping/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    await prisma.booking.findFirst({ select: { id: true } })
    return NextResponse.json({ message: 'Ping successful' })
  } catch (err) {
    return NextResponse.json({ message: 'Ping failed' }, { status: 500 })
  }
}
