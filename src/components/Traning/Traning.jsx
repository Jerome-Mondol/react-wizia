import React from "react";
import Background from "../../assets/BG.png";
import CheckMarks from "./CheckMarks";

const Training = () => {
  return (
    <div className="TrainingBox bg-[#002228] flex justify-center items-center w-full h-[80vh]">
      <div
        className="Training w-[90%] h-[90%] rounded-3xl flex justify-end"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="TrainingText w-[60%] text-white text-center flex justify-center items-start flex-col">
            <h1 className="text-4xl font-bold">Train your aiDR on your...</h1>
            <h1 className="text-4xl italic text-cyan-400">prefered email st|</h1>
            <p className="mt-5 w-96 text-left text-xl text-gray-400">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

            <div className="CheckMarks mt-10">
                <CheckMarks/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
