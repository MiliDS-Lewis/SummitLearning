'use client'

{
  /* This component uses Lightgallery, a customizable, modular, responsive, lightbox gallery plugin.  https://github.com/sachinchoolur/lightGallery */
}
import Image from 'next/image'
import LightGallery from 'lightgallery/react'

import heroImage1 from '/public/images/stock/gallery/gallery-hero-01.jpg'
import heroImage2 from '/public/images/stock/gallery/gallery-hero-02.jpg'
import heroImage3 from '/public/images/stock/gallery/gallery-hero-03.jpg'
import heroImage4 from '/public/images/stock/gallery/gallery-hero-04.jpg'
import heroImage5 from '/public/images/stock/gallery/gallery-hero-05.jpg'
import heroImage6 from '/public/images/stock/gallery/gallery-hero-06.jpg'

export const GalleryHero = () => {
  return (
    <section className="relative bg-blue-50 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Hero header text */}
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block rounded-md bg-blue-200 px-4 py-1 font-medium text-white shadow-md">
              Creating memories for life
            </span>
          </div>
          <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-blue-900">
            See what the Summit Learning experience looks like
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-blue-800 sm:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            et tortor at risus viverra adipiscing at in.
          </p>
        </div>

        {/* Hero images */}
        <LightGallery speed={500} selector="figure">
          <div
            id="hero-gallery"
            className="relative z-10 mt-14 grid grid-cols-12 gap-4 sm:mt-16 sm:gap-6 md:mt-20 lg:mt-24 lg:gap-10 lg:px-4 xl:gap-12 2xl:px-16"
          >
            <div className="col-span-4 flex flex-col md:col-span-2 md:justify-end">
              {/* Image 1 */}
              <figure
                className="group aspect-h-1 aspect-w-1 relative w-full cursor-pointer hover:z-50"
                data-src={heroImage1.src}
              >
                <Image
                  src={heroImage1}
                  className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-translate-y-12 md:translate-x-3 md:-rotate-8"
                  alt="Child using scissors"
                  sizes="(min-width: 1280px) 11.875rem, (min-width: 768px) 16.67vw, 33vw"
                />
              </figure>
            </div>
            <div className="col-span-8 flex md:col-span-3 md:flex-col">
              {/* Image 2 */}
              <div className="mr-2 w-1/2 sm:mr-3 md:mr-0 md:w-full">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative z-10 cursor-pointer hover:z-50"
                  data-src={heroImage2.src}
                >
                  <Image
                    src={heroImage2}
                    className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-rotate-8"
                    alt="Children stacking blocks"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 3 */}
              <div className="relative ml-2 w-1/2 sm:ml-3 md:ml-6">
                <figure
                  className="group aspect-h-1 aspect-w-1 cursor-pointer hover:z-50"
                  data-src={heroImage3.src}
                >
                  <Image
                    src={heroImage3}
                    className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-8"
                    alt="Children painting"
                    sizes="(min-width: 1280px) 9rem, (min-width: 768px) 12.5vw, 33vw"
                  />
                </figure>
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 md:pr-4">
              {/* Image 4 */}
              <figure
                className="group aspect-h-1 aspect-w-1 relative w-full cursor-pointer hover:z-50"
                data-src={heroImage4.src}
              >
                <Image
                  src={heroImage4}
                  className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-4"
                  alt="Teacher reading to students"
                  sizes="(min-width: 1280px) 22.5rem, 33vw"
                />
              </figure>
            </div>
            <div className="col-span-8 flex md:col-span-3 md:translate-y-12 md:flex-col md:pr-3">
              {/* Image 5 */}
              <div className="mr-2 w-1/2 sm:mr-3 md:mr-0 md:w-full">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative z-10 cursor-pointer hover:z-50"
                  data-src={heroImage5.src}
                >
                  <Image
                    src={heroImage5}
                    className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-12"
                    alt="Children stretching"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 6 */}
              <div className="relative ml-2 w-1/2 sm:ml-3 md:-ml-3 md:w-2/3 lg:-ml-6">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative cursor-pointer hover:z-50 md:-translate-y-6"
                  data-src={heroImage6.src}
                >
                  <Image
                    src={heroImage6}
                    className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-rotate-8"
                    alt="Child holding up ART letters"
                    sizes="(min-width: 1280px) 11.375rem, (min-width: 768px) 16.67vw, 33vw"
                  />
                </figure>
              </div>
            </div>
          </div>
        </LightGallery>
      </div>
    </section>
  )
}
