"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MenuItemProps {
  route: string;
  name: string;
  component: React.ReactNode;
}

export const MenuItem = ({ route, name, component }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <div className=" text-[#FFF]">
      {
        <Link
          href={route}
          className={`flex flex-row items-center space-x-[1.3rem] py-[0.8rem] pl-4  ${route === pathname
            ? " rounded-[10px] border-[1px] border-borderActiveTab bg-blueActiveTab  text-white "
            : "text-white"
            }`}
        >
          {component}
          <span className="flex text-[1rem] font-normal">{name}</span>
        </Link>
      }
    </div>
  );
};
