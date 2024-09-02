'use client'

import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import questionMark from '/public/images/illustrations/question-mark.svg'
import bulb from '/public/images/illustrations/bulb.svg'

export const Faqs = ({ faqs }) => {
  return (
    <section className="bg-blue-100 py-20 sm:py-28">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        {/* Section header title and subtext  */}
        <div className="w-full">
          <h2 className="h2 text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-xl leading-relaxed text-blue-800 lg:text-left">
          Have questions about Summit Learning? We've compiled answers to the most common inquiries from parents and children. Explore our FAQs to learn more about our programs, tutoring approach, and how we can help your student succeed.
          </p>
        </div>
        {/* FAQ */}
        <ul className="relative mt-12 space-y-6">
          {/* Decorator images*/}
          <div>
            <Image
              className="absolute -left-60 top-10 hidden h-auto w-28 2xl:block"
              src={questionMark}
              alt=""
            />
            <Image
              className="absolute -right-60 bottom-10 hidden h-auto w-28 2xl:block"
              src={bulb}
              alt=""
            />
          </div>
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="li"
              className="w-full rounded-3xl bg-white px-5 py-6 sm:px-12 sm:py-8"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="group flex w-full items-center justify-between text-lg sm:text-xl">
                    <span className="text-left font-medium text-blue-900 duration-300 ease-in-out group-hover:text-blue-600">
                      {faq.data.question}
                    </span>
                    <Icon
                      icon="chevronDown"
                      className={clsx(
                        open && 'rotate-180',
                        'ml-3 h-6 w-6 flex-shrink-0 text-blue-700 duration-300 ease-in-out group-hover:text-blue-600 sm:ml-6',
                      )}
                      stroke={2}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="mt-3 text-base leading-relaxed text-blue-800 sm:text-lg">
                      {faq.data.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  )
}
