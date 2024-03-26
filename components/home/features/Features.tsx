import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
        <>
            {/* <div className='mt-44 md:mx-[5rem] lg:mx-[8rem] 2xl:mx-[10.5rem]'>

                <div className='flex'>
                    <div className='mt-8 md:w-full lg:w-4/5 2xl:w-1/2'>
                        <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Know Your Members</h1>
                        <div className=' mt-8 w-[80%] md:w-[90%]'>
                            <div className='flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Personalized Engagement</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Community Building </p>
                            </div>
                            <div className=' mt-5 flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Conversion Rates</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg '>Enhanced Trust & Loyalty</p>
                            </div>
                        </div>
                        <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter text-slate-600 md:block md:text-xl lg:leading-[1.5]'>Unlock success by truly knowing your members - where connection meets conversion, and collaboration sparks greatness!</p>
                    </div>
                    <div className='relative ml-28 mt-9 rounded bg-[#e6f6d4] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:hidden lg:block lg:h-64 lg:w-2/5 2xl:h-64 2xl:w-2/5'>
                        <div className='w-full'>
                            <Image src="/members.png" alt='members' width={600} height={600} className='absolute -m-11 h-64 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
                        </div>

                    </div>
                </div>

                <div className='mt-52 flex'>
                    <div className='relative ml-10 mt-9 rounded bg-[#e6f6d4] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:hidden lg:block lg:h-72 lg:w-4/12 2xl:h-72 2xl:w-5/12'>
                        <div className='w-full'>
                            <Image src="/events.png" alt='members' width={600} height={600} className='absolute -m-11 h-72 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
                        </div>
                    </div>
                    <div className='mt-8 md:ml-0 md:w-full lg:ml-48 lg:w-4/5 2xl:w-1/2'>
                        <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Dive into past Events in a few clicks</h1>
                        <div className='mt-8 w-[80%] md:w-[90%]'>
                            <div className='flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Instant Access</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Efficient Search & Filters</p>
                            </div>
                            <div className='mt-5 flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Regular Updates</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Multimedia Integration</p>
                            </div>
                        </div>
                        <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter text-slate-600 md:block md:text-xl lg:leading-[1.5]'>Dive into the riveting narrative of the past with a click – where each moment echoes through the power of digital exploration!</p>
                    </div>
                </div>

                <div className='mt-52 flex'>
                    <div className='mt-8 md:w-full lg:w-4/5 2xl:w-1/2'>
                        <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Intuitive Design Meets User Delight</h1>
                        <div className='mt-8 w-[80%] md:w-[90%]'>
                            <div className='flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>User-Friendly Features</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Continuous Updates</p>
                            </div>
                            <div className='mt-5 flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Responsive Design</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Interactive Timelines</p>
                            </div>
                        </div>
                        <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter text-slate-600 md:block md:text-xl lg:leading-[1.5]'>Embark on a seamless voyage where intuitive design and transforming historical exploration into an exhilarating odyssey of knowledge and joy!</p>
                    </div>

                    <div className='relative ml-28 mt-9 rounded bg-[#e6f6d4] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:hidden lg:block lg:h-64 lg:w-2/5 2xl:h-64 2xl:w-2/5'>
                        <div className='w-full'>
                            <Image src="/leads.png" alt='members' width={600} height={600} className='absolute -m-11 h-64 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
                        </div>

                    </div>
                </div>

                <div className='mt-52 flex'>
                    <div className='relative ml-10 mt-9 rounded bg-[#e6f6d4] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:hidden lg:block lg:h-72 lg:w-4/12 2xl:h-72 2xl:w-5/12'>
                        <div className='w-full'>
                            <Image src="/sponsors.png" alt='members' width={600} height={600} className='absolute -m-11 h-72 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
                        </div>
                    </div>
                    <div className='mt-8 md:ml-0 md:w-full lg:ml-48 lg:w-4/5 2xl:w-1/2'>
                        <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Explore the valued partnership that empower us to thrive</h1>
                        <div className='mt-8 w-[80%] md:w-[90%]'>
                            <div className='flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Strategic Synergy</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Mutual Empowerment</p>
                            </div>
                            <div className='mt-5 flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Shared Vision</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Long-Term Sustainability</p>
                            </div>
                        </div>
                        <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter text-slate-600 md:block md:text-xl lg:leading-[1.5]'>Discover the alchemy of empowerment in our valued partnerships—turning aspirations into shared triumphs!</p>
                    </div>
                </div>

                <div className='mt-52 flex'>
                    <div className='mt-8 md:w-full lg:w-4/5 2xl:w-1/2'>
                        <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Role Based Authentication</h1>
                        <div className='mt-8 w-[80%] md:w-[90%]'>
                            <div className='flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Intelligent Encryption</p>
                                <p className='ml-5 rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Adaptive Access Controls</p>
                            </div>
                            <div className='mt-5 flex'>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:text-base 2xl:text-lg'>Multi-Factor Mastery</p>
                                <p className='rounded-3xl border border-gray-300 px-4 py-2 md:ml-5 md:text-base 2xl:text-lg'>Real-Time Threat Detection</p>
                            </div>
                        </div>
                        <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter text-slate-600 md:block md:text-xl lg:leading-[1.5]'>Elevate your digital fortress, simplify the gate with seamless authentication—where security meets simplicity and user-friendly access!</p>
                    </div>

                    <div className='relative ml-28 mt-9 rounded bg-[#e6f6d4] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:hidden lg:block lg:h-64 lg:w-2/5 2xl:h-64 2xl:w-2/5'>
                        <div className='w-full'>
                            <Image src="/authfeature.png" alt='members' width={600} height={600} className='absolute -m-11 h-64 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
                        </div>

                    </div>
                </div>

            </div> */}
            <section className=" text-gray-600">
                <div className="container mx-auto px-5 py-24">
                    <div className="mb-20 flex w-full flex-wrap">
                        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                            <h1 className=" mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">Tools to make life easy</h1>
                            <div className="h-1 w-20 rounded bg-indigo-500"></div>
                        </div>
                        <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="-m-4 flex flex-wrap">
                        <div className="p-4 md:w-1/2 xl:w-1/4">
                            <div className="rounded-lg bg-gray-100 p-6">
                                <Image width="100" height="100" className="mb-6 h-40 w-full rounded object-cover object-center" src="" alt="content" />
                                <h3 className=" text-xs font-medium tracking-widest text-indigo-500">SUBTITLE</h3>
                                <h2 className=" mb-4 text-lg font-medium text-gray-900">Chichen Itza</h2>
                                <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 xl:w-1/4">
                            <div className="rounded-lg bg-gray-100 p-6">
                                <Image width="100" height="100" className="mb-6 h-40 w-full rounded object-cover object-center" src="" alt="content" />
                                <h3 className=" text-xs font-medium tracking-widest text-indigo-500">SUBTITLE</h3>
                                <h2 className=" mb-4 text-lg font-medium text-gray-900">Colosseum Roma</h2>
                                <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 xl:w-1/4">
                            <div className="rounded-lg bg-gray-100 p-6">
                                <Image width="100" height="100" className="mb-6 h-40 w-full rounded object-cover object-center" src="" alt="content" />
                                <h3 className=" text-xs font-medium tracking-widest text-indigo-500">SUBTITLE</h3>
                                <h2 className=" mb-4 text-lg font-medium text-gray-900">Great Pyramid of Giza</h2>
                                <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 xl:w-1/4">
                            <div className="rounded-lg bg-gray-100 p-6">
                                <Image width='100' height="100" className="mb-6 h-40 w-full rounded object-cover object-center" src="" alt="content" />
                                <h3 className=" text-xs font-medium tracking-widest text-indigo-500">SUBTITLE</h3>
                                <h2 className=" mb-4 text-lg font-medium text-gray-900">San Francisco</h2>
                                <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features