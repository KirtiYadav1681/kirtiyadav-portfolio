"use client";

import { useRef, useState, type FocusEvent, type FormEvent } from "react";

export type ContactInquiry = {
  name: string;
  email: string;
  message: string;
};

type FieldKey = keyof ContactInquiry;

type FormState = ContactInquiry;

type FormErrors = Partial<Record<FieldKey, string>>;

type Touched = Partial<Record<FieldKey, boolean>>;

const EMPTY: FormState = {
  name: "",
  email: "",
  message: "",
};

const FIELD_ORDER: FieldKey[] = ["name", "email", "message"];

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(fields: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!isEmail(fields.email.trim())) errors.email = "Please enter a valid email.";
  if (!fields.message.trim()) {
    errors.message = "Please tell me a little about your project or idea.";
  }
  return errors;
}

function visibleErrors(errors: FormErrors, touched: Touched, submitted: boolean) {
  if (submitted) return errors;
  const next: FormErrors = {};
  for (const key of FIELD_ORDER) {
    if (touched[key] && errors[key]) next[key] = errors[key];
  }
  return next;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [submitted, setSubmitted] = useState(false);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<"success" | "error" | null>(null);
  const submittingRef = useRef(false);

  const sync = (nextFields: FormState, nextTouched: Touched, nextSubmitted: boolean) => {
    setFields(nextFields);
    setTouched(nextTouched);
    setSubmitted(nextSubmitted);
    setErrors(visibleErrors(validate(nextFields), nextTouched, nextSubmitted));
  };

  const onChange = (key: FieldKey, value: string) => {
    setNotice(null);
    sync({ ...fields, [key]: value }, touched, submitted);
  };

  const onBlur = (key: FieldKey) => (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    sync({ ...fields, [key]: event.currentTarget.value }, { ...touched, [key]: true }, submitted);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const nextErrors = validate(fields);
    setSubmitted(true);
    setErrors(nextErrors);
    setNotice(null);

    const firstInvalid = FIELD_ORDER.find((key) => nextErrors[key]);
    if (firstInvalid) {
      document.getElementById(`inquiry-${firstInvalid}`)?.focus();
      return;
    }

    const inquiry: ContactInquiry = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    };

    submittingRef.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...inquiry, website }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || result.success !== true) {
        setNotice("error");
        return;
      }

      setFields(EMPTY);
      setErrors({});
      setTouched({});
      setSubmitted(false);
      setWebsite("");
      setNotice("success");
    } catch {
      setNotice("error");
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  return (
    <form className="inquiry reveal" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <div className="sr" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input
          id="inquiry-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <h3 className="inquiry-title">Have a project, role, or idea in mind?</h3>
      <div className="inquiry-fields">
        <div className="inquiry-field">
          <label className="label" htmlFor="inquiry-name">
            Name
          </label>
          <input
            className="inquiry-control"
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            maxLength={100}
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            onChange={(event) => onChange("name", event.target.value)}
            onBlur={onBlur("name")}
          />
          {errors.name ? (
            <p className="inquiry-error" id="inquiry-name-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="inquiry-field">
          <label className="label" htmlFor="inquiry-email">
            Email
          </label>
          <input
            className="inquiry-control"
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={fields.email}
            maxLength={254}
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
            onChange={(event) => onChange("email", event.target.value)}
            onBlur={onBlur("email")}
          />
          {errors.email ? (
            <p className="inquiry-error" id="inquiry-email-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="inquiry-field inquiry-query">
          <label className="label" htmlFor="inquiry-message">
            Your query
          </label>
          <textarea
            className="inquiry-control"
            id="inquiry-message"
            name="message"
            rows={6}
            placeholder="Tell me what you're working on..."
            value={fields.message}
            maxLength={3000}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "inquiry-message-error" : undefined}
            onChange={(event) => onChange("message", event.target.value)}
            onBlur={onBlur("message")}
          />
          {errors.message ? (
            <p className="inquiry-error" id="inquiry-message-error" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      {notice === "success" ? (
        <p className="inquiry-success" role="status">
          Thanks — your inquiry has been received.
        </p>
      ) : null}
      {notice === "error" ? (
        <p className="inquiry-error" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}
      <div className="inquiry-actions">
        <button className="btn btn-ink inquiry-submit" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send inquiry"}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
