'use client'

import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }

  return (
    <motion.div
      className={`flex flex-col ${alignClass[align]} mb-16 md:mb-20`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Label */}
      {label && (
        <span
          className={`text-caption uppercase tracking-[0.2em] font-medium mb-4 ${
            light ? 'text-ivory-300' : 'text-gold-600'
          }`}
        >
          {label}
        </span>
      )}

      {/* Ornamental line */}
      <div className="editorial-divider mb-6" />

      {/* Title */}
      <h2
        className={`font-serif font-semibold text-heading-lg md:text-display max-w-3xl text-balance ${
          light ? 'text-ivory-50' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-5 text-body-lg max-w-2xl text-balance ${
            light ? 'text-ivory-300' : 'text-charcoal-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}