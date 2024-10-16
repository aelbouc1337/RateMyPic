import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full px-4 lg:px-40 py-4 border-b overflow-hidden shadow-xl flex items-center justify-between">
      <img src="/logo.png" className="lg:w-48 w-32" alt="logo" />
      <div className="flex gap-4 items-center">
        <div className="px-3 py-2 border bg-comp rounded-lg font-semibold">
          <span className="font-semibold inline-flex items-center gap-2">
            Credits : <span className="text-secondary text-xl">0</span>
          </span>
        </div>
        <div className="p-4 flex items-center justify-center bg-comp rounded-2xl">
          <IoMenu size={30} className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
