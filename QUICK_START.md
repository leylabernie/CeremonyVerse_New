# 🚀 QUICK START - Get Live in 15 Minutes!

## Step 1: Push Code to GitHub (2 minutes)

```bash
# If you haven't pushed yet:
git push origin main
```

## Step 2: Deploy to Vercel (5 minutes)

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (don't add env vars yet, we'll do that next)
5. Wait 2-3 minutes for initial deployment

## Step 3: Get Your API Keys (5 minutes)

### A. Email Service (Resend - Easiest!)
1. Go to **https://resend.com**
2. Sign up (free - no credit card needed)
3. Go to **"API Keys"** in dashboard
4. Click **"Create API Key"**
5. Copy the key (starts with `re_`)

### B. Google Analytics
1. Go to **https://analytics.google.com**
2. Create account if needed
3. Click **"Admin" → "Create Property"**
4. Name it "CeremonyVerse"
5. Copy the **Measurement ID** (starts with `G-`)

## Step 4: Add Environment Variables (3 minutes)

In Vercel Dashboard → Your Project → Settings → Environment Variables:

```env
# Email (REQUIRED - Get from Resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Where to send lead notifications
NOTIFICATION_EMAIL=hello@ceremonyverse.com

# Google Analytics (REQUIRED - Get from Analytics)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Your website URL (use Vercel URL for now)
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app

# Meta Pixel (OPTIONAL - Can add later)
NEXT_PUBLIC_META_PIXEL_ID=
```

**Important:** After adding env vars, go to **Deployments** tab and click **"Redeploy"** on the latest deployment.

## Step 5: Test Everything (5 minutes)

1. **Visit your Vercel URL** (something like `your-project.vercel.app`)
2. **Go to /contact page**
3. **Fill out the form** with test data
4. **Submit the form**
5. **Check your email** (hello@ceremonyverse.com) for the lead notification

**If you got an email, YOU'RE LIVE! 🎉**

## Step 6: Connect GoDaddy Domain (Later - 24-48 hours)

### In Vercel Dashboard:
1. Go to Settings → Domains
2. Add your domain: `ceremonyverse.com`
3. Vercel will show you DNS records to add

### In GoDaddy:
1. Go to DNS Management
2. Add these records:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 Hour

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

3. Wait 24-48 hours for propagation (usually much faster)

## 🎯 YOU'RE DONE!

Your website is:
- ✅ Live and accepting leads
- ✅ Sending email notifications
- ✅ Tracking analytics
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Production ready

## 📊 Next Steps (This Week)

1. **Social Media Setup**
   - Create Instagram: @ceremonyverse
   - Create Facebook Page
   - Create Pinterest Business Account

2. **Google Business Profile**
   - Create free profile
   - Add photos, services, hours
   - Ask friends for initial reviews

3. **Join Wedding Directories**
   - WeddingWire.com
   - TheKnot.com
   - Zola.com
   - WedMeGood.com

4. **Start Marketing**
   - Post on social media 3x/week
   - Publish 2 blog posts/week
   - Join wedding planning Facebook groups
   - Engage with engaged couples

## 📞 Need Help?

1. **Deployment Issues?** → Read `DEPLOYMENT_GUIDE.md`
2. **Feature Questions?** → Read `COMPLETION_SUMMARY.md`
3. **Still Stuck?** → Email me with details

## 💡 Pro Tips

1. **Test Form Daily** - Make sure leads are coming through
2. **Respond Fast** - Reply to leads within 2 hours
3. **Track Everything** - Check Google Analytics daily
4. **Be Patient** - SEO takes 2-3 months, but you'll get early leads from directories and ads

---

**Time Required: 15 minutes ⏱️**
**Cost: $0 💰**
**Result: Live, lead-generating website 🎉**

**LET'S GO! 🚀**
