import React from 'react'

const Team = () => {
  return (
    <div class="py-20 bg-gray-50 font-quicksand">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center five-title text-gray-900 font-bold">Tutors <span className="main-gradient">With Qualifications</span></h2>
            <p class="text-gray-600 font-medium paragraph-responsive lg:w-8/12 lg:mx-auto">
                Our tutors are not only very knowledgeable in their subjects, but also have scored and placed nationally and internationally! 
            </p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3 font-medium">
            <div class="space-y-4 text-center flex flex-col items-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-80 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div className='flex gap-2 items-center justify-center xl:flex-row flex-col'>
                    <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">USAMO Qualifier</div>
                    <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">CMO Qualifier</div>
                </div>
                <div>
                    <h4 class="text-2xl">Kevin Xu</h4>
                    <span class="block text-sm text-gray-500">College Sophomore</span>
                    <a href='mailto:xukevin@myyahoo.com' class="underline block text-sm text-gray-500">xukevin@myyahoo.com</a>

                </div>
            </div>
            <div class="space-y-4 text-center flex flex-col items-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-80 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
                <div className='flex gap-2 items-center justify-center xl:flex-row flex-col'>
                    <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">USAMO Qualifier</div>
                    <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">AMC12 Perfect Scorer</div>
                </div>
                <div>
                    <h4 class="text-2xl">Ethan Keens</h4>
                    <span class="block text-sm text-gray-500">College Freshman</span>
                    <a href='mailto:ethan8eight@gmail.com' class="underline block text-sm text-gray-500">ethan8eight@gmail.com</a>
                </div>
            </div>
            <div class="space-y-4 text-center flex flex-col items-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-80 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                    <div className='flex gap-2 items-center justify-center xl:flex-row flex-col'>
                        <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">USAJMO Qualifier</div>
                        <div class="block text-sm text-white py-2 w-max rounded-md px-6 bg1">USACO Platinum</div>
                    </div>
                <div>
                    <h4 class="text-2xl">Tristan Wu</h4>
                    <span class="block text-sm text-gray-500">College Sophomore</span>
                    <a href='mailto:tristinwu@myyahoo.com' class="underline block text-sm text-gray-500">tristinwu@myyahoo.com</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team