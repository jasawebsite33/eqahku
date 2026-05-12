'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

const REASONS = [
  {
    number: '01',
    icon: '🕌',
    title: 'Sesuai Syariat',
    description:
      'Proses pemotongan dilakukan sesuai syariat Islam oleh tenaga ahli bersertifikat. Kami memastikan setiap syarat aqiqah terpenuhi dengan sempurna.',
  },
  {
    number: '02',
    icon: '⭐',
    title: 'Kualitas Premium',
    description:
      'Hewan pilihan grade A, masakan olahan chef berpengalaman, dan kemasan premium. Kami tidak kompromi soal kualitas.',
  },
  {
    number: '03',
    icon: '🧤',
    title: 'Standar Higienis',
    description:
      'Pengolahan di dapur bersertifikat halal dengan standar kebersihan tinggi. Keamanan pangan keluarga Anda adalah prioritas kami.',
  },
  {
    number: '04',
    icon: '📋',
    title: 'Proses Transparan',
    description:
      'Dokumentasi lengkap dari awal sampai akhir. Anda bisa melihat setiap tahapan proses aqiqah Anda melalui foto dan video.',
  },
  {
    number: '05',
    icon: '💬',
    title: 'Layanan Personal',
    description:
      'Tim dedicated yang siap membantu dari konsultasi hingga pengiriman. Kami mendengarkan dan memahami kebutuhan Anda.',
  },
  {
    number: '06',
    icon: '📦',
    title: 'Kemasan Eksklusif',
    description:
      'Packaging premium yang cantik dan elegan. Cocok untuk dibagikan kepada keluarga, tetangga, dan sahabat Anda.',
  },
]

export default function WhySection() {
  return (
    <section
      id="keunggulan"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-wide">
        <SectionHeading
          label="Keunggulan"
          title="Mengapa Keluarga Indonesia Memilih Eqahku"
          subtitle="Kami menghadirkan standar baru dalam layanan aqiqah yang amanah, premium, dan personal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, index) => (
            <AnimatedDiv key={index} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 rounded-3xl border border-ivory-200 bg-ivory-50/30 hover:bg-white hover:border-gold-200/50 hover:shadow-card transition-premium h-full"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Number */}
                <span className="text-caption text-beige-300 font-mono tracking-wider">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="mt-4 mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-ivory-100 to-beige-100 flex items-center justify-center text-2xl group-hover:from-gold-50 group-hover:to-gold-100 transition-all duration-500">
                  {reason.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-body-sm text-charcoal-500 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}