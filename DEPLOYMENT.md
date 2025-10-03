# 🚀 Deployment Guide - Zempi

This guide will walk you through deploying Zempi to **zempi.com.br** using Vercel.

## Prerequisites

- [x] Domain: zempi.com.br (owned)
- [ ] GitHub account
- [ ] Vercel account (free)
- [ ] Neon Database account (free)

---

## 📋 Deployment Steps

### 1. Set Up Database (Neon PostgreSQL)

1. Go to [neon.tech](https://neon.tech)
2. Sign up/Login with GitHub
3. Create a new project:
   - Name: `zempi-production`
   - Region: **São Paulo (South America)**
4. Copy the connection string (starts with `postgresql://`)
5. Save it - you'll need this for Vercel

### 2. Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Zempi landing page"

# Create a new repository on GitHub (github.com/new)
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/zempi.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository: `YOUR_USERNAME/zempi`
5. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/client`
   - **Install Command**: `npm install`

6. Add Environment Variables:
   ```
   DATABASE_URL = [paste your Neon connection string]
   NODE_ENV = production
   ```

7. Click **"Deploy"**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: zempi
# - Directory: ./
# - Override settings? No

# Add environment variables
vercel env add DATABASE_URL
# Paste your Neon connection string when prompted

# Deploy to production
vercel --prod
```

### 4. Configure Custom Domain (zempi.com.br)

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add domain: `zempi.com.br`
4. Vercel will show DNS records to add

5. Go to your domain registrar (Registro.br or where you bought the domain)
6. Add DNS records as shown by Vercel:
   
   **If using A Records:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   ```
   Type: A
   Name: www
   Value: 76.76.21.21
   ```

   **OR if using CNAME (recommended):**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

7. Wait 5-60 minutes for DNS propagation
8. Your site will be live at `https://zempi.com.br` ✅

---

## 🔧 Alternative: Deploy to Railway (With Database Included)

If you prefer an all-in-one solution with built-in PostgreSQL:

### 1. Set Up Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your `zempi` repository
6. Railway will auto-detect settings

### 2. Add PostgreSQL Database

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"PostgreSQL"**
3. Railway will automatically set `DATABASE_URL` environment variable

### 3. Configure Build

1. Go to **Settings** → **Environment**
2. Add variables:
   ```
   NODE_ENV = production
   PORT = 3000
   ```

3. Go to **Settings** → **Build**
4. Set:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`

### 4. Add Custom Domain

1. Go to **Settings** → **Domains**
2. Click **"Custom Domain"**
3. Enter: `zempi.com.br`
4. Add the CNAME record shown to your DNS provider
5. Wait for DNS propagation

---

## 🗄️ Database Setup

After deployment, push your database schema:

```bash
# Set DATABASE_URL to your production database
export DATABASE_URL="postgresql://..."

# Push schema to production
npm run db:push
```

Or use Vercel CLI:
```bash
vercel env pull .env.production
npm run db:push
```

---

## 📊 Google Sheets Integration (Optional)

If you want waitlist submissions sent to Google Sheets:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project: "Zempi"
3. Enable Google Sheets API
4. Create Service Account credentials
5. Download JSON key file
6. Upload to Vercel as environment variable:
   ```bash
   # Convert JSON to base64
   cat credentials.json | base64
   
   # Add to Vercel
   vercel env add GOOGLE_SERVICE_ACCOUNT_KEY
   # Paste the base64 string
   ```
7. Create a Google Sheet and share it with the service account email
8. Add Sheet ID to Vercel:
   ```bash
   vercel env add GOOGLE_SHEET_ID
   # Paste the sheet ID from URL
   ```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads at `https://zempi.com.br`
- [ ] All pages work (Home, Quem Somos)
- [ ] Waitlist form submits successfully
- [ ] Data saves to database
- [ ] SSL certificate is active (https)
- [ ] Mobile responsive design works
- [ ] All animations load properly

---

## 🔒 Security Checklist

- [ ] Environment variables are set (not hardcoded)
- [ ] DATABASE_URL is using SSL (`?sslmode=require`)
- [ ] CORS is configured properly
- [ ] Rate limiting is enabled (TODO)
- [ ] Input validation is working (Zod schemas)

---

## 📈 Monitoring & Analytics

### Add Analytics (Optional)

1. **Google Analytics**:
   - Add tracking code to `client/index.html`
   
2. **Vercel Analytics**:
   - Enable in Vercel dashboard (free)

3. **Database Monitoring**:
   - Use Neon's built-in monitoring dashboard

---

## 🆘 Troubleshooting

### Issue: "DATABASE_URL is not defined"
**Solution**: Add DATABASE_URL to environment variables in Vercel

### Issue: "Build failed"
**Solution**: Check build logs, ensure all dependencies are in `package.json`

### Issue: "Domain not working"
**Solution**: 
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records are correct
- Wait up to 48 hours for full propagation

### Issue: "API routes return 404"
**Solution**: Verify `vercel.json` rewrites are configured correctly

---

## 🚀 Quick Deploy Commands

```bash
# Deploy to production
vercel --prod

# View logs
vercel logs

# Open deployment
vercel open

# Check deployment status
vercel ls
```

---

## 📞 Support

If you need help:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Neon Docs: [neon.tech/docs](https://neon.tech/docs)
- Railway Docs: [docs.railway.app](https://docs.railway.app)

---

**Made with ❤️ by the Zempi Team**

