import React from "react";
import Background from "../../assets/BG.png";
import CheckMarks from "./CheckMarks";

const Training = () => {
  return (
    <div className="TrainingBox bg-[#002228] flex justify-center items-center w-full min-h-[80vh] px-6 md:px-0">
      <div
        className="Training w-full md:w-[90%] min-h-[90%] rounded-3xl flex flex-col md:flex-row justify-center md:justify-end items-center md:items-start p-6 md:p-12"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Section */}
        <div className="TrainingText w-full md:w-[60%] text-white text-center md:text-left flex flex-col items-center md:items-start gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">Train your aiDR on your...</h1>
          <h1 className="text-3xl md:text-4xl italic text-cyan-400">preferred email st|</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-400 max-w-lg">
            You’re in control. Train your aiDR on elements of your Marketing strategy.
          </p>

          {/* CheckMarks Component */}
          <div className="CheckMarks mt-6 w-full flex justify-center md:justify-start">
            <CheckMarks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
