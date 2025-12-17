# 🚀 CeremonyVerse Website - Deployment Guide

Your website is **100% ready to deploy!** All code is built, tested, and pushed to GitHub.

---

## ✅ What's Ready:

- ✅ Production build successful (53 pages)
- ✅ All integrations configured (Resend, Google Analytics, Calendly)
- ✅ Code pushed to main branch
- ✅ GitHub repo: https://github.com/leylabernie/v0-ceremony-verse-website-build

---

## 🎯 FASTEST WAY TO DEPLOY (5 minutes)

### **Option 1: Vercel (Recommended - Easiest)**

1. **Go to**: https://vercel.com/

2. **Sign in** with GitHub

3. **Click**: "Add New Project" → "Import Git Repository"

4. **Select**: `leylabernie/v0-ceremony-verse-website-build`

5. **Vercel auto-detects everything!** Just add environment variables:

   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_GA_ID = G-X4HC7P2Q6C
   RESEND_API_KEY = re_9DVy82De_HfCaYVtDYHg1B6TtHPVmVLX4
   NOTIFICATION_EMAIL = hello@ceremonyverse.com
   NEXT_PUBLIC_CALENDLY_URL = https://calendly.com/ceremonyverse/consultation
   NEXT_PUBLIC_WHATSAPP_NUMBER = 12153419990
   ```

6. **Click "Deploy"**

7. **Done!** You'll get a live URL in 2-3 minutes like:
   - `https://ceremonyverse.vercel.app`

8. **Connect Custom Domain** (Optional):
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your domain: `ceremonyverse.com`
   - Update DNS records as Vercel instructs

---

### **Option 2: Netlify**

1. **Go to**: https://netlify.com/

2. **Sign in** with GitHub

3. **Click**: "Add new site" → "Import an existing project"

4. **Select**: Your GitHub repo

5. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

6. **Add Environment Variables** (same as above)

7. **Click "Deploy"**

---

### **Option 3: Cloudflare Pages**

1. **Go to**: https://pages.cloudflare.com/

2. **Sign in** and click "Create a project"

3. **Connect to Git** → Select your GitHub repo

4. **Configure**:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node version: 20

5. **Add Environment Variables** (same as above)

6. **Save and Deploy**

---

## 📧 Environment Variables (Required)

**Copy and paste these into your hosting platform:**

```env
NEXT_PUBLIC_GA_ID=G-X4HC7P2Q6C
RESEND_API_KEY=re_9DVy82De_HfCaYVtDYHg1B6TtHPVmVLX4
NOTIFICATION_EMAIL=hello@ceremonyverse.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/ceremonyverse/consultation
NEXT_PUBLIC_WHATSAPP_NUMBER=12153419990
```

---

## 🌐 Custom Domain Setup

### **After Deployment:**

1. **In your hosting dashboard** (Vercel/Netlify/Cloudflare):
   - Go to "Domains" settings
   - Click "Add domain"
   - Enter: `ceremonyverse.com`

2. **Update DNS records** (at your domain registrar):
   
   **For Vercel:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **For Netlify:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME  
   Name: www
   Value: [your-site-name].netlify.app
   ```

   **For Cloudflare Pages:**
   - Cloudflare will guide you through the DNS setup
   - Usually automatic if using Cloudflare DNS

3. **Wait 5-10 minutes** for DNS propagation

4. **SSL Certificate** is automatically provided (HTTPS)

---

## 🧪 Testing Your Deployed Site

After deployment, test these features:

### ✅ Contact Form
- Go to `/contact`
- Fill out the form
- Submit
- You should receive email at `hello@ceremonyverse.com`

### ✅ Google Analytics
- Open Google Analytics dashboard
- You should see page views coming in

### ✅ Calendly
- Click "Book Consultation" button
- Calendly modal should open
- Booking should work

### ✅ WhatsApp
- Click WhatsApp widget
- Should open WhatsApp with your number

---

## 🔄 Automatic Deployments

**All platforms support automatic deployments:**

- Every time you push to `main` branch
- Your website automatically rebuilds and redeploys
- Takes 2-3 minutes
- No manual intervention needed

---

## 📊 What You'll Get:

- ✅ **Live Website** with your domain
- ✅ **HTTPS/SSL** (automatic)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Automatic deployments** (push to deploy)
- ✅ **Analytics dashboard** (Vercel/Netlify/Cloudflare)
- ✅ **Preview deployments** (for testing)
- ✅ **Free hosting** (all platforms have free tiers)

---

## 🎉 You're Ready!

**Just pick a platform (Vercel recommended), import your GitHub repo, add environment variables, and click Deploy!**

---

## 📞 Need Help?

If you run into any issues:

1. Check the build logs in your hosting dashboard
2. Verify all environment variables are added correctly
3. Make sure your domain DNS is pointed correctly
4. SSL certificates can take 5-10 minutes to provision

---

**Deploy Time: 5 minutes**  
**Cost: FREE** (all platforms have generous free tiers)

🚀 **Let's go live!**
