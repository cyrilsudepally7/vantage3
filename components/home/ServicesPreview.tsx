'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Globe, Share2, Mail, ShoppingBag, Heart } from 'lucide-react'

const iconMap: Record<string, typeof Globe> = {
  'modernized-website': Globe,
  'social-media-systems': Share2,
  'email-messaging': Mail,
  'monetization': ShoppingBag,
  'nonprofit-student-org': Heart,
}

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={services.overview.title}
          subtitle={services.overview.subtitle}
        />

        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.items.slice(0, 3).map((service, index) => {
            const Icon = iconMap[service.slug]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="glass-card rounded-2xl p-6 h-full group hover:border-border-accent transition-all duration-300 hover:shadow-glow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-purple" />
                      </div>
                      <span className="text-xs text-text-muted uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-violet transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent-purple text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="flex justify-center gap-6">
          {services.items.slice(3, 5).map((service, index) => {
            const Icon = iconMap[service.slug]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="glass-card rounded-2xl p-6 h-full group hover:border-border-accent transition-all duration-300 hover:shadow-glow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-purple" />
                      </div>
                      <span className="text-xs text-text-muted uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-violet transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent-purple text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
