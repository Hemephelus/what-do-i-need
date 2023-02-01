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
  chartData,
  generateInitialLineChart,
} from "../util";

const Summary = () => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  const userName = yourDetails.UserData.FullName;
  const [GpaData, SetGpaData] = useState(yourDetails.GpaData);
  const [desiredClass, SetDesiredClass] = useState("First Class");
  const [GPAAxisLabels, SetGPAAxisLabels] = useState({ x: "", y: "" });
  const [GPAChangeAxisLabels, SetGPAChangeAxisLabels] = useState({
    x: "",
    y: "",
  });
  const [GPAChartData, SetGPAChartData] = useState(generateInitialLineChart);
  const [GPAChangeChartData, SetGPAChangeChartData] = useState(
    generateInitialLineChart
  );

  console.log(GPAChartData);
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
          gpaDetails.map((g) => +g.GPA)
        ),
      };
    });
    SetGpaData(newGpaData);
    yourDetails.GpaData = newGpaData;
    localStorage.setItem("CalcDetails", JSON.stringify(yourDetails));
  };

  const getDropDownValue = (selectedValue, selectionName) => {
    SetDesiredClass(selectedValue);
    SetGPAChartData({
      labels: chartData.map((data) => data.year),
      datasets: [
        {
          label: "GPA",
          data: [4.9, 4.4],
          backgroundColor: "rgba(98, 70, 234, 0.5)",
          borderColor: "rgba(98, 70, 234, 0.8)",
          fill: true,
        },
        {
          label: "Projected GPA",
          data: [4.9, 4.4, 4.42, 4.42, 4.42, 4.42],
          backgroundColor: "rgba(98, 70, 234, 0.25)",
          borderColor: "rgba(98, 70, 234, 0.5)",
          borderDash: [5, 5],
        },
        {
          label: "CGPA",
          data: [4.9, 4.65],
          backgroundColor: "rgba(219, 39, 99, 0.5)",
          borderColor: "rgba(219, 39, 99, 0.8)",
          fill: true,
        },
        {
          label: "Projected CGPA",
          data: [4.9, 4.65, 4.57, 4.54, 4.51, 4.5],
          backgroundColor: "rgba(219, 39, 99, 0.25)",
          borderColor: "rgba(219, 39, 99, 0.5)",
          borderDash: [5, 5],
        },
      ],
    });
    SetGPAChangeChartData({
      labels: chartData.map((data) => data.year),
      datasets: [
        {
          label: "GPA Percentage Change",
          data: [NaN, 100, -10],
          backgroundColor: "rgba(98, 70, 234, 0.5)",
          borderColor: "rgba(98, 70, 234, 0.8)",
        },
        {
          label: "Projected GPA Percentage Change",
          data: [NaN, 100, -10, 0, 0, 0],
          backgroundColor: "rgba(98, 70, 234, 0.25)",
          borderColor: "rgba(98, 70, 234, 0.5)",
          borderDash: [5, 5],
        },
      ],
    });
    SetGPAAxisLabels({ x: "Semesters", y: "Points" });
    SetGPAChangeAxisLabels({ x: "Semesters", y: "Percentage%" });
  };

  // console.log(calculateMinimumGPAForaClass(desiredClass,duration,GpaData))

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
          <p className="text-[12px] font-regular">Welcome, {userName}!</p>
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
          <div className="p-8">
            <LineChart LchartData={GPAChartData} axisLab={GPAAxisLabels} />
          </div>
        </div>
        <div className="bg-[#fffffe] rounded-lg shadow-xl">
          <div className="border-b-2 border-solid py-[16px] px-[32px]">
            <h1 className="font-semibold">PERCENTAGE CHANGE OVERTIME</h1>
          </div>
          <LineChart
            LchartData={GPAChangeChartData}
            axisLab={GPAChangeAxisLabels}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
