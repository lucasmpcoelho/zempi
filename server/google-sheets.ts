import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

/**
 * Google Sheets client using Service Account
 */
async function getGoogleSheetsClient() {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  
  if (!serviceAccountKey) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY not set');
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(serviceAccountKey, 'base64').toString('utf-8')
    );
    
    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error: any) {
    console.error('❌ Error creating Google Sheets client:', error.message);
    throw error;
  }
}

export async function appendToSheet(spreadsheetId: string, range: string, values: any[][]) {
  try {
    const sheets = await getGoogleSheetsClient();
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values
      }
    });
    
    console.log(`✅ Successfully appended ${values.length} row(s) to Google Sheets`);
  } catch (error: any) {
    console.error('❌ Error appending to Google Sheets:', error.message);
    throw error;
  }
}
