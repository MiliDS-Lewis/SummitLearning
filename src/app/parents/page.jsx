import { ParentsHero } from '@/components/ParentsHero'
import { Events } from '@/components/Events'
import { Newsletter } from '@/components/Newsletter'

export const metadata = {
  title: 'Parent information - Summit Learning',
  description:
    'Stay connected with Summit Learning Preschool & Elementary through our Parents Portal - your go-to source for school news, events, and updates.',
}

export default function ParentsPage() {
  return (
    <>
      <ParentsHero />
      <Events />
      <Newsletter />
    </>
  )
}
