import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { sidebarTop } from '@/constants/sidebarConstants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ClosedSidebar = () => {
    const pathname = usePathname();

    return (
        <>
            {sidebarTop.map((item) => (
                <TooltipProvider key={item.id}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href={item.route}
                                className={`flex h-12 mt-2 w-full items-center justify-center ${item.route === pathname
                                    ? "rounded-[10px] border-[1px] border-borderActiveTab bg-blueActiveTab text-white"
                                    : "text-white"
                                    }`}
                            >
                                {item.component}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            {item.name}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </>
    );
};

export default ClosedSidebar;
