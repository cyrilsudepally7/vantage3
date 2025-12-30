'use client'

import Link from 'next/link'
import Image from 'next/image'
import { footer, siteConfig } from '@/lib/content'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Vantage"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-display text-xl font-bold text-text-primary">
                Vantage
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-purple transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-purple transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-purple transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Contact</h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-secondary hover:text-accent-purple transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-muted text-sm hover:text-text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
