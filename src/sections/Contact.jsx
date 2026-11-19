import { ArrowUpRight, Mail } from 'lucide-react';
import { contact } from '../data/data';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="section-y relative border-t border-line">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="mx-auto h-64 max-w-3xl rounded-full bg-violet-600/10 blur-[100px]" />
      </div>
      <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let’s connect"
            description={contact.blurb}
          />

          {contact.email && (
            <Reveal delay={0.1} className="mt-8">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 text-lg font-medium text-txt transition-colors hover:text-brand-light"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-violet/30 bg-brand-violet/10 text-brand-light">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                {contact.email}
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          )}

          <Reveal delay={0.16} className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Find me online
            </p>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          {contact.email ? (
            <>
              <ContactForm />
              <p className="mt-3 text-xs text-muted">
                This form opens your email app with the message prefilled — no data is stored here.
              </p>
            </>
          ) : (
            <div className="card flex h-full flex-col justify-center p-8">
              <h3 className="text-lg font-semibold tracking-tight">Want to send a message?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The contact form will be available soon. Until then, you can reach me on LinkedIn
                or GitHub — I usually reply within a day or two.
              </p>
              <SocialLinks className="mt-6" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
