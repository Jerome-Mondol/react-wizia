import React from 'react';
import SIgnUp from '../Buttons/SIgnUp';

const FooterUpper = () => {
  return (
    <div className="bg-[#002228] min-h-[60vh] flex flex-col items-center text-center px-4 md:px-8 py-10">
      <h1 className="text-cyan-400 uppercase text-sm md:text-base">Get started</h1>
      <h1 className="text-3xl md:text-5xl text-white mt-5">
        <span className="italic">Embrace</span> <span className="font-bold">the new era of</span> <span className="italic">outbound</span>
      </h1>
      <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
        Wizia lets you train, activate, and optimize aiDRs. <br />
        Take your outbound to new levels of performance and efficiency.
      </p>
      <div className="mt-5">
        <SIgnUp />
      </div>
    </div>
  );
};

export default FooterUpper;
