import React from 'react'
import Partner from "../../assets/Logos.png"

const OurPartner = () => {
  return (
    <div className="Partners bg-slate-700 h-[30vh] flex justify-center items-center flex-col">
        <h1>Out trusted partners</h1>
        <img src={Partner} alt="" />
    </div>
  )
}

export default OurPartner
