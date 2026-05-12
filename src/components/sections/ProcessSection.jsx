'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSection() {
  return (
    <section
      id="proses"
      className="section-padding bg-gradient-to-b from-ivory-50 to-beige-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-100/20 blur-3xl pointer-events-none" />

      <div className="container-narrow relative">
        <SectionHeading
          label="Proses"
          title="Transparan dari Awal Hingga Akhir"
          subtitle="Setiap tahapan kami lakukan dengan penuh tanggung jawab dan Anda bisa mengikuti prosesnya."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-200 md:-translate-x-px" />

          {PROCESS_STEPS.map((step, index) => (
            <AnimatedDiv
              key={index}
              delay={index * 0.15}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <motion.div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0
                    ? 'md:pr-16 md:text-right'
                    : 'md:pl-16 md:text-left'
                }`}
                whileHover={{ x: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
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
              </motion.div>

              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
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

              {/* Empty spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}