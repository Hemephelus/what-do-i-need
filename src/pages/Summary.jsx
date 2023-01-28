import React from 'react'
import TableComp from '../components/TableComp'

const Summary = () => {
  return (
    
    <div className='grid grid-rows-[auto_1fr]'>
    <div className='bg-[#fffffe]'>ok</div>
    <div className='grid grid-rows-3 gap-[40px] m-[40px]'>
      <TableComp/>
      <div>graph 1</div>
      <div>graph 2</div>
    </div>
    </div>
  )
}

export default Summary