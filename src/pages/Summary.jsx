import React, { useState } from 'react'
import TableComp from '../components/TableComp'
import { getClass,getPercentageChange,getCalculatedCGPA } from "../util";
import Selector from '../components/Selector';

const Summary = () => {

  const yourDetails = JSON.parse(localStorage.getItem('CalcDetails')) 
  const userName = yourDetails.UserData.FullName
  const [GpaData,SetGpaData] = useState(yourDetails.GpaData)
  
  const onClickEvaluate = (e) => {
    const yourDetails = JSON.parse(localStorage.getItem('CalcDetails')) 
    const gpaDetails = yourDetails.GpaData
    const newGpaData = gpaDetails.map((gpa, index) => {
        return {
          ...gpa,
          Class: getClass(gpa.GPA),
          CGPA: getCalculatedCGPA(gpaDetails.map((g) => +g.GPA),index),
          Change: getPercentageChange(index-1,index,gpaDetails.map((g) => +g.GPA)),
        };
      
    });
    SetGpaData(newGpaData);
  }

  console.log(GpaData)
  return (
    
    <div className='relative grid grid-rows-[auto_1fr] text-slate-700'>
    <div className='sticky  top-0 bg-[#fffffe]  border-solid border-b-[1px] border-gray-400 flex justify-between items-center py-4 px-[40px] '>
<div>
      <h1 className='font-semibold text-[24px]'>Summary</h1> 
      <p className="text-[12px] font-regular">Welcome, {userName}!</p>
</div>
    <button onClick={onClickEvaluate} className='bg-[#6246EA] text-[#fffffe]'>
      Evaluate Result
    </button>
    </div>
    <div className='grid grid-rows-4 gap-[40px] m-[40px]'>
      <div className='bg-[#fffffe] rounded-lg shadow-xl pb-4'>
        <div className="border-b-2 border-solid py-[16px] px-[32px]">
        <h1 className=" font-semibold ">OVERVIEW</h1>
        </div>
        <TableComp/>
      </div>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
      <div className="border-b-2 border-solid py-[16px] px-[32px] flex justify-between">
        <h1 className="font-semibold">Evaluation</h1>
        <Selector
              DropDownList={yourDetails.ClassLevels}
              // callback={getDropDownValue}
            />
        </div>
        {/* GRAPH 1 */}
      </div>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
      <div className="border-b-2 border-solid py-[16px] px-[32px]">
        <h1 className="font-semibold">GPA VS CGPA OVERTIME</h1>
        </div>
        {/* GRAPH 1 */}
      </div>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
      <div className="border-b-2 border-solid py-[16px] px-[32px]">
        <h1 className="font-semibold">PERCENTAGE CHANGE OVERTIME</h1>
        </div>
        {/* GRAPH 2 */}
      </div>
    </div>
    </div>
  )
}

export default Summary