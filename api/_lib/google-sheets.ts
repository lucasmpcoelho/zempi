import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

function getCredentialsFromBase64(): any {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!b64) throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY not set');
  return JSON.parse(Buffer.from(b64, 'base64').toString('utf-8'));
}

export async function appendToSheet(spreadsheetId: string, range: string, values: any[][]) {
  const credentials = getCredentialsFromBase64();
  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}


