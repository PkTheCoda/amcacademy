import React from 'react'
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import herostat from '../Images/heromain.svg'

const Hero = () => {
  return (
    <>
      <div className="font-outfit py-20 flex relative lg:flex-row flex-col gap-y-10">
          <div className="half-responsive flex justify-end items-center lg:order-1 order-2">
              <div className='w-11/12 flex flex-col gap-y-4'>
                  <div className='flex flex-col gap-y-1'>
                    <p className='text-xl font-fig font-semibold text1'>
                      The <span className="italic">Better</span> Price
                    </p>
                    <h1 className='seven-title font-medium'>
                        <span className="main-gradient">High Quality, Personal</span> Math Tutoring
                    </h1>
                  </div>
                  <p className='w-full lg:w-5/6 paragraph-responsive leading-loose tracking-wide font-fig font-medium'>
                    At AMC Academy, we're dedicated to turning your mathematical aspirations into triumphs. Let us guide you on a transformative journey towards realizing your dreams in the world of competitive mathematics
                  </p>
                  <div className='flex sm:flex-row flex-col sm:items-center gap-4 paragraph-responsive'>
                  <a href="/book" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-indigo-600 border-indigo-600 text-indigo-600">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-white transition duration-300 group-hover:text-indigo-600 ease">Get a Free Session</span>
                  </a>
                  <a href="/pricing" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-white border-indigo-600 text-indigo-600">
                    <span class="relative text-indigo-600 transition duration-300">Our Pricing</span>
                  </a>
                  </div>
              </div>
          </div>
          <div className="half-responsive justify-center flex px-4 lg:px-0 lg:order-2 order-1">
              <img src={herostat} alt="" className='z-50 w-5/6' />
          </div>
      </div>
    </>
  )
}

export default Hero