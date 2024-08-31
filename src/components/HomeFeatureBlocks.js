import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'
import portraitImage1 from '/public/images/stock/home-blocks-01.jpg'
import squareImage1 from '/public/images/stock/home-blocks-02.jpg'
import portraitImage2 from '/public/images/stock/home-blocks-03.jpg'
import squareImage2 from '/public/images/stock/home-blocks-04.jpg'

const features = [
  'Personalized',
  '1-to-1',
  'In-Person or Online',
  'STEM focused',
  'Hands-on approach',
  'Diverse teachers & students',
  'Experienced staff',
]

const blocks = [
  {
    tagline: 'An eclectic approach to education',
    headline: "Our goal is to ensure your child's success in life",
    text: "At Summit Learning, we embrace an eclectic approach to education, combining diverse teaching methods to suit each student's unique needs. Our dedicated tutors tailor their strategies to foster individual strengths and address areas for improvement. By focusing on a well-rounded and personalized educational experience, we aim to equip your child with the skills, knowledge, and confidence needed for long-term success and a fulfilling future.",
    action: { label: 'Learn more', href: '/about', icon: true },
    portraitImage: { src: portraitImage1, alt: 'Kid stacking blocks' },
    squareImage: { src: squareImage1, alt: 'Children writing on workbook' },
  },
  {
    tagline: 'A second home for your child',
    headline: 'We provide an environment that enables students to thrive',
    text: 'At Summit Learning, we create a nurturing and supportive environment that feels like a second home for your child. Our welcoming and dedicated tutors foster a positive atmosphere where students feel comfortable and inspired to learn. By offering personalized attention and a caring approach, we ensure that each student can thrive academically and personally, reaching their full potential with confidence and enthusiasm.',
    action: { label: 'Learn more', href: '/about', icon: true },
    portraitImage: { src: portraitImage2, alt: 'Child covered in paint' },
    squareImage: { src: squareImage2, alt: 'Children eating' },
  },
]

export const HomeFeatureBlocks = () => {
  return (
    <section className="overflow-hidden bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="h2 mx-auto max-w-4xl text-center text-gray-900">
            Providing the best tailored support to your child's education
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-blue-800">
          At Summit Learning, we provide personalized support tailored to your child's unique needs and learning style. Our expert tutors deliver targeted assistance to help students excel and achieve their academic goals. We focus on fostering growth, confidence, and success through a customized educational experience.
          </p>
          {/* Feature list */}
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="-mx-3 -my-2 flex flex-wrap items-center justify-center text-lg text-blue-800">
              {features.map((feature, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="mx-3 my-2 flex items-center"
                >
                  <Image
                    className="mr-3 h-7 w-7 flex-shrink-0"
                    src={checkmark}
                    alt=""
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {blocks.map((block, index) => (
          <div
            key={`home-block-${index}`}
            className={clsx(
              'mx-auto mt-16 max-w-xl lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24',
              index % 2 == 0
                ? 'sm:mt-20 lg:mt-24'
                : 'sm:mt-44 lg:mt-56 xl:mt-60 2xl:mt-64',
            )}
          >
            {/* Block images*/}
            <div
              className={clsx(
                'relative lg:col-span-6',
                index % 2 == 1 && 'lg:order-2',
              )}
            >
              <div
                className={clsx(
                  'relative',
                  index % 2 == 0
                    ? 'sm:pl-36 lg:pl-20 xl:pl-32'
                    : 'sm:pr-36 lg:pr-20 xl:pr-32',
                )}
              >
                <div className="aspect-h-4 aspect-w-3 relative rounded-2xl">
                  <Image
                    className="absolute inset-0 rounded-2xl object-cover"
                    src={block.portraitImage.src}
                    fill
                    alt={block.portraitImage.alt}
                    sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
                  />
                </div>
                <div
                  className={clsx(
                    'absolute hidden rounded-3xl sm:block sm:h-72 sm:w-72 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80',
                    index % 2 == 0
                      ? 'bottom-0 left-0 sm:translate-y-1/3'
                      : 'right-0 top-0 sm:-translate-y-1/3',
                  )}
                >
                  <Image
                    className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                    src={block.squareImage.src}
                    fill
                    alt={block.squareImage.alt}
                    sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
                  />
                </div>
              </div>
            </div>
            {/* Block text content*/}
            <div
              className={clsx(
                'mt-16 flex flex-col justify-center lg:col-span-6 lg:mt-0',
                index % 2 == 0 ? 'sm:mt-44' : 'sm:mt-20 lg:order-1',
              )}
            >
              <div>
                <span className="inline-block rounded-md bg-blue-200 px-4 py-2 font-medium text-white shadow-md">
                  {block.tagline}
                </span>
              </div>
              <h3 className="h3 mt-4 text-gray-900 sm:mt-5">
                {block.headline}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-loose text-blue-800">
                {block.text}
              </p>
              <div className="mt-6">
                <Button href={block.action.href} variant="accent" size="sm">
                  {block.action.label}
                  {block.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
