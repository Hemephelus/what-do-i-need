import React, { useState } from "react";
import TableComp from "../components/TableComp";
import Selector from "../components/Selector";
import LineChart from "../components/LineChart";
import { Link } from "react-router-dom";
import {
  getClass,
  getPercentageChange,
  getCalculatedCGPA,
  getCurrentCGPA,
  calculateMinimumGPAForaClass,
  generateInitialLineChart,
  generateGPAChart,
  generateCGPAChangeChart,
} from "../util";

const Summary = () => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  const userName = yourDetails.UserData.FullName;
  const [GpaData, SetGpaData] = useState(yourDetails.GpaData);
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
        Change: getPercentageChange(
          index - 1,
          index,
          gpaDetails
        ),
      };
    });
    SetGpaData(newGpaData);
    yourDetails.GpaData = newGpaData;
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetails));

    

    let minimumGPA = calculateMinimumGPAForaClass(
      desiredClass,
      duration,
      newGpaData
    )
    SetGPAChartData(generateGPAChart(newGpaData,minimumGPA));
    SetCGPAChangeChartData(generateCGPAChangeChart(newGpaData,minimumGPA));
    SetGPAAxisLabels({ x: "Semesters", y: "Points" });
    SetCGPAChangeAxisLabels({ x: "Semesters", y: "Percentage%" });
  };

  const getDropDownValue = (selectedValue, selectionName) => {
    SetDesiredClass(selectedValue);
    let minimumGPA = calculateMinimumGPAForaClass(
      selectedValue,
      duration,
      GpaData
    )
    SetGPAChartData(generateGPAChart(GpaData,minimumGPA));
    SetCGPAChangeChartData(generateCGPAChangeChart(GpaData,minimumGPA));
    SetGPAAxisLabels({ x: "Semesters", y: "Points" });
    SetCGPAChangeAxisLabels({ x: "Semesters", y: "Percentage%" });
  };


  if (Object.values(yourDetails.UserData).every((val) => val === "")) {
    return (
      <div className="sticky  top-0 bg-[#fffffe]  border-solid border-b-[1px] border-gray-400 flex flex-col justify-center items-center  ">
        <div className="max-w-lg text-center flex flex-col gap-16">
          <h1 className="font-semibold text-[32px]">Your data was not found</h1>
          <p className="text-[16px] font-medium">
            WDIN stores all user data on local storage. This mean after your
            session has expired your data is cleared from local storage.
          </p>

          <Link to="/your-details">
            <button className="bg-[#6246EA] text-[#fffffe]">
              <p>Re-enter Your Details</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid grid-rows-[auto_1fr] text-slate-700">
      <div className="sticky  top-0 bg-[#fffffe]  border-solid border-b-[1px] border-gray-400 flex justify-between items-center py-4 px-[40px] ">
        <div>
          <h1 className="font-semibold text-[24px]">Summary</h1>
          <p className="text-[16px] font-medium">Welcome, {userName}!</p>
        </div>

        <button
          onClick={onClickEvaluate}
          className="bg-[#6246EA] text-[#fffffe]"
        >
          Evaluate Result
        </button>
      </div>
      <div className="flex flex-col gap-[40px] m-[40px]">
        <div className="bg-[#fffffe] rounded-lg shadow-xl pb-4">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className=" font-semibold ">OVERVIEW</h1>
          </div>
          <TableComp />
        </div>

        {/* Evaluation */}
        <div className="bg-[#fffffe] rounded-lg shadow-xl" id="">
          <div className="border-b-2 border-solid py-[16px] px-[32px] flex justify-between items-center">
            <h1 className="font-semibold">Evaluation</h1>
            <Selector
              DropDownList={yourDetails.ClassLevels}
              callback={getDropDownValue}
            />
          </div>
          <div className="flex gap-16 items-center justify-center p-[72px]">
            <div className="flex flex-col items-center  gap-16">
              <div className="w-full flex flex-col items-center gap-4 text-center">
                <div className="font-semibold text-xl">Current CGPA</div>
                <div className="font-bold text-2xl">
                  {getCurrentCGPA(GpaData)}
                </div>

                {/* <div
                  className="w-full relative bg-slate-400 rounded-full text-center text-slate-100 "
                  title={`${((getCurrentCGPA(GpaData)/5)*100).toFixed(0)}%`}
                >
                  <div className={`bg-[#6246EA] absolute h-full rounded-full w-[100%]`}>{3+1}</div>{`${((getCurrentCGPA(GpaData)/5)*100).toFixed(0)}%`}
                </div> */}
                <div className="font-semibold text-[#6246EA]">
                  {getClass(getCurrentCGPA(GpaData))}
                </div>
              </div>
              <div className="h-[2px] w-[50%] bg-slate-300"></div>
              <div className="w-full flex flex-col items-center gap-4">
                <div className="font-medium text-lg text-center">
                  Minimum GPA to be a{" "}
                  <span className="text-[#6246EA]">{desiredClass}</span>{" "}
                  Student.
                </div>
                <div className="font-bold text-2xl">
                  {calculateMinimumGPAForaClass(
                    desiredClass,
                    duration,
                    GpaData
                  )}
                </div>
                {/* <div
                  className="w-full bg-[#D1D1E9] rounded-full h-2.5"
                  title="50%"
                >
                  <div className="bg-[#6246EA] h-2.5 rounded-full w-[88%]"></div>
                </div> */}
              </div>
            </div>

            {/* Interpretation */}
            <div className="flex flex-col gap-8 text-center items-center text-lg max-w-lg bg-slate-100 px-4 py-8 rounded-lg shadow-xl">
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
        <div className="bg-[#fffffe] rounded-lg shadow-xl">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">GPA VS CGPA OVERTIME</h1>
          </div>
          <div className="p-16">
            <LineChart LchartData={GPAChartData} axisLab={GPAAxisLabels} />
          </div>
        </div>
        <div className="bg-[#fffffe] rounded-lg shadow-xl">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">CGPA PERCENTAGE CHANGE OVERTIME</h1>
          </div>
       <div className="p-16">
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
