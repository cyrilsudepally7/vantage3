'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ButtonProps extends HTMLMotionProps<'button'> {
  href?: string
  arrow?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function PrimaryButton({
  children,
  className,
  href,
  arrow = true,
  size = 'md',
  ...props
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const content = (
    <motion.span
      className={cn(
        'inline-flex items-center gap-2 font-medium rounded-xl',
        'bg-gradient-to-r from-accent-purple to-accent-indigo',
        'text-white shadow-glow-sm',
        'transition-all duration-300',
        'hover:shadow-glow hover:brightness-110',
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return <button type="button">{content}</button>
}

export function SecondaryButton({
  children,
  className,
  href,
  arrow = false,
  size = 'md',
  ...props
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const content = (
    <motion.span
      className={cn(
        'inline-flex items-center gap-2 font-medium rounded-xl',
        'bg-surface border border-border-light',
        'text-text-primary',
        'transition-all duration-300',
        'hover:bg-surface-light hover:border-border-accent',
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return <button type="button">{content}</button>
}
