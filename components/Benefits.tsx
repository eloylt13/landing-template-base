import { siteContent } from "@/lib/content";

export default function Benefits() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
          Beneficios
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Una propuesta que ayuda a generar confianza desde el primer vistazo.
        </h2>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {siteContent.benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
          >
            <div className="mb-5 h-10 w-10 rounded-full border border-white/10 bg-white/[0.06]" />
            <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
