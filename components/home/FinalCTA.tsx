'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-purple-glow-strong opacity-40 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-accent rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-indigo/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="Vantage"
                width={64}
                height={64}
                className="w-16 h-16 mx-auto"
              />
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Ready to Build Your
              <span className="text-gradient"> Brand System</span>?
            </h2>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Apply to work with Vantage. We&apos;ll review your application and get back to you within 3-5 business days if there&apos;s a potential fit.
            </p>
            
            <PrimaryButton href="https://calendly.com/cyrilsudepally7/30min" size="lg">
              Apply to Work With Vantage
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
