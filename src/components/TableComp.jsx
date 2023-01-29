import React, {  useState } from "react";
import { generateGPATableData, getClass } from "../util";

const TableComp = (duration) => {
  const yourDetails = JSON.parse(localStorage.getItem("CalcDetails"));
  let durationSelected = yourDetails.UserData.DurationOfCourse;
  let durationNumber = durationSelected.split("")[0] * 2;
  // let classLevels = yourDetails.ClassLevels.listItems
  const gpaTable = generateGPATableData(durationNumber)
  
  
  const [gpasList,SetGpasList] = useState(gpaTable)

  const onChangeGPA = (e,id) => {
   if(!isNaN(e.target.value) && e.target.value <= 5){
        const newGpaList = gpasList.map((gpa,index) => {
          if(gpa.id === id){
            return {
              ...gpa,
              Class : e.target.value,
              GPA: e.target.value,
              // CGPA: calculateCGPA(gpasList.map((g) => +g.GPA).slice(index))
            }
          }else{
            return gpa
          }
        })
        SetGpasList(newGpaList)
    }
}

const calculateCGPA = (cgpaList=[]) => {
  const total = cgpaList.reduce((acc, current) => {
    return acc + current
  },0)
  
  return total/cgpaList.length
}
  
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
        {gpasList?.map((gpa,index) => (
          <div
            key={gpa?.id}
            className="py-[8px] px-[32px] rounded bg-slate-200 flex font-medium"
          >
            <div className="flex-1">{gpa?.id}</div>
            <div className="flex-1">{gpa?.Year}</div>
            <div className="flex-1">{gpa?.Semester}</div>
            <div className="flex-1">
       
            <input
              type="text"
              value={gpa.GPA}
              onChange={(e) => onChangeGPA(e,gpa.id)}
              name={gpa.id-1}
              className="w-16 bg-transparent outline-none rounded focus:bg-slate-100 focus:shadow-lg border-solid border-2 border-slate-400 px-2 font-medium "
            />
          </div>    
           <div className="flex-1">{getClass(gpa.GPA)}</div>
          <div className="flex-1">{calculateCGPA(gpasList.map((g) => +g.GPA).slice(0,index+1 === gpasList.length?gpasList.length:1+index-gpasList.length)).toFixed(2)}</div>
          <div className="flex-1">{gpa?.Change}</div>

          </div>
        ))}

        
      </div>
    </div>
  );
};

export default TableComp;
