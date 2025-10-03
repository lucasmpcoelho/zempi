#!/usr/bin/env node

/**
 * Google Sheets Setup Helper Script
 * This script helps you set up Google Sheets integration for Zempi
 */

import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('\n🚀 Zempi Google Sheets Integration Setup\n');
  console.log('This script will help you set up Google Sheets integration.\n');

  // Step 1: Check if service account JSON exists
  console.log('📋 Step 1: Service Account JSON File\n');
  const jsonPath = await ask('Enter the path to your service account JSON file: ');

  let credentials;
  try {
    const jsonContent = readFileSync(jsonPath.trim(), 'utf-8');
    credentials = JSON.parse(jsonContent);
    console.log('✅ JSON file loaded successfully!\n');
  } catch (error) {
    console.error('❌ Error reading JSON file:', error.message);
    process.exit(1);
  }

  // Step 2: Display service account email
  console.log('📧 Step 2: Service Account Email\n');
  console.log(`Your service account email is: ${credentials.client_email}`);
  console.log('\n⚠️  IMPORTANT: Share your Google Sheet with this email address!\n');
  console.log('1. Open: https://docs.google.com/spreadsheets/d/1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw/edit');
  console.log('2. Click "Share" (top right)');
  console.log(`3. Add: ${credentials.client_email}`);
  console.log('4. Give "Editor" access');
  console.log('5. Uncheck "Notify people"');
  console.log('6. Click "Share"\n');

  await ask('Press Enter when you have shared the sheet...');

  // Step 3: Convert to Base64
  console.log('\n🔐 Step 3: Converting to Base64\n');
  const base64 = Buffer.from(JSON.stringify(credentials)).toString('base64');
  console.log('✅ Converted to Base64!\n');

  // Step 4: Create .env.local file
  console.log('📝 Step 4: Creating .env.local file\n');
  
  const envContent = `# Google Sheets Integration
GOOGLE_SERVICE_ACCOUNT_KEY=${base64}
GOOGLE_SHEET_ID=1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw

# Server Configuration
PORT=3000
NODE_ENV=development
`;

  const envPath = join(__dirname, '..', '.env.local');
  writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file!\n');

  // Step 5: Create .env.production file for reference
  console.log('📝 Step 5: Creating .env.production (for Vercel reference)\n');
  const envProdPath = join(__dirname, '..', '.env.production.example');
  writeFileSync(envProdPath, envContent);
  console.log('✅ Created .env.production.example file!\n');

  // Step 6: Save base64 to a file for easy copying
  const base64Path = join(__dirname, '..', 'google-service-account-base64.txt');
  writeFileSync(base64Path, base64);
  console.log('✅ Saved base64 string to: google-service-account-base64.txt\n');

  // Step 7: Instructions for Vercel
  console.log('🚀 Step 6: Deploy to Vercel\n');
  console.log('To deploy to production, add these environment variables in Vercel:\n');
  console.log('1. Go to: https://vercel.com/dashboard');
  console.log('2. Select your project → Settings → Environment Variables');
  console.log('3. Add variable: GOOGLE_SERVICE_ACCOUNT_KEY');
  console.log('   - Copy from: google-service-account-base64.txt');
  console.log('4. Add variable: GOOGLE_SHEET_ID');
  console.log('   - Value: 1zhmvFGTIxpdc16p32I5xnKTpRGN-65o5_cXZN2kmIxw\n');

  // Step 8: Test
  console.log('🧪 Step 7: Testing\n');
  console.log('To test the integration:');
  console.log('1. Run: npm run dev');
  console.log('2. Open: http://localhost:3000');
  console.log('3. Submit the waitlist form');
  console.log('4. Check your Google Sheet for the new entry!\n');

  console.log('✨ Setup complete! Your Google Sheets integration is ready.\n');
  console.log('📚 For more details, see: GOOGLE_SHEETS_SETUP.md\n');

  rl.close();
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});

