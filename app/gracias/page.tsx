import Link from 'next/link';

import Footer from '@/components/Footer';
import { siteContent } from '@/lib/content';

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%),linear-gradient(180deg,_#050505_0%,_#090909_55%,_#050505_100%)]">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-start px-6 py-24 sm:py-28 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
          Gracias
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          Hemos recibido tu solicitud.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
          Gracias por contactar con {siteContent.brand.name}. Revisaremos tu mensaje y te responderemos con los siguientes pasos.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
