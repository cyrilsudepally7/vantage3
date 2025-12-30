import { Metadata } from 'next'
import { services } from '@/lib/content'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'
import { Share2 } from 'lucide-react'

const service = services.items.find(s => s.slug === 'social-media-systems')!

export const metadata: Metadata = {
  title: service.title,
  description: service.fullDescription,
}

export default function SocialMediaSystemsPage() {
  return (
    <ServicePageLayout
      title={service.title}
      category={service.category}
      description={service.fullDescription}
      forWho={service.forWho}
      deliverables={service.deliverables}
      timeline={service.timeline}
      faqs={service.faqs}
      icon={<Share2 className="w-8 h-8 text-accent-purple" />}
      platforms={service.platforms}
    />
  )
}
