import Image from 'next/image'
import { Fragment } from 'react'

import image1 from '/public/images/stock/school-grid-01.jpg'
import image2 from '/public/images/stock/school-grid-02.jpg'
import image3 from '/public/images/stock/school-grid-03.jpg'
import image4 from '/public/images/stock/school-grid-04.jpg'
import image5 from '/public/images/stock/school-grid-05.jpg'

const images = [
  { src: image1, alt: 'Child laughing with teacher' },
  { src: image2, alt: 'Teacher portrait' },
  { src: image3, alt: 'Teacher reading to children' },
  { src: image4, alt: 'Child writing on board with teacher' },
  { src: image5, alt: 'Classroom' },
]

export function AboutHero() {
  return (
    <section className="bg-blue-50 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Page header */}
        <div className="relative">
          <h2 className="h1 mx-auto max-w-3xl text-center text-gray-900">
            Why Summit Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-blue-800 sm:mt-5">
          At Summit Learning, we are dedicated to providing a personalized education that caters to each student’s unique needs and learning style. Our experienced tutors focus on building a strong foundation of knowledge while fostering creativity and critical thinking skills. We believe that every child has the potential to excel, and our tailored approach ensures they receive the support they need to succeed.          </p>
        </div>
        {/* School images grid */}
        <div className="mt-14 grid grid-flow-row-dense grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:mt-24 lg:gap-6">
          {images.map((image, index) => (
            <Fragment key={`gallery-image-${index}`}>
              {index % 5 == 1 && (
                <Image
                  className="col-span-2 h-30vw w-full rounded-2xl object-cover object-top lg:h-80"
                  priority={true}
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 52.875rem, (min-width: 640px) 66vw, 100vw"
                />
              )}

              {index % 5 != 1 && (
                <Image
                  className="h-30vw w-full rounded-2xl object-cover lg:h-80"
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 25.75rem, (min-width: 640px) 33vw, 50vw"
                />
              )}
            </Fragment>
          ))}
        </div>
        {/* About school */}
        <div className="prose prose-lg mx-auto mt-14 sm:prose-xl sm:mt-16 lg:mt-24">
          <p>
          Our students thrive in a positive, encouraging environment where they are motivated to reach their academic goals. Whether preparing for A-levels, GCSEs, or developing study habits, we are committed to helping each student achieve their best.

</p>
          <p>
          Our approach is rooted in understanding that education is not one-size-fits-all. By adapting our teaching methods to match each student’s strengths, we create a learning experience that is both effective and enjoyable. At Summit Learning, we aim to inspire a lifelong love of learning and equip students with the tools they need for future success.

We take pride in the success stories of our students and the trust parents place in us to guide their children on the path to academic achievement. Join us at Summit Learning and discover the difference a personalized education can make.
          </p>
        </div>
      </div>
    </section>
  )
}
