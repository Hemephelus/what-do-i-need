import React from 'react'
import { Route, Routes } from "react-router-dom";
import SideBar from '../components/SideBar'
import Summary from './Summary'
// import StatsBar from '../components/StatsBar'
import Comprehensive from './Comprehensive'
import BreakDown from './BreakDown'
import YourProfile from './YourProfile'
import PrintResult from './PrintResult'

const Dashboard = () => {

    // console.log( JSON.parse(localStorage.getItem('CalcDetails')) )
  return (
    <div>
         <div className="main-summary-app relative bg-[#D1D1E9] grid grid-cols-[minmax(250px,_auto)_minmax(auto,_1fr)] w-full">
        {/* Components
              SideBar
              main-section
              side-stats */}
              

              <SideBar/>
            
              <Routes>
        <Route path="/" element={<Summary/>} />
        <Route path="/summary-calculator" element={<Summary/>} />
        <Route path="/comprehensive-calculator" element={<Comprehensive />} />
        <Route path="/break-down" element={<BreakDown />} />
        <Route path="/your-profile" element={<YourProfile />} />
        <Route path="/print-result" element={<PrintResult />} />
      </Routes>
      {/* <Summary/> */}

              {/* <StatsBar/> */}
              
              {/* <div></div> */}
      </div>
    </div>
  )
}

export default Dashboard