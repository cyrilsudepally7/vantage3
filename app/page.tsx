import { Hero } from '@/components/home/Hero'
import { ProblemStatement } from '@/components/home/ProblemStatement'
import { VantageSystem } from '@/components/home/VantageSystem'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { Process } from '@/components/home/Process'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <VantageSystem />
      <ServicesPreview />
      <PortfolioPreview />
      <Process />
      <FinalCTA />
    </>
  )
}
