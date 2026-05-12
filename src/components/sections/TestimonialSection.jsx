'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="testimoni"
      className="section-padding bg-charcoal-950 relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="container-wide relative">
        <SectionHeading
          label="Testimoni"
          title="Dipercaya Ratusan Keluarga"
          subtitle="Kata mereka yang telah merasakan layanan aqiqah premium Eqahku."
          light
        />

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Quote */}
              <div className="mb-8">
                <span className="text-gold-500/50 font-serif text-[5rem] leading-none select-none">
                  "
                </span>
              </div>

              <blockquote className="font-serif text-subheading md:text-heading-lg text-ivory-100 leading-relaxed -mt-12">
                {TESTIMONIALS[active].text}
              </blockquote>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mt-8">
                {Array.from({ length: TESTIMONIALS[active].rating }).map(
                  (_, i) => (
                    <span key={i} className="text-gold-400 text-lg">
                      ★
                    </span>
                  )
                )}
              </div>

              {/* Author */}
              <div className="mt-6">
                <p className="font-serif text-lg text-ivory-100">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-body-sm text-ivory-500 mt-1">
                  {TESTIMONIALS[active].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`transition-all duration-500 rounded-full ${
                  active === index
                    ? 'w-10 h-2.5 bg-gold-500'
                    : 'w-2.5 h-2.5 bg-ivory-600/30 hover:bg-ivory-500/50'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom testimonial cards - condensed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedDiv key={index} delay={index * 0.1}>
              <motion.button
                onClick={() => setActive(index)}
                className={`w-full text-left p-5 rounded-2xl border transition-premium ${
                  active === index
                    ? 'border-gold-500/30 bg-charcoal-800'
                    : 'border-charcoal-800 bg-charcoal-900/50 hover:border-charcoal-700'
                }`}
                whileHover={{ y: -2 }}
              >
                <p className="text-body-sm text-ivory-300 line-clamp-3 mb-3">
                  "{testimonial.text.substring(0, 80)}..."
                </p>
                <p className="text-caption text-ivory-500 font-medium">
                  — {testimonial.name}
                </p>
              </motion.button>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}