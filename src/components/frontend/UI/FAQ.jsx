import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function FAQ() {
  const lineStyle = {
    border: 'none',
    borderTop: '1px solid #20a7a1', // Match the border style
    margin: '30px auto',
    width: '650px',
  };

  return (
    <div className="w-full px-8 pt-10 font-poppins">
      <h1 style={{fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold'}}>Frequently Asked Questions</h1>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
      <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1 ' : ''}`}>
                <span>How does the AI adaptive practice system work?</span>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
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
                <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-50 text-left rounded-lg">
                Our one of a kind AI practice system enhances your SAT preparation by analyzing your performance on practice questions to identify areas where you're struggling. It then customizes your practice to focus on these areas, helping you improve efficiently. This adaptive platform allows ours students to improve much faster than average and consistently outperform their peers. Still not convinced? Give this platform a free trial today and don't pay unless you love it. 
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1' : ''}`}>
                <span>Are virtual sessions available?</span>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
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
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-50 text-left rounded-lg">
              Yes! We proudly provide a versatile range of learning opportunities, offering both virtual and in-person sessions within the Boulder area.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1' : ''}`}>
                <span>How do I know my SAT score will improve?</span>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
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
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-50 text-left rounded-lg">
                  We stand by our commitment with a robust money-back guarantee. If your SAT score doesn't improve from our 1-on-1 tutoring, we offer a full refund.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
                <Disclosure.Button className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1' : ''}`}>
                <span>Do you have a referral program?</span>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
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
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-50 text-left rounded-lg">
               We do indeed! When you refer a friend who joins our program, both of you will receive a 25% discount towards your desired tutoring package.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1' : ''}`}>
                <span>What about the new online SAT?</span>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
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
              <Disclosure.Panel className="px-4 pb-3 pt-3 text-sm text-black bg-green-50 text-left rounded-lg">
              At Brain Buffs, the new online SAT is an area of our expertise. Our tailored approach and specialized training prepare students to excel in this format, ensuring they are equipped with the necessary skills and strategies for success.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div style={lineStyle}></div>
      <p>Still can't find what you're looking for? <a href="./contact" style={{textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold'}}>Contact Us</a></p>
    </div>
  )
}