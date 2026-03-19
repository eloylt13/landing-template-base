import { siteContent } from "@/lib/content";

export default function Programs() {
  return (
    <section id="programs" className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
          Servicios
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Soluciones pensadas para distintos tipos de negocio de servicios.
        </h2>
      </div>
      <div className="mt-10 grid gap-4 xl:grid-cols-3">
        {siteContent.programs.map((program) => (
          <article
            key={program.name}
            className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{program.name}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{program.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              {program.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
