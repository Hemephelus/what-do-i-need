import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomepageBody from "./HomepageBody";
import YourDetails from "./YourDetails";


const Homepage = () => {
  return (
    <div  className="flex flex-col gap-[80px]  mx-[32px] mt-[32px] mb-[80px] App">
        <Header />
      <Routes>
       
        <Route path="/" element={<HomepageBody />} />
        <Route path="/your-details" element={<YourDetails />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default Homepage