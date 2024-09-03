import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import dotsLargeGrid from '/public/images/illustrations/dots-large-grid.svg'
import dotsGrid from '/public/images/illustrations/dots-grid.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'

const fields = [
  {
    name: 'name',
    label: 'Name *',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email *',
    type: 'email',
    placeholder: 'john@email.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: '(123) 456-7890',
    required: true,
  },
  {
    name: 'message',
    label: 'Message *',
    type: 'textarea',
    placeholder: 'Message',
    required: true,
  },
]

export const ContactHero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 px-4 pb-12 sm:px-6 lg:px-8 lg:pt-24">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-xl lg:grid-cols-2 lg:gap-10 xl:gap-32 ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block rounded-md bg-blue-200 px-4 py-1 font-medium text-white shadow-md">
              Contact us today
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-md text-gray-900">
            We'd love to hear from you
          </h1>
          <p className="mt-3 max-w-xl text-xl leading-relaxed text-gray-800">
          Whether you have questions about our programs, need more information, or are ready to get started, we're here to help. Reach out to us by phone, email, or through our contact form. Our team at Summit Learning is eager to assist you in finding the right educational support for your child. Let's start a conversation about how we can help your child achieve their academic goals.
          </p>
        </div>
        {/* Contact form container */}
        <div className="relative">
          {/* Background decorations */}
          <Image
            src={dotsLargeGrid}
            className="absolute -right-16 -top-12 w-80 opacity-60 sm:-top-16 lg:-top-16 lg:left-14 lg:hidden lg:w-36"
            alt=""
            priority
          />
          <Image
            src={dotsGrid}
            className="absolute -right-16 -top-16 hidden w-40 opacity-75 lg:-top-16 lg:left-14 lg:block lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute -right-16 top-1/2 hidden w-20 rotate-90 opacity-75 lg:block"
            alt=""
          />
          {/* Contact form card */}
          <div className="relative z-10 mx-auto w-full rounded-3xl bg-white px-4 py-10 shadow-xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-12 xl:p-14">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h3>
              <p className="mt-0.5 text-gray-800 text-opacity-90">
                We'll get back to you within 24 hours.
              </p>
            </div>
            {/* Contact form */}
            <form className="mt-8" action="#">
              {fields.map((field, index) => (
                <div
                  key={`contact-form-field-${index}}`}
                  className={clsx(index > 0 && 'mt-6')}
                >
                  <label
                    htmlFor={field.name}
                    className="ml-0.5 text-sm font-medium text-gray-900"
                  >
                    {field.label}
                  </label>
                  {field.type == 'textarea' && (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={5}
                      className="mt-2 w-full rounded-2xl border-2 border-blue-50 p-4 text-sm font-medium text-blue-700 placeholder-blue-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-blue-200 focus:outline-none focus:ring-blue-200"
                      required={field.required}
                    />
                  )}

                  {['text', 'email'].includes(field.type) && (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="mt-2 h-14 w-full rounded-2xl border-2 border-blue-50 p-4 text-sm font-medium text-blue-700 placeholder-blue-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-blue-200 focus:outline-none focus:ring-blue-200"
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              <div className="mt-6 flex justify-start">
                <Button>Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
