import React from 'react'
import Selector from './Selector'
import yourDetailsDropDown from '../util'

const YourDetails = () => {
  return (
      
      <div className='your-details flex justify-center'>
        <div className="details-card bg-slate-100 rounded-3xl flex flex-col justify-center p-8">

          <div className="deatails-input flex flex-col gap-8">
          <Selector  DropDownList={yourDetailsDropDown.Universities} />
          <Selector  DropDownList={yourDetailsDropDown.Departments} />
          {/* <Selector  DropDownList={yourDetailsDropDown.DurationOfCourse} /> */}
          <Selector  DropDownList={yourDetailsDropDown.ClassLevels} />
          </div>
        </div>

    </div>
  )
}

export default YourDetails