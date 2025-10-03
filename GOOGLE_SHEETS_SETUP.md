# 📊 Google Sheets Integration Setup

This guide will help you connect your waitlist form to Google Sheets automatically.

**Your Google Sheet**: https://docs.google.com/spreadsheets/d/1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw/edit

---

## 🔧 Step-by-Step Setup

### Step 1: Create Google Cloud Project & Service Account

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com
   - Sign in with your Google account

2. **Create a New Project**
   - Click "Select a project" → "New Project"
   - Name: `Zempi`
   - Click "Create"

3. **Enable Google Sheets API**
   - In the search bar, type "Google Sheets API"
   - Click on "Google Sheets API"
   - Click "Enable"

4. **Create Service Account**
   - Go to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Name: `zempi-sheets-integration`
   - Description: `Service account for Zempi waitlist integration`
   - Click "Create and Continue"
   - Skip optional steps, click "Done"

5. **Create and Download Key**
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON" format
   - Click "Create"
   - **Save this file** - you'll need it!

### Step 2: Share Google Sheet with Service Account

1. Open the downloaded JSON file
2. Find the `client_email` field (looks like: `zempi-sheets-integration@project-id.iam.gserviceaccount.com`)
3. Copy this email address
4. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw/edit
5. Click "Share" button (top right)
6. Paste the service account email
7. Give it "Editor" access
8. **Uncheck "Notify people"** (it's a bot, not a person!)
9. Click "Share"

### Step 3: Prepare Your Google Sheet

Make sure your sheet has headers in the first row:

| Name | Email | Phone | Timestamp |
|------|-------|-------|-----------|
|      |       |       |           |

The sheet name should be **"Sheet1"** (or update the range in `server/routes.ts`)

### Step 4: Set Up Environment Variables

#### For Local Development:

1. **Convert JSON to Base64**
   ```bash
   cat path/to/your-service-account-key.json | base64 > service-account-base64.txt
   ```

2. **Create a `.env.local` file** in your project root:
   ```bash
   # Copy the entire base64 string (it will be very long)
   GOOGLE_SERVICE_ACCOUNT_KEY=<paste-base64-string-here>
   GOOGLE_SHEET_ID=1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw
   
   # Other variables
   PORT=3000
   NODE_ENV=development
   ```

3. **Update your dev script** to use the .env.local file:
   
   Install dotenv:
   ```bash
   npm install dotenv
   ```

#### For Vercel Deployment:

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Add these variables**:

   **Variable 1:**
   - Name: `GOOGLE_SERVICE_ACCOUNT_KEY`
   - Value: `<paste the base64 string from step 4.1>`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 2:**
   - Name: `GOOGLE_SHEET_ID`
   - Value: `1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

3. **Redeploy**:
   ```bash
   vercel --prod
   ```

### Step 5: Test the Integration

1. **Start your dev server**:
   ```bash
   npm run dev
   ```

2. **Submit a test form** at http://localhost:3000

3. **Check the terminal** for success message:
   ```
   ✅ Successfully appended 1 row(s) to Google Sheets
   ```

4. **Check your Google Sheet** - you should see the new row!

---

## 🛠️ Alternative: Quick Setup Script

I've created a helper script to make this easier:

```bash
# Run the setup script
node scripts/setup-google-sheets.js
```

This will:
- Guide you through the process
- Help convert your JSON to base64
- Test the connection
- Verify everything works

---

## 🔍 Troubleshooting

### Issue: "Error parsing service account credentials"
**Solution**: 
- Make sure the base64 string is complete (no line breaks)
- Verify the JSON file is valid
- Try encoding again: `cat file.json | base64 -w 0` (Linux) or `cat file.json | base64` (macOS)

### Issue: "The caller does not have permission"
**Solution**:
- Make sure you shared the sheet with the service account email
- Grant "Editor" permissions
- Wait a few minutes for permissions to propagate

### Issue: "Unable to parse range: Sheet1!A:D"
**Solution**:
- Make sure your sheet tab is named "Sheet1"
- Or update the range in `server/routes.ts` line 32

### Issue: "Google Sheets authentication not configured"
**Solution**:
- Verify `GOOGLE_SERVICE_ACCOUNT_KEY` is set in environment variables
- Make sure it's a valid base64 string
- Check the environment variable is available: `echo $GOOGLE_SERVICE_ACCOUNT_KEY`

---

## 📋 Checklist

- [ ] Created Google Cloud Project
- [ ] Enabled Google Sheets API
- [ ] Created Service Account
- [ ] Downloaded JSON key file
- [ ] Shared Google Sheet with service account email (as Editor)
- [ ] Converted JSON to base64
- [ ] Added GOOGLE_SERVICE_ACCOUNT_KEY to environment variables
- [ ] Added GOOGLE_SHEET_ID to environment variables
- [ ] Tested locally - submission appears in sheet
- [ ] Deployed to production
- [ ] Tested production - submission appears in sheet

---

## 🚀 Production Deployment

After setting up locally, deploy to production:

```bash
# Make sure environment variables are set in Vercel
vercel env add GOOGLE_SERVICE_ACCOUNT_KEY
# Paste the base64 string

vercel env add GOOGLE_SHEET_ID
# Paste: 1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw

# Deploy
vercel --prod
```

---

## 📊 Sheet Format

Your Google Sheet will be populated like this:

| Name          | Email              | Phone         | Timestamp                |
|---------------|-------------------|---------------|--------------------------|
| João Silva    | joao@email.com    | (11) 99999-9999 | 2025-10-03T10:30:00.000Z |
| Maria Santos  | maria@email.com   | (21) 98888-8888 | 2025-10-03T11:15:00.000Z |

---

**Need Help?** 
- Check the terminal logs for detailed error messages
- Verify all environment variables are set correctly
- Make sure the service account has Editor access to the sheet

**Made with ❤️ by the Zempi Team**

