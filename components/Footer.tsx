import Image from 'next/image';
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
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#e5e7eb] px-6 py-6 lg:px-8">
        <div className="flex flex-col gap-1">
          <Image
            src="/logo-iamagica.png"
            alt="IAMagica"
            width={112}
            height={28}
            style={{ height: '28px', width: 'auto' }}
          />
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>© 2026 IAMagica</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#1B4332', letterSpacing: '0.5px' }}>
            DIGITALIZA TU NEGOCIO
          </p>
          <a
            href="mailto:info@iamagica.es"
            style={{ textDecoration: 'none', color: '#6b7280' }}
            className="flex items-center gap-2"
          >
            <span style={{ fontSize: '20px' }}>✉</span>
            <span style={{ fontSize: '14px' }}>info@iamagica.es</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
