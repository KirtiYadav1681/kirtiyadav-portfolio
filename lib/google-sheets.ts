import { google } from "googleapis";
import type { ContactInquiry } from "@/components/contact/contact-form";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function requiredEnv(name: "GOOGLE_SHEETS_ID" | "GOOGLE_SERVICE_ACCOUNT_EMAIL" | "GOOGLE_PRIVATE_KEY") {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error("Google Sheets is not configured.");
  }
  return value;
}

function privateKey() {
  const key = requiredEnv("GOOGLE_PRIVATE_KEY").replace(/^["']|["']$/g, "");
  return key.replace(/\\n/g, "\n");
}

function formatUtcTimestamp(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");
  const day = `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
  const time = `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
  return `${day} ${time}`;
}

export async function appendContactInquiry({ name, email, message }: ContactInquiry) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
      private_key: privateKey(),
    },
    scopes: [SHEETS_SCOPE],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: requiredEnv("GOOGLE_SHEETS_ID"),
    range: "Enquiries!A:E",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[formatUtcTimestamp(new Date()), name, email, message, "New"]],
    },
  });
}
