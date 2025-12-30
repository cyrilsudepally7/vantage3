'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact, siteConfig } from '@/lib/content'
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button'
import { Mail, Twitter, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
              {contact.title}
            </h1>
            <p className="text-xl text-text-secondary mb-10">
              {contact.subtitle}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <span className="text-sm text-text-muted">Email</span>
                  <p className="text-text-primary group-hover:text-accent-violet transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center hover:bg-surface-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-text-secondary" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center hover:bg-surface-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-secondary" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center hover:bg-surface-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-text-secondary" />
              </a>
            </div>

            {/* Apply CTA */}
            <div className="mt-12 glass-accent rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Want to work together?
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                For project inquiries, we recommend applying directly.
              </p>
              <SecondaryButton href="https://calendly.com/cyrilsudepally7/30min" arrow>
                Apply Instead
              </SecondaryButton>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Message Sent
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <SecondaryButton onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </SecondaryButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <PrimaryButton
                    type="submit"
                    className="w-full justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </PrimaryButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
