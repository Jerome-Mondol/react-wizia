// import React from "react";
// import SIgnUp from "../Buttons/SIgnUp";
// import HomeImage from "../../assets/image 2-Photoroom.png"


// const Home = () => {
//     return (
//       <div className="Home flex w-full h-[60vh] text-white justify-between items-center bg-[#02242A]">
//         <div className="Home-part w-fit px-30">
//             <h1 className="text-cyan-400 text-2xl">AI SDRs (aiDRs)</h1>
//             <h1 className="text-7xl"><span className="font-bold">More</span><span className="italic"> leads,</span> <br/> <span className="font-bold">less</span> <span className="italic"> people.</span></h1>
//             <p className="w-96 mt-5 text-gray-400">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
//             <div className="btn mt-5">
//             <SIgnUp/>
//             </div>
//         </div>
//         <div>
//             <img src={HomeImage} alt="" className="h-[60vh]"/>
//         </div>
//       </div>
//     );
//   };

//   export default Home;

import React from "react";
import SIgnUp from "../Buttons/SIgnUp";
import HomeImage from "../../assets/image 2-Photoroom.png";

const Home = () => {
  return (
    <div
      className="Home flex flex-col md:flex-row w-full min-h-[80vh] text-white justify-center md:justify-between items-center bg-[#02242A] px-6 md:px-20 py-10 relative"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-30"></div>

      {/* Left Section */}
      <div className="Home-part text-center md:text-left w-full md:w-1/2 relative z-10">
        <h1 className="text-cyan-400 text-xl md:text-2xl">AI SDRs (aiDRs)</h1>
        <h1 className="text-5xl md:text-7xl">
          <span className="font-bold">More</span>
          <span className="italic"> leads,</span> <br />
          <span className="font-bold">less</span>
          <span className="italic"> people.</span>
        </h1>
        <p className="w-full md:w-96 mt-5 text-gray-300">
          Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.
        </p>
        <div className="btn mt-5 flex justify-center md:justify-start">
          <SIgnUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
