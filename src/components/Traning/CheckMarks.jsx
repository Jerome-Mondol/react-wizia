import React from "react";
import Vector from "../../assets/Vector.png";

const CheckMarks = () => {
  const tags = [
    { key: 1, img: Vector, text: "Quick to ramp" },
    { key: 2, img: Vector, text: "Easy to Optimize" },
    { key: 3, img: Vector, text: "Quick to scale up" },
    { key: 4, img: Vector, text: "Works with all your existing tools" },
  ];

  return (
    <div className="CheckMarks flex flex-wrap justify-start gap-4 p-4 w-120 text-cyan-700">
      {tags.map(({ img, text, key }) => (
        <div className="CheckMarks__item flex items-center gap-2 p-2" key={key}>
          <img src={img} alt="Checkmark" className="w-4 h-4" />
          <h3 className="text-sm font-medium">{text}</h3>
        </div>
      ))}
    </div>
  );
};

export default CheckMarks;
