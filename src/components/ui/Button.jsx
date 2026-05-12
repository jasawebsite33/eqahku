'use client'

import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-medium tracking-wide transition-premium overflow-hidden group'

  const variants = {
    primary:
      'bg-charcoal-900 text-ivory-50 hover:bg-charcoal-800 shadow-soft hover:shadow-medium',
    secondary:
      'bg-transparent text-charcoal-800 border border-charcoal-300 hover:border-charcoal-500 hover:bg-charcoal-50',
    gold:
      'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white shadow-gold hover:shadow-lg',
    ghost:
      'bg-transparent text-charcoal-700 hover:text-charcoal-900 hover:bg-beige-50',
    white:
      'bg-white/90 backdrop-blur-sm text-charcoal-800 hover:bg-white shadow-soft',
  }

  const sizes = {
    small: 'px-5 py-2.5 text-body-sm rounded-xl gap-2',
    default: 'px-7 py-3.5 text-body-sm rounded-2xl gap-2.5',
    large: 'px-9 py-4.5 text-body rounded-2xl gap-3',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && <span className="text-lg">{icon}</span>}
      </span>
    </MotionComponent>
  )
}