'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { about } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { PrimaryButton } from '@/components/ui/Button'
import { Sparkles, Target, Wrench, TrendingUp } from 'lucide-react'

const valueIcons = [Sparkles, Target, Wrench, TrendingUp]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
              {about.story.headline}
            </h1>
            {about.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-text-secondary mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-purple-glow-strong opacity-50 blur-3xl" />
              <div className="relative glass-accent rounded-3xl h-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Vantage"
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-purple-glow opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we build."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-accent rounded-3xl p-10 md:p-14 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {about.positioning.headline}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {about.positioning.paragraph}
            </p>
            <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min">
              Apply to Work With Us
            </PrimaryButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            title="Questions?"
            subtitle="Common questions about working with Vantage."
          />
          <FAQAccordion items={about.faqs} />
        </div>
      </section>
    </div>
  )
}
