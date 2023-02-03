import React, { useState } from "react";
import { BsMenuButtonWide, BsPrinter } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { MdOutlineSummarize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand,TbLayoutSidebarRightExpand } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('lol')
  // onClick={setIsOpen(true)}
  
  return (
    <>
    {/* {console.log(!isOpen)} */}
      {isOpen ? (
          <div className="fixed lg:sticky z-10 lg:z-0 lg:top-0  lg:bg-[#fffffe] lg:text-black lg:rounded-none top-[100px] left-0 lg:h-screen lg:border-solid lg:border-gray-400 lg:border-r-[1px] rounded-r-full bg-[#6146eaa9] text-[#fffffe]">
                   <button className="h-full " onClick={() => setIsOpen(!isOpen)}>
          <TbLayoutSidebarLeftExpand size={32}/>
        </button>
          </div>
       
      ) : (
        
        <div className="  fixed lg:sticky top-0 left-0  flex flex-col justify-between  h-screen bg-[#fffffe] py-8 border-solid border-gray-400  border-r-[1px] z-10 shadow-2xl sm:shadow-none">
          {/* <div className='flex gap-8 text-red-300 h-screen bg-[#fffffe] py-8 border-solid border-gray-400  sm:block border-r-2 '> */}
        <div className="flex flex-col gap-4">
        <div className="flex justify-end hover:animate-slide">
        <button  onClick={() => setIsOpen(!isOpen)}>
          <TbLayoutSidebarRightExpand size={32}/>
        </button>
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
        </div>
          <div className="p-8">
            <Link to="/">
              <button className="flex gap-4  justify-end items-center text-xl font-medium text-slate-700">
                <AiOutlineHome size={24} />
                <h1 className="">Home</h1>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
