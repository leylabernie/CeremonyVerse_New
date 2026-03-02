import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, firstName, resource } = await request.json()

    if (!email || !firstName) {
      return NextResponse.json({ error: "Email and first name are required" }, { status: 400 })
    }

    // Send email with PDF using Resend or SendGrid
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    if (RESEND_API_KEY) {
      // Use Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CeremonyVerse <hello@ceremonyverse.com>",
          to: email,
          subject: "Your Indian Wedding Planning Timeline PDF",
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #2d2d2d; font-size: 28px; font-weight: 300; margin-bottom: 20px;">
                Hi ${firstName},
              </h1>
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for downloading our Indian Wedding Planning Timeline! This guide will help you navigate the complexities of planning a multi-day Indian or fusion wedding.
              </p>
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                <strong>What's inside:</strong>
              </p>
              <ul style="color: #666; font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
                <li>12-14 month planning timeline</li>
                <li>Event sequencing for Mehendi, Sangeet, Wedding, and Reception</li>
                <li>India sourcing coordination timeline</li>
                <li>Vendor booking milestones</li>
                <li>Final month checklist</li>
              </ul>
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                The PDF is attached to this email. If you have any questions about planning your Indian wedding, we're here to help.
              </p>
              <a href="https://ceremonyverse.com/book-consultation" style="display: inline-block; background: #c4a574; color: white; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-size: 16px;">
                Book a Free Consultation
              </a>
              <p style="color: #999; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                CeremonyVerse — Indian & Fusion Wedding Planning<br>
                <a href="https://ceremonyverse.com" style="color: #c4a574;">ceremonyverse.com</a>
              </p>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }
    } else if (SENDGRID_API_KEY) {
      // Use SendGrid as fallback
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email }] }],
          from: { email: "hello@ceremonyverse.com", name: "CeremonyVerse" },
          subject: "Your Indian Wedding Planning Timeline PDF",
          content: [
            {
              type: "text/html",
              value: `
                <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                  <h1 style="color: #2d2d2d;">Hi ${firstName},</h1>
                  <p>Thank you for downloading our Indian Wedding Planning Timeline! Check the attachment for your PDF.</p>
                  <p><a href="https://ceremonyverse.com/book-consultation">Book a Free Consultation</a></p>
                </div>
              `,
            },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }
    }

    // Also notify the business
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL
    if (NOTIFICATION_EMAIL && RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CeremonyVerse <hello@ceremonyverse.com>",
          to: NOTIFICATION_EMAIL,
          subject: `New Lead: ${firstName} downloaded ${resource}`,
          html: `
            <p><strong>New lead captured:</strong></p>
            <p>Name: ${firstName}</p>
            <p>Email: ${email}</p>
            <p>Resource: ${resource}</p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead magnet error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
