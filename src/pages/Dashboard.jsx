import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import Summary from "./Summary";
// import StatsBar from '../components/StatsBar'
import Comprehensive from "./Comprehensive";
import BreakDown from "./BreakDown";
import YourProfile from "./YourProfile";
import PrintResult from "./PrintResult";

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
