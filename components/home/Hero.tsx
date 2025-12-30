'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { hero } from '@/lib/content'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Globe, Share2, Mail, TrendingUp } from 'lucide-react'

const floatingCards = [
  { icon: Globe, label: 'Website', delay: 0 },
  { icon: Share2, label: 'Social', delay: 0.1 },
  { icon: Mail, label: 'Email', delay: 0.2 },
  { icon: TrendingUp, label: 'Revenue', delay: 0.3 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
            >
              <Image
                src="/logo.png"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm text-text-secondary">Brand Infrastructure</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-6">
              {hero.headline.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={word === 'Scales.' ? 'text-gradient' : ''}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-text-secondary mb-10 max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <PrimaryButton href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.text}
              </PrimaryButton>
              <SecondaryButton href={hero.secondaryCta.href} size="lg">
                {hero.secondaryCta.text}
              </SecondaryButton>
            </motion.div>
          </motion.div>

          {/* Right - Floating Cards */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-glow-strong opacity-50 blur-3xl" />
            
            {/* Logo in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-purple/30 blur-3xl rounded-full" />
                <Image
                  src="/logo.png"
                  alt="Vantage"
                  width={120}
                  height={120}
                  className="w-28 h-28 relative z-10"
                />
              </div>
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, index) => {
              const positions = [
                { top: '8%', left: '20%' },
                { top: '8%', right: '5%' },
                { bottom: '20%', left: '10%' },
                { bottom: '15%', right: '10%' },
              ]
              const pos = positions[index]
              
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + card.delay }}
                  className="absolute"
                  style={pos}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    className="glass-card p-5 rounded-2xl hover:border-border-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
                        <card.icon className="w-5 h-5 text-accent-purple" />
                      </div>
                      <span className="font-medium text-text-primary">{card.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.circle
                cx="50%"
                cy="50%"
                r="150"
                fill="none"
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="1"
                strokeDasharray="10 5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ rotate: { duration: 60, repeat: Infinity, ease: 'linear' } }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
