import React from 'react'
import TableComp from '../components/TableComp'

const Summary = () => {

  const yourDetails = JSON.parse(localStorage.getItem('CalcDetails')) 
  return (
    
    <div className='relative grid grid-rows-[auto_1fr] text-slate-700'>
    <div className='sticky  top-0 bg-[#fffffe]  border-solid border-b-2 border-gray-400 flex justify-between items-center py-4 px-[40px] '>
<div>

      <h1 className='font-semibold text-[24px]'>Summary</h1> 
      <p className="text-[12px] font-regular">Welcome, {"Nwachukwu"}!</p>
</div>
    <button className='bg-[#6246EA] text-[#fffffe]'>
      Evaluate Result
    </button>
    </div>
    <div className='grid grid-rows-3 gap-[40px] m-[40px]'>
      <div className='bg-[#fffffe] rounded-lg shadow-xl pb-4'>
        <h1 className="py-[16px] px-[32px] font-semibold border-solid border-b-2">OVERVIEW</h1>
        <TableComp duration={yourDetails} />
      </div>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
        <h1 className="py-[16px] px-[32px] font-semibold border-solid border-b-2">GPA VS CGPA OVERTIME</h1>
        {/* GRAPH 1 */}
      </div>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
        <h1 className="py-[16px] px-[32px] font-semibold border-solid border-b-2">PERCENTAGE CHANGE OVERTIME</h1>
        {/* GRAPH 2 */}
      </div>
    </div>
    </div>
  )
}

export default Summary