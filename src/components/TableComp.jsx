import React, { useState } from "react";
import { generateGPATableData, getClass,getPercentageChange,getCalculatedCGPA } from "../util";

const TableComp = () => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  let durationSelected = yourDetails.UserData.DurationOfCourse;
  let durationNumber = durationSelected.split("")[0] * 2;
  const gpaTable = generateGPATableData(durationNumber);

  const [gpasList, SetGpasList] = useState(gpaTable);

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
      yourDetails.GpaData = newGpaList
      localStorage.setItem('CalcDetails', JSON.stringify(yourDetails));
    }
  };

  

  return (
    <div className="px-[40px] py-[20px] flex flex-col gap-4">
      <div className="py-[8px] px-[32px] border-solid border-b-2 border-slate-400 font-semibold flex">
        <div className="flex-1">#</div>
        <div className="flex-1">Year</div>
        <div className="flex-1">Semester</div>
        <div className="flex-1">GPA</div>
        <div className="flex-1">Class</div>
        <div className="flex-1">CGPA</div>
        <div className="flex-1">%Change</div>
      </div>

      <div className="flex flex-col gap-2">
        {gpasList?.map((gpa, index) => (
          <div
            key={gpa?.id}
            className="py-[8px] px-[32px] rounded bg-slate-200 flex font-medium items-center"
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
              {getCalculatedCGPA(gpasList.map((g) => +g.GPA),index)}
            </div>
            <div className="flex-1">{getPercentageChange(index-1,index,gpasList
                  .map((g) => +g.GPA))}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComp;
