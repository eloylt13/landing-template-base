import { siteContent } from '@/lib/content';

export default function QuickQualifier() {
  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {siteContent.qualifier.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
