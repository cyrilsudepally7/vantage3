'use client'

import { motion } from 'framer-motion'
import { problems } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AlertCircle, Globe, Smartphone, DollarSign } from 'lucide-react'

const icons = [AlertCircle, Globe, Smartphone, DollarSign]

export function ProblemStatement() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={problems.title}
          subtitle={problems.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.items.map((problem, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {problem.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
