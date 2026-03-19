import Link from 'next/link';

import { siteContent } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">{siteContent.brand.name}</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-zinc-500">
            {siteContent.footer.note}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {siteContent.footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
