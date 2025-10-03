# 🚀 Simple Google Sheets Setup (API Key Method)

## Super Simple - Just 3 Steps!

### Step 1: Get Google API Key (2 minutes)

1. Go to: https://console.cloud.google.com/apis/credentials
2. Select your project "Zempi" (or create one)
3. Click "**+ CREATE CREDENTIALS**" → "**API key**"
4. Copy the API key that appears
5. Click "**Edit API key**" to restrict it (optional but recommended):
   - Under "API restrictions" → Select "Google Sheets API"
   - Click "Save"

### Step 2: Make Your Sheet Public (1 minute)

1. Open your sheet: https://docs.google.com/spreadsheets/d/1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw/edit
2. Click "**Share**" (top right)
3. Change to "**Anyone with the link**" can **view**
   - (API key can only read public sheets, but we'll write to it anyway with proper setup)

**OR for write access**, keep it private and you'll need to use Service Account (but let's try API key first!)

### Step 3: Set Environment Variable

Update your `.env.local`:

```bash
GOOGLE_API_KEY=your_api_key_here
GOOGLE_SHEET_ID=1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw
PORT=3000
NODE_ENV=development
```

### Step 4: Restart Server

```bash
npm run dev
```

### Step 5: Test!

1. Go to http://localhost:3000
2. Submit the form
3. Check your Google Sheet!

---

## ⚠️ Important Note About API Keys

**API Keys can only READ public sheets, not WRITE to them.**

If you want to WRITE data to your sheet, you have 2 options:

### Option 1: Use Service Account (what we set up earlier)
- More complex but works for private sheets
- Needs the service account JSON

### Option 2: Make Sheet Public for Editing
1. Share sheet → "Anyone with the link" → "Editor"
2. Then API key can write to it

---

## 🎯 Recommended: Stick with Service Account

Actually, since we already set it up, let's just use the Service Account we configured. It's more secure and works better for production.

Just make sure the environment variables are loaded!

