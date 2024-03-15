import React from 'react'
import { TbMathFunction, TbMathPiDivide2, TbMathIntegrals, TbMathXDivideY2   } from "react-icons/tb";

const Statsrank = () => {
  return (
    <div className='font-quicksand bg-slate-50 py-12 flex flex-col gap-y-10'>
        <div className="flex flex-col gap-y-3 items-center">
            <h2 className='six-title text-center font-medium'>
                Our Students go <span className="main-gradient font-semibold underline">National</span>
            </h2>
            <p className="paragraph-responsive half-responsive lg:px-0 px-6 text-xl text-center">
                In our 2023 year alone, we've sent over 20+ students to the <span className="main-gradient font-semibold">National Level</span> in 
                esteemed Mathematics Competitions like <span className="main-gradient font-semibold">USAMO, AIME, USAJMO, CMO</span>
            </p>
        </div>
          <div class=" bg-gray-50">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
                <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-5xl mx-auto">
                        <dl class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-4">
                            <div class="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500" id="item-1">
                                    AIME Qualifiers 2023
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient" aria-describedby="item-1">
                                    12x
                                </dd>
                            </div>
                            <div
                            class="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    USAJMO Qualifiers
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    4x
                                </dd>
                            </div>
                            <div class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    CMO Qualifiers
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    5x
                                </dd>
                            </div>
                            <div class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                    MathCounts Nationals
                                </dt>
                                <dd class="order-1 text-5xl font-extrabold leading-none main-gradient">
                                    2x
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center text-xl main-gradient'>
        <a href="/pricing" target='_blank' class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg1 text-white inline-block">
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
            <span class="relative group-hover:main-gradient">Let's Multiply your potential</span>
        </a>
        </div>
    </div>
  )
}

export default Statsrank