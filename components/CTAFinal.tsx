import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import { siteContent } from "@/lib/content";

export default function CTAFinal() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            {siteContent.finalCta.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            {siteContent.finalCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            {siteContent.finalCta.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/gracias"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              {siteContent.finalCta.primaryCta}
            </Link>
            <Link
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              {siteContent.finalCta.secondaryCta}
            </Link>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
