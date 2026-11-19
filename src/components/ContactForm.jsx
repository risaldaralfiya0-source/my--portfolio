import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/data';

const inputClass =
  'w-full rounded-xl border border-line bg-surface2/60 px-4 py-3 text-sm text-txt placeholder:text-muted/70 transition-colors duration-300 focus:border-brand-violet/60';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };

  // No backend required: open the visitor's mail client with a prefilled message.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\nEmail: ${form.email}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-txt">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-txt">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-txt">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={form.message}
          onChange={update}
          placeholder="Tell me a little about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send message <ArrowRight className="h-4 w-4" />
        </button>
        {submitted && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm text-brand-light"
          >
            <CheckCircle2 className="h-4 w-4" />
            Your mail app should open now — I’ll be in touch soon!
          </p>
        )}
      </div>
    </form>
  );
}
