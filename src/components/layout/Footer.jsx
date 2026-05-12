'use client'

import { motion } from 'framer-motion'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal-950 text-ivory-200 overflow-hidden">
      {/* Subtle ornament */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <AnimatedDiv className="lg:col-span-2" delay={0}>
            <span className="font-serif text-3xl font-semibold text-ivory-50">
              Eqah<span className="text-gold-500">ku</span>
            </span>
            <p className="mt-4 text-body text-ivory-400 max-w-md leading-relaxed">
              {BRAND.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Social links - minimal style */}
              {['Instagram', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-body-sm text-ivory-500 hover:text-gold-400 transition-colors duration-300 underline underline-offset-4 decoration-ivory-700 hover:decoration-gold-400"
                >
                  {social}
                </a>
              ))}
            </div>
          </AnimatedDiv>

          {/* Navigation */}
          <AnimatedDiv delay={0.1}>
            <h4 className="font-serif text-lg text-ivory-100 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-ivory-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedDiv>

          {/* Contact */}
          <AnimatedDiv delay={0.2}>
            <h4 className="font-serif text-lg text-ivory-100 mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 text-body-sm text-ivory-400">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  +62 812 3456 7890
                </a>
              </li>
              <li className="text-ivory-500">{BRAND.address}</li>
            </ul>
          </AnimatedDiv>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 h-px bg-charcoal-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-ivory-600">
            © {currentYear} {BRAND.name}. Semua hak dilindungi.
          </p>
          <p className="text-caption text-ivory-700">
            Dibuat dengan ❤️ untuk keberkahan
          </p>
        </div>
      </div>
    </footer>
  )
}