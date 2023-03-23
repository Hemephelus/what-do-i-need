import React, { useEffect, useState } from "react";
import TableComp from "./components/TableComp";
import Selector from "../../../../components/Selector";
import LineChart from "../../components/LineChart";
import { Link } from "react-router-dom";
import yourDetailsDropDown,{
  getClass,
  getPercentageChange,
  getCalculatedCGPA,
  // getCurrentCGPA,
  calculateMinimumGPAForaClass,
  generateInitialLineChart,
  generateGPAChart,
  generateCGPAChangeChart,
} from "pages/Dashboard/util";
import {
  setClassLevel
} from "data/desiredClassLevelSlice";
import { useSelector, useDispatch } from "react-redux";
import Evaluation from "./components/Evaluation";


const Summary = () => {
  const user = useSelector((state) => state.user);
  const gpaTable = useSelector((state) => state.all_gpa_table);
  const dispatch = useDispatch();   
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  let durationSelected = user.durationOfCourse;
  let durationNumber = durationSelected.split("")[0] * 2;

  const userName = user.name;


  const [GpaData, SetGpaData] = useState(gpaTable);
  yourDetails.GpaData = GpaData;
  localStorage.setItem("CalcDetails", JSON.stringify(yourDetails));

  const [desiredClass, SetDesiredClass] = useState("First Class");
  const [GPAAxisLabels, SetGPAAxisLabels] = useState({ x: "", y: "" });
  const [CGPAChangeAxisLabels, SetCGPAChangeAxisLabels] = useState({
    x: "",
    y: "",
  });
  const [GPAChartData, SetGPAChartData] = useState(generateInitialLineChart);
  const [GPAChangeChartData, SetCGPAChangeChartData] = useState(
    generateInitialLineChart
  );

  const duration = yourDetails.UserData.DurationOfCourse;
  const graphGenerator = (GpaData,selectedValue) => {
    let minimumGPA = calculateMinimumGPAForaClass(
      selectedValue,
      duration,
      GpaData
      );
      SetGPAChartData(generateGPAChart(GpaData, minimumGPA));
      SetCGPAChangeChartData(generateCGPAChangeChart(GpaData, minimumGPA));
      SetGPAAxisLabels({ x: "Semesters", y: "Points" });
      SetCGPAChangeAxisLabels({ x: "Semesters", y: "Percentage%" });
    }

 

    useEffect(() => {
      graphGenerator(GpaData,desiredClass)
    },[]);

  const onClickEvaluate = (e) => {  
    const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
    const gpaDetails = yourDetails.GpaData;
    const newGpaData = gpaDetails.map((gpa, index) => {
      return {
        ...gpa,
        Class: getClass(gpa.GPA),
        CGPA: getCalculatedCGPA(
          gpaDetails.map((g) => +g.GPA),
          index
        ),
        Change: getPercentageChange(index - 1, index, gpaDetails),
      };
    });
    SetGpaData(newGpaData);
    yourDetails.GpaData = newGpaData;
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetails));


    graphGenerator(newGpaData,desiredClass)
  };

  const getClassLevelValue = (selectedValue) => {
    dispatch(setClassLevel(selectedValue));
    graphGenerator(GpaData,selectedValue)
  };

  const resetUserDetails = (e) => {
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetailsDropDown));
  };

  if (Object.values(user).every((val) => val === "")) {
    return (
      <div className=" bg-mode-bg-light flex flex-col justify-center items-center h-screen text-mode-headline-light  ">
        <div className="max-w-lg text-center flex flex-col gap-4 p-8 sm:gap-16">
          <h1 className="font-semibold text-[16px] sm:text-[32px]">
            Your data was not found
          </h1>
          <p className="text-[12px] sm:text-[16px] font-medium">
            WDIN stores all user data on local storage. This mean after your
            session has expired your data is cleared from local storage.
          </p>

          <Link to="/your-details">
            <button  onClick={resetUserDetails} className="bg-mode-headline-light text-mode-bg-light">
              <p>Re-enter Your Details</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative sm:grid sm:grid-rows-[auto_1fr] text-mode-headline-light h-full ">
      <div className="sticky  top-0  bg-mode-bg-light  w-full border-solid border-b-[1px] border-mode-paragraph-light flex justify-between items-center py-4 px-4  sm:px-[40px] ">
        <div>
          <h1 className="font-semibold text-[16px] sm:text-[24px]">Summary</h1>
          <p className="text-[12px] sm:text-[16px] font-medium">
            Welcome, {userName}!
          </p>
        </div>
        <a href="#Evaluation">
          <button
            onClick={onClickEvaluate}
            className="bg-mode-link text-mode-bg-dark "
          >
            Evaluate Result
          </button>
        </a>
      </div>
      
      {/* GPA TABLE DATA */}
      <div className="flex flex-col items-center gap-[40px] p-4  sm:p-[40px]">
        <div className="bg-[#fffffe] rounded-lg shadow-xl pb-4 w-full">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className=" font-semibold ">OVERVIEW</h1>
          </div>
          <TableComp />
        </div>

        {/* EVALUATION */}
        <div
          className="bg-[#fffffe] rounded-lg shadow-xl w-full"
          id="Evaluation"
        >
        <div className="border-b-2 border-solid py-[16px] px-[32px] flex flex-col gap-4 items-start sm:flex-row sm:justify-between sm:items-center">
            <h1 className="font-semibold">Evaluation</h1>
            <Selector
              DropDownList={yourDetails.ClassLevels}
              callback={getClassLevelValue}
            />
          </div>
          <Evaluation/>
        </div>

        {/* GPA VS CGPA OVERTIME */}
        <div className="bg-[#fffffe] rounded-lg shadow-xl w-full">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">GPA VS CGPA OVERTIME</h1>
          </div>
          <div className="sm:p-16">
            <LineChart LchartData={GPAChartData} axisLab={GPAAxisLabels} />
          </div>
        </div>
        
        {/* CGPA PERCENTAGE CHANGE OVERTIME */}
        <div className="bg-[#fffffe] rounded-lg shadow-xl w-full">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">CGPA PERCENTAGE CHANGE OVERTIME</h1>
          </div>
          <div className=" sm:p-16">
            <LineChart
              LchartData={GPAChangeChartData}
              axisLab={CGPAChangeAxisLabels}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
