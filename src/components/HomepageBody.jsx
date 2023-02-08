import React from 'react'
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import {FiArrowRight} from "react-icons/fi";
import summaryIcon from "../assets/home-page/Summary Icon.png";
import BreakDownIcon from "../assets/home-page/Break Down.png";
import ComprehensiveIcon from "../assets/home-page/Comprehensive Icon.png";
import PrintPreviewIcon from "../assets/home-page/Print Preview.png";
import HeroImage from "../assets/home-page/Hero_Image.png"
import { HowToCarousel } from './Carousel';
// import {DemoCarousel} from './CarouselItem'

const HomepageBody = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
          


          {/* HERO SECTION */}
        <div className="flex flex-col gap-[40px] overflow-hidden lg:w-full  lg:px-20 lg:flex-row lg:justify-between lg:items-center">
         <div className='flex flex-col gap-4 lg:gap-20 py-16'>
         <div>
            <h1 className=" text-[32px] font-bold text-mode-headline-light  lg:text-6xl ">
              A CGPA Calculator
            </h1>
            <div>
              <h3 className="text-[16px] font-normal text-mode-paragraph-light lg:text-3xl Hero-sub-headline">
                Find out what you need to be a
                <Typical
                  steps={[
                    "first class student.",
                    2000,
                    "second class student.",
                    2000,
                    "third class student.",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[16px] lg:flex-row lg:[32px] lg:items-center ">
            <Link to="/your-details">
            <button className="bg-mode-button-bg-light text-mode-button-text-light font-semibold px-[32px] py-[8px] lg:rounded-lg lg:px-[64px] lg:py-[16px] ">
              CALCULATE
            </button>
            </Link>
            <a className="text-mode-button-bg-light rounded-lg flex gap-2 lg:gap-4 items-center px-[16px] py-[8px] font-bold hover:text-mode-button-text-light hover:scale-95" href='#How to Start '>
              Get Started
              <FiArrowRight/>
            </a>
          </div>
         </div>


          <div className='relative overflow-visible h-full lg:mr-16' >
            <div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full absolute lg:right-[5%] -z-10  bg-mode-link"></div>
            <img src={HeroImage} alt="Hero" className='w-full h-full object-cover'/>
          </div>
        </div>



    {/* FEATURES */}
        <div className="flex flex-col gap-12 items-center p-8 bg-mode-bg-dark w-full lg:px-20    "> 
          <div className="flex flex-col gap-[8px] items-center  ">
            <h1 className="text-[20px] font-bold lg:text-[32px] text-mode-headline-dark" id='Features'>Features</h1>
            <div className="w-[50px] h-[5px] bg-mode-link lg:h-[5px] lg:w-[100px]"></div>
          </div>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 ">
            <div className="feature">
              <figure>
                <img
                  className="summary-icon"
                  src={summaryIcon}
                  alt={"summary icon"}
                />
              </figure>
              <h1>Summary</h1>
              <p>
                Quickly determine what you would need to be on a first class.
              </p>
              <a href='#How to Start'>Get Started <FiArrowRight/></a>
            </div>

            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Print-Preview-Icon"
                  src={PrintPreviewIcon}
                  alt={"Print Preview Icon"}
                />
              </figure>
              <h1>Print Result</h1>
              <p>
                Print your summary or comprehensive results for personal use.
              </p>
           
            </div>

            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Break-Down-Icon"
                  src={BreakDownIcon}
                  alt={"Break Down Icon"}
                />
              </figure>
              <h1>Break Down</h1>
              <p>
                View the quick break down on how GPAs and CGPA are calculated.
              </p>
            </div>
            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Comprehensive-Icon"
                  src={ComprehensiveIcon}
                  alt={"Comprehensive Icon"}
                />
              </figure>
              <h1>Comprehensive</h1>
              <p>
              Get a comprehensive view all your courses with a more in-depth break down
              </p>
            </div>
          </div>
        </div>



        {/* HOW TO START */}
        <div className='p-4 lg:p-20 flex flex-col items-center overflow-hidden w-full gap-16' id='How to Start'>
          
<div className='flex flex-col items-center'>

                  <h1 className='text-[20px] font-bold lg:text-[32px] text-mode-headline-light '>Get Started</h1>
            <div className="w-[50px] h-[5px] bg-mode-link lg:h-[5px] lg:w-[100px]"></div>
</div>


        
        <HowToCarousel />




        </div>
      </div>
    </div>
  )
}

export default HomepageBody