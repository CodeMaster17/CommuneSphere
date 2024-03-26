

import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className="relative flex w-full  bg-[#f5f5f6]">
                <Sidebar />
                <div className="w-[calc(100vw-15rem)]  p-4">

                    {children}

                </div>
            </div>
        </>
    )
}

export default layout
