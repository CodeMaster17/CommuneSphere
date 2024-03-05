import React from "react";
import Filter from "@/components/shared/table/FilterSection";
import Table from "@/components/shared/table/Table";
import Headingcount from "@/components/shared/HeadingCount";

const Memberstable = () => {
  return (
    <div className="flex h-[38rem] w-[70%] flex-col space-y-[0.7rem] ">
      <div className="flex flex-col space-y-[0.7rem] pl-[0.5rem]">
        <Headingcount name={"Members"} count={"87"} />
        <Filter />
      </div>
      <Table />
    </div>
  );
};

export default Memberstable;
