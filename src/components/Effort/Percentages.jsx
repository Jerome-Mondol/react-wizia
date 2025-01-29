import React from "react";

const Percentages = () => {
  const percentages = [
    {
      id: 1,
      percent: "32%",
      description: "Improvement in Open Rates",
    },
    {
      id: 2,
      percent: "75%",
      description: "Improvement in Ramp Time",
    },
    {
      id: 3,
      percent: "35%",
      description: "Improvement in Meetings Booked",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 md:gap-12 px-4 md:px-0">
      {percentages.map(({ percent, description, id }) => (
        <div className="flex justify-center items-center flex-col gap-2 text-center" key={id}>
          <h1 className="font-bold text-4xl md:text-5xl text-cyan-400">{percent}</h1>
          <p className="text-white text-lg md:text-xl">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Percentages;
