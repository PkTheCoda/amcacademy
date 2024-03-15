import React from 'react'

const Pricing = () => {
  return (
    <section class="bg-white dark:bg-gray-900 font-quicksand">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24">
            <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 class="mb-4 six-title font-semibold tracking-tight text-gray-900 dark:text-white">
                    Let's get you to <span className="main-gradient block underline pt-2">The National Level</span>
                </h2>
                <p class="mb-5 text-gray-500 sm:text-xl font-medium dark:text-gray-400">
                    Here at <span className="main-gradient">AMC academy</span>, our mission is to help you achieve your dreams.
                    If you succeed, so do we.
                </p>
            </div>
            <div class="space-y-8 flex flex-col gap-y-6 lg:space-y-0 relative z-20">
                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='absolute w-2/3 top-10 -left-60 -z-10' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M66.49213409423828,278.0104675292969C63.74344380696615,231.54449971516928,44.89528020222981,194.76438649495444,75.91622161865234,159.424072265625C106.93716303507487,124.08375803629556,191.09946060180664,75.26177469889323,252.61778259277344,65.96858215332031C314.13610458374023,56.6753896077474,399.3455276489258,64.79057057698569,445.0261535644531,103.6649169921875C490.70677947998047,142.5392634073893,523.0366160074869,246.98953247070312,526.7015380859375,299.21466064453125C530.3664601643881,351.4397888183594,490.0523325602214,375.52353922526044,467.01568603515625,417.01568603515625C443.9790395100911,458.50783284505206,436.7800877888997,525.6544494628906,388.4816589355469,548.1675415039062C340.18323008219403,570.6806335449219,226.57066218058267,570.4188486735026,177.22511291503906,552.09423828125C127.87956364949545,533.7696278889974,110.86385981241862,483.9005076090495,92.40836334228516,438.2198791503906C73.95286687215169,392.53925069173175,69.24082438151042,324.4764353434245,66.49213409423828,278.0104675292969C63.74344380696615,231.54449971516928,44.89528020222981,194.76438649495444,75.91622161865234,159.424072265625" fill="hsl(273, 57%, 58%)" stroke-width="18" stroke="hsl(265, 42%, 72%)"></path>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='absolute w-2/3 rotate-180 top-10 -left-40 -z-10' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M81.41360473632812,240.3141326904297C71.59685134887695,227.74868520100912,41.09946823120117,213.87433624267578,44.50260925292969,194.76438903808594C47.9057502746582,175.6544418334961,76.83245086669922,146.7277463277181,101.83245086669922,125.65444946289062C126.83245086669922,104.58115259806316,166.36125055948892,81.28272310892741,194.5026092529297,68.3246078491211C222.64396794637045,55.36649258931478,240.44500478108725,52.48690986633301,270.68060302734375,47.905757904052734C300.9162012736003,43.32460594177246,342.1465657552083,38.61256535847982,375.91619873046875,40.83769607543945C409.6858317057292,43.062826792399086,446.8586120605469,46.59685707092285,473.29840087890625,61.25654220581055C499.7381896972656,75.91622734069824,518.1936747233073,103.14135678609212,534.554931640625,128.79580688476562C550.9161885579427,154.45025698343912,565.3141072591146,175.39266967773438,571.4659423828125,215.18324279785156C577.6177775065104,254.97381591796875,581.2826944986979,329.58113352457684,571.4659423828125,367.53924560546875C561.6491902669271,405.49735768636066,546.8586222330729,421.989507039388,512.5654296875,442.9319152832031C478.27223714192706,463.87432352701825,412.6963170369466,489.2669932047526,365.706787109375,493.1936950683594C318.7172571818034,497.1203969319661,264.5287729899089,487.1727549235026,230.6282501220703,466.49212646484375C196.72772725423178,445.8114980061849,183.50783665974936,401.8324330647786,162.30364990234375,369.10992431640625C141.09946314493814,336.3874155680339,116.88480377197266,291.62303924560547,103.40312957763672,270.1570739746094C89.92145538330078,248.69110870361328,91.2303581237793,252.87958017985025,81.41360473632812,240.3141326904297C71.59685134887695,227.74868520100912,41.09946823120117,213.87433624267578,44.50260925292969,194.76438903808594" fill="hsl(230, 55%, 50%)" stroke-width="14" stroke="hsl(205, 60%, 59%)"></path>
                </svg>

                <div className='flex lg:flex-row flex-col gap-6 items-center justify-center w-full'>

                    <div class="flex flex-col w-full lg:w-[48%] p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-2xl font-semibold">MATHCOUNTS level content</h3>
                        <p class="font-medium text-gray-500 sm:text-lg dark:text-gray-400">Precision for MATHCOUNTS Triumphs</p>
                        <div class="flex items-baseline justify-center my-8">
                            <span class="mr-2 text-5xl font-extrabold">$30</span>
                            <span class="text-gray-500 dark:text-gray-400">/hour</span>
                        </div>
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Comprehensive Problem-Solving Strategies</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Mental Math Strategies for Memorization</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Individualized Mock Competitions</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Specialized Feedback Sessions</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Access to wide array of resources</span>
                            </li>
                        </ul>
                        <a href="/book"
                            class="text-white bg-blue-800 transition300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get
                            started</a>
                    </div>

                    <div
                        class="flex flex-col w-full lg:w-[48%] p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-2xl font-semibold">AMC Level Content</h3>
                        <p class="font-medium text-gray-500 sm:text-lg dark:text-gray-400">Navigate AMC with Expert Guidance</p>
                        <div class="flex items-baseline justify-center my-8">
                            <span class="mr-2 text-5xl font-extrabold">$35</span>
                            <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400="">/hour</span>
                        </div>
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Advanced AMC Problem Sets</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Strategic Time Management Training</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Collaborative Problem Solving</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Personalized Strategy Consultations</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>National-level Personalized Tutor</span>
                            </li>
                        </ul>
                        <a href="/book"
                            class="text-white bg-blue-800 transition300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get
                            started</a>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col gap-6 items-center justify-center w-full'>

                    <div class="flex flex-col w-full lg:w-[48%] p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-2xl font-semibold">USAJMO/CMO level content</h3>
                        <p class="font-medium text-gray-500 sm:text-lg dark:text-gray-400">AIME Excellence, Step by Step</p>
                        <div class="flex items-baseline justify-center my-8">
                            <span class="mr-2 text-5xl font-extrabold">$60</span>
                            <span class="text-gray-500 dark:text-gray-400">/hour</span>
                        </div>
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Personalized Olympiad Mentorship</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Personalized Diganostic + Training Sessions</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>National Level Tutor</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Access to premium question-bank</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Unlimited Office Hours</span>
                            </li>
                        </ul>
                        <a href="/book"
                            class="text-white bg-blue-800 transition300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get
                            started</a>
                    </div>

                    <div
                        class="flex flex-col w-full lg:w-[48%] p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-2xl font-semibold">AIME Level Content</h3>
                        <p class="font-medium text-gray-500 sm:text-lg dark:text-gray-400">Olympiad Mastery, Guided Success</p>
                        <div class="flex items-baseline justify-center my-8">
                            <span class="mr-2 text-5xl font-extrabold">$40</span>
                            <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400="">/hour</span>
                        </div>
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>In-Depth AIME Curriculum</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Advanced Proof Techniques</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Simulated AIME Experiences</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>Access to our full resource list</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-sky-500 dark:text-sky-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>National-level tutor</span>
                            </li>
                        </ul>
                        <a href="/book" target='_blank'
                            class="text-white bg-blue-800 transition300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get
                            started</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing