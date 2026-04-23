import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";
import { siteConfig } from "../../../content/site";

const { whatsappHref, email, twitterHref } = siteConfig;

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
  const focusItems = [
    "Practical tooling",
    "Bitcoin and Lightning",
    "Privacy",
    "Open source",
    "Rust",
    "TypeScript",
    "Linux",
  ];

  return (
    <section
      id="contact"
      className="pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-12">
          <div>
            <SectionHeading title="Reach out" />
            <p className="max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              Open to thoughtful conversations around software, open source,
              Bitcoin and Lightning, privacy, and useful tools.
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-xl sm:p-6">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 left-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Current focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {focusItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur-md sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                  Right now I’m mainly focused on building practical tools,
                  getting sharper with Rust and TypeScript, and continuing to
                  work around Bitcoin, Lightning, privacy, and open source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
