import React, { useEffect, useState } from "react";
import TableComp from "../components/TableComp";
import Selector from "../components/Selector";
import LineChart from "../components/LineChart";
import { Link } from "react-router-dom";
import yourDetailsDropDown,{
  getClass,
  getPercentageChange,
  getCalculatedCGPA,
  getCurrentCGPA,
  calculateMinimumGPAForaClass,
  generateInitialLineChart,
  generateGPAChart,
  generateGPATableData,
  generateCGPAChangeChart,
} from "../util";

const Summary = () => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  let durationSelected = yourDetails.UserData.DurationOfCourse;
  let durationNumber = durationSelected.split("")[0] * 2;
  const userName = yourDetails.UserData.FullName;


  const [GpaData, SetGpaData] = useState(generateGPATableData(durationNumber));
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

  const getDropDownValue = (selectedValue, selectionName) => {
    SetDesiredClass(selectedValue);
    graphGenerator(GpaData,selectedValue)
  };

  const resetUserDetails = (e) => {
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetailsDropDown));
  };

  if (Object.values(yourDetails.UserData).every((val) => val === "")) {
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
      <div className="flex flex-col items-center gap-[40px] p-8  sm:p-[40px]">
        <div className="bg-[#fffffe] rounded-lg shadow-xl pb-4 w-full">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className=" font-semibold ">OVERVIEW</h1>
          </div>
          <TableComp />
        </div>

        {/* Evaluation */}
        <div
          className="bg-[#fffffe] rounded-lg shadow-xl w-full"
          id="Evaluation"
        >
          <div className="border-b-2 border-solid py-[16px] px-[32px] flex flex-col gap-4 items-start sm:flex-row sm:justify-between sm:items-center">
            <h1 className="font-semibold">Evaluation</h1>
            <Selector
              DropDownList={yourDetails.ClassLevels}
              callback={getDropDownValue}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center p-8 sm:p-[72px]">
            <div className="flex flex-col items-center  gap-16">
              <div className="w-full flex flex-col items-center gap-4 text-center">
                <div className="font-semibold text-lg sm:text-xl">
                  Current CGPA
                </div>
                <div className="font-bold text-xl sm:text-2xl">
                  {getCurrentCGPA(GpaData)}
                </div>

                <div className="font-semibold text-mode-link">
                  {getClass(getCurrentCGPA(GpaData))}
                </div>
              </div>
              <div className="h-[2px] w-[50%] bg-slate-300"></div>
              <div className="w-full flex flex-col items-center gap-4">
                <div className="font-medium text-sm sm:text-lg text-center">
                  Minimum GPA to be a{" "}
                  <span className="text-mode-link">{desiredClass}</span>{" "}
                  Student.
                </div>
                <div className="font-bold text-xl sm:text-2xl">
                  {calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  )}
                </div>
              </div>
            </div>

            {/* Interpretation */}
            <div className="flex flex-col gap-8 text-center items-center sm:text-lg max-w-lg bg-slate-100 px-4 py-8 rounded-lg shadow-xl">
              <div>
                Your current CGPA is{" "}
                <span className="font-semibold">{getCurrentCGPA(GpaData)}</span>
                , Making you a{" "}
                <span className="font-semibold">
                  {getClass(getCurrentCGPA(GpaData))}
                </span>{" "}
                student.
              </div>
              <div className="h-[2px] w-[50%] bg-slate-300"></div>
              <div>
                For you to be a{" "}
                <span className="font-semibold">{desiredClass}</span> student,
                you would need to get a minimum GPA of{" "}
                <span className="font-semibold">
                  {calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  )}
                </span>{" "}
                for the remaining semesters.
              </div>

              <div className="h-[2px] w-[50%] bg-slate-300"></div>
              <div>
                This is{" "}
                <span className="font-semibold">
                  {calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  ) >= 0 &&
                  calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  ) < 5
                    ? "achievable"
                    : "unachievable"}
                </span>{" "}
                if you decide to{" "}
                <span className="font-semibold">
                  {calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  ) >= getCurrentCGPA(GpaData)
                    ? "work hard"
                    : "slack off"}
                </span>
                .
              </div>
            </div>
          </div>
        </div>

        {/* gpa vs cgpa */}
        <div className="bg-[#fffffe] rounded-lg shadow-xl w-full">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">GPA VS CGPA OVERTIME</h1>
          </div>
          <div className="sm:p-16">
            <LineChart LchartData={GPAChartData} axisLab={GPAAxisLabels} />
          </div>
        </div>
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
