// LeadCard.tsx
import React from "react";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useDisplayPosition } from "@/hooks/use-display-data";
interface LeadProps {
  member: any;
}

const Lead: React.FC<LeadProps> = ({ member }) => {
  const memberPosition = useDisplayPosition(member.position);
  return member.position !== "Member" ? (
    <>
      <div className="flex w-[15vw] max-w-[16vw] items-center justify-between rounded-[0.5rem] bg-white p-[1rem]">
        <div className="flex items-center space-x-[0.8rem]">
          <div className=" relative size-[3.4rem] rounded-full bg-white">
            <Avatar>
              <AvatarImage src={member.iconURL} alt="@shadcn" />
              <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col  leading-[1.4rem]">
            <p className="text-[1rem] font-medium">{member.name}</p>
            <p className="text-[0.8rem] font-semibold text-[#94A3B8]">{memberPosition}</p>
          </div>
        </div>
        <Image
          src="/icon/right.svg"
          alt="icon Image"
          width="6"
          height="15"
          className="h-[1.5rem] w-[0.6rem] cursor-pointer"
        />
      </div>
    </>
  ) : null;
}

export default Lead;
