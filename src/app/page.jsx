import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { StaffAssurances } from '@/components/StaffAssurances'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'

import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title: 'Summit Learning - Creating a Summit Learninger future for your child',
  description:
    'At Summit Learning School, we believe every child deserves a Summit Learninger future. and strive to give every student a personalized education that will promote their individual strengths and creativity.',
}

export default function HomePage() {
  const faqs = getAllItems('faqs')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-blue-100 to-white sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  )
}
