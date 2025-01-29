import React from 'react'
import SIgnUp from '../Buttons/SIgnUp';

const FooterUpper = () => {
  return (
    <div className="bg-[#002228] h-[60vh] flex justify-center items-center flex-col">
      <h1 className="start text-cyan-400 uppercase">Get started</h1>
      <h1 className="MainText text-3xl text-white mt-7"> <span className="italic">Embrace</span> <span className="font-bold">the new era of</span> <span className="italic">outbound</span> </h1>
      <p className="text-center mt-5 text-gray-400">Wizia lets you train, activate, and optimize aiDRs. <br/>
      Take your outbound to new levels of performance and efficiency.</p>
      <div className="btn mt-5">
        <SIgnUp />
      </div>
    </div>
  )
}

export default FooterUpper
