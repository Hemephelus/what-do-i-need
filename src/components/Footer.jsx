import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 bg-mode-bg-dark p-8  md:gap-12  md:w-full  md:py-16 md:px-20 md:items-start">
        <h1 className="text-[16px] font-semibold md:text-[32px] md:font-bold hover:scale-105 cursor-pointer text-mode-link">WDIN</h1>
        <div className="text-[12px] flex gap-[32px] text-mode-bg-light  ">

          <a
            href="#Features"
            className="font-semibold hover:text-mode-link text-[12px] md:text-lg"
            >Features</a>
             {/* <a
            href="#Guide"
            className="font-semibold hover:text-mode-link text-[12px] md:text-lg"
            >Guide</a> */}
          <a
            href="https://discord.gg/Stm6uZuf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-mode-link text-[12px] md:text-lg"
            >
            Community
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
