/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDisplayCurrentYear, useDisplayYear } from '@/hooks/use-display-data';
import Image from 'next/image';
import { SPONSOR } from '@/constants';

const OnClickSponsorView = () => {
    const clickedViewId = useSelector((state: any) => state.id);
    const [eventData, setEventData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setEventData(SPONSOR[clickedViewId-1]); // Assuming clickedViewId corresponds to the key in the JSON data
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        if (clickedViewId) {
            fetchData();
        }
    }, [clickedViewId]);
    return (
        eventData ? (
            <div className='mt-4 w-full rounded-[7.54px] bg-white p-4'>
                <div className='flex w-full justify-end'>
                    {/* pencil icons */}
                </div>
                <div className='flex w-full gap-4 bg-white'>
                    <Image src="/Banner.png" alt="intro" width={200} height={100} className="rounded-sm border" />
                    <div className='flex flex-col gap-3'>
                        <p className='text-2xl font-medium text-black'>{eventData.name}</p>
                        <div className='flex flex-wrap gap-1 font-medium'>
                            <p className='rounded-lg bg-orange-200 px-5 text-sm text-orange-700'>Gold</p>
                            <p className='rounded-lg bg-orange-500 px-5 text-sm text-amber-900'>Food</p>
                            <p className='rounded-lg bg-greenTab px-5 text-sm text-greenText'>Active</p>
                        </div>
                    </div>
                </div>
                <div className='mt-4 grid w-full grid-cols-2 gap-3'>
                    <div className='flex flex-col items-start justify-start border-r-2'>
                        <p>Join Date</p>
                        <p className='text-xl font-bold'>
                            4th April 2024
                        </p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p>End Date</p>
                        <p className='text-xl font-bold'>
                            24th April 2024
                        </p>
                    </div>
                </div>

                <div className='mt-3 flex items-center justify-between'>
                        <p className='text-sm font-medium'>Website</p>
                        <div className='h-8 w-[70%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium'>
                            <p>
                                
                            </p>
                        </div>
                    </div>

                <div className='mt-2 text-base font-semibold'>
                   POC Details
                </div>

                <div className='mt-1 flex w-full flex-col gap-2'>
                <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium'>Name</p>
                        <div className='h-8 w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium'>Phone</p>
                        <div className='h-8 w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium'>Email</p>
                        <div className='h-8 w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>

                <p className='mt-3 text-lg font-semibold'>
                    Onboarded By
                </p>

                <div className='h-8 w-full rounded-md border-[2px] py-1 pl-3 text-sm font-medium'>
                            <p>
                                
                            </p>
                </div>

                <p className='mt-3 text-lg font-semibold'>
                    Events
                </p>

                <div className='flex flex-wrap gap-2 rounded-md border-2 p-2'>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>ProjectWing</p>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>StarkExpo</p>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>Defcon</p>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>ProjectWing</p>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>StarkExpo</p>
                <p className='rounded-lg bg-greyTab p-1 text-xs'>Defcon</p>
                </div>
            </div>
        ) : <div className='mt-2 flex h-[40vh] w-full items-center justify-center rounded-[7.54px] bg-white p-4'>
            <p className='text-gray-500'>Select sponsor to view details</p>
        </div>
    );
}

export default OnClickSponsorView;
