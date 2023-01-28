import React from 'react'

const TableComp = () => {
  return (
    <div className='px-[40px] py-[20px] flex flex-col gap-4'>
        <div className='py-[8px] px-[32px] border-solid border-b-2 border-slate-400 flex'>
          <div className='flex-1'>#</div>
          <div className='flex-1'>Year</div>
          <div className='flex-1'>Semester</div>
          <div className='flex-1'>GPA</div>
          <div className='flex-1'>Class</div>
          <div className='flex-1'>CGPA</div>
          <div className='flex-1'>%Change</div>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='py-[8px] px-[32px] rounded bg-slate-200 flex'>
          <div className='flex-1'>1</div>
          <div className='flex-1'>1</div>
          <div className='flex-1'>1</div>
          <div className='flex-1'>
          <input type="text" value={0} className="w-16 bg-transparent outline-none rounded focus:bg-slate-100 focus:shadow-lg border-solid border-2 border-slate-400 px-2 font-medium "/>
          </div>
          
          <div className='flex-1'>-</div>
          <div className='flex-1'>0.0</div>
          <div className='flex-1'>-</div>
        </div>
        <div className='py-[8px] px-[32px] rounded bg-slate-200 flex'>
          <div className='flex-1'>1</div>
          <div className='flex-1'>1</div>
          <div className='flex-1'>2</div>
          <div className='flex-1'>
          <input type="text" value={0} className="w-16 bg-transparent outline-none rounded focus:bg-slate-100 focus:shadow-lg border-solid border-2 border-slate-400 px-2 font-medium "/>
          </div>
          <div className='flex-1'>-</div>
          <div className='flex-1'>0.0</div>
          <div className='flex-1'>-</div>
        </div>
        </div>
    </div>
  )
}

export default TableComp