// import React from 'react'
// import Logo from "../../assets/Logo.png"

// const Navbar = () => {
//     const navItems = ["About us", "Pricing", "Customers", "Solutions"]
//     const navBtns = ["Book a demo", "Contact us"]
//   return (
//     <div>
//         <div className="Navbar flex justify-between items-center px-30 py-5 bg-[#002228] text-white font-mono">
//             <div className="logo">
//                 <img src={Logo} alt="" />
//             </div>
//             <div className="NavItems flex gap-4">
//                 {navItems.map((NavItem) => {
//                     return <a href="#">{NavItem}</a>
//                 })}
//             </div>
//             <div className="NavBtns flex gap-3">
//                 {navBtns.map((NavBtn, index) => {
//                     return (
//                         index === 0 ? <button className="bg-cyan-300 px-5 py-2 rounded-3xl text-black font-bold" >{NavBtn}</button> : <button className="contactBtn border px-5 py-2 rounded-3xl font-bold">{NavBtn}</button>
//                     )
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar





import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Menu, X } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About us", "Pricing", "Customers", "Solutions"];
  const navBtns = ["Book a demo", "Contact us"];

  return (
    <nav className="bg-[#002228] text-white font-mono px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-6">
          {navItems.map((NavItem, index) => (
            <a key={index} href="#" className="hover:text-cyan-300 transition">
              {NavItem}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          {navBtns.map((NavBtn, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-3xl font-bold ${
                index === 0 ? "bg-cyan-300 text-black" : "border"
              }`}
            >
              {NavBtn}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden flex flex-col items-center bg-[#002228] py-4 transition-all ${isOpen ? "block" : "hidden"}`}>
        {navItems.map((NavItem, index) => (
          <a key={index} href="#" className="py-2 text-lg hover:text-cyan-300">
            {NavItem}
          </a>
        ))}

        <div className="mt-4 flex flex-col gap-3">
          {navBtns.map((NavBtn, index) => (
            <button
              key={index}
              className={`px-5 py-2 w-full text-center rounded-3xl font-bold ${
                index === 0 ? "bg-cyan-300 text-black" : "border"
              }`}
            >
              {NavBtn}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
