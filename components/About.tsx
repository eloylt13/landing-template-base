import { siteContent } from "@/lib/content";

export default function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            {siteContent.about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            {siteContent.about.title}
          </h2>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-base leading-8 text-zinc-300">
            {siteContent.about.description}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            {siteContent.about.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
