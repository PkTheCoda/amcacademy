import { Dialog } from '@headlessui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Book A Session', href: '/book' },

]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full z-50 top-0 bg1 opacity-90 flex items-center relative">

        <header className="w-full z-50">
            {/* <div className='bg-amber-700 text-lg p-2 font-outfit flex gap-2 justify-center lg:flex-row flex-col items-center'>
                <div className='text-white text-center'>
                Score1600 is offering <span className="underline">a free session</span> to all newcomers! You don't pay until after the first session!
                </div>
                <a 
                className="text-sky-100 underline" 
                target='_blank'
                href='/book'>Signup
                </a>
            </div> */}
          <nav className="flex rounded-2xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="w-20"
                    src="https://www.svgrepo.com/show/489282/brand.svg"
                    alt=""
                  />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-indigo-50 hover:bg2 transition transform duration-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu className="h-6 w-6 text1 hover:text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg leading-6 font-medium text-white font-outfit transition transform hover:scale-110"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a 
                href="/contact" 
                target='_blank'
                className="text-lg font-medium text-white leading-6 font-outfit"
              >
                Contact <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden font-outfit" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://www.svgrepo.com/show/489282/brand.svg"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text1 hover:bg-gray-50 transition transform duration-300"
                        onClick={(event) => handleNavigationClick(event, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base text1 leading-7 hover:bg-slate-50 transition transform duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  )
}