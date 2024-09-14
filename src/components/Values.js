import Image from 'next/image'

import checkmark from '/public/images/illustrations/checkmark.svg'
import image from '/public/images/stock/values.jpg'

const values = [
  {
    value: 'Excellence and Innovation',
    description:
      'We strive for academic excellence by continuously improving our teaching methods, offering the most innovative approaches to support student success.',
  },
  {
    value: 'Personalized Learning',
    description:
      'We tailor our teaching to meet the unique needs of each student, ensuring they receive the support and guidance necessary to thrive academically.',
  },
  {
    value: 'Integrity and Trust',
    description:
      'We believe in honesty, transparency, and building trust with students and parents, fostering a supportive learning environment.',
  },
  {
    value: 'Empowering Confidence',
    description:
      'We focus on helping students build confidence in their abilities, encouraging them to take charge of their learning and reach their full potential.',
  },
]

export const Values = () => {
  return (
    <section className="-mt-8 bg-white px-4 sm:mt-0 sm:px-6 sm:py-4 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-3xl lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Section content */}
          <div className="flex flex-col justify-center">
            <h2 className="h2 text-gray-900 sm:text-center lg:text-left">
              Our core values and principles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-800 sm:text-center md:mt-5 lg:mx-0 lg:text-left">
            At Summit Learning, our core values guide everything we do. We are dedicated to providing a personalized, innovative, and supportive learning experience for each student. With a strong focus on integrity, excellence, and empowerment, we aim to build confident learners equipped with the skills to achieve their academic goals and beyond.
            </p>
            {/* Values */}
            <div className="mt-10 grid max-w-4xl gap-6 sm:mx-auto sm:grid-cols-2 lg:mx-0 lg:max-w-md lg:grid-cols-1">
              {values.map((item, index) => (
                <div key={`value-${index}`} className="flex">
                  <div className="w-14">
                    <Image src={checkmark} className="h-7 w-7" alt="" />
                  </div>
                  <div className="w-full">
                    <h5 className="flex items-center text-xl font-semibold text-gray-900">
                      {item.value}
                    </h5>
                    <p className="mt-1 text-base text-gray-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Section image */}
          <div className="mx-auto mt-16 w-full max-w-xl lg:mx-0 lg:mt-0 lg:max-w-none">
            <div className="aspect-h-4 aspect-w-3 relative">
              <Image
                className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                fill
                src={image}
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 50vw, (min-width: 576px) 36rem, 100vw"
                alt="Parent carrying student"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
