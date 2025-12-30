'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { portfolio } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PrimaryButton } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export function PortfolioPreview() {
  const previewItems = portfolio.items

  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-glow opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title={portfolio.title}
          subtitle={portfolio.subtitle}
        />

        <div className="flex justify-center mb-12">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group max-w-md w-full"
            >
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-surface-light to-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-indigo/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/[0.05]">
                    {item.title.charAt(0)}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
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
                
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="space-y-1 mb-4">
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

        <div className="text-center">
          <PrimaryButton href="/portfolio">
            View All Work
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
