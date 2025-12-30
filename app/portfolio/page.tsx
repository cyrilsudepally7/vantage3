'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { portfolio } from '@/lib/content'
import { PrimaryButton } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {portfolio.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {portfolio.subtitle}
          </p>
        </motion.div>

        {/* Portfolio Grid - centered for single item */}
        <div className="flex justify-center mb-16">
          {portfolio.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden group max-w-md w-full"
            >
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-surface-light to-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-indigo/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/[0.05]">
                    {item.title.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay */}
                <Link 
                  href="https://utdfla.com" 
                  target="_blank"
                  className="absolute inset-0 bg-accent-purple/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="glass rounded-full p-3">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </Link>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent-purple/10 text-accent-purple">
                    {item.category}
                  </span>
                  <span className="text-xs text-text-muted">
                    {item.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-violet transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {item.outcomes.map((outcome, i) => (
                    <div key={i} className="text-sm text-text-muted flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent-purple" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <Link 
                  href="https://utdfla.com" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-accent-purple text-sm font-medium hover:text-accent-violet transition-colors"
                >
                  See Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-accent rounded-3xl p-10 md:p-14 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Want Results Like These?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
            Apply to work with Vantage and build your own brand infrastructure.
          </p>
          <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min">
            Apply Now
          </PrimaryButton>
        </motion.div>
      </div>
    </div>
  )
}
