import React from 'react'
import Logo from "../../assets/Logo.png"

const Navbar = () => {
    const navItems = ["About us", "Pricing", "Customers", "Solutions"]
    const navBtns = ["Book a demo", "Contact us"]
  return (
    <div>
        <div className="Navbar flex justify-between items-center px-30 py-5 bg-slate-900 text-white font-mono">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="NavItems flex gap-4">
                {navItems.map((NavItem) => {
                    return <a href="#">{NavItem}</a>
                })}
            </div>
            <div className="NavBtns flex gap-3">
                {navBtns.map((NavBtn, index) => {
                    return (
                        index === 0 ? <button className="bg-cyan-300 px-5 py-2 rounded-3xl text-black font-bold" >{NavBtn}</button> : <button className="contactBtn border px-5 py-2 rounded-3xl font-bold">{NavBtn}</button>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar
