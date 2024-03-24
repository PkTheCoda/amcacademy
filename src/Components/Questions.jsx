import React from 'react'

const Cta = () => {
  return (
        <div className='max-w-6xl mx-auto my-20 lg:px-10 px-4 flex flex-col gap-y-10 font-fig'>

            <div className='flex flex-col gap-y-2 items-center'>
                <h1 className='font-semibold five-title'>
                    <span className="main-gradient">F</span>requently <span className="main-gradient">A</span>sked <span className="main-gradient">Q</span>uestions
                </h1>
            </div>

            <div className="space-y-4 font-outfit">

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">What makes AMC Academy stand out from other math tutoring services?</h2>
                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700 paragraph-responsive">
                        We stand out due to our focus on competitive mathematics, personalized tutoring by 
                        national-level qualifiers, and a structured curriculum designed to enhance students' 
                        problem-solving abilities!
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">How does we help students prepare for competitive math exams like the AIME and USAMO?</h2>
                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700 paragraph-responsive">
                        We offer personalized mentorship, comprehensive problem-solving strategies, 
                        and access to specialized resources tailored to each student's level, ensuring they are 
                        well-equipped to excel in competitive math competitions.
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">Are the tutors at AMC Academy qualified to teach advanced math concepts?</h2>
                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700 paragraph-responsive">
                        Yes, our tutors not only possess deep knowledge of their subjects but have also excelled nationally and 
                        internationally in math competitions, ensuring students receive guidance from experienced and accomplished mentors.
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">Does AMC Academy offer a free trial session for new students?</h2>
                    <span className="relative size-5 shrink-0">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-700 paragraph-responsive">
                        Yes, absolutely! We provide a complimentary Evaluation Session to all new members,
                     allowing them to experience our high-quality math tutoring firsthand before making any commitments.
                    </p>
                </details>

                

            </div>
        </div>
  )
}

export default Cta