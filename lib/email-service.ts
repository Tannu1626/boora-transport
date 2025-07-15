import { resend, FROM_EMAIL, ADMIN_EMAIL } from './resend'
import { getCustomerBookingConfirmationEmail, getAdminBookingNotificationEmail } from './email-template'

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
  plan?: string | null
  details?: string | null
}

export async function sendBookingConfirmationEmails(booking: BookingData) {
  try {
    // Send confirmation email to customer
    const customerEmail = getCustomerBookingConfirmationEmail(booking)
    const customerEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [booking.email],
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    })

    // Send notification email to admin
    const adminEmail = getAdminBookingNotificationEmail(booking)
    const adminEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    })

    console.log('Customer email sent:', customerEmailResult)
    console.log('Admin email sent:', adminEmailResult)

    return {
      success: true,
      customerEmailId: customerEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    }
  } catch (error) {
    console.error('Error sending booking emails:', error)
    throw new Error('Failed to send booking confirmation emails')
  }
}

export async function sendBookingStatusUpdateEmail(
  booking: BookingData & { status: string },
  oldStatus: string
) {
  try {
    const statusMessages = {
      CONFIRMED: 'Your booking has been confirmed! We look forward to helping you with your move.',
      COMPLETED: 'Your booking has been completed. Thank you for choosing our services!',
      CANCELLED: 'Your booking has been cancelled. If you have any questions, please contact us.',
    }

    const subject = `Booking Update - ${booking.status.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}`
    const message = statusMessages[booking.status as keyof typeof statusMessages] || 'Your booking status has been updated.'

    const emailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [booking.email],
      subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
                        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Status Update</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9f9f9; }
              .status-update { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #10b981; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Booking Status Update</h1>
              </div>
              
              <div class="content">
                <p>Dear ${booking.name},</p>
                
                <div class="status-update">
                  <h3 style="color: #10b981; margin-top: 0;">Status: ${booking.status}</h3>
                  <p>${message}</p>
                </div>
                
                <p>If you have any questions about your booking, please contact us:</p>
                <p>
                  📞 <strong>Phone:</strong> +44 777 867 7675<br>
                  📧 <strong>Email:</strong> booratransportlogistics@gmail.com
                </p>
              </div>
              
              <div class="footer">
                <p>© 2024 Boora Transport & Logistics. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Booking Status Update
        
        Dear ${booking.name},
        
        Status: ${booking.status}
        ${message}
        
        If you have any questions about your booking, please contact us:
        Phone: +44 777 867 7675
        Email: booratransportlogistics@gmail.com
        
        © 2024 Boora Transport & Logistics. All rights reserved.
      `
    })

    console.log('Status update email sent:', emailResult)
    return { success: true, emailId: emailResult.data?.id }
  } catch (error) {
    console.error('Error sending status update email:', error)
    throw new Error('Failed to send status update email')
  }
}

// Contact form email
export async function sendContactEmail(contactData: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  try {
    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `New Contact Form Submission - ${contactData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9f9f9; }
              .contact-details { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #dc2626; }
              .detail-row { display: flex; justify-content: space-between; margin: 8px 0; }
              .label { font-weight: bold; color: #dc2626; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Contact Form Submission</h1>
              </div>
              
              <div class="content">
                <div class="contact-details">
                  <h3 style="color: #dc2626; margin-top: 0;">Contact Information</h3>
                  
                  <div class="detail-row">
                    <span class="label">Name:</span>
                    <span>${contactData.name}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="label">Email:</span>
                    <span><a href="mailto:${contactData.email}">${contactData.email}</a></span>
                  </div>
                  
                  ${contactData.phone ? `
                  <div class="detail-row">
                    <span class="label">Phone:</span>
                    <span><a href="tel:${contactData.phone}">${contactData.phone}</a></span>
                  </div>
                  ` : ''}
                  
                  <div class="detail-row">
                    <span class="label">Subject:</span>
                    <span>${contactData.subject}</span>
                  </div>
                </div>
                
                <div class="contact-details">
                  <h3 style="color: #dc2626; margin-top: 0;">Message</h3>
                  <p style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${contactData.message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        ${contactData.phone ? `Phone: ${contactData.phone}` : ''}
        Subject: ${contactData.subject}
        
        Message:
        ${contactData.message}
      `
    })

    // Send auto-reply to customer
    const customerEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [contactData.email],
      subject: 'Thank you for contacting us - Boora Transport & Logistics',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting us</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9f9f9; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Contacting Us</h1>
              </div>
              
              <div class="content">
                <p>Dear ${contactData.name},</p>
                
                <p>Thank you for reaching out to Boora Transport & Logistics. We have received your message and will get back to you as soon as possible, typically within 2 hours during business hours.</p>
                
                <p><strong>Your message summary:</strong></p>
                <p><strong>Subject:</strong> ${contactData.subject}</p>
                
                <p>In the meantime, if you have an urgent inquiry, please don't hesitate to call us directly at <strong>+44 777 867 7675</strong>.</p>
                
                <p>We look forward to helping you with your transport and logistics needs!</p>
                
                <p>Best regards,<br>
                The Boora Transport & Logistics Team</p>
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
        Thank You for Contacting Us
        
        Dear ${contactData.name},
        
        Thank you for reaching out to Boora Transport & Logistics. We have received your message and will get back to you as soon as possible, typically within 2 hours during business hours.
        
        Your message summary:
        Subject: ${contactData.subject}
        
        In the meantime, if you have an urgent inquiry, please don't hesitate to call us directly at +44 777 867 7675.
        
        We look forward to helping you with your transport and logistics needs!
        
        Best regards,
        The Boora Transport & Logistics Team
        
        © 2024 Boora Transport & Logistics. All rights reserved.
      `
    })

    console.log('Contact form emails sent:', { adminEmailResult, customerEmailResult })
    return { 
      success: true, 
      adminEmailId: adminEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id 
    }
  } catch (error) {
    console.error('Error sending contact emails:', error)
    throw new Error('Failed to send contact emails')
  }
}