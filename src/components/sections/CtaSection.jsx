'use client'

import { motion } from 'framer-motion'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import Button from '@/components/ui/Button'
import { BRAND } from '@/lib/constants'

export default function CtaSection() {
  return (
    <section className="relative py-section-lg px-6 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Arch */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[80vh] rounded-t-full border border-gold-500/5" />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[45vw] h-[65vh] rounded-t-full border border-gold-500/8" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <AnimatedDiv>
          <div className="editorial-divider mx-auto mb-8" />
        </AnimatedDiv>

        <AnimatedDiv delay={0.1}>
          <h2 className="font-serif text-display md:text-display-lg text-ivory-50 text-balance">
            Siap Merayakan
            <br />
            <span className="text-gradient-gold">Momen Berharga</span> Ini?
          </h2>
        </AnimatedDiv>

        <AnimatedDiv delay={0.2}>
          <p className="mt-6 text-body-lg md:text-subheading text-ivory-300 max-w-2xl mx-auto leading-relaxed font-light">
            Percayakan aqiqah buah hati Anda kepada Eqahku.
            Tim kami siap membantu Anda dari awal hingga akhir dengan
            penuh amanah dan dedikasi.
          </p>
        </AnimatedDiv>

        <AnimatedDiv delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="gold" size="large" href="#paket">
            Lihat Paket Aqiqah
          </Button>
          <Button
            variant="white"
            size="large"
            href={`https://wa.me/${BRAND.whatsapp}?text=Assalamualaikum, saya ingin memesan aqiqah dari Eqahku`}
            icon="→"
          >
            Konsultasi Gratis
          </Button>
        </AnimatedDiv>

        {/* Trust badges */}
        <AnimatedDiv delay={0.5} className="mt-14 flex items-center justify-center gap-8 flex-wrap">
          {[
            'Syar\'i Certified',
            'Halal Guaranteed',
            '500+ Happy Families',
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-body-sm text-ivory-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              {badge}
            </div>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  )
}