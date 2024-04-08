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
                    <Image src="/Banner.png" alt="intro" width={200} height={100} className="border rounded-sm" />
                    <div className='flex flex-col gap-3'>
                        <p className='text-2xl text-black font-medium'>{eventData.name}</p>
                        <div className='flex flex-wrap gap-1 font-medium'>
                            <p className='text-sm px-5 leading-0 bg-orange-500 text-amber-900 rounded-lg'>Food</p>
                            <p className='text-sm px-5 leading-0 bg-orange-200 text-orange-700 rounded-lg'>Gold</p>
                            <p className='text-sm px-5 leading-0 bg-greenTab text-greenText rounded-lg'>Active</p>
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

                <div className='flex justify-between items-center mt-3'>
                        <p className='text-sm font-medium'>Website</p>
                        <div className='w-[70%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium h-8'>
                            <p>
                                
                            </p>
                        </div>
                    </div>

                <div className='mt-2 text-base font-semibold'>
                   POC Details
                </div>

                <div className='mt-1 flex flex-col w-full gap-2'>
                <div className='flex justify-between items-center'>
                        <p className='text-sm font-medium'>Name</p>
                        <div className='w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium h-8'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm font-medium'>Phone</p>
                        <div className='w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium h-8'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm font-medium'>Email</p>
                        <div className='w-[80%] rounded-md border-[2px] py-1 pl-3 text-sm font-medium h-8'>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>

                <p className='mt-3 text-lg font-semibold'>
                    Onboarded By
                </p>

                <div className='w-full rounded-md border-[2px] py-1 pl-3 text-sm font-medium h-8'>
                            <p>
                                
                            </p>
                </div>

                <p className='mt-3 text-lg font-semibold'>
                    Events
                </p>

                <div className='flex flex-wrap gap-2 p-2 border-2 rounded-md'>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>ProjectWing</p>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>StarkExpo</p>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>Defcon</p>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>ProjectWing</p>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>StarkExpo</p>
                <p className='bg-greyTab p-1 text-xs rounded-lg'>Defcon</p>
                </div>
            </div>
        ) : <div className='mt-2 flex h-[40vh] w-full items-center justify-center rounded-[7.54px] bg-white p-4'>
            <p className='text-gray-500'>Select sponsor to view details</p>
        </div>
    );
}

export default OnClickSponsorView;
