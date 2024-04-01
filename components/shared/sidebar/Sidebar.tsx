
import React from "react";
import { MenuItem } from "./Menuitem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarTop } from "@/constants/sidebar";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogOut, Menu, Moon, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sticky left-4 top-10 z-10 flex h-[95vh] w-[10vw] justify-between rounded-[12px] bg-bluePrimary  lg:w-[4vw]">
      <div className="relative flex w-full flex-col p-4">
        <div className="flex w-full items-center justify-center border-b-2 pb-4">
          <Sheet  >
            <SheetTrigger asChild>
              <Menu color="white" />
            </SheetTrigger>
            <SheetContent side="left" className="left-4 w-[15vw] rounded-[12px] bg-bluePrimary">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex w-full items-center justify-start gap-4 border-b-2 pb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-light text-white">Welcome to</p>
                      <p className="text-sm font-light text-white">CommuneSphere</p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="w-full flex-col items-start justify-between border-2">
                <div className="mt-8 flex  w-full flex-col justify-between space-y-[1.4rem] ">
                  {sidebarTop.map((item, idx) => {
                    return <MenuItem key={idx} name={item.name} route={item.route} component={item.component} />;
                  })}
                </div>
                <div className="mt-8 flex w-full flex-col ">
                  <MenuItem name="Logout" route="/" component={<LogOut />} />
                  <MenuItem name="Settings" route="/" component={<Settings />} />
                  <div className=" text-[#FFF]">

                    <Link
                      href=""
                      className="flex flex-row items-center space-x-[1.3rem] rounded-[10px] border-[1px]  border-borderActiveTab bg-blueActiveTab py-[0.8rem] pl-4  text-white "

                    >
                      <Moon />
                      <span className="flex text-[1rem] font-normal">Light Mode</span>
                    </Link>

                  </div>
                </div>
              </div>
              <SheetFooter className="absolute bottom-0">
                <div className="mt-8 flex w-full items-center justify-start gap-4 border-t-2 py-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-light text-white">Harshit Yadav</p>
                    <p className="text-xs font-light text-white">harshityadav172003@gmail.com</p>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {sidebarTop.map((item, index) => {
          return (
            <>
              <Link href={item.route} key={index} className="flex h-20 w-full items-center justify-center">
                {item.component}
              </Link>
            </>
          )
        })}
        <div className="absolute bottom-0 flex  items-center justify-start gap-4 border-t-2 py-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
