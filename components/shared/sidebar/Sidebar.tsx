
import React from "react";
import Link from "next/link";
import { SIDEBAR_MENU } from "@/constants";
import { MenuItem } from "./Menuitem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/auth/LogoutButton";

const Sidebar = async () => {




  return (
    <div className="fixed flex h-screen w-[20.7rem] flex-1 bg-[#E2E8F0]">
      <div className="flex w-full flex-col space-y-[5rem] px-[1.4rem]">
        <div className="flex cursor-pointer pl-[0.7rem] pt-[1.8rem]">
          <Link href="/dashboard/profile" className="">
            <div className="flex items-center justify-center space-x-[1rem] ">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

              </div>

              <div>
                <p className="text-[1.4rem] font-medium leading-[1.6rem] text-black">
                  Hi Harsh
                </p>
                <p className="text-[1rem] font-semibold leading-[1.6rem] text-[#94A3B8]">
                  View Profile
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-y-[1.4rem]  border-2 border-black">
          {SIDEBAR_MENU.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        <div>
          <div>
            <LogoutButton>
              Logout
            </LogoutButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
