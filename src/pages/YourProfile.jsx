import React from "react";

const YourProfile = () => {
  return (
    <div className=" bg-[#fffffe] flex flex-col justify-center items-center h-screen  ">
      <div className="max-w-lg text-center flex flex-col gap-4 p-8 sm:gap-16">
        <h1 className="font-semibold text-[16px] sm:text-[32px]">
          Your Profile
        </h1>
        <p className="text-[12px] sm:text-[16px] font-medium">
          This feature is not yet available. If you would like to see this
          feature or any other one, fill the form below.
        </p>

        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdWkoToi1G1lxBcRRamOYrO1DdQyjN3T1dW-Qx7vbTP8Yn4-g/viewform?usp=sf_link"
          rel="noreferrer"
        >
          <button className="bg-[#6246EA] text-[#fffffe]">
            <p>Fill Form</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default YourProfile;
