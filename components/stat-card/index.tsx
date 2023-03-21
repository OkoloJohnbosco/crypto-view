import Image from "next/image";
import React from "react";
import financeImg from "../../public/assets/finance.svg";
import borrowImg from "../../public/assets/borrow.svg";
import supplyImg from "../../public/assets/supply.svg";

interface StatCard {
  img: any;
  text: string;
  price: string;
}

export const stats: StatCard[] = [
  {
    img: financeImg,
    text: "My Daily Earnings",
    price: "0.00",
  },
  {
    img: borrowImg,
    text: "My Borrow Balance",
    price: "0.00",
  },
  {
    img: supplyImg,
    text: "My Supply Balance",
    price: "0.00",
  },
];

function StatCard({ img, text, price }: StatCard) {
  return (
    <div className="h-[130px] flex items-center px-6 bg-white border border-[#DEDFE0] rounded-md">
      <div className="flex items-center space-x-4">
        <div className="h-[56px] w-[56px] rounded-full p-1 bg-[#E8E8F7] ">
          <Image src={img} alt="ddd" />
        </div>
        <div className="space-y-2">
          <p className="text-[#7B8086] text-sm">{text}</p>
          <h3 className="text-lg text-black font-extrabold">${price}</h3>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
