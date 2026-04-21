import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

const whatsappHref = "https://wa.me/260XXXXXXXXX4";
const email = "your-email@example.com";
const twitterHref = "https://x.com/yourhandle";
const formAction = "https://formspree.io/f/YOUR_FORM_ID";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 5 5 9-9" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 12a8 8 0 0 1-11.8 7l-4.2 1 1.1-4A8 8 0 1 1 20 12Z" />
      <path d="M9.5 8.8c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.8c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4-.1.6.3.6.8 1.2 1.4 1.7.5.5 1.2 1 1.9 1.3.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.3.5l-.1.6c0 .3-.2.6-.6.8-.4.2-1 .3-1.6.1-1-.3-2-.8-3-1.5-.8-.6-1.5-1.3-2.1-2.1-.7-.9-1.2-1.9-1.5-3-.2-.6-.1-1.2.1-1.6Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.27l-4.9-7.48L5.48 22H2.36l7.24-8.27L1.8 2h6.43l4.43 6.76L18.9 2Zm-1.1 18h1.74L7.27 3.9H5.4L17.8 20Z" />
    </svg>
  );
}

type SocialButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/6 hover:text-white"
    >
      {icon}
    </a>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <SectionHeading title="Reach out" />
            <p className="max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              Have something you want to build, discuss, or ask about? Reach out
              around software, Bitcoin and Lightning, privacy, open source, and
              useful tools.
            </p>

            <div className="mt-8 max-w-3xl space-y-4">
              {[
                "Thoughtful, practical conversations",
                "Open to collaboration and ideas",
                "Best for quick reach: WhatsApp",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-neutral-400"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/3 text-neutral-200">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex max-w-3xl flex-wrap items-center gap-3">
              <SocialButton
                href={twitterHref}
                label="Twitter / X"
                icon={<TwitterIcon />}
              />
              <SocialButton
                href={`mailto:${email}`}
                label="Email"
                icon={<MailIcon />}
              />
              <SocialButton
                href={whatsappHref}
                label="WhatsApp"
                icon={<WhatsAppIcon />}
              />
            </div>
          </div>

          <div className="w-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)] sm:p-5">
            <form action={formAction} method="POST" className="space-y-4">
              <div className="grid gap-4">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-white/20"
                  placeholder="Name"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-white/20"
                  placeholder="Email"
                />
              </div>

              <textarea
                id="message"
                name="message"
                rows={8}
                required
                className="w-full resize-none rounded-3xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-white/20"
                placeholder="Message"
              />

              <input
                type="hidden"
                name="_subject"
                value="New portfolio contact message"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.16)] active:translate-y-0 active:scale-[0.99]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
