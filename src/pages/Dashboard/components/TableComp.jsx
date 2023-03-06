import React, { useState } from "react";
import {
  // generateGPATableData,
  getClass,
  getPercentageChange,
  getCalculatedCGPA,
} from "../../../util";

const TableComp = () => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));

  const [gpasList, SetGpasList] = useState(yourDetails.GpaData);

  const onChangeGPA = (e, id) => {
    if (!isNaN(e.target.value) && e.target.value <= 5) {
      const newGpaList = gpasList.map((gpa, index) => {
        if (gpa.id === id) {
          return {
            ...gpa,
            GPA: e.target.value,
          };
        } else {
          return gpa;
        }
      });
      SetGpasList(newGpaList);
      yourDetails.GpaData = newGpaList;
      localStorage.setItem("CalcDetails", JSON.stringify(yourDetails));
    }
  };

  return (
    <div className="p-4 md:px-[40px] md:py-[20px] flex flex-col  gap-4">
      <div className="py-[8px] px-[32px] border-solid border-b-2 border-slate-400 font-semibold md:flex gap-4 text-[12px] md:text-[16px] hidden">
        <div className="flex-1">#</div>
        <div className="flex-1">Year</div>
        <div className="flex-1">Semester</div>
        <div className="flex-1">GPA</div>
        <div className="flex-1">Class</div>
        <div className="flex-1">CGPA</div>
        <div className="flex-1">CGPA (%Change)</div>
      </div>

      <div className="md:flex flex-col gap-2 hidden">
        {gpasList?.map((gpa, index) => (
          <div
            key={gpa?.id}
            className="py-[8px] px-[32px] rounded bg-slate-200 flex gap-4 font-medium items-center text-[12px] md:text-[16px]"
          >
            <div className="flex-1">{gpa?.id}</div>
            <div className="flex-1">{gpa?.Year}</div>
            <div className="flex-1">{gpa?.Semester}</div>
            <div className="flex-1">
              <input
                type="text"
                value={gpa.GPA}
                onChange={(e) => onChangeGPA(e, gpa.id)}
                name={gpa.id - 1}
                className="w-16 bg-transparent outline-none rounded focus:bg-slate-100 focus:shadow-lg border-solid border-2 border-slate-400 px-2 font-medium "
              />
            </div>
            <div className="flex-1">{getClass(gpa.GPA)}</div>
            <div className="flex-1">
              {getCalculatedCGPA(
                gpasList.map((g) => +g.GPA),
                index
              )}
            </div>
            <div className="flex-1">
              {getPercentageChange(index - 1, index, gpasList)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:gap-2 md:hidden">
        {gpasList?.map((gpa, index) => (
          <div
            key={gpa?.id}
            className="p-4 rounded bg-slate-200 flex flex-col gap-4 font-medium shadow-md text-[12px] md:text-[16px] "
          >
            <div className="flex  gap-4">
              <span className="">#{gpa?.id}</span>
              <span className="">Year {gpa?.Year}</span>
              <span className="">Semester {gpa?.Semester}</span>
            </div>
            <div className="h-[1px] bg-slate-400"></div>
            <div className="flex gap-8 justify-between items-center">
              <div className="">
                GPA:{" "}
                <input
                  type="text"
                  value={gpa.GPA}
                  onChange={(e) => onChangeGPA(e, gpa.id)}
                  name={gpa.id - 1}
                  className="w-[48px] md:w-16 bg-transparent outline-none rounded focus:bg-slate-100 focus:shadow-lg border-solid border-2 border-slate-400 px-2 font-medium "
                />
              </div>
              <div className="">
                CGPA:{" "}
                {getCalculatedCGPA(
                  gpasList.map((g) => +g.GPA),
                  index
                )}
              </div>
              <div className="">
                %CGPA: {getPercentageChange(index - 1, index, gpasList)}
              </div>
            </div>
            <div className="h-[1px] bg-slate-400"></div>
            <div className="">{getClass(gpa.GPA)} Student</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComp;
