'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PrimaryButton } from '@/components/ui/Button'
import { ArrowRight, Globe, Share2, Mail, ShoppingBag, Heart } from 'lucide-react'

const iconMap: Record<string, typeof Globe> = {
  'modernized-website': Globe,
  'social-media-systems': Share2,
  'email-messaging': Mail,
  'monetization': ShoppingBag,
  'nonprofit-student-org': Heart,
}

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {services.overview.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {services.overview.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 mb-24">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.slug]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="glass-card rounded-2xl p-8 md:p-10 group hover:border-border-accent transition-all duration-300 hover:shadow-glow-sm">
                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-accent-purple" />
                          </div>
                          <div>
                            <span className="text-xs text-text-muted uppercase tracking-wider">
                              {service.category}
                            </span>
                            <h2 className="text-2xl font-bold text-text-primary group-hover:text-accent-violet transition-colors">
                              {service.title}
                            </h2>
                          </div>
                        </div>
                        
                        <p className="text-text-secondary mb-4 max-w-2xl">
                          {service.fullDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.slice(0, 4).map((deliverable, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-surface-light text-text-muted"
                            >
                              {deliverable}
                            </span>
                          ))}
                          {service.deliverables.length > 4 && (
                            <span className="text-xs px-3 py-1 rounded-full bg-surface-light text-text-muted">
                              +{service.deliverables.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-accent-purple font-medium">
                        Learn more
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-accent rounded-3xl p-10 md:p-14 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
            Apply and tell us about your business. We&apos;ll help you figure out the right approach.
          </p>
          <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min">
            Apply Now
          </PrimaryButton>
        </motion.div>
      </div>
    </div>
  )
}
