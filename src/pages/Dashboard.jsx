import React from 'react'
import SideBar from '../components/SideBar'
import Summary from './Summary'
import StatsBar from '../components/StatsBar'

const Dashboard = () => {

    console.log( JSON.parse(localStorage.getItem('CalcDetails')) )
  return (
    <div>
         <div className="main-summary-app h-full bg-[#D1D1E9] grid grid-cols-[auto_minmax(900px,_1fr)_200px]">
        {/* Components
              SideBar
              main-section
              side-stats */}
              

              <SideBar/>
            

              <Summary/>

              <StatsBar/>
              
              <div></div>
      </div>
    </div>
  )
}

export default Dashboard