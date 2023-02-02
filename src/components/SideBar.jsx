import React from "react";
import { BsMenuButtonWide, BsPrinter } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { MdOutlineSummarize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed sm:sticky top-0 left-0 hidden sm:flex flex-col  gap-8 h-screen bg-[#fffffe] py-8 border-solid border-gray-400  border-r-[1px] z-10">
      {/* <div className='flex gap-8 text-red-300 h-screen bg-[#fffffe] py-8 border-solid border-gray-400  sm:block border-r-2 '> */}
      <div>
        <Link to="/">
          <button className="flex gap-4 items-center text-2xl font-semibold text-slate-700">
            <AiOutlineHome size={24} />
            <h1 className="hidden lg:inline-flex">Home</h1>
          </button>
        </Link>
      </div>
      <div className="flex gap-4 flex-col">
        <Link to="/dashboard/summary-calculator">
          <button className="sidebar-icons">
            <MdOutlineSummarize size={24} />
            <p>Summary</p>
          </button>
        </Link>

        <Link to="/dashboard/comprehensive-calculator">
          <button className="sidebar-icons">
            <BsMenuButtonWide size={24} />

            <p>Comprehensive</p>
          </button>
        </Link>

        <Link to="/dashboard/break-down">
          <button className="sidebar-icons">
            <BiDetail size={24} />
            <p>Break Down</p>
          </button>
        </Link>

        <Link to="/dashboard/print-result">
          <button className="sidebar-icons">
            <BsPrinter size={24} />
            <p>Print Result</p>
          </button>
        </Link>

        <Link to="/dashboard/your-profile">
          <button className="sidebar-icons">
            <CgProfile size={24} />
            <p>Your Profile</p>
          </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SideBar;
