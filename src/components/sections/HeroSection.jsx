'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import { BRAND } from '@/lib/constants'

// Dynamic import untuk 3D (client only, no SSR)
const Hero3D = dynamic(() => import('@/components/three/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-hero" />
  ),
})

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero noise-overlay" />

      {/* Subtle arch pattern - inspired by reference */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[10%] left-[5%] w-[40vw] h-[60vh] rounded-t-full border border-beige-200/20"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(242,236,223,0.15) 100%)' }}
        />
        <div
          className="absolute top-[15%] right-[10%] w-[25vw] h-[45vh] rounded-t-full border border-beige-200/10"
        />
      </div>

      {/* 3D Canvas - Right side on desktop */}
      <motion.div
        className="absolute inset-0 lg:left-[35%] lg:right-0"
        style={{ y }}
      >
        <Hero3D />
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full"
        style={{ opacity }}
      >
        <div className="max-w-2xl pt-24 md:pt-0">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-8 h-[1.5px] bg-gold-500" />
            <span className="text-caption uppercase tracking-[0.25em] text-gold-700 font-medium">
              Layanan Aqiqah Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-display md:text-display-lg lg:text-display-xl text-charcoal-900 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Merayakan{' '}
            <span className="text-gradient-gold">Amanah</span>
            <br />
            dengan Penuh
            <br />
            Ketulusan
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-body-lg md:text-subheading text-charcoal-500 max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Eqahku menghadirkan pengalaman aqiqah premium yang amanah,
            berkualitas, dan personal — karena setiap kelahiran layak
            dirayakan dengan cara terbaik.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button variant="primary" size="large" href="#paket">
              Lihat Paket
            </Button>
            <Button
              variant="secondary"
              size="large"
              href={`https://wa.me/${BRAND.whatsapp}?text=Assalamualaikum, saya ingin konsultasi mengenai paket aqiqah Eqahku`}
              icon="→"
            >
              Konsultasi via WhatsApp
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            className="mt-14 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-ivory-50 bg-beige-200 flex items-center justify-center text-caption text-charcoal-600 font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-body-sm text-charcoal-500">
              <span className="text-charcoal-800 font-semibold">500+</span>{' '}
              keluarga telah mempercayakan aqiqah mereka
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-caption text-charcoal-400 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-charcoal-300 flex justify-center pt-1.5"
          initial={{ opacity: 0.5 }}
        >
          <motion.div
            className="w-1 h-2 bg-gold-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}