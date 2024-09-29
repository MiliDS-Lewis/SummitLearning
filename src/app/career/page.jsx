import { CareerHero } from "@/components/CareerHero"
import { CareerContactInformation } from "@/components/CareerContactInformation"

export const metadata = {
  title: 'Careers - Join Summit Learning',
  description:
    "Looking for a rewarding career in education? Join the Summit Learning team! Explore our open positions, learn about our mission, and discover how you can make a difference in students' lives.",
}

export default function ContactPage() {
  return (
    <>
      <CareerHero />
      <CareerContactInformation />
    </>
  )
}
