import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='2xl:mx-[10.5rem] mt-44 md:mx-[5rem] lg:mx-[8rem]'>

        <div className='flex'>
            <div className='2xl:w-1/2 lg:w-4/5 mt-8 md:w-full'>
                <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Know Your Members</h1>
                <div className=' w-[80%] mt-8 md:w-[90%]'>
                    <div className='flex'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Personalized Engagement</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Community Building </p>
                    </div>
                    <div className=' flex mt-5'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Conversion Rates</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg '>Enhanced Trust & Loyalty</p>
                    </div>
                </div>
                <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter md:block md:text-xl lg:leading-[1.5] text-slate-600'>Unlock success by truly knowing your members - where connection meets conversion, and collaboration sparks greatness!</p>
            </div>
            <div className='2xl:w-2/5 2xl:h-64 lg:w-2/5 lg:h-64 mt-9 ml-28 bg-[#e6f6d4] rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative md:hidden lg:block'>
                <div className='w-full'>
                    <Image src="/members.png" alt='members' width={600} height={600} className='rounded absolute -m-11 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-64'/>
                </div>
                
            </div>
        </div>
        
        <div className='flex mt-52'>
            <div className='2xl:w-5/12 2xl:h-72 lg:w-4/12 lg:h-72 mt-9 ml-10 bg-[#e6f6d4] rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative md:hidden lg:block'>
                <div className='w-full'>
                    <Image src="/events.png" alt='members' width={600} height={600} className='rounded absolute -m-11 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-72'/>
                </div>
            </div>
            <div className='2xl:w-1/2 lg:w-4/5 mt-8 md:w-full md:ml-0 lg:ml-48'>
                <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Dive into past Events in a few clicks</h1>
                <div className='w-[80%] mt-8 md:w-[90%]'>
                    <div className='flex'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Instant Access</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Efficient Search & Filters</p>
                    </div>
                    <div className='flex mt-5'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Regular Updates</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Multimedia Integration</p>
                    </div>
                </div>
                <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter md:block md:text-xl lg:leading-[1.5] text-slate-600'>Dive into the riveting narrative of the past with a click – where each moment echoes through the power of digital exploration!</p>
            </div>
        </div>

        <div className='flex mt-52'>
            <div className='2xl:w-1/2 lg:w-4/5 mt-8 md:w-full'>
                <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Intuitive Design Meets User Delight</h1>
                <div className='w-[80%] mt-8 md:w-[90%]'>
                    <div className='flex'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>User-Friendly Features</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Continuous Updates</p>
                    </div>
                    <div className='flex mt-5'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Responsive Design</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Interactive Timelines</p>
                    </div>
                </div>
                <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter md:block md:text-xl lg:leading-[1.5] text-slate-600'>Embark on a seamless voyage where intuitive design and transforming historical exploration into an exhilarating odyssey of knowledge and joy!</p>
            </div>
            
            <div className='2xl:w-2/5 2xl:h-64 lg:w-2/5 lg:h-64 mt-9 ml-28 bg-[#e6f6d4] rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative md:hidden lg:block'>
                <div className='w-full'>
                    <Image src="/leads.png" alt='members' width={600} height={600} className='rounded absolute -m-11 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-64'/>
                </div>
                
            </div>
        </div>

        <div className='flex mt-52'>
            <div className='2xl:w-5/12 2xl:h-72 lg:w-4/12 lg:h-72 mt-9 ml-10 bg-[#e6f6d4] rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative md:hidden lg:block'>
                <div className='w-full'>
                    <Image src="/sponsors.png" alt='members' width={600} height={600} className='rounded absolute -m-11 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-72'/>
                </div>
            </div>
            <div className='2xl:w-1/2 lg:w-4/5 mt-8 md:w-full md:ml-0 lg:ml-48'>
                <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Explore the valued partnership that empower us to thrive</h1>
                <div className='w-[80%] mt-8 md:w-[90%]'>
                    <div className='flex'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Strategic Synergy</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Mutual Empowerment</p>
                    </div>
                    <div className='flex mt-5'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Shared Vision</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Long-Term Sustainability</p>
                    </div>
                </div>
                <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter md:block md:text-xl lg:leading-[1.5] text-slate-600'>Discover the alchemy of empowerment in our valued partnerships—turning aspirations into shared triumphs!</p>
            </div>
        </div>

        <div className='flex mt-52'>
            <div className='2xl:w-1/2 lg:w-4/5 mt-8 md:w-full'>
                <h1 className='text-2xl font-bold leading-tight md:block md:text-4xl lg:leading-[1.1]'>Simplify Authentication</h1>
                <div className='w-[80%] mt-8 md:w-[90%]'>
                    <div className='flex'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Intelligent Encryption</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 ml-5 md:ml-5 md:text-base 2xl:text-lg'>Adaptive Access Controls</p>
                    </div>
                    <div className='flex mt-5'>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:text-base 2xl:text-lg'>Multi-Factor Mastery</p>
                        <p className='border rounded-3xl border-gray-300 py-2 px-4 md:ml-5 md:text-base 2xl:text-lg'>Real-Time Threat Detection</p>
                    </div>
                </div>
                <p className='mt-8 w-[95%] text-sm font-medium leading-tight tracking-tighter md:block md:text-xl lg:leading-[1.5] text-slate-600'>Elevate your digital fortress, simplify the gate with seamless authentication—where security meets simplicity and user-friendly access!</p>
            </div>
            
            <div className='2xl:w-2/5 2xl:h-64 lg:w-2/5 lg:h-64 mt-9 ml-28 bg-[#e6f6d4] rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] relative md:hidden lg:block'>
                <div className='w-full'>
                    <Image src="/authfeature.png" alt='members' width={600} height={600} className='rounded absolute -m-11 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-64'/>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Features