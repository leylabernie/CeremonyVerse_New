# CeremonyVerse Deployment Guide

## 🚀 Quick Start (5 Minutes)

### 1. Deploy to Vercel (Recommended)

**Option A: Deploy via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Add environment variables (see below)
5. Click "Deploy"

**Option B: Deploy via CLI**
```bash
npm install -g vercel
cd /path/to/ceremonyverse
vercel
```

### 2. Set Up Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

**Required Variables:**
```env
# Analytics (Get from Google Analytics)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email Service (Choose ONE)
RESEND_API_KEY=re_xxxxxxxxxxxx
# OR
SENDGRID_API_KEY=SG.xxxxxxxxxxxx

# Notification Email
NOTIFICATION_EMAIL=hello@ceremonyverse.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://ceremonyverse.com
```

**Optional but Recommended:**
```env
# Meta Pixel for Facebook/Instagram Ads
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Vercel KV for Lead Storage (Creates automatically in Vercel)
KV_REST_API_URL=https://xxx.kv.vercel-storage.com
KV_REST_API_TOKEN=xxx
```

### 3. Connect Your GoDaddy Domain

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `ceremonyverse.com`
3. Copy the DNS records Vercel provides
4. Go to GoDaddy DNS Management
5. Add these DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
6. Wait 24-48 hours for propagation (usually faster)

## 📧 Email Setup Options

### Option 1: Resend (Easiest - Recommended)

1. Go to [resend.com](https://resend.com)
2. Sign up for free account (100 emails/day free)
3. Create API key
4. Add to Vercel environment variables:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
5. Verify your domain (optional, but recommended)

### Option 2: SendGrid

1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up for free account (100 emails/day free)
3. Create API key
4. Add to Vercel environment variables:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxx
   ```

## 📊 Analytics Setup

### Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to Vercel environment variables:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Meta Pixel (Facebook/Instagram)

1. Go to [business.facebook.com](https://business.facebook.com)
2. Go to Events Manager
3. Create a Pixel
4. Get your Pixel ID
5. Add to Vercel environment variables:
   ```env
   NEXT_PUBLIC_META_PIXEL_ID=123456789
   ```

## 💾 Database Setup (Lead Storage)

### Option 1: Vercel KV (Simplest)

1. In Vercel Dashboard → Your Project → Storage
2. Click "Create Database" → "KV"
3. Name it "leads"
4. Environment variables will be added automatically
5. Done! ✅

### Option 2: Vercel Postgres

1. In Vercel Dashboard → Your Project → Storage
2. Click "Create Database" → "Postgres"
3. Environment variables will be added automatically
4. Run migrations (if needed later)

## 🔧 Post-Deployment Checklist

### Immediate (Within 1 Hour)
- [ ] Test contact form submission
- [ ] Verify email notifications work
- [ ] Check analytics tracking in Google Analytics
- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness

### Within 24 Hours
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Create social media accounts
- [ ] Set up WhatsApp Business (use +1-215-341-9990)
- [ ] Test all CTAs and forms

### Within 1 Week
- [ ] Create Facebook/Instagram Business pages
- [ ] Set up Pinterest Business account
- [ ] Join wedding planning directories:
  - WeddingWire
  - The Knot
  - Zola
  - WedMeGood
- [ ] Start posting content on social media
- [ ] Begin outreach for backlinks

## 🎯 Lead Generation Activation

### Quick Wins (Week 1)
1. **Google Business Profile**
   - Claim and verify your profile
   - Add photos, services, hours
   - Ask friends/family for initial reviews

2. **Social Media Setup**
   - Instagram: @ceremonyverse
   - Facebook: /ceremonyverse
   - Pinterest: /ceremonyverse
   - Post 3-5 times per week

3. **Wedding Directories**
   - Create profiles on The Knot, WeddingWire
   - Use professional photos
   - Add competitive pricing

### Medium-Term (Weeks 2-4)
1. **Content Marketing**
   - Publish 2 blog posts per week
   - Share on all social channels
   - Engage with wedding planning communities

2. **SEO Optimization**
   - Submit to Google Search Console
   - Build local citations
   - Start guest posting on wedding blogs

3. **Paid Advertising** (Optional)
   - Google Ads: $500-1000/month budget
   - Facebook/Instagram Ads: $300-500/month
   - Target engaged couples in your service area

### Long-Term (Month 2+)
1. **Backlink Building**
   - Guest posts on wedding blogs
   - Local press releases
   - Partner with vendors
   - Wedding planning guides

2. **Email Marketing**
   - Build email list from leads
   - Send weekly newsletter
   - Share tips, offers, success stories

3. **Reviews & Testimonials**
   - Ask clients for reviews
   - Share on website and social media
   - Respond to all reviews

## 🐛 Troubleshooting

### Forms Not Working
- Check console for JavaScript errors
- Verify API route is accessible: `/api/contact`
- Check environment variables are set correctly

### Emails Not Sending
- Verify API keys are correct
- Check Resend/SendGrid dashboard for errors
- Make sure `NOTIFICATION_EMAIL` is set

### Analytics Not Tracking
- Verify measurement ID is correct
- Check browser console for errors
- Wait 24 hours for data to appear

### Domain Not Connecting
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Check Vercel domain status

## 📞 Support

- **Technical Issues**: Check GitHub repository issues
- **Business Questions**: hello@ceremonyverse.com
- **Emergency**: +1-215-341-9990

## 🎉 You're Live!

Once deployed, your website will be:
- ✅ Accepting lead submissions
- ✅ Sending email notifications
- ✅ Tracking analytics
- ✅ Mobile-responsive
- ✅ SEO-optimized
- ✅ Ready to generate leads

**Next Steps:**
1. Test everything thoroughly
2. Set up social media
3. Join wedding directories
4. Start content marketing
5. Monitor analytics daily
6. Respond to leads within 2 hours

Good luck! 🎊
