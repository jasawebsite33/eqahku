'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { BRAND } from '@/lib/constants'

const Hero3D = dynamic(() => import('@/components/three/Hero3D'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-hero" />,
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24 lg:pt-28 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero noise-overlay" />

      {/* Subtle arch pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] left-[5%] w-[40vw] h-[60vh] rounded-t-full border border-beige-200/20"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(242,236,223,0.15) 100%)',
          }}
        />
        <div className="absolute top-[20%] right-[10%] w-[25vw] h-[45vh] rounded-t-full border border-beige-200/10" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 lg:left-[42%] lg:right-0 top-20 lg:top-0 opacity-30 lg:opacity-100">
        <Hero3D />
      </div>

      {/* Subtle gradient mask di kiri agar text readable di mobile */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-ivory-50 via-ivory-50/85 to-ivory-50/40 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6 lg:mb-8"
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
            className="font-serif text-[2.75rem] sm:text-display md:text-display-lg lg:text-display-xl text-charcoal-900 text-balance leading-[1.05]"
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
            className="mt-6 lg:mt-7 text-body-lg md:text-subheading text-charcoal-500 max-w-xl leading-relaxed font-light"
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
            className="mt-8 lg:mt-10 flex flex-wrap gap-4"
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
  className="mt-12 lg:mt-16 flex items-center gap-6"
  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=faces',
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full border-2 border-ivory-50 overflow-hidden shadow-soft"
                >
                  <Image
                    src={src}
                    alt={`Customer ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <div className="text-body-sm text-charcoal-500">
              <span className="text-charcoal-800 font-semibold">500+</span>{' '}
              keluarga telah mempercayakan aqiqah mereka
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-caption text-charcoal-400 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div className="w-5 h-8 rounded-full border border-charcoal-300 flex justify-center pt-1.5">
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