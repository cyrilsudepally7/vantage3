'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Clock, CheckCircle } from 'lucide-react'

interface ServicePageLayoutProps {
  title: string
  category: string
  description: string
  forWho: string[]
  deliverables: string[]
  timeline: string
  faqs: { question: string; answer: string }[]
  icon: React.ReactNode
  platforms?: string[]
  types?: string[]
}

export function ServicePageLayout({
  title,
  category,
  description,
  forWho,
  deliverables,
  timeline,
  faqs,
  icon,
  platforms,
  types,
}: ServicePageLayoutProps) {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center">
              {icon}
            </div>
            <span className="text-sm text-text-muted uppercase tracking-wider">
              {category}
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-3xl">
            {description}
          </p>

          {platforms && (
            <div className="flex flex-wrap gap-2 mb-8">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          )}

          {types && (
            <div className="flex flex-wrap gap-2 mb-8">
              {types.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min">
              Apply for This Service
            </PrimaryButton>
            <SecondaryButton href="/portfolio">
              See Examples
            </SecondaryButton>
          </div>
        </motion.div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-purple-glow opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
                Who Is This For?
              </h2>
              <div className="space-y-4">
                {forWho.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
                What You Get
              </h2>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Timeline */}
              <div className="mt-6 glass-accent rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-purple" />
                <div>
                  <span className="text-sm text-text-muted">Typical Timeline</span>
                  <p className="text-text-primary font-medium">{timeline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            title="Common Questions"
            subtitle={`Everything you need to know about ${title.toLowerCase()}.`}
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-accent rounded-3xl p-10 md:p-14 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Apply now and tell us about your project. We&apos;ll be in touch if there&apos;s a fit.
            </p>
            <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min" size="lg">
              Apply Now
            </PrimaryButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
