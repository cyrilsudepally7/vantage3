'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation } from '@/lib/content'
import { cn } from '@/lib/utils'
import { PrimaryButton } from './Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vantage"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="font-display text-xl font-bold text-text-primary">
            Vantage
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.main.map((item) =>
            item.dropdown ? (
              <DropdownMenu.Root key={item.name}>
                <DropdownMenu.Trigger className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors outline-none">
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    sideOffset={20}
                    className="glass-card rounded-xl p-4 min-w-[280px] z-50"
                  >
                    {item.items?.map((group, idx) => (
                      <div key={idx} className={idx > 0 ? 'mt-4 pt-4 border-t border-border' : ''}>
                        <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2 px-3">
                          {group.group}
                        </div>
                        {group.items.map((subItem) => (
                          <DropdownMenu.Item key={subItem.name} asChild>
                            <Link
                              href={subItem.href}
                              className="block px-3 py-2 rounded-lg hover:bg-surface-light transition-colors outline-none"
                            >
                              <div className="text-text-primary font-medium">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-text-muted">
                                {subItem.description}
                              </div>
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-border">
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/services"
                          className="block px-3 py-2 rounded-lg hover:bg-surface-light transition-colors text-accent-purple font-medium outline-none"
                        >
                          View All Services →
                        </Link>
                      </DropdownMenu.Item>
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <PrimaryButton href={navigation.cta.href} size="sm">
            {navigation.cta.name}
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <Link
                        href={item.href}
                        className="block text-lg text-text-primary font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {item.items?.map((group) =>
                          group.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-text-secondary hover:text-text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-lg text-text-primary font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <PrimaryButton href={navigation.cta.href} className="w-full justify-center">
                  {navigation.cta.name}
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
