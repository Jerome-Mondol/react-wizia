import React from "react";

const Percentages = () => {
  const percentages = [
    {
      key: 1,
      percent: "32%",
      description: "Improvement in Open Rates",
    },
    {
      key: 2,
      percent: "75%",
      description: "Improvement in Ramp Time",
    },
    {
      key: 3,
      percent: "35%",
      description: "Improvement in Meetings Booked",
    },
  ];

  return (
    <div className="flex mt-10">
      {percentages.map(({ percent, description, id}) => {
        return (
          <div className="flex justify-center items-left flex-col gap-2 px-4" key={id}>
            <h1 className="font-bold text-4xl text-cyan-400">{percent}</h1>
            <p className="text-white text-xl">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Percentages;
