import React from 'react'
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import herostat from '../Images/heromain.svg'
import mathpic from '../Images/mathpic.png'
import iconpic from '../Images/iconpic2.jpg'

const Hero = () => {
  return (
    <>
      <div className="font-quicksand bg-cover py-20 bg-center flex relative lg:flex-row flex-col gap-y-10 bg-stone-50"
      // style={{ backgroundImage: `url(${mathpic})` }}
      >
        <p class="absolute text-lg font-outfit hidden bottom-10 lg:block left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          We've sent over <span class="font-semibold underline">20 Students to the National Level</span>
        </p>

          <div className="half-responsive flex justify-center lg:py-28 items-center">
              <div className='w-11/12 flex flex-col gap-y-4'>
                
                  <div className='flex flex-col gap-y-1'>
                    <p className='text-xl font-fig font-semibold main-gradient'>
                      Our Students qualify for AIME in just <span className="font-bold underline text-sky-900">4 months</span>
                    </p>
                    <h1 className='seven-title font-bold tracking-tight'>
                        <span className="main-gradient block">High Quality, Personal</span> Math Tutoring
                    </h1>
                  </div>

                  <p className='paragraph-responsive leading-loose tracking-wide font-fig font-medium'>
                    At AMC Academy, we're dedicated to turning your mathematical aspirations into triumphs. Let us guide you on a transformative journey towards realizing your dreams in the world of competitive mathematics
                  </p>

                  <div className='flex sm:flex-row flex-col sm:items-center w-full gap-4 paragraph-responsive'>
                    <a href="/book" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-blue-800 border-blue-800 text-blue-800">
                      <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span class="relative text-white transition duration-300 group-hover:text-blue-800 ease">Get a Free Session</span>
                    </a>
                    <a href="/pricing" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-white border-blue-800 text-blue-800">
                      <span class="relative text-blue-800 transition duration-300">Our Pricing</span>
                    </a>
                  </div>
              </div>
          </div>
          <div className="half-responsive bg-cover bg-center justify-center flex px-4 lg:px-0"
          >
              {/* <img src={herostat} alt="" className='z-50 w-5/6' /> */}
              <div class="relative flex items-center">
                {/* <div class="absolute inset-0 h-1/2 bg-gray-50"></div> */}
                <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-5xl mx-auto flex flex-col gap-y-2">
                        <dl class="rounded-lg grid pb-4 md:pb-0 min-[400px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                            <div class="bg-white rounded-md shadow-md flex flex-col p-6 px-2 lg:px-10 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500" id="item-1">
                                    AIME Qualifiers 2023
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient" aria-describedby="item-1">
                                    12x
                                </dd>
                            </div>
                            <div
                            class="bg-white rounded-md shadow-md flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    USAJMO Qualifiers
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    4x
                                </dd>
                            </div>
                            <div class="bg-white rounded-md shadow-md flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    CMO Qualifiers
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    5x
                                </dd>
                            </div>
                            <div class="bg-white rounded-md shadow-md flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    MathCounts Nationals
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    2x
                                </dd>
                            </div>
                        </dl>
                        <p className="text-center text-sm"># of Students we've sent to national-level Math Competitions</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero