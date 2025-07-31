// utils/cron.ts
import cron from 'node-cron'

export const startCronJob = () => {
  cron.schedule('* * * * *', async () => {
    try {
      const res = await fetch('http://localhost:3000/api/ping') // replace with actual domain in production
      const data = await res.json()
      console.log('✅ Ping response:', data)
    } catch (err) {
      console.error('❌ Cron ping failed:', err)
    }
  })
}

startCronJob()
