import React from 'react'
import TableComp from '../components/TableComp'

const Summary = () => {
  return (
    
    <div className='relative grid grid-rows-[auto_1fr]'>
    <div className='sticky  top-0 bg-[#fffffe]  border-solid border-b-2 border-gray-400 flex items-baseline gap-4 p-4 font-semibold text-[24px]'>

      <h1>Summary</h1> 
      <p className="text-slate-600 text-[12px] font-regular">hi</p>
    
    </div>
    <div className='grid grid-rows-3 gap-[40px] m-[40px]'>
      <div className='bg-[#fffffe] rounded-lg shadow-xl'>
        <h1 className="py-[16px] px-[32px] font-semibold border-solid border-b-2">OVERVIEW</h1>
        <TableComp/>
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