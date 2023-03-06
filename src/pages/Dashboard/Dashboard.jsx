import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Summary from "./subpages/Summary";
// import StatsBar from '../components/StatsBar'
import Comprehensive from "./subpages/Comprehensive";
import BreakDown from "./subpages/BreakDown";
import YourProfile from "./subpages/YourProfile";
import PrintResult from "./subpages/PrintResult";

const Dashboard = () => {
  return (
    <div>
      <div className="main-summary-app relative bg-[#475d5b4b] w-full lg:grid lg:grid-cols-[auto_minmax(auto,_1fr)] ">
        <SideBar />

        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/summary-calculator" element={<Summary />} />
          <Route path="/comprehensive-calculator" element={<Comprehensive />} />
          <Route path="/break-down" element={<BreakDown />} />
          <Route path="/your-profile" element={<YourProfile />} />
          <Route path="/print-result" element={<PrintResult />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
