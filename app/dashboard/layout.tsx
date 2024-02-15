import MarginWidthWrapper from '@/components/shared/sidebar/MarginWidthWeapper';
import PageWrapper from '@/components/shared/sidebar/PageWrapper';
import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className="flex overflow-x-hidden bg-[#E2E8F0]">
                <Sidebar />
                <main className="flex-1">
                    <MarginWidthWrapper>
                        <PageWrapper>{children}</PageWrapper>
                    </MarginWidthWrapper>
                </main>
            </div>
        </>
    )
}

export default layout
