'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="section-padding bg-ivory-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-beige-50/50 to-transparent" />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedDiv direction="left" className="relative">
            <motion.div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ y: imageY }}
            >
              {/* Placeholder image with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-beige-200 via-ivory-200 to-beige-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-beige-300/50 flex items-center justify-center">
                      <span className="text-4xl">🐑</span>
                    </div>
                    <p className="text-body-sm text-beige-500">
                      Foto brand Eqahku
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/10 to-transparent" />
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl p-6 shadow-elevated max-w-[220px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-display font-serif text-gold-600 font-bold">
                500+
              </div>
              <p className="text-body-sm text-charcoal-500 mt-1">
                Keluarga telah mempercayai kami
              </p>
            </motion.div>

            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400/30 rounded-tl-3xl" />
          </AnimatedDiv>

          {/* Content Side */}
          <div className="lg:pl-4">
            <AnimatedDiv delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="editorial-divider" />
                <span className="text-caption uppercase tracking-[0.2em] text-gold-600 font-medium">
                  Tentang Eqahku
                </span>
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}>
              <h2 className="font-serif text-heading-lg md:text-display text-charcoal-900 text-balance">
                Bukan Sekadar Jasa Aqiqah,
                <br />
                <span className="text-gradient-gold">Ini Amanah</span>
              </h2>
            </AnimatedDiv>

            <AnimatedDiv delay={0.3}>
              <p className="mt-6 text-body-lg text-charcoal-500 leading-relaxed">
                Eqahku lahir dari keyakinan bahwa aqiqah adalah ibadah
                sakral yang layak dijalankan dengan penuh tanggung jawab.
                Kami bukan sekadar jasa — kami adalah mitra yang memastikan
                setiap prosesnya amanah, dari pemilihan hewan hingga
                makanan sampai di tangan Anda.
              </p>
            </AnimatedDiv>

            <AnimatedDiv delay={0.4}>
              <p className="mt-4 text-body-lg text-charcoal-500 leading-relaxed">
                Dengan perhatian pada detail dan standar kualitas premium,
                kami ingin setiap keluarga merasakan ketenangan dan
                keberkahan di momen istimewa ini.
              </p>
            </AnimatedDiv>

            {/* Values */}
            <AnimatedDiv delay={0.5} className="mt-10 grid grid-cols-2 gap-6">
              {[
                {
                  icon: '🤲',
                  title: 'Amanah',
                  desc: 'Setiap proses kami jaga dengan penuh tanggung jawab',
                },
                {
                  icon: '✨',
                  title: 'Premium',
                  desc: 'Kualitas terbaik di setiap detail layanan',
                },
                {
                  icon: '👤',
                  title: 'Personal',
                  desc: 'Pendekatan yang personal untuk setiap keluarga',
                },
                {
                  icon: '🔍',
                  title: 'Transparan',
                  desc: 'Anda tahu persis setiap tahapan prosesnya',
                },
              ].map((value, i) => (
                <div key={i} className="group">
                  <span className="text-2xl mb-3 block">{value.icon}</span>
                  <h4 className="font-serif text-lg text-charcoal-800 mb-1">
                    {value.title}
                  </h4>
                  <p className="text-body-sm text-charcoal-500">
                    {value.desc}
                  </p>
                </div>
              ))}
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  )
}