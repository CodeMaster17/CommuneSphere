import React from "react";
import Lead from "./LeadCard";
import { getAllUsers } from "@/actions/user.action";
// import Headingcount from "@/components/shared/Headingcount";


const Leads = async () => {
  const leads = await getAllUsers();


  return (
    <div className="flex flex-col ">
      {/* <Headingcount name={"Leads"} count={"16"} /> */}
      <div className="mt-[0.4rem]">
        <div className="flex w-full flex-wrap gap-8">
          {leads?.map((member: any, index) => (
            <Lead
              key={index}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;
