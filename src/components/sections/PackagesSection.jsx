'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import Button from '@/components/ui/Button'
import { PACKAGES, BRAND } from '@/lib/constants'

export default function PackagesSection() {
  return (
    <section
      id="paket"
      className="section-padding bg-gradient-to-b from-ivory-50 via-beige-50 to-ivory-50 relative overflow-hidden"
    >
      {/* Subtle background arch */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] rounded-t-full border border-beige-200/30 pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeading
          label="Paket Aqiqah"
          title="Pilih Paket Terbaik untuk Keluarga Anda"
          subtitle="Setiap paket kami rancang dengan memperhatikan kualitas, keberkahan, dan kenyamanan Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedDiv className="text-center mt-12" delay={0.4}>
          <p className="text-body-sm text-charcoal-400">
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info
            terbaru dan custom request.
          </p>
        </AnimatedDiv>
      </div>
    </section>
  )
}

function PackageCard({ pkg, index }) {
  return (
    <AnimatedDiv delay={index * 0.15}>
      <motion.div
        className={`relative rounded-3xl overflow-hidden h-full flex flex-col transition-premium ${
          pkg.popular
            ? 'bg-charcoal-900 text-ivory-50 shadow-elevated scale-[1.02] lg:scale-105'
            : 'bg-white text-charcoal-800 shadow-card border border-ivory-300/50'
        }`}
        whileHover={{
          y: -8,
          boxShadow: pkg.popular
            ? '0 20px 60px -12px rgba(0,0,0,0.3)'
            : '0 12px 32px rgba(0,0,0,0.1)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Popular badge */}
        {pkg.popular && (
          <div className="absolute top-0 left-0 right-0">
            <div className="bg-gradient-gold text-charcoal-900 text-caption font-semibold tracking-widest uppercase py-2.5 text-center">
              Paling Populer
            </div>
          </div>
        )}

        <div className={`p-8 md:p-9 flex-1 flex flex-col ${pkg.popular ? 'pt-14' : ''}`}>
          {/* Package name */}
          <div className="mb-6">
            <span
              className={`text-caption uppercase tracking-[0.2em] font-medium ${
                pkg.popular ? 'text-gold-400' : 'text-gold-600'
              }`}
            >
              {pkg.subtitle}
            </span>
            <h3
              className={`font-serif text-heading-lg mt-2 ${
                pkg.popular ? 'text-ivory-50' : 'text-charcoal-900'
              }`}
            >
              {pkg.name}
            </h3>
          </div>

          {/* Price */}
          <div className="mb-6 pb-6 border-b border-dashed border-charcoal-200/20">
            <div className="flex items-baseline gap-1">
              <span
                className={`text-body-sm ${
                  pkg.popular ? 'text-ivory-400' : 'text-charcoal-400'
                }`}
              >
                Rp
              </span>
              <span
                className={`font-serif text-display font-bold ${
                  pkg.popular ? 'text-ivory-50' : 'text-charcoal-900'
                }`}
              >
                {pkg.price}
              </span>
            </div>
            <span
              className={`text-body-sm ${
                pkg.popular ? 'text-ivory-400' : 'text-charcoal-400'
              }`}
            >
              / {pkg.unit}
            </span>
          </div>

          {/* Description */}
          <p
            className={`text-body-sm mb-7 ${
              pkg.popular ? 'text-ivory-300' : 'text-charcoal-500'
            }`}
          >
            {pkg.description}
          </p>

          {/* Features */}
          <ul className="space-y-3.5 flex-1">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                    pkg.popular
                      ? 'bg-gold-500/20 text-gold-400'
                      : 'bg-olive-100 text-olive-600'
                  }`}
                >
                  ✓
                </span>
                <span
                  className={`text-body-sm ${
                    pkg.popular ? 'text-ivory-200' : 'text-charcoal-600'
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Button
              variant={pkg.popular ? 'gold' : 'secondary'}
              className="w-full justify-center"
              href={`https://wa.me/${BRAND.whatsapp}?text=Assalamualaikum, saya tertarik dengan paket ${pkg.name} Eqahku`}
            >
              Pilih Paket {pkg.name}
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatedDiv>
  )
}