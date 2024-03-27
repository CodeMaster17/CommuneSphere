
import React from "react";
import { SIDEBAR_MENU } from "@/constants";
import { MenuItem } from "./Menuitem";


const Sidebar = () => {
  return (
    <div className="sticky  top-0 flex h-screen w-[10vw] max-w-[16rem]  justify-between bg-[#1f273c]  lg:w-[15vw]">
      <div className="flex w-full flex-col p-4">
        <div className="flex w-full cursor-pointer  text-center text-[1.5rem] text-white">
          <p className="text-lg">CommuneSphere</p>
        </div>
        <div className="mt-8 flex flex-col justify-start space-y-[1.4rem] ">
          {SIDEBAR_MENU.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
