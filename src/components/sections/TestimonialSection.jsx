'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gold-500/30 ring-offset-4 ring-offset-charcoal-950">
                  <Image
                    src={TESTIMONIALS[active].avatar}
                    alt={TESTIMONIALS[active].name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              {/* Quote mark */}
              <div className="text-gold-500/40 font-serif text-5xl leading-none select-none -mb-4">
                "
              </div>

              <blockquote className="font-serif text-subheading md:text-heading-lg text-ivory-100 leading-relaxed">
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

        {/* Bottom testimonial cards */}
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
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-charcoal-700">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-body-sm text-ivory-200 font-medium leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-caption text-ivory-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-body-sm text-ivory-400 line-clamp-3">
                  "{testimonial.text}"
                </p>
              </motion.button>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}