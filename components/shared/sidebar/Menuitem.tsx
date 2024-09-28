"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  route?: string; // Make route optional
  name: string;
  component: React.ReactNode;
  onClick?: () => void;
}

export const MenuItem = ({ route, name, component, onClick }: MenuItemProps) => {
  const pathname = usePathname();

  const isActive = route === pathname;

  return (
    <div className="text-[#FFF]">
      {route ? (
        <Link
          href={route}
          onClick={onClick}
          className={`flex flex-row cursor-pointer items-center space-x-[1.0rem] xl:py-[0.4rem] 2xl:py-[0.8rem] pl-4 ${isActive
            ? "rounded-[10px] border-[1px] border-borderActiveTab bg-blueActiveTab text-white"
            : "text-white"
            }`}
        >
          {component}
          <span className="flex text-[0.8rem] font-normal">{name}</span>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex flex-row cursor-pointer items-center space-x-[1.0rem] xl:py-[0.4rem] 2xl:py-[0.8rem] pl-4 ${isActive && name != "Logout"
            ? "rounded-[10px] border-[1px] border-borderActiveTab bg-blueActiveTab text-white"
            : "text-white"
            }`}
        >
          {component}
          <span className="flex text-[0.8rem] font-normal">{name}</span>
        </button>
      )}
    </div>
  );
};
