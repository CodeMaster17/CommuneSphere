import React from 'react'
import { FolderKanban } from 'lucide-react';
import { Progress } from '../ui/progress';
import Link from 'next/link';

const ProjectCard = () => {

    return (
        <Link href="/dashboard/projects/123" className='w-full  flex flex-col justify-between bg-white rounded-lg cursor-pointer h-[200px] p-4'>
            <div className=' w-full'>
                <FolderKanban size={40} className='text-bluePrimary' />
            </div>
            <div className=' w-full '>
                <p className='font-semibold text-lg'>CommuneSphere</p>
            </div>
            <div className=''>
            </div>
            <div className=' mb-2'>
                <p className='text-gray-500 text-sm'>Completed: 50% </p>
                <Progress className="mt-2 h-1 bg-gray-100 " value={50} />
            </div>
            <p className='text-gray-500 text-sm'>Created on : 12 Jan 2024 </p>
        </Link>
    )
}

export default ProjectCard