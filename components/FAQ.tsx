import { siteContent } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Preguntas frecuentes antes de empezar.
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {siteContent.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-zinc-950/60 p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-white">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="mt-1 text-zinc-500 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
