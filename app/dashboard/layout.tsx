

import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {


    return (
        <>
            <div className="relative flex w-full  bg-white">
                <Sidebar />
                <div className="w-[calc(100vw-15rem)]">
                    <Navbar />
                    <div className="w-full p-4">

                        {children}

                    </div>
                </div>
            </div>
        </>
    )
}

export default layout
