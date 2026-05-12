'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          index={index}
        />
      ))}
    </div>
  )
}

function AccordionItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      className={`rounded-2xl border transition-premium overflow-hidden ${
        isOpen
          ? 'border-gold-300/50 bg-white shadow-card'
          : 'border-ivory-300 bg-ivory-50/50 hover:border-beige-300'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-7 text-left"
      >
        <span
          className={`font-serif text-lg md:text-xl pr-4 transition-colors duration-300 ${
            isOpen ? 'text-charcoal-900' : 'text-charcoal-700'
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors duration-300 ${
            isOpen
              ? 'bg-gold-500 text-white'
              : 'bg-beige-100 text-charcoal-500'
          }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7">
              <div className="w-full h-px bg-ivory-300 mb-5" />
              <p className="text-body text-charcoal-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}