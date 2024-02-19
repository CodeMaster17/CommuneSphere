
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SIDEBAR_MENU } from "@/constants";
import { MenuItem } from "./Menuitem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import reorder from '@/public/icon/formkit--reorder.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import LogoutButton from "@/components/auth/LogoutButton";

const Sidebar = async () => {




  return (
    <div className="fixed flex justify-between h-screen w-[18rem] flex-1 bg-[#1f273c] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="flex w-full flex-col justify-between space-y-[5rem] px-[1.6rem]">

        <div className="text-white text-[1.5rem] flex cursor-pointer pl-[0.7rem] pt-[2rem]">
          <h1>CommuneSphere</h1>
        </div>
        

        <div className="flex flex-col space-y-[1.4rem]">
          {SIDEBAR_MENU.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        {/* <div className="border border-gray-500"></div> */}
        {/* <div>
          <div className="grid justify-items-center pt-14">
            <LogoutButton>
              Logout
            </LogoutButton>
          </div>
        </div> */}

        <div className="flex cursor-pointer pl-[0.7rem] border-t border-gray-500">
          <Link href="/dashboard/profile" className="pt-5 pb-7">
            <div className="flex items-center justify-center space-x-[1rem] ">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

              </div>

              <div>
                <p className="text-[1.2rem] font-medium leading-[1.6rem] pt-1 text-white">
                  Hi, Harsh
                </p>
                <p className="text-[1rem] leading-[1.6rem] text-[#b5c2d5]">
                  View Profile
                </p>
              </div>

              <div className="-mt-3 pl-14">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Image src={reorder} alt="reorder" width={9} height={9}/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="font-medium justify-center text-[1rem]">Profile</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="justify-center">
                        <LogoutButton>
                          Logout
                        </LogoutButton>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

              </div>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
