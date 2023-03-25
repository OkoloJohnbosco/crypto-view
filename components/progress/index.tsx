import React from "react";

function Progress({ value = 10 }: { value?: number }) {
  return (
    <div className="w-full max-w-md h-[10px] rounded-full bg-[#E1E1F0] relative ">
      <div
        className="absolute top-0 left-0 bg-[#2624B5] h-full w-full rounded-full transition-all duration-200 ease-in-out"
        style={{ width: `${value}%` }}
      />
      <div
        className="h-[14px] w-[14px] top-[-2px] rounded-full absolute bg-[#2624B5] shadow-md cursor-pointer transition-all duration-200 ease-in-out"
        style={{ left: `${value - 2}%` }}
      />
    </div>
  );
}

export default Progress;
