import Image from "next/image";
import React from "react";
import logoImg from "../../public/assets/finance.svg";

function StatCard() {
  return (
    <div className="h-[144px] flex items-center px-6 bg-white border border-[#DEDFE0]">
      <div>
        <div className="h-[56px] w-[56px] rounded-full p-1">
          <Image src={logoImg} alt="" />
        </div>
        <div>
          <p className="text-[#7B8086]">My Daily Earnings</p>
          <h3 className="text-lg text-black">$0.00</h3>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
