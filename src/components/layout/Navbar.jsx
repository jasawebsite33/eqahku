'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { NAV_LINKS, BRAND } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-premium ${
          isScrolled
            ? 'bg-ivory-50/80 backdrop-blur-xl shadow-soft border-b border-ivory-200/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 h-20 md:h-22">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <span
              className={`font-serif text-2xl md:text-[1.65rem] font-semibold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-charcoal-900' : 'text-charcoal-900'
              }`}
            >
              Eqah
              <span className="text-gold-600">ku</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-body-sm font-medium rounded-xl transition-premium hover:bg-beige-100/60 ${
                  isScrolled
                    ? 'text-charcoal-600 hover:text-charcoal-900'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              size="small"
              href={`https://wa.me/${BRAND.whatsapp}`}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-charcoal-800 origin-center transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-6 h-[1.5px] bg-charcoal-800"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-charcoal-800 origin-center transition-colors"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory-50/98 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-heading text-charcoal-800 hover:text-gold-600 py-3 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="primary"
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Hubungi via WhatsApp
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}