import React from 'react'
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import summaryIcon from "../assets/home-page/Summary Icon.png";
import BreakDownIcon from "../assets/home-page/Break Down.png";
import ComprehensiveIcon from "../assets/home-page/Comprehensive Icon.png";
import PrintPreviewIcon from "../assets/home-page/Print Preview.png";

const HomepageBody = () => {
  return (
    <div>
         <div className="flex flex-col gap-[80px] justify-center items-center text-center App-body">
        <div className="flex flex-col gap-[40px] sm: Hero-section">
          <div>
            <h1 className=" text-[32px] font-bold sm: Hero-headline">
              A CGPA Calculator
            </h1>
            <div>
              <h3 className="text-[16px] Hero-sub-headline">
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
          <div className="flex flex-col items-center gap-[16px] Hero-buttons">
            <Link to="/your-details">
            <button className="bg-[#6246EA] text-[#fffffe] rounded-lg px-[16px] py-[8px] font-semibold Primary-button">
              Summary Calculation
            </button>
            </Link>
            <button className="bg-[#FFFFFE] text-[#6246EA] rounded-lg px-[16px] py-[8px] font-semibold Secondary-button">
              Comprehensive Calculation
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[40px] items-center feature-section">
          <div className="flex flex-col gap-[8px] items-center feature-headline">
            <h1 className="text-[20px] font-bold feature-title">Features</h1>
            <div className="w-[50px] h-[5px] bg-[#6246EA] feature-line"></div>
          </div>
          <div className="flex  flex-col gap-[40px] features">
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
                Quickly determine what your would need to be on a first class.
              </p>
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
              <h1>Break Down</h1>
              <p>
                View the quick break down on how GPAs and CGPA are calculated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageBody