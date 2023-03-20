import Link from "next/link";
import React from "react";
import { Play } from "react-feather";

function Banner() {
  return (
    <div className="bg-[#EFEFF7] rounded-lg px-10 py-8 w-full relative overflow-hidden">
      <div className="absolute h-[360px] w-[360px] rounded-full bg-[#E1E1FD] right-24 top-24" />
      <div className="absolute h-[300px] w-[300px] rounded-full bg-[#D3D3F6C2] right-12 -top-32" />
      <div className="max-w-[450px] space-y-4">
        <h3 className="font-bold text-lg">Cryptview Lend & Borrow</h3>
        <p className="text-sm">
          Unlock Financial Flexibility: Easily Lend and Borrow on a
          Decentralized Platform.{" "}
          <Link
            href="/trade"
            className="underline underline-offset-2 font-bold text-[#2624B5]"
          >
            Learn more
          </Link>
        </p>
        <div className="pt-4">
          <button className="py-3 text-sm font-bold focus:ring-2 outline-none ring-[#2624B577] px-5 space-x-2 rounded-full flex items-center border border-[#2624B5] text-[#2624B5]">
            <span>How it works</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
