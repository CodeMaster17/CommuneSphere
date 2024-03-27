'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession } from 'next-auth/react';

import LogoutButton from "@/components/auth/LogoutButton";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-20 flex h-20 w-full justify-end bg-white shadow-md">
      <div className="flex items-center justify-center  ">
        <div className="w-full ">
          <p className="pt-1 text-base font-medium leading-[1.6rem] ">
            Hi, {session?.user.email} &nbsp;
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="justify-center text-[1rem] font-medium">Profile</DropdownMenuItem>
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
  )
}

export default Navbar
