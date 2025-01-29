import React from 'react'
import Logo from "../../assets/wizia-Logo.png"

const FooterLower = () => {
  return (
    <div className="footerLower bg-[#07292F] h-[15vh] flex justify-center items-center flex-col">
      <div className="lower w-[80%] flex justify-between items-center">
            <img src={Logo} alt="" />
            <p className="text-gray-400">Copyright © 2023 Wizia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterLower
