"use client";

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initial: FormState = { name: "", email: "", subject: "", message: "" };

const fieldClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-content placeholder:text-content-muted transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  // Track a mounted guard so we don't open the mail client twice on
  // rapid re-renders (e.g. React strict mode double-invoke).
  const submittedRef = useRef(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submittedRef.current) return;
    if (!validate()) return;

    submittedRef.current = true;

    // No backend required: hand off to the visitor's mail client.
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `${siteConfig.links.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  // Reset the ref if the user chooses to send another message.
  useEffect(() => {
    if (!submitted) submittedRef.current = false;
  }, [submitted]);

  if (submitted) {
    return (
      <div className="surface-card flex flex-col items-center justify-center p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-content">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-sm text-content-secondary">
          Your email client should now be open with your message ready to send.
          I&apos;ll get back to you as soon as possible.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={form.name}
          onChange={update("name")}
          error={errors.name}
          placeholder="Your full name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-5">
        <Field
          id="subject"
          label="Subject"
          value={form.subject}
          onChange={update("subject")}
          placeholder="What would you like to discuss?"
          optional
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-content"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          aria-invalid={errors.message ? true : undefined}
          placeholder="Tell me about your project, role, or research collaboration…"
          className={cn(fieldClasses, "resize-none")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-danger">{errors.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  optional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-content"
      >
        {label}
        {optional ? (
          <span className="ml-1.5 text-xs font-normal text-content-muted">
            (optional)
          </span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        className={fieldClasses}
      />
      {error ? <p className="mt-1.5 text-xs text-danger">{error}</p> : null}
    </div>
  );
}
