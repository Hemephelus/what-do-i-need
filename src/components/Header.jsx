import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div>
    
        <div className="flex justify-between items-center App-header">
            <Link to="/">
        <h1 className="text-[16px] font-semibold App-name">WDIN</h1>
            </Link>
        <div className="flex gap-[16px] header-links">
          <p className="text-[12px] font-semibold text-[#6246EA] header-link">
            Add School
          </p>
          <p className="text-[12px] font-semibold text-[#6246EA] header-link">
            Guide
          </p>
          <p className="text-[12px] font-semibold text-[#6246EA]  header-link">
            Community
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header