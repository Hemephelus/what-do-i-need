import React from 'react'
import { TfiShortcode } from "react-icons/tfi";
import { BsMenuButtonWide,BsPrinter } from "react-icons/bs";
import { BiDetail, BiArrowBack } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
        <div className='sticky  top-0 h-screen bg-[#fffffe] w-[100px] border-solid border-gray-400  sm:block border-r-2 '>
        
        
        <div>
        <Link to="/your-details">
            <button className='bg-red-400'>
              <BiArrowBack size={32} />

            </button>
            </Link>
        </div>
      
          
            <div className='flex gap-4 flex-col items-center'>

          
            <Link to="/dashboard/summary-calculator">
            <button>
              <TfiShortcode size={32}/>

            </button>
            </Link>

            <Link to="/dashboard/comprehensive-calculator">
            <button>
              <BsMenuButtonWide size={32}/>

            </button>
            </Link>

            <Link to="/dashboard/break-down">
            <button>
              <BiDetail size={32}/>

            </button>
            </Link>

            <Link to="/dashboard/print-result">
            <button>
              <BsPrinter size={32}/>

            </button>
            </Link>

            <Link to="/dashboard/your-profile">
            <button>
              <CgProfile size={32}/>

            </button>
            </Link>
          
            </div>
        </div>

        

      

    </div>
  )
}

export default SideBar