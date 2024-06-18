import { BiEdit } from "react-icons/bi";
import { BiCalendarEdit } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-auto px-10 h-16 flex justify-between items-center">
      <div className="text-white flex gap-8">
        <h1 className="text-xl font-bold hover:scale-125 ease-in-out transition-all">
          <BiBell />
        </h1>
        <h1 className="text-xl font-bold hover:scale-125 ease-in-out transition-all">
          <BiCalendarEdit />
        </h1>
        <h1 className="text-xl font-bold hover:scale-125 ease-in-out transition-all">
          <BiEdit />
        </h1>
      </div>
      <div className="text-white">
        <h1 className="text-xl font-bold">Welcome , echargeup</h1>
      </div>
    </div>
  );
};

export default Navbar;
