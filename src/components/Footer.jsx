import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[16px] App-footer ">
        <h1 className="text-[16px] font-semibold App-name">WDIN</h1>
        <div className="text-[12px] flex gap-[32px] text-[#FFFFFE] footer-links">
          <p className="footer-link">Add Your School</p>
          <p className="footer-link">Guide</p>
          <p className="footer-link">Community</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
