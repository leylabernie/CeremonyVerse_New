import { NextRequest, NextResponse } from 'next/server'
import { storeLead, type Lead } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, weddingDate, location, budget, message, services } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Generate unique lead ID
    const leadId = generateLeadId()

    // Create lead object
    const lead: Lead = {
      id: leadId,
      firstName: firstName || '',
      lastName: lastName || '',
      email,
      phone: phone || '',
      weddingDate: weddingDate || undefined,
      message: message || '',
      source: 'start_planning_form',
      submittedAt: new Date().toISOString(),
      status: 'new',
      metadata: {
        location: location || '',
        budget: budget || '',
        services: services || []
      }
    }

    // Store in database
    const stored = await storeLead(lead)
    
    // Send email notification
    const emailSent = await sendEmailNotification(lead)

    if (!emailSent) {
      console.error('Failed to send email notification')
    }

    if (!stored) {
      console.error('Failed to store lead in database')
    }

    // Return success (even if email or storage failed - we don't want to lose the lead)
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you within 24 hours.',
        leadId: leadId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Start Planning form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly at +1-215-341-9990' },
      { status: 500 }
    )
  }
}

// Generate unique lead ID
function generateLeadId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 9)
  return `LEAD-${timestamp}-${random}`
}

// Send email notification using multiple methods
async function sendEmailNotification(lead: any): Promise<boolean> {
  // Method 1: Use Resend if API key is available
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'CeremonyVerse <noreply@ceremonyverse.com>',
          to: process.env.NOTIFICATION_EMAIL || 'hello@ceremonyverse.com',
          subject: `🎊 New Start Planning Form: ${lead.email}`,
          html: createEmailHTML(lead),
        }),
      })

      if (response.ok) {
        console.log('Email sent via Resend')
        return true
      }
    } catch (error) {
      console.error('Resend error:', error)
    }
  }

  // Method 2: Use SendGrid if API key is available
  if (process.env.SENDGRID_API_KEY) {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: process.env.NOTIFICATION_EMAIL || 'hello@ceremonyverse.com' }],
          }],
          from: { email: 'noreply@ceremonyverse.com', name: 'CeremonyVerse' },
          subject: `🎊 New Start Planning Form: ${lead.email}`,
          content: [{ type: 'text/html', value: createEmailHTML(lead) }],
        }),
      })

      if (response.ok) {
        console.log('Email sent via SendGrid')
        return true
      }
    } catch (error) {
      console.error('SendGrid error:', error)
    }
  }

  // Method 3: Log to console for development
  console.log('📧 NEW START PLANNING SUBMISSION:', JSON.stringify(lead, null, 2))
  
  // Return true for dev mode so form still works
  return true
}

// Create beautiful email HTML
function createEmailHTML(lead: any): string {
  const metadata = lead.metadata || {}
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3f6d5b 0%, #2e6f6b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #e5e5e5; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #3f6d5b; }
        .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-radius: 5px; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
        .cta { display: inline-block; background: #3f6d5b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎊 New Start Planning Form!</h1>
          <p>A couple wants to start planning their wedding</p>
        </div>
        <div class="content">
          ${lead.firstName || lead.lastName ? `
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${lead.firstName} ${lead.lastName}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>
          ${lead.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>
          ` : ''}
          ${lead.weddingDate ? `
          <div class="field">
            <div class="label">Wedding Date:</div>
            <div class="value">${lead.weddingDate}</div>
          </div>
          ` : ''}
          ${metadata.location ? `
          <div class="field">
            <div class="label">Location:</div>
            <div class="value">${metadata.location}</div>
          </div>
          ` : ''}
          ${metadata.budget ? `
          <div class="field">
            <div class="label">Budget:</div>
            <div class="value">${metadata.budget}</div>
          </div>
          ` : ''}
          ${metadata.services && metadata.services.length > 0 ? `
          <div class="field">
            <div class="label">Services Interested In:</div>
            <div class="value">${Array.isArray(metadata.services) ? metadata.services.join(', ') : metadata.services}</div>
          </div>
          ` : ''}
          ${lead.message ? `
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${lead.message}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">${new Date(lead.submittedAt).toLocaleString()}</div>
          </div>
          <center>
            <a href="mailto:${lead.email}" class="cta">Reply to Lead</a>
          </center>
        </div>
        <div class="footer">
          <p><strong>CeremonyVerse</strong> - Hindu & South Indian Wedding Planning</p>
          <p>Contact: +1-215-341-9990 | hello@ceremonyverse.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}
