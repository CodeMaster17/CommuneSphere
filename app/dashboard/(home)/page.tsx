'use client'
import { countAllUsers } from '@/actions/user.action'
import StatsHomeCard from '@/components/cards/StatsHomeCard'
import { Heading } from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { ExternalLink } from 'lucide-react';

import MemberChart from '@/components/charts/MemberChart'
import Image from 'next/image'

const Dashboard = () => {
    const [memberCount, setMemberCount] = React.useState<number | null>(null)

    async function getData() {
        try {
            const count = await countAllUsers()
            console.log(count)
            setMemberCount(count)
        } catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])
    return (
        <section className="w-full ">
            <Heading type="large">
                Dashboard
            </Heading>
            <div className='mt-2 flex w-full flex-wrap gap-4'>
                <StatsHomeCard number={memberCount} description={"Total Members"} />
                <StatsHomeCard number={memberCount} description={"Total Events"} />
            </div>
            <section className=" mt-8 text-gray-600">
                <div className="  flex flex-wrap">
                    <div className=" flex  gap-2 ">
                        <div className="flex w-3/4 flex-wrap">
                            <div className="w-full rounded-md bg-white p-1 shadow-md md:p-2">
                                <Heading type="medium">
                                    Data
                                </Heading>
                                <MemberChart />
                                <p className='text-lg font-bold'>A comparison between number of members in different domian</p>
                            </div>
                        </div>
                        <div className="flex w-1/4 flex-wrap">
                            <div className="w-full ">
                                <span className='flex h-[40vh] flex-col gap-2 rounded-lg  bg-white p-4 shadow-md' >
                                    <Heading type="medium">
                                        Top events
                                    </Heading>
                                    <Button variant='outline' className='justify-start text-left'>
                                        <Link href='/dashboard/events' className='flex w-full items-center justify-between'>
                                            Kalki <ExternalLink />
                                        </Link>
                                    </Button>
                                    <Button variant='outline' className='justify-start text-left'>
                                        <Link href='/dashboard/events' className='flex w-full items-center justify-between'>
                                            Stark Expo <ExternalLink />
                                        </Link>
                                    </Button>
                                    <Button variant='outline' className='justify-start text-left'>
                                        <Link href='/dashboard/events' className='flex w-full items-center justify-between'>
                                            Defcon <ExternalLink />
                                        </Link>
                                    </Button>
                                    <Button variant='outline' className='justify-start text-left'>
                                        <Link href='/dashboard/events' className='flex w-full items-center justify-between'>
                                            Defcon <ExternalLink />
                                        </Link>
                                    </Button>
                                </span>
                            </div>
                            <div className='flex w-full flex-col rounded-md border-2 bg-white p-1 shadow-md md:p-2'>
                                <Heading type="medium">
                                    Top members
                                </Heading>
                                <div className='flex gap-4'>
                                    <div className="w-1/2 ">
                                        <Image alt="gallery" width={500} height={500} className="block size-full rounded-sm object-cover object-center" src="/person.jpeg" />
                                    </div>
                                    <div className="w-1/2">
                                        <Image alt="gallery" width={500} height={500} className="block size-full rounded-sm object-cover object-center" src="/person.jpeg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Dashboard
