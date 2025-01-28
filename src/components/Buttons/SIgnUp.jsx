import React from "react";

const SIgnUp = () => {
  return (
    <div className="flex bg-cyan-300 w-fit py-3 px-5 rounded-3xl items-center gap-3 active:bg-cyan-600 hover:bg-cyan-400 cursor-pointer font-bold">
      <button className="text-black">Sign up for the Beta</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>

    
  );
};

export default SIgnUp;
