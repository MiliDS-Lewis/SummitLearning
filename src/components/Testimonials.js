import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'

const bgColorsClassName = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-green-50',
]

export const Testimonials = () => {
  const testimonials = getAllItems('testimonials')

  return (
    <section className="bg-blue-600 py-20 sm:py-28 md:-mt-48 lg:py-32">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-2xl">
        {/* Section header title and subheader */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="h2 max-w-2xl text-center text-white">
            See what parents are saying about us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-white">
          Discover why parents trust Summit Learning to support their student's academic journey. Read firsthand experiences and testimonials from families who have seen their children thrive with our personalized approach to education.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-8 lg:mt-16 lg:gap-6 xl:mt-20 xl:grid-cols-4 2xl:mt-24 2xl:gap-12">
          {testimonials.map((item, index) => (
            <blockquote
              key={`testimonial-${index}`}
              className={clsx(
                bgColorsClassName[index % 4],
                'rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8',
              )}
            >
              <Image
                src={item.data.image}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border-2 border-yellow-300 object-cover drop-shadow-2xl filter"
                alt={item.data.name}
              />
              <p className="mt-3 text-lg font-bold text-gray-900">
                {item.data.name}
              </p>
              {/* Rating */}
              <div className="mt-1 flex w-full justify-start space-x-1">
                {[...Array(item.data.stars)].map((e, i) => (
                  <Icon
                    key={`${item.data.name}-star-${i}`}
                    icon="starFilled"
                    className="h-5 w-5 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mt-5 text-lg text-gray-800">
                "{item.data.testimonial}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
