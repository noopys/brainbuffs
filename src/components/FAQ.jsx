
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="w-full px-8 pt-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>Can I do virtual sessions?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                Yes! We can do virtual sessions or in person sessions in the Boulder area.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-4 text-left text-sm font-medium text-graye-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>How do I know my scores will increase?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                We offer a money back guarantee. If your SAT score doesn't increase, you get 100% money back.
              </Disclosure.Panel>
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
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                Of course we do! If you refer a friend and they join, both of you will receive a $50 discount off your tutoring package.
              </Disclosure.Panel>
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
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              Brain Buffs specializes in the new online SAT. Our tutors are all specifically trained with the new online SAT in mind, unlike tutors from other companies. We teach students how to succeed with the new test format in addition to the concepts they need to know
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

