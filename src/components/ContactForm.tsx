"use client";

import { useState } from "react";
import { firm } from "@/lib/site";
import { Icon } from "@/components/Icon";

/**
 * Appointment request form.
 *
 * The site is statically hosted, so there is no server action. Point
 * FORM_ENDPOINT at a form backend (Formspree, Basin, Netlify Forms, etc.) to
 * receive submissions. When the endpoint is left as the placeholder, the form
 * degrades gracefully to a pre-filled email via the visitor's mail client so
 * no lead is ever lost.
 */
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

const matterTypes = [
  "Estate planning (Trusts, Wills, Powers of Attorney)",
  "Probate / estate administration",
  "Business planning (Corporation, LLC, Partnership)",
  "Charitable giving",
  "Other matter",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  matter: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", matter: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const validate = (f: Fields): Errors => {
    const e: Errors = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    if (!f.phone.trim() && !f.email.trim())
      e.phone = "Please provide a phone number or email so we can reach you.";
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      e.email = "Please enter a valid email address.";
    if (!f.message.trim())
      e.message = "Please tell us briefly how we can help.";
    return e;
  };

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(
      `Appointment request${fields.matter ? ` — ${fields.matter}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nPhone: ${fields.phone}\nEmail: ${fields.email}\nMatter: ${fields.matter}\n\n${fields.message}`,
    );
    window.location.href = `${firm.emailHref}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first field in error for screen-reader users.
      const first = Object.keys(found)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus("sending");

    // If a real endpoint hasn't been configured, use the email fallback.
    if (FORM_ENDPOINT.includes("your-form-id")) {
      mailtoFallback();
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-xl border border-line bg-cream/50 p-10 text-center"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wine-900 text-paper">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold text-wine-900">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate">
          Your message is on its way. Our office will follow up promptly. If
          your matter is urgent, please call{" "}
          <a href={firm.phoneHref} className="font-semibold text-wine-900 underline">
            {firm.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field
        id="cf-name"
        label="Full name"
        required
        error={errors.name}
        value={fields.name}
        onChange={update("name")}
        autoComplete="name"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="cf-phone"
          label="Phone"
          type="tel"
          error={errors.phone}
          value={fields.phone}
          onChange={update("phone")}
          autoComplete="tel"
        />
        <Field
          id="cf-email"
          label="Email"
          type="email"
          error={errors.email}
          value={fields.email}
          onChange={update("email")}
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="cf-matter"
          className="mb-1.5 block text-sm font-medium text-wine-900"
        >
          Type of matter
        </label>
        <select
          id="cf-matter"
          name="matter"
          value={fields.matter}
          onChange={update("matter")}
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-wine-900 shadow-sm focus:border-gold-500"
        >
          <option value="">Select one (optional)</option>
          {matterTypes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-sm font-medium text-wine-900"
        >
          How can we help? <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          required
          value={fields.message}
          onChange={update("message")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-wine-900 shadow-sm focus:border-gold-500"
          placeholder="Tell us a little about what you need."
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-mist">
        Please do not include confidential or sensitive information. Contacting
        our office does not create an attorney–client relationship.
      </p>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending your message. Please call{" "}
          <a href={firm.phoneHref} className="font-semibold underline">
            {firm.phoneDisplay}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wine-900 px-6 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-wine-800 disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
      </button>
    </form>
  );
}

/** Reusable labeled text input with inline error messaging. */
function Field({
  id,
  label,
  error,
  required,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const name = id.replace("cf-", "");
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-wine-900"
      >
        {label}{" "}
        {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-wine-900 shadow-sm focus:border-gold-500"
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
