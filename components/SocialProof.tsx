import { siteContent } from "@/lib/content";

export default function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
              {siteContent.socialProof.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Lo que transmite una presencia bien trabajada.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            Una web clara y profesional ayuda a que la primera impresion sea mas solida.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {siteContent.socialProof.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-zinc-950/60 p-6"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.socialProof.quotes.map((quote) => (
              <article
                key={quote.author}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-base leading-8 text-zinc-200">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
                  {quote.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
