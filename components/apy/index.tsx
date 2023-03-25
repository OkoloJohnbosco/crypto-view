import React from "react";
import Progress from "../progress";

function ApySection() {
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <p className="text-xs text-[#1B1E21]">Net APY</p>
        <h3 className="text-2xl text-[#27AE60] font-extrabold">5.64%</h3>
      </div>
      <div className="flex-1 max-w-sm space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#4B525A]">
            Borrow limit used:{" "}
            <span className="font-bold text-[#1B1E21]">30%</span>
          </p>
          <p className="text-xs text-[#4B525A]">
            Max limit: <span className="font-bold text-[#1B1E21]">$30,000</span>
          </p>
        </div>
        <Progress value={50} />
      </div>
    </div>
  );
}

export default ApySection;
