import { TestimonialHero } from '@/components/TestimonialHero'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'

export const metadata = {
  title: 'Parent information - Summit Learning',
  description:
    'Stay connected with Summit Learning Preschool & Elementary through our Parents Portal - your go-to source for school news, events, and updates.',
}

export default function ParentsPage() {
  return (
    <>
      <TestimonialHero />
      <Testimonials /> 
      <Stats/>
    </>
  )
}
