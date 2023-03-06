import React, { useState } from "react";
import { BsMenuButtonWide, BsPrinter } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { MdOutlineSummarize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand,TbLayoutSidebarRightExpand } from "react-icons/tb";
import { Link } from "react-router-dom";
import yourDetailsDropDown from "../../util";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resetUserDetails = (e) => {
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetailsDropDown));
  };
  
  return (
    <>
      {isOpen ? (
          <div className="fixed lg:sticky z-10 lg:z-0 lg:top-0  lg:bg-mode-bg-light lg:text-mode-headline-light lg:rounded-none top-[100px] left-0 lg:h-screen lg:border-solid lg:border-mode-paragraph-light lg:border-r-[1px] rounded-r-full bg-[#00473ea9] text-mode-bg-light">
                   <button className="h-full " onClick={() => setIsOpen(!isOpen)}>
          <TbLayoutSidebarLeftExpand size={32}/>
        </button>
          </div>
       
      ) : (
        
        <div className="  fixed lg:sticky top-0 left-0  flex flex-col justify-between  h-screen bg-mode-bg-light py-8 border-solid border-mode-paragraph-light  border-r-[1px] z-10 shadow-2xl sm:shadow-none">
          {/* <div className='flex gap-8 text-red-300 h-screen bg-[#fffffe] py-8 border-solid border-gray-400  sm:block border-r-2 '> */}
        <div className="flex flex-col gap-4">
        <div className="flex justify-end hover:animate-slide text-mode-paragraph-light">
        <button  onClick={() => setIsOpen(!isOpen)}>
          <TbLayoutSidebarRightExpand size={32}/>
        </button>
        </div>
          <div className="flex gap-4 flex-col" >
            <Link to="/dashboard/summary-calculator">
              <button className="sidebar-icons" onClick={() => setIsOpen(!isOpen)}>
                <MdOutlineSummarize size={24} />
                <p>Summary</p>
              </button>
            </Link>

            <Link to="/dashboard/comprehensive-calculator">
              <button className="sidebar-icons" onClick={() => setIsOpen(!isOpen)}>
                <BsMenuButtonWide size={24} />

                <p>Comprehensive</p>
              </button>
            </Link>

            <Link to="/dashboard/break-down">
              <button className="sidebar-icons" onClick={() => setIsOpen(!isOpen)}>
                <BiDetail size={24} />
                <p>Break Down</p>
              </button>
            </Link>

            <Link to="/dashboard/print-result">
              <button className="sidebar-icons" onClick={() => setIsOpen(!isOpen)}>
                <BsPrinter size={24} />
                <p>Print Result</p>
              </button>
            </Link>

            <Link to="/dashboard/your-profile">
              <button className="sidebar-icons" onClick={() => setIsOpen(!isOpen)}>
                <CgProfile size={24} />
                <p>Your Profile</p>
              </button>
            </Link>
          </div>
        </div>
          <div className="p-8">
            <Link to="/">
              <button  onClick={resetUserDetails} className="flex gap-4  justify-end items-center text-xl font-medium text-mode-headline-light">
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
