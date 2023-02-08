import React, { useState, useEffect } from "react";
import Selector from "../components/Selector";
import { Link } from "react-router-dom";

const YourDetails = () => {

  const yourDetailsDropDown = JSON.parse(localStorage.getItem('CalcDetails')) 

  const [userData, setUserData] = useState(yourDetailsDropDown.UserData);
  const [inputValue, setInputValue] = useState("");
  const [condition, setCondition] = useState(false);
  
  const handleInputChange = (event) => {
    let newInputValue = event.target.value
    setInputValue(event.target.value);
    let updatedUserData = { ...userData };
    updatedUserData.FullName = newInputValue;
    setUserData(updatedUserData);
    yourDetailsDropDown["UserData"] = updatedUserData
    localStorage.setItem('CalcDetails', JSON.stringify(yourDetailsDropDown));
  };

  const getDropDownValue = (selectedValue, selectionName) => {
    let updatedUserData = { ...userData };
    updatedUserData[selectionName] = selectedValue;
    setUserData(updatedUserData);
    yourDetailsDropDown["UserData"] = updatedUserData
    localStorage.setItem('CalcDetails', JSON.stringify(yourDetailsDropDown));
  };


  useEffect(() => {
    setCondition(Object.values(userData).every((val) => val.length > 2));
  }, [userData]);

  return (
    <div className=" flex justify-center bg-mode-bg-light p-20">
      <div className="details-card w-[600px] bg-mode-button-bg-light rounded-3xl flex flex-col justify-center items-center gap-8 p-8 sm:p-16 shadow-xl">
        <h1 className="text-2xl font-semibold text-mode-headline-light ">Your Details</h1>
        <div className="details-input flex flex-col gap-[32px] w-full text-mode-headline-light">
          <div className="detail-input flex flex-col gap-[8px] w-full">
            <h3 className="font-medium ">Full Name:</h3>
            <input
              type="text"
              className="bg-mode-bg-light min-w-[200px] w-full h-[35px] p-2 flex items-center justify-between rounded overflow-hidden outline-none border  hover:border-mode-paragraph-light"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="detail-input flex flex-col gap-[8px] w-full">
            <h3 className="font-medium ">University:</h3>
            <Selector
              DropDownList={yourDetailsDropDown.Universities}
              callback={getDropDownValue}
            />
          </div>
          <div className="detail-input flex flex-col gap-[8px]">
            <h3 className="font-medium ">Department:</h3>
            <Selector
              DropDownList={yourDetailsDropDown.Departments}
              callback={getDropDownValue}
            />
          </div>
          <div className="detail-input flex flex-col gap-[8px]">
            <h3 className="font-medium ">Duration Of Course:</h3>
            <Selector
              DropDownList={yourDetailsDropDown.DurationOfCourse}
              callback={getDropDownValue}
            />
          </div>
 
        </div>
        {condition ? (
          <Link to="/dashboard">
            <button type="submit" className="bg-mode-bg-dark text-mode-bg-light w-64">
              START
            </button>
          </Link>
        ) : (
          <Link to="/your-details">
            <button type="submit" className="text-mode-bg-dark bg-mode-bg-light w-64">
              Enter Data
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default YourDetails;
