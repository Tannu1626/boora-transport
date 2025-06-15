import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import {prisma} from '@/lib/prisma'; // make sure your prisma client is correctly imported

export async function GET() {
  const bookings = await prisma.booking.findMany();
  const contacts = await prisma.contactMessage.findMany();

  const workbook = new ExcelJS.Workbook();

  // Booking Sheet
  const bookingSheet = workbook.addWorksheet('Bookings');
  bookingSheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Phone', key: 'phone' },
    { header: 'Service', key: 'service' },
    { header: 'Pickup', key: 'pickup' },
    { header: 'Destination', key: 'destination' },
    { header: 'Floor', key: 'floor' },
    { header: 'Drop', key: 'drop' },
    { header: 'Date', key: 'date' },
    { header: 'House Type', key: 'houseType' },
    { header: 'Time', key: 'time' },
    { header: 'Details', key: 'details' },
    { header: 'Status', key: 'status' },
    { header: 'Created At', key: 'createdAt' },
  ];
  bookingSheet.addRows(bookings);

  // Contact Sheet
  const contactSheet = workbook.addWorksheet('Contact Messages');
  contactSheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Phone', key: 'phone' },
    { header: 'Subject', key: 'subject' },
    { header: 'Message', key: 'message' },
    { header: 'Created At', key: 'createdAt' },
  ];
  contactSheet.addRows(contacts);

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename=data.xlsx',
    },
  });
}
