import cron from 'node-cron'
import { prisma } from '@/lib/prisma'

cron.schedule('* * * * *', async () => {
  try {
    await prisma.booking.findFirst({ select: { id: true } })
    console.log('Cron ping sent to DB')
  } catch (err) {
    console.error('Cron job failed:', err)
  }
})
