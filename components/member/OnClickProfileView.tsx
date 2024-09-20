'use client'
import { getUserById } from '@/actions/user.action';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useDisplayCurrentYear, useDisplayYear } from '@/hooks/use-display-data';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OnClickProfileView = () => {
    const clickedViewId = useSelector((state: any) => state.id);
    const [userData, setUserData] = useState<any>(null);

    console.log("ClickedViewId", clickedViewId);

    useEffect(() => {
        async function fetchData() {
            const data = await getUserById(clickedViewId);
            setUserData(data);
            console.log("UserData", data);
        }
        fetchData();
    }, [clickedViewId]);

    return (
        userData ? (
            <div className='mt-4 w-full rounded-[7.54px] bg-white p-4'>
                <div className='flex w-full justify-end'>
                    {/* pencil icons */}
                </div>
                <div className='flex w-full gap-4 bg-white'>
                    <Avatar className='size-20'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                        <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='text-xl'>{userData.name ? userData.name : ''}</p>
                        <span className='rounded-md bg-neonGreen p-1 text-xs text-darkGreen'>
                            {userData.role ? userData.role.toLowerCase() : 'ROLE'}
                        </span>
                        <br />

                        <span className='rounded-md bg-golden p-1 text-xs text-darkGolden'>Domain</span>
                    </div>
                </div>
                <div className='mt-4 grid w-full grid-cols-3 gap-4 '>
                    <div className='flex flex-col items-start justify-start border-r-2'>
                        <p>Year</p>
                        <p className='text-2xl font-bold'>

                            {userData.current_year ? useDisplayCurrentYear(userData.current_year) : ''}
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-r-2'>
                        <p>Joined On</p>
                        <p className='text-2xl font-bold'>
                            {userData.year_of_joining ? useDisplayYear(userData.year_of_joining) : ''}
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p>Branch</p>
                        <p className='text-2xl font-bold'>
                            {userData.branch ? userData.branch : ''}
                        </p>
                    </div>
                </div>

                <div className='mt-4 flex w-full gap-4'>
                    <Github />
                    <Linkedin />
                    <Instagram />
                </div>
                <div className='mt-4 w-full gap-2'>
                    <p className='text-lg'>Details</p>
                    <br />
                    <div className='flex justify-between'>
                        <p className='text-sm font-light'>Roll Number</p>
                        <div className='w-[70%] rounded-sm border-[1px] py-1 pl-3 text-sm font-light'>
                            <p>
                                {userData.roll_number ? userData.roll_number : ''}
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-between'>
                        <p className='text-sm font-light'>Phone Number</p>
                        <div className='w-[70%] rounded-sm border-[1px] py-1 pl-3 text-sm font-light'>
                            <p>
                                {userData.phone ? userData.phone : ''}
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-between'>
                        <p className='text-sm font-light'>Email</p>
                        <div className='w-[70%] rounded-sm border-[1px] py-1 pl-3 text-sm font-light'>
                            <p>
                                {userData.email ? userData.email : ''}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div className='mt-2 flex h-[40vh] w-full items-center justify-center rounded-[7.54px] bg-white p-4'>
            <p className='text-gray-500'>Select user to view details</p>
        </div>
    );
}

export default OnClickProfileView;
