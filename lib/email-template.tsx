interface BookingData {
  name: string
  email: string
  phone: string
  service: string
  pickup: string
  destination: string
  floor: string
  drop: string
  date?: Date | null
  houseType: string
  time?: string | null
  details?: string | null
}

export function getCustomerBookingConfirmationEmail(booking: BookingData) {
  const formatDate = (date: Date | null | undefined) => {
    if (!date) return 'Not specified'
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  return {
    subject: 'Booking Confirmation - Boora Transport & Logistics',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .booking-details { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .detail-row { display: flex; justify-content: space-between; margin: 8px 0; }
            .label { font-weight: bold; color: #1e40af; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .button { background-color: #eab308; color: #1e40af; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmation</h1>
              <p>Thank you for choosing Boora Transport & Logistics</p>
            </div>
            
            <div class="content">
              <p>Dear ${booking.name},</p>
              
              <p>We have received your booking request and will contact you shortly to confirm the details and provide a quote.</p>
              
              <div class="booking-details">
                <h3 style="color: #1e40af; margin-top: 0;">Booking Details</h3>
                
                <div class="detail-row">
                  <span class="label">Service:</span>
                  <span>${booking.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">From:</span>
                  <span>${booking.pickup}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">To:</span>
                  <span>${booking.destination}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Pickup Floor:</span>
                  <span>${booking.floor}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Drop Floor:</span>
                  <span>${booking.drop}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">House Type:</span>
                  <span>${booking.houseType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Preferred Date:</span>
                  <span>${formatDate(booking.date)}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Preferred Time:</span>
                  <span>${booking.time ? booking.time.replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}</span>
                </div>
                
                ${booking.details ? `
                <div style="margin-top: 15px;">
                  <span class="label">Additional Details:</span>
                  <p style="margin: 5px 0; padding: 10px; background-color: #f0f0f0; border-radius: 3px;">${booking.details}</p>
                </div>
                ` : ''}
              </div>
              
              <p><strong>What's Next?</strong></p>
              <ul>
                <li>Our team will review your request within 2 hours</li>
                <li>We'll contact you via phone or email to confirm details</li>
                <li>You'll receive a formal quote and booking confirmation</li>
              </ul>
              
              <p>If you have any questions, please don't hesitate to contact us:</p>
              <p>
                📞 <strong>Phone:</strong> +44 777 867 7675<br>
                📧 <strong>Email:</strong> booratransportlogistics@gmail.com
              </p>
            </div>
            
            <div class="footer">
              <p>© 2024 Boora Transport & Logistics. All rights reserved.</p>
              <p>This is an automated message, please do not reply directly to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Booking Confirmation - Boora Transport & Logistics
      
      Dear ${booking.name},
      
      We have received your booking request and will contact you shortly to confirm the details and provide a quote.
      
      Booking Details:
      - Service: ${booking.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      - From: ${booking.pickup}
      - To: ${booking.destination}
      - Pickup Floor: ${booking.floor}
      - Drop Floor: ${booking.drop}
      - House Type: ${booking.houseType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      - Preferred Date: ${formatDate(booking.date)}
      - Preferred Time: ${booking.time ? booking.time.replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}
      ${booking.details ? `- Additional Details: ${booking.details}` : ''}
      
      What's Next?
      - Our team will review your request within 2 hours
      - We'll contact you via phone or email to confirm details
      - You'll receive a formal quote and booking confirmation
      
      Contact us:
      Phone: +44 777 867 7675
      Email: booratransportlogistics@gmail.com
      
      © 2024 Boora Transport & Logistics. All rights reserved.
    `
  }
}

export function getAdminBookingNotificationEmail(booking: BookingData) {
  const formatDate = (date: Date | null | undefined) => {
    if (!date) return 'Not specified'
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  return {
    subject: `New Booking Request - ${booking.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking Request</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .booking-details { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #dc2626; }
            .detail-row { display: flex; justify-content: space-between; margin: 8px 0; }
            .label { font-weight: bold; color: #dc2626; }
            .urgent { background-color: #fef2f2; border: 1px solid #fecaca; padding: 10px; border-radius: 5px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚨 New Booking Request</h1>
              <p>Action Required</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⏰ New booking request received!</strong> Please contact the customer within 2 hours.
              </div>
              
              <div class="booking-details">
                <h3 style="color: #dc2626; margin-top: 0;">Customer Information</h3>
                
                <div class="detail-row">
                  <span class="label">Name:</span>
                  <span>${booking.name}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Email:</span>
                  <span><a href="mailto:${booking.email}">${booking.email}</a></span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Phone:</span>
                  <span><a href="tel:${booking.phone}">${booking.phone}</a></span>
                </div>
              </div>
              
              <div class="booking-details">
                <h3 style="color: #dc2626; margin-top: 0;">Service Details</h3>
                
                <div class="detail-row">
                  <span class="label">Service Type:</span>
                  <span>${booking.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">From:</span>
                  <span>${booking.pickup}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">To:</span>
                  <span>${booking.destination}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Pickup Floor:</span>
                  <span>${booking.floor}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Drop Floor:</span>
                  <span>${booking.drop}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">House Type:</span>
                  <span>${booking.houseType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Preferred Date:</span>
                  <span>${formatDate(booking.date)}</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Preferred Time:</span>
                  <span>${booking.time ? booking.time.replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}</span>
                </div>
                
                ${booking.details ? `
                <div style="margin-top: 15px;">
                  <span class="label">Additional Details:</span>
                  <p style="margin: 5px 0; padding: 10px; background-color: #f0f0f0; border-radius: 3px;">${booking.details}</p>
                </div>
                ` : ''}
              </div>
              
              <div class="urgent">
                <strong>Next Steps:</strong>
                <ul>
                  <li>Contact the customer within 2 hours</li>
                  <li>Confirm availability for the requested date</li>
                  <li>Provide a detailed quote</li>
                  <li>Update booking status in the system</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Booking Request - Action Required
      
      Customer Information:
      - Name: ${booking.name}
      - Email: ${booking.email}
      - Phone: ${booking.phone}
      
      Service Details:
      - Service: ${booking.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      - From: ${booking.pickup}
      - To: ${booking.destination}
      - Pickup Floor: ${booking.floor}
      - Drop Floor: ${booking.drop}
      - House Type: ${booking.houseType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      - Preferred Date: ${formatDate(booking.date)}
      - Preferred Time: ${booking.time ? booking.time.replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}
      ${booking.details ? `- Additional Details: ${booking.details}` : ''}
      
      Please contact the customer within 2 hours to confirm details and provide a quote.
    `
  }
}