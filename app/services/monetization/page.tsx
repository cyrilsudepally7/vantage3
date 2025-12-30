import { Metadata } from 'next'
import { services } from '@/lib/content'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'
import { ShoppingBag } from 'lucide-react'

const service = services.items.find(s => s.slug === 'monetization')!

export const metadata: Metadata = {
  title: service.title,
  description: service.fullDescription,
}

export default function MonetizationPage() {
  return (
    <ServicePageLayout
      title={service.title}
      category={service.category}
      description={service.fullDescription}
      forWho={service.forWho}
      deliverables={service.deliverables}
      timeline={service.timeline}
      faqs={service.faqs}
      icon={<ShoppingBag className="w-8 h-8 text-accent-purple" />}
      types={service.types}
    />
  )
}
