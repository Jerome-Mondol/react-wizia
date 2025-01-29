import React from "react";
import BackgroundRight from "../../assets/Frame 18.png";
import Percentages from "./Percentages"

const EffortCard = () => {
  return (
    <div className="TrainingBox bg-[#002228] flex justify-center items-center w-full min-h-[80vh] px-6 md:px-0">
      <div
        className="Training w-full md:w-[90%] min-h-[90%] rounded-3xl flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start p-6 md:p-12"
        style={{
          backgroundImage: `url(${BackgroundRight})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Section */}
        <div className="TrainingText w-full md:w-[60%] text-white text-center md:text-left flex flex-col items-center md:items-start gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">Allocate effort where your reps <br/> make an inpact..</h1>
          <h1 className="text-3xl md:text-4xl italic text-cyan-400">Let us handle the rest.</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-400 max-w-lg">
          Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
          </p>

          {/* Percentages Component */}
          <div className="CheckMarks mt-6 w-full flex justify-center md:justify-start">
            <Percentages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortCard;
