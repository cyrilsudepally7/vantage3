'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { process as processContent } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])

  return (
    <section id="process" className="py-24 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={processContent.title}
          subtitle={processContent.subtitle}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-purple to-accent-indigo"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {processContent.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className="glass-card rounded-2xl p-8 max-w-md">
                    <span className="text-5xl font-bold text-gradient mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 w-12 h-12 rounded-full glass-accent flex items-center justify-center border border-accent-purple/30">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-purple to-accent-indigo" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
