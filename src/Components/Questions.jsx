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
                    <h2 className="text-xl">Some FAQ Question will be here</h2>
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
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">Some FAQ Question will be here</h2>
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
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">Some FAQ Question will be here</h2>
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
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    </p>
                </details>

                <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" closed>
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                    <h2 className="text-xl">Some FAQ Question will be here</h2>
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
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    And then inside of here will be some answer! What is the answer? I don't know yet. This is just some random filler text for the purpose of just being here.
                    </p>
                </details>

                

            </div>
        </div>
  )
}

export default Cta