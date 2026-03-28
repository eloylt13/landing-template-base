import { siteContent } from "@/lib/content";

export default function ContactForm() {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6">
      <h3 className="text-xl font-semibold text-white">{siteContent.contactForm.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {siteContent.contactForm.description}
      </p>

      <form action="/gracias" className="mt-6 grid gap-4" method="get">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-zinc-300">
            <span>{siteContent.contactForm.fields[0]}</span>
            <input
              name="name"
              type="text"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/25"
              placeholder="Nombre y apellido"
            />
          </label>
          <label className="grid gap-2 text-sm text-zinc-300">
            <span>{siteContent.contactForm.fields[1]}</span>
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/25"
              placeholder="nombre@empresa.com"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-zinc-300">
          <span>{siteContent.contactForm.fields[2]}</span>
          <input
            name="company"
            type="text"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/25"
            placeholder="Nombre de la empresa"
          />
        </label>

        <label className="grid gap-2 text-sm text-zinc-300">
          <span>{siteContent.contactForm.fields[3]}</span>
          <input
            name="need"
            type="text"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/25"
            placeholder="Ej: consultoría, estudio, servicios profesionales"
          />
        </label>

        <label className="grid gap-2 text-sm text-zinc-300">
          <span>{siteContent.contactForm.fields[4]}</span>
          <textarea
            name="message"
            rows={5}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/25"
            placeholder="Cuéntanos qué necesitas"
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          {siteContent.contactForm.submitLabel}
        </button>
      </form>
    </article>
  );
}
