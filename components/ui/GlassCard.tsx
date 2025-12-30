'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'accent' | 'strong'
  hover?: boolean
  glow?: boolean
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  hover = true,
  glow = false,
  ...props
}: GlassCardProps) {
  const variants = {
    default: 'glass-card',
    accent: 'glass-accent',
    strong: 'glass-strong',
  }

  return (
    <motion.div
      className={cn(
        variants[variant],
        'rounded-2xl p-6',
        hover && 'transition-all duration-300 hover:border-border-light hover:shadow-glass-lg',
        glow && 'hover:shadow-glow-sm',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
