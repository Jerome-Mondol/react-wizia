import React from "react";
import SIgnUp from "../Buttons/SIgnUp";
const Home = () => {
    return (
      <div className="Home flex w-full h-[60vh] text-white justify-left items-center bg-slate-800">
        <div className="Home-part w-fit px-30">
            <h1 className="text-cyan-400 text-2xl">AI SDRs (aiDRs)</h1>
            <h1 className="text-7xl"><span className="font-bold">More</span><span className="italic"> leads,</span> <br/> <span className="font-bold">less</span> <span className="italic"> people.</span></h1>
            <p className="w-96 mt-5 text-gray-400">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <div className="btn mt-5">
            <SIgnUp/>
            </div>
        </div>
      </div>
    );
  };

  export default Home;
