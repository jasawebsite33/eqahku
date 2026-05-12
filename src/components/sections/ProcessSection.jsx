'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSection() {
  return (
    <section
      id="proses"
      className="section-padding bg-gradient-to-b from-ivory-50 to-beige-50 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-100/20 blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeading
          label="Proses"
          title="Transparan dari Awal Hingga Akhir"
          subtitle="Setiap tahapan kami lakukan dengan penuh tanggung jawab dan Anda bisa mengikuti prosesnya."
        />

        {/* Timeline */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-200 md:-translate-x-px" />

          {PROCESS_STEPS.map((step, index) => (
            <AnimatedDiv
              key={index}
              delay={index * 0.15}
              className={`relative flex items-center gap-8 mb-12 md:mb-20 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Side - Hidden on mobile */}
              <div
                className={`hidden md:block flex-1 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}
              >
                <motion.div
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
                </motion.div>
              </div>

              {/* Content Side */}
              <div
                className={`flex-1 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'
                }`}
              >
                <span className="text-caption text-gold-600 font-mono tracking-wider mb-2 block">
                  Langkah {step.step}
                </span>
                <h3 className="font-serif text-heading text-charcoal-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-body text-charcoal-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Timeline dot - Desktop */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 items-center justify-center top-1/2 -translate-y-1/2 hidden md:flex">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white border-2 border-gold-400 flex items-center justify-center shadow-soft z-10"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <span className="text-body-sm font-serif font-bold text-gold-600">
                    {step.step}
                  </span>
                </motion.div>
              </div>

              {/* Timeline dot - Mobile */}
              <div className="absolute left-6 -translate-x-1/2 top-2 md:hidden">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gold-400 flex items-center justify-center shadow-soft z-10">
                  <span className="text-body-sm font-serif font-bold text-gold-600">
                    {step.step}
                  </span>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}