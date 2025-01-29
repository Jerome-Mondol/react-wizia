import React from "react";
import Icon1 from "../../assets/Vector.svg";
import Icon2 from "../../assets/icon-2.svg";
import Icon3 from "../../assets/icons-3.svg";

const Card = () => {
  const CardData = [
    {
      key: 1,
      img: Icon1,
      title: "You are in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      key: 2,
      img: Icon2,
      title: "Infinitely Scalable",
      description:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      key: 3,
      img: Icon3,
      title: "Incredibly Flexible",
      description:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <div className="card bg-[#002228] text-white px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {CardData.map((data) => (
          <div
            className="card__item flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 p-5 bg-[#01343D] rounded-2xl shadow-lg"
            key={data.key}
          >
            <img src={data.img} alt="" className="w-12 h-12" />
            <h3 className="text-2xl mt-5">{data.title}</h3>
            <p className="text-gray-300 text-lg mt-3">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
