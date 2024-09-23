

const Pricing = () => {
    return (
        <section className=" overflow-hidden text-gray-600">
            <div className="container mx-auto px-5 py-10">
                <div className="mb-20 flex w-full flex-col text-center">
                    <h1 className=" mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">Pricing</h1>
                    <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3">CommuneSphere gives you no-fuss, transparent pricing. Find a plan that best matches the scale you need for your application.</p>
                    <div className="mx-auto mt-6 flex overflow-hidden rounded border-2 border-bluePrimary">
                        <button className="bg-bluePrimary px-4 py-1 text-white focus:outline-none">Monthly</button>
                        <button className="px-4 py-1 focus:outline-none">Annually</button>
                    </div>
                </div>
                <div className="-m-4 flex flex-wrap">
                    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6">
                            <h2 className=" mb-1 text-sm font-medium tracking-widest">START</h2>
                            <h1 className="mb-4 border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">Free</h1>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Community Building
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Conversion Rates
                            </p>
                            <p className="mb-6 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Enhanced Trust & Loyalty
                            </p>
                            <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">Checkout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-auto size-4" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-500">Worry less about juggling multiple keys and subscription accounts.</p>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-bluePrimary p-6">
                            <span className="absolute right-0 top-0 rounded-bl bg-bluePrimary px-3 py-1 text-xs tracking-widest text-white">POPULAR</span>
                            <h2 className=" mb-1 text-sm font-medium tracking-widest">PRO</h2>
                            <h1 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">
                                <span>₹3000</span>
                                <span className="ml-1 text-lg font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Efficient Search & Filters
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Multimedia Integration
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Regular Updates
                            </p>
                            <p className="mb-6 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Instant Access
                            </p>
                            <button className="mt-auto flex w-full items-center rounded border-0 bg-bluePrimary px-4 py-2 text-white hover:bg-blueActiveTab focus:outline-none">Checkout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-auto size-4" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-500">Worry less about juggling multiple keys and subscription accounts.</p>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6">
                            <h2 className=" mb-1 text-sm font-medium tracking-widest">BUSINESS</h2>
                            <h1 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">
                                <span>₹4600</span>
                                <span className="ml-1 text-lg font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Continuous Updates
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Responsive Design
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Interactive Timelines
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>User-Friendly Features
                            </p>
                            <p className="mb-6 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Multimedia Integration
                            </p>
                            <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">Checkout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-auto size-4" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-500">Worry less about juggling multiple keys and subscription accounts.</p>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6">
                            <h2 className=" mb-1 text-sm font-medium tracking-widest">SPECIAL</h2>
                            <h1 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">
                                <span>₹6000</span>
                                <span className="ml-1 text-lg font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Strategic Synergy
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Mutual Empowerment
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Shared Vision
                            </p>
                            <p className="mb-2 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Long-Term Sustainability
                            </p>
                            <p className="mb-6 flex items-center text-gray-600">
                                <span className="mr-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="size-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Real-Time Threat Detection
                            </p>
                            <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">Checkout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-auto size-4" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-500">Worry less about juggling multiple keys and subscription accounts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
