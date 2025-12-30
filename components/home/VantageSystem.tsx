'use client'

import { motion } from 'framer-motion'
import { vantageSystem } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Globe, Share2, Mail, TrendingUp } from 'lucide-react'

const iconMap: Record<string, typeof Globe> = {
  'globe': Globe,
  'share': Share2,
  'mail': Mail,
  'trending-up': TrendingUp,
}

export function VantageSystem() {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-purple-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          title={vantageSystem.title}
          subtitle={vantageSystem.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vantageSystem.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon]
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="glass-accent rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/30 to-accent-indigo/30 flex items-center justify-center mb-5 border border-accent-purple/20">
                    <Icon className="w-7 h-7 text-accent-purple" />
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-text-primary">
                      {pillar.title}
                    </h3>
                    <span className="text-sm text-accent-violet">
                      {pillar.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary text-sm">
                    {pillar.description}
                  </p>
                </div>

                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03]">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
