import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-8 md:p-20 ">
        <Link to="/">
          <h1 className="text-[16px] font-semibold md:text-[32px] md:font-bold hover:scale-105 cursor-pointer text-mode-link">WDIN</h1>
        </Link>
        <div className="flex gap-4 md:gap-12">
          <a
            href="#Features"
            className="font-semibold text-mode-headline-light hover:text-mode-link text-[12px] md:text-lg "
            >Features</a>
          <a
            href="#Guide"
            className="font-semibold text-mode-headline-light hover:text-mode-link text-[12px] md:text-lg"
            >Guide</a>
          <a
            href="https://discord.gg/Stm6uZuf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-mode-headline-light hover:text-mode-link text-[12px] md:text-lg"
            >
            Community
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
