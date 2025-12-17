# 📅 Calendly Booking System Setup Guide

## Overview

The booking system is **fully functional** and integrated into your website. You just need to connect your Calendly account to make it live.

## Current Status

✅ **Booking page created**: `/book-consultation`  
✅ **Navigation updated**: "Book Consultation" button links to booking page  
✅ **Calendly widget embedded**: Ready to accept your account URL  
✅ **Professional design**: Matches your website's Kalki Fashion + Boho Studio aesthetic  
✅ **Mobile responsive**: Works perfectly on all devices  
✅ **SEO optimized**: Full metadata and structured content  

⚠️ **Action Required**: Replace demo Calendly URL with your actual account

---

## Step-by-Step Setup (10 minutes)

### Step 1: Create Your Calendly Account

1. Go to **https://calendly.com/signup**
2. Sign up with your business email (hello@ceremonyverse.com recommended)
3. Choose the **Free plan** (sufficient for most businesses)
4. Complete the onboarding wizard

### Step 2: Create Your Event Type

1. Click **"+ New Event Type"** in Calendly dashboard
2. Select **"One-on-One"** meeting type
3. Configure the event:

   **Basic Settings:**
   - **Event Name**: `Free Wedding Consultation`
   - **Duration**: `30 minutes`
   - **Location**: `Zoom` or `Google Meet` (Calendly auto-generates links)

   **Description Template:**
   ```
   Let's discuss your Indian-American fusion wedding vision! This 30-minute consultation is completely free with no obligation.

   What we'll cover:
   - Your wedding vision and cultural elements
   - Budget discussion and escrow protection
   - Timeline and planning roadmap
   - Q&A about our services

   No pressure, just honest conversation about creating your perfect day.
   ```

   **Availability:**
   - Set your working hours (Mon-Fri 9am-7pm EST, Sat 10am-4pm EST)
   - Configure buffer time between meetings (15 minutes recommended)
   - Set minimum notice period (24 hours recommended)

   **Questions to Ask:**
   - Full Name (required)
   - Email (required)
   - Phone Number (required)
   - Wedding Date (optional)
   - How did you hear about us? (optional)
   - What's most important to you for your wedding? (optional)

4. Click **"Save & Close"**

### Step 3: Get Your Calendly URL

1. Go to your event type
2. Click **"Copy Link"** button
3. Your URL will look like: `https://calendly.com/your-username/free-wedding-consultation`
4. **IMPORTANT**: Keep this URL handy for the next step

### Step 4: Update Your Website

1. Open the file: `components/calendly-embed.tsx`
2. Find line 31: `const calendlyUrl = "https://calendly.com/demo-account/30min"`
3. Replace with your actual URL: `const calendlyUrl = "https://calendly.com/your-username/free-wedding-consultation"`
4. Save the file
5. The change will automatically appear on your live website (hot reload)

**Example:**
```typescript
// BEFORE (Demo)
const calendlyUrl = "https://calendly.com/demo-account/30min"

// AFTER (Your Account)
const calendlyUrl = "https://calendly.com/ceremonyverse/free-wedding-consultation"
```

### Step 5: Test Your Booking System

1. Visit your website: `/book-consultation`
2. Try booking an appointment
3. Verify you receive confirmation email
4. Check your Calendly dashboard for the booking
5. Test the cancellation/rescheduling flow

---

## Advanced Configuration (Optional)

### Email Notifications

Calendly automatically sends:
- ✅ Confirmation emails to clients (with calendar invite)
- ✅ Reminder emails (24 hours and 1 hour before)
- ✅ Follow-up emails after the meeting
- ✅ Notifications to you for new bookings

### Branding Customization

**Free Plan Limitations:**
- Calendly logo appears in emails
- Calendly branding on booking page

**Paid Plan Benefits ($10-12/month):**
- Remove Calendly branding
- Add your logo and brand colors
- Custom email templates
- SMS reminders
- Workflow automations
- Multiple event types

### Integration Options

Connect Calendly with your existing tools:
- **Google Calendar / Outlook**: Automatic sync (required)
- **Zoom / Google Meet**: Auto-generate meeting links
- **Stripe**: Accept deposits or payments
- **Salesforce / HubSpot**: CRM integration
- **Zapier**: Connect to 5,000+ apps
- **Google Analytics**: Track booking conversions

---

## Alternatives to Calendly

If you prefer other solutions:

### 1. Cal.com (Open Source)
- **Website**: https://cal.com
- **Pros**: Self-hosted option, no branding, very customizable
- **Cons**: More technical setup required
- **Price**: Free tier available, $12/mo for premium

### 2. Acuity Scheduling (Squarespace)
- **Website**: https://acuityscheduling.com
- **Pros**: Very professional, excellent UX, payment processing
- **Cons**: More expensive ($16/mo minimum)
- **Price**: $16-$61/mo

### 3. Koalendar
- **Website**: https://koalendar.com
- **Pros**: Unlimited bookings on free plan, clean UI
- **Cons**: Fewer integrations
- **Price**: Free forever plan available

### 4. SimplyBook.me
- **Website**: https://simplybook.me
- **Pros**: Feature-rich, good for service businesses
- **Cons**: Complex for simple use cases
- **Price**: Free plan available, paid from $8.25/mo

**To switch to another service:**
1. Sign up for your chosen platform
2. Create your booking event
3. Get the embed code or URL
4. Update `components/calendly-embed.tsx` with new widget code

---

## Troubleshooting

### Widget Not Loading
- **Check**: Is your Calendly URL correct?
- **Verify**: Did you copy the full URL including `https://`?
- **Test**: Try your Calendly link directly in a browser

### Bookings Not Syncing
- **Check**: Is your Google Calendar connected in Calendly settings?
- **Verify**: Did you grant calendar permissions?
- **Fix**: Go to Calendly → Settings → Calendar Connections

### Wrong Timezone
- **Fix**: Update timezone in Calendly account settings
- **Location**: Settings → My Calendly → Timezone

### Not Receiving Notifications
- **Check**: Email notification settings in Calendly
- **Verify**: Check spam folder
- **Fix**: Add noreply@calendly.com to contacts

### Double Bookings
- **Fix**: Enable calendar conflict checking
- **Location**: Settings → Calendar Connections → Check for conflicts

---

## Best Practices

### 1. Set Buffer Times
Add 15-30 minutes between meetings to avoid back-to-back stress

### 2. Require Phone Numbers
Essential for last-minute communication or rescheduling

### 3. Send Prep Materials
Use Calendly's confirmation email to send:
- What to prepare for the call
- Zoom/Meet link (auto-included)
- Your contact information

### 4. Set Maximum Advance Booking
Limit bookings to 60-90 days in advance (common for wedding planning)

### 5. Enable Reminders
Reduce no-shows with:
- 24-hour email reminder
- 1-hour email reminder
- SMS reminder (paid plans)

### 6. Add Your Availability Smart
Block out:
- Lunch breaks
- Buffer time
- Personal time
- Existing client meetings

---

## Analytics & Tracking

### Built-in Google Analytics Tracking

Your website already tracks:
- ✅ Booking page visits
- ✅ Form interactions
- ✅ "Book Consultation" button clicks
- ✅ Lead generation events

### Check Your Stats
1. Go to Google Analytics dashboard
2. Navigate to **Events**
3. Look for `generate_lead` events from booking page

### Meta Pixel Tracking
Facebook/Instagram ads also track booking conversions automatically.

---

## Support & Help

### Calendly Support
- Help Center: https://help.calendly.com
- Community: https://community.calendly.com
- Email: support@calendly.com

### Your Website Support
If you have technical issues with the integration:
1. Check the browser console for errors (F12 → Console)
2. Verify the Calendly URL is correct in `calendly-embed.tsx`
3. Clear browser cache and try again
4. Test in incognito/private browsing mode

---

## Summary Checklist

Before going live:

- [ ] Calendly account created
- [ ] "Free Wedding Consultation" event type configured
- [ ] Availability hours set correctly
- [ ] Google Calendar connected
- [ ] Zoom/Meet integration enabled
- [ ] Booking questions configured
- [ ] Email notifications enabled
- [ ] Calendly URL copied
- [ ] `components/calendly-embed.tsx` updated with your URL
- [ ] Test booking completed successfully
- [ ] Confirmation email received
- [ ] Meeting appears in your calendar

---

## Next Steps After Setup

1. **Remove the setup notice**: 
   - Edit `components/calendly-embed.tsx`
   - Delete the yellow "Setup Required" box (lines 41-69)

2. **Promote your booking system**:
   - Share the booking page: `/book-consultation`
   - Add to email signatures
   - Include in social media bios
   - Feature in marketing materials

3. **Monitor performance**:
   - Check Google Analytics for booking conversions
   - Track no-show rates
   - Adjust availability based on demand

---

**🎉 Your booking system is ready to generate leads!**

Once you complete the Calendly setup, you'll have a professional, automated consultation booking system that works 24/7 to capture wedding planning clients.
