import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';


export default function FAQ() {

  return (
    <div className="w-full px-8 pt-16">
      <h1 style={{fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold'}}>Frequently Asked Questions</h1>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-teal-500/75">
                <span>Are virtual sessions available?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-all duration-400 ease-out"
                enterFrom="opacity-0 translate-y-[-30%]"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-200 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[-30%]"
              >
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-100 text-left">
                Yes! We proudly provide a versatile range of learning opportunities, offering both virtual and in-person sessions within the Boulder area.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-graye-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>How do I know my SAT score will improve?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-all duration-400 ease-out"
                enterFrom="opacity-0 translate-y-[-30%]"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-200 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[-30%]"
              >
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-100 text-left">
              We stand by our commitment with a robust money-back guarantee. If your SAT score doesn't demonstrate improvement, we offer a full refund.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-graye-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>Do you have a referral program?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-all duration-400 ease-out"
                enterFrom="opacity-0 translate-y-[-30%]"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-200 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[-30%]"
              >
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-100 text-left">
               We do indeed! When you refer a friend who joins our program, both of you will receive a $50 discount towards your tutoring package.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-graye-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>What about the new online SAT?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-all duration-400 ease-out"
                enterFrom="opacity-0 translate-y-[-30%]"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-200 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[-30%]"
              >
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-100 text-left">
              At Brain Buffs, the new online SAT is an area of our expertise. Our tailored approach and specialized training prepare students to excel in this format, ensuring they are equipped with the necessary skills and strategies for success.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}