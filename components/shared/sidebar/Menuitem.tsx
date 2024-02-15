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
              ? "rounded-[0.5rem] bg-[#CBD5E1] text-[#0F172A] shadow-custom"
              : "text-[#94A3B8]"
          }`}
        >
          <Image
            src={item.iconURL ?? ""}
            alt="My Image"
            width="24"
            height="24"
            className={`min-h-[2.4rem] min-w-[2.4rem] ${
              item.path === pathname ? "custom-svg" : ""
            } `}
          />
          <span className="flex text-[1.4rem] font-medium">{item.name}</span>
        </Link>
      }
    </div>
  );
};
