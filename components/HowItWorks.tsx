import { siteContent } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-white/10 bg-white/[0.015]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            Método
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Un proceso claro, pensado para facilitar la decisión.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {siteContent.howItWorks.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-white/10 bg-zinc-950/60 p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
