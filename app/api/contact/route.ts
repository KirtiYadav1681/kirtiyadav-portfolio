import type { ContactInquiry } from "@/components/contact/contact-form";
import { appendContactInquiry } from "@/lib/google-sheets";

export const runtime = "nodejs";

const LIMITS = {
  name: 100,
  email: 254,
  message: 3000,
} as const;

type ContactPayload = ContactInquiry & {
  website?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validationError() {
  return Response.json(
    { success: false, message: "Please check the submitted fields." },
    { status: 400 },
  );
}

function parsePayload(body: unknown): { ok: true; inquiry: ContactInquiry } | { ok: false; spam: boolean } {
  if (!body || typeof body !== "object") return { ok: false, spam: false };

  const record = body as Record<string, unknown>;
  const website = record.website;

  if (typeof website === "string" && website.trim()) {
    return { ok: false, spam: true };
  }
  if (website !== undefined && typeof website !== "string") {
    return { ok: false, spam: false };
  }

  const { name, email, message } = record as Partial<ContactPayload>;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return { ok: false, spam: false };
  }

  const inquiry: ContactInquiry = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  const valid =
    inquiry.name.length > 0 &&
    inquiry.name.length <= LIMITS.name &&
    inquiry.email.length <= LIMITS.email &&
    isEmail(inquiry.email) &&
    inquiry.message.length > 0 &&
    inquiry.message.length <= LIMITS.message;

  if (!valid) return { ok: false, spam: false };
  return { ok: true, inquiry };
}

function logSheetsFailure(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";
  if (message.includes("PRIVATE KEY") || message.includes("BEGIN ")) {
    console.error("Failed to append contact inquiry.");
    return;
  }
  console.error("Failed to append contact inquiry.", message);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return validationError();
  }

  const parsed = parsePayload(body);
  if (!parsed.ok) {
    if (parsed.spam) {
      return Response.json({ success: true, message: "Inquiry submitted successfully." });
    }
    return validationError();
  }

  try {
    await appendContactInquiry(parsed.inquiry);
  } catch (error) {
    logSheetsFailure(error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return Response.json({ success: true, message: "Inquiry submitted successfully." });
}
