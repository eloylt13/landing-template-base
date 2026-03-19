import Link from "next/link";

import { siteContent } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(125,125,125,0.18),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_55%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.34em] text-zinc-400">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            {siteContent.hero.description}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            {siteContent.hero.trustLabel}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/gracias"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              {siteContent.hero.primaryCta}
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              {siteContent.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Enfoque
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Claridad, confianza y una presencia profesional.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Imagen
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Una propuesta seria y elegante.
              </p>
            </div>
            <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Lo esencial
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Presenta tu servicio con orden, explica mejor tu valor y facilita el contacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
