import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center App-header">
        <Link to="/">
          <h1 className="text-[16px] font-semibold App-name">WDIN</h1>
        </Link>
        {/* <div>
          <p className="text-[12px] font-semibold text-[#6246EA] header-link">
            Add School
          </p>
          <p className="text-[12px] font-semibold text-[#6246EA] header-link">
            Add School
          </p>
          <p className="text-[12px] font-semibold text-[#6246EA] header-link">
            Guide
          </p>
          <p className="text-[12px] font-semibold text-[#6246EA]  header-link">
          </p>
        </div> */}
        <div className="flex gap-[16px] header-links">
          <a
            href="#Features"
            className="font-semibold header-link text-[#6246EA] text-[12px]"
            >Features</a>
          <a
            href="https://discord.gg/Stm6uZuf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold header-link text-[#6246EA] text-[12px]"
            >
            Community
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
