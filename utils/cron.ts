// utils/cron.ts
import cron from 'node-cron'

export const startCronJob = () => {
  cron.schedule('* * * * *', async () => {
    try {
      const res = await fetch('https://booratransport.com/api/ping') // replace with actual domain in production
      const data = await res.json()
      console.log('✅ Ping response:', data)
    } catch (err) {
      console.error('❌ Cron ping failed:', err)
    }
  })
}

startCronJob()
