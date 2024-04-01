
import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {


    return (
        <>
            <div className="relative flex h-screen w-full justify-between bg-blueBackground">
                <div className='relative w-[8vw]'>
                    <Sidebar />
                </div>
                <div className="w-[calc(100vw-10vw)]  pt-8">
                    {children}
                </div>
            </div>
        </>
    )
}

export default layout
