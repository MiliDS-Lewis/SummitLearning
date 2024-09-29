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
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-gray-800 sm:mt-5">
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
        <div className="prose text-gray-800 prose-lg mx-auto mt-14 sm:prose-xl sm:mt-16 lg:mt-24">
  <p>
    At Summit Learning, our students thrive in a positive, supportive environment where they are motivated to excel at every stage of their education. From 7+ and 11+ exams to GCSEs, A-levels, and university-level support, we are committed to helping each student achieve their academic goals and reach their full potential.
  </p>
  <p>
    We understand that education is not one-size-fits-all. By adapting our teaching methods to match each student’s unique strengths and learning style, we create a tailored learning experience that is both enjoyable and effective. Our goal is to foster a lifelong love of learning and equip students with the skills they need to succeed now and in the future.
  </p>
  <p>
    At Summit Learning, we take great pride in the success of our students and the trust that parents place in us to guide their children. With personalized support and a focus on individual growth, we are dedicated to helping students achieve academic excellence and build a strong foundation for their future. Join us and experience the transformative impact of tailored education at Summit Learning.
  </p>
</div>
      </div>
    </section>
  )
}
