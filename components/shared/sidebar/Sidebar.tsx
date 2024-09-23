"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GetCurrentUser } from "@/hooks/get-current-user";
import { LogOut, Menu, Moon, Settings } from 'lucide-react';
import { MenuItem } from "./Menuitem";


import ClosedSidebar from "./ClosedSidebar";
import OpenSidebar from "./OpenSidebar";


const Sidebar = () => {
  const { user, status } = GetCurrentUser();

  return (
    <div className="sticky left-4 top-4 z-10 flex h-[95vh] w-[10vw] justify-between rounded-[12px] bg-bluePrimary  lg:w-[4vw]">
      <div className="relative flex w-full flex-col p-2">
        <div className="flex w-full items-center justify-center border-b-2 pb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Menu color="white" cursor={"pointer"} />
            </SheetTrigger>
            <SheetContent side="left" className="left-4 2xl:w-[15vw] xl:w-[16vw] rounded-[12px] bg-bluePrimary">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex w-full items-center justify-start gap-4 border-b-2 pb-4">
                    <div>
                      <p className="text-xl font-light text-white">CommuneSphere</p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>


              <div className="w-full flex-col items-start justify-between ">
                <div className="mt-4 flex  w-full flex-col justify-between xl:space-y-[1rem] 2xl:space-y-[1.4rem] ">
                  <OpenSidebar />
                </div>


                <div className="mt-8 flex w-full flex-col ">
                  <MenuItem name="Logout" route="/" component={<LogOut size={20} />} />
                  <MenuItem name="Settings" route="/" component={<Settings size={20} />} />
                  <MenuItem name="Logout" route="/" component={<Moon size={20} />} />
                </div>
              </div>


              <SheetFooter className="absolute bottom-0">
                <div className="mt-8 flex w-full items-center justify-start gap-4 border-t-2 py-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="CommuneSphere" />
                    <AvatarFallback>
                      {/* FIXME: write the original name here */}
                      Name of the user
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    {status === "loading" ? (
                      <p className="text-sm font-light text-white">Loading...</p>
                    ) : user ? (
                      <>
                        <p className="text-sm font-light text-white">{user.name}</p>
                        <p className="text-xs font-light text-white">{user.email}</p>
                      </>
                    ) : (
                      <p className="text-sm font-light text-white">No user data</p>
                    )}
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <ClosedSidebar />
      </div>
    </div>
  );
};

export default Sidebar;
