import React from 'react'
import Partner from "../../assets/Logos.png"

const OurPartner = () => {
  return (
    <div className="Partners bg-[#07292F] h-[25vh] flex justify-center items-center flex-col">
        <h1 className="text-cyan-400">Out trusted partners</h1>
        <img src={Partner} alt="" />
    </div>
  )
}

export default OurPartner
