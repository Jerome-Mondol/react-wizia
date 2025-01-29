import React from 'react';
import Logo from "../../assets/wizia-Logo.png";

const FooterLower = () => {
  return (
    <div className="footerLower bg-[#07292F] min-h-[15vh] py-4 flex justify-center items-center">
      <div className="lower w-[90%] max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-3">
        <img src={Logo} alt="Wizia Logo" className="w-24 md:w-32" />
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          Copyright © 2023 Wizia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterLower;

