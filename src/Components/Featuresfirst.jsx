import React from 'react'
import progress1 from '../Images/progress1.svg'
import progress2 from '../Images/progress2.svg'
import { IoCheckmark } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";


const Featuresfirst = () => {
  return (
    <>
        <div class="relative flex overflow-x-hidden font-quicksand">
            <div class="py-12 animate-marquee whitespace-nowrap font-bold text-blue-950">
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">AMC Competition</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Tutoring</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Mathematics</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">MathCounts Competition</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Personalized</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">High-Quality</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Contribute</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Contribute</span>
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap font-bold text-blue-950">
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">AMC Competition</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Tutoring</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Mathematics</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">MathCounts Competition</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Personalized</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">High-Quality</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Contribute</span>
                <span class="five-title mx-4 px-4 p-2 bg-blue-300 rounded-lg">Contribute</span>
            </div>
        </div>

        <div className="w-full pb-20 pt-14 h-max items-center flex flex-col gap-y-20 px-5 lg:px-32 font-quicksand">
            <div className='flex flex-col gap-y-3 items-center font-quicksand tracking-tight font-medium'>
                <h2 className="six-title text-center">We Know <span className="main-gradient underline font-semibold">The Competitive Math Scene</span></h2>
                <p className='paragraph-responsive  text-xl px-4 md:px-20 lg:px-0 lg:w-2/3 text-center'>
                    After spending hours upon hours perfecting our teaching methods and with multiple national-qualifying tutors, 
                    AMC Academy is the only <span className="main-gradient font-semibold">serious choice</span> for those trying to 
                    get into the competitive math scene.
                </p>
            </div>

            {/*First Main feature */}
            <div className="w-full h-max flex lg:flex-row flex-col items-center gap-y-8 bg-stone-50 rounded-xl lg:p-10 p-6 py-20">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center it gap-y-6 lg:pr-0 pr-8">

                        <div className='flex flex-col gap-y-3 font-quicksand'>
                            <div className='p-2 bg-slate-200 text-slate-800 border-2 border-slate-200 w-max rounded-xl'>
                                <IoIosDocument className='w-10 h-auto'/>
                            </div>
                            <div className='font-semibold five-title h-max tracking-tight'>
                                A Standardized and <span className="main-gradient block">Structured Curriculum</span>
                            </div>
                            <div className='text-xl tracking-wide w-5/6 font-medium'>
                                Learn and improve through our quick diagnostics. We make sure to hit all your weak areas to get you a score you want.
                            </div>
                            <div className='flex flex-col gap-y-2 font-medium tracking-wide'>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>Detailed Diganostic + Improvement plans</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>Comprehensive Subject/Unit List</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>Progress-Checks and Frequent Examinations</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center rounded-full relative z-20">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden lg:block absolute z-10 lg:w-2/3 -right-28 -top-20' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375C299.3455301920573,389.26698811848956,201.70155715942383,401.9633280436198,159.9476318359375,390.5758972167969C118.19370651245117,379.18846638997394,106.80626932779948,349.47643280029297,91.6230239868164,304.1884765625C76.43977864583333,258.90052032470703,63.35077794392904,160.20941670735678,68.84815979003906,118.84815979003906C74.3455416361491,77.48690287272134,88.088991800944,69.10993957519531,124.60731506347656,56.02093505859375C161.12563832600912,42.93193054199219,245.15705108642578,41.49214299519857,287.9580993652344,40.31413269042969C330.75914764404297,39.136122385660805,354.3193664550781,31.28271738688151,381.4136047363281,48.95287322998047C408.5078430175781,66.62302907307942,440.83766682942706,115.05234654744466,450.5235290527344,146.33506774902344C460.2093912760417,177.6177889506022,445.15704854329425,212.69632212320963,439.5287780761719,236.64920043945312C433.9005076090495,260.6020787556966,432.98427327473956,267.4083607991536,416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375" fill="hsl(275, 65%, 55%)" stroke-width="16" stroke="hsl(268, 57%, 68%)"></path>
                        </svg> */}
                            <img
                                src={progress1}
                                className='w-full z-20'
                                alt="a sleek graphic of the resource types we offer"
                            />
                            <p className='text-xs text-right w-full text-slate-700'>*Sample Topic Plan for AMC Coaching*</p>
                    </div>
            </div>

            {/*Second Main feature */}
            <div className="w-full h-max flex lg:flex-row flex-col gap-x-10 gap-y-8 items-center bg-stone-50 rounded-xl lg:p-10 p-6 py-20">

                    <div className="w-full lg:w-7/12 flex items-center relative z-20">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='absolute z-10 w-1/3 lg:w-2/3 -left-16 lg:-left-28 -top-8 lg:-top-20' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375C299.3455301920573,389.26698811848956,201.70155715942383,401.9633280436198,159.9476318359375,390.5758972167969C118.19370651245117,379.18846638997394,106.80626932779948,349.47643280029297,91.6230239868164,304.1884765625C76.43977864583333,258.90052032470703,63.35077794392904,160.20941670735678,68.84815979003906,118.84815979003906C74.3455416361491,77.48690287272134,88.088991800944,69.10993957519531,124.60731506347656,56.02093505859375C161.12563832600912,42.93193054199219,245.15705108642578,41.49214299519857,287.9580993652344,40.31413269042969C330.75914764404297,39.136122385660805,354.3193664550781,31.28271738688151,381.4136047363281,48.95287322998047C408.5078430175781,66.62302907307942,440.83766682942706,115.05234654744466,450.5235290527344,146.33506774902344C460.2093912760417,177.6177889506022,445.15704854329425,212.69632212320963,439.5287780761719,236.64920043945312C433.9005076090495,260.6020787556966,432.98427327473956,267.4083607991536,416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375" fill="hsl(275, 65%, 55%)" stroke-width="16" stroke="hsl(268, 57%, 68%)"></path> 
                        </svg> */}
                        <img 
                            src={progress2} 
                            className='w-full z-20'
                            alt="a sleek graphic of the resource types we offer" 
                        />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-y-6 pl-8">

                        <div className='flex flex-col gap-y-3 font-quicksand'>
                            <div className='p-2 bg-slate-200 text-slate-800 border-2 border-slate-200 w-max rounded-xl'>
                                <IoIosDocument className='w-10 h-auto'/>
                            </div>
                            <div className='font-semibold five-title h-max tracking-tight'>
                                Detailed & Evaluative <span className="block main-gradient">Progress Tracking</span>
                            </div>
                            <div className='text-xl tracking-wide w-5/6 font-medium'>
                                Learn and improve through our quick diagnostics. We make sure to hit all your weak areas to get you a score you want.
                            </div>
                            <div className='flex flex-col gap-y-2 font-medium tracking-wide'>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>Frequent Subject-Specific Exams</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>Access to Answer Keys</p>
                                </div>
                                <div className='flex items-center gap-x-2 text-lg'>
                                    <IoCheckmark className='w-6 h-6'/>
                                    <p>High-Level Tutor Explanations + Office Hours</p>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>

            {/*Third Main feature */}
            <div className="w-full h-max flex lg:flex-row flex-col items-center gap-y-8 bg-stone-50 rounded-xl lg:p-10 p-6 py-20">
                <div className="w-full lg:w-1/2 flex flex-col justify-center it gap-y-6 lg:pr-0 pr-8">

                    <div className='flex flex-col gap-y-3 font-quicksand'>
                        <div className='p-2 bg-slate-200 text-slate-800 border-2 border-slate-200 w-max rounded-xl'>
                            <IoIosDocument className='w-10 h-auto'/>
                        </div>
                        <div className='font-semibold five-title h-max tracking-tight'>
                            A Standardized and <span className="main-gradient block">Structured Curriculum</span>
                        </div>
                        <div className='text-xl tracking-wide w-5/6 font-medium'>
                            Learn and improve through our quick diagnostics. We make sure to hit all your weak areas to get you a score you want.
                        </div>
                        <div className='flex flex-col gap-y-2 font-medium tracking-wide'>
                            <div className='flex items-center gap-x-2 text-lg'>
                                <IoCheckmark className='w-6 h-6'/>
                                <p>Detailed Diganostic + Improvement plans</p>
                            </div>
                            <div className='flex items-center gap-x-2 text-lg'>
                                <IoCheckmark className='w-6 h-6'/>
                                <p>Comprehensive Subject/Unit List</p>
                            </div>
                            <div className='flex items-center gap-x-2 text-lg'>
                                <IoCheckmark className='w-6 h-6'/>
                                <p>Progress-Checks and Frequent Examinations</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center rounded-full relative z-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden lg:block absolute z-10 lg:w-2/3 -right-28 -top-20' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375C299.3455301920573,389.26698811848956,201.70155715942383,401.9633280436198,159.9476318359375,390.5758972167969C118.19370651245117,379.18846638997394,106.80626932779948,349.47643280029297,91.6230239868164,304.1884765625C76.43977864583333,258.90052032470703,63.35077794392904,160.20941670735678,68.84815979003906,118.84815979003906C74.3455416361491,77.48690287272134,88.088991800944,69.10993957519531,124.60731506347656,56.02093505859375C161.12563832600912,42.93193054199219,245.15705108642578,41.49214299519857,287.9580993652344,40.31413269042969C330.75914764404297,39.136122385660805,354.3193664550781,31.28271738688151,381.4136047363281,48.95287322998047C408.5078430175781,66.62302907307942,440.83766682942706,115.05234654744466,450.5235290527344,146.33506774902344C460.2093912760417,177.6177889506022,445.15704854329425,212.69632212320963,439.5287780761719,236.64920043945312C433.9005076090495,260.6020787556966,432.98427327473956,267.4083607991536,416.75390625,290.0523376464844C400.52353922526044,312.6963144938151,384.94762166341144,355.75913492838544,342.1465759277344,372.5130615234375" fill="hsl(275, 65%, 55%)" stroke-width="16" stroke="hsl(268, 57%, 68%)"></path>
                    </svg> */}
                        <img
                            src={progress1}
                            className='w-full z-20'
                            alt="a sleek graphic of the resource types we offer"
                        />
                        <p className='text-xs text-right w-full text-slate-700'>*Sample Topic Plan for AMC Coaching*</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featuresfirst