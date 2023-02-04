import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[16px] App-footer ">
        <h1 className="text-[16px] font-semibold App-name">WDIN</h1>
        <div className="text-[12px] flex gap-[32px] text-[#eeee39] footer-links">

          <a
            href="#Features"
            className="footer-link"
            >Features</a>
          <a
            href="https://discord.gg/Stm6uZuf"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            >
            Community
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
