# 🚀 Quick Start: Google Sheets Integration

## Option 1: Automated Setup (Recommended)

### 1. Create Service Account

1. Go to https://console.cloud.google.com
2. Create project: "Zempi"
3. Enable "Google Sheets API"
4. Create Service Account → Download JSON key

### 2. Run Setup Script

```bash
node scripts/setup-google-sheets.js
```

Follow the prompts - it will:
- ✅ Load your service account JSON
- ✅ Show you the email to share your sheet with
- ✅ Create .env.local file automatically
- ✅ Generate base64 for Vercel deployment

### 3. Test It

```bash
npm run dev
```

Visit http://localhost:3000 and submit the form. Check your Google Sheet!

---

## Option 2: Manual Setup

### 1. Get Service Account Email

Open your service account JSON file and find `client_email`:
```json
{
  "client_email": "zempi-sheets@project-123.iam.gserviceaccount.com"
}
```

### 2. Share Your Sheet

Go to: https://docs.google.com/spreadsheets/d/1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw/edit

Click "Share" → Add the service account email → Give "Editor" access

### 3. Convert JSON to Base64

**macOS/Linux:**
```bash
cat path/to/service-account.json | base64 > base64.txt
```

**Windows (PowerShell):**
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("path\to\service-account.json")) > base64.txt
```

### 4. Create .env.local

Create a file named `.env.local` in your project root:

```bash
GOOGLE_SERVICE_ACCOUNT_KEY=<paste-the-base64-string-here>
GOOGLE_SHEET_ID=1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw
PORT=3000
NODE_ENV=development
```

### 5. Test

```bash
npm run dev
```

---

## For Vercel Deployment

### Add Environment Variables:

1. Go to Vercel Dashboard → Project → Settings → Environment Variables

2. Add:
   - **GOOGLE_SERVICE_ACCOUNT_KEY**: (paste base64 from base64.txt)
   - **GOOGLE_SHEET_ID**: 1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw

3. Deploy:
```bash
vercel --prod
```

---

## Troubleshooting

**"The caller does not have permission"**
→ Make sure you shared the sheet with the service account email (as Editor)

**"Error parsing service account credentials"**
→ Check the base64 string is complete (no line breaks)

**"Sheet not found"**
→ Verify GOOGLE_SHEET_ID is correct

---

## ✅ Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google Sheets API
- [ ] Created Service Account & downloaded JSON
- [ ] Shared Google Sheet with service account email (Editor access)
- [ ] Converted JSON to base64
- [ ] Created .env.local with GOOGLE_SERVICE_ACCOUNT_KEY
- [ ] Tested locally - form submits to sheet ✨
- [ ] Added env vars to Vercel
- [ ] Deployed to production
- [ ] Tested production - works! 🎉

