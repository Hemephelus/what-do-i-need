import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomepageBody from "../components/HomepageBody";
import YourDetails from "./YourDetails";


const Homepage = () => {
  return (
    <div  className="flex flex-col   ">
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