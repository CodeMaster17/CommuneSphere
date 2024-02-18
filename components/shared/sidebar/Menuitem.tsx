"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SideNavItem } from "@/types/types";

export const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <div className="text-[#FFF]">
      {
        <Link
          href={item.path}
          className={`flex flex-row items-center space-x-[1.3rem] px-[1.1rem] py-[0.8rem]  ${
            item.path === pathname
              ? "rounded-[0.5rem] bg-[#c0cbb5] bg-opacity-25 text-[#CBF69E] shadow-custom"
              : "text-[#d6d6e0]"
          }`}
        >
          <Image
            src={item.iconURL ?? ""}
            alt="My Image"
            width="24"
            height="24"
            className={`min-h-[1.5rem] min-w-[1.5rem] ${
              item.path === pathname ? "custom-svg" : ""
            } `}
          />
          <span className="flex text-[1rem] font-normal">{item.name}</span>
        </Link>
      }
    </div>
  );
};
