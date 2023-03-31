"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../public/assets/avatar.svg";
import { LinkProp } from "../sidebar";
import { usePathname } from "next/navigation";

export const links: LinkProp[] = [
  { label: "Dashboard", icon: "Grid", link: "/home" },
  {
    label: "Lend & Borrow",
    icon: "DollarSign",
    link: "/lend-borrow",
  },
  { label: "Trade", icon: "LifeBuoy", link: "/trade" },
  {
    label: "Stake",
    icon: "Layers",
    link: "/stake",
  },
  {
    label: "Governance",
    icon: "Cpu",
    link: "/settings",
  },
];

function Navbar() {
  const pathname = usePathname();

  const headerObj = links?.find((link) => link.link === pathname);
  return (
    <div className="py-7 w-full sticky top-0 z-10 bg-[#FAFAFC]">
      <div className="flex items-center w-full justify-between px-6">
        <h2 className="font-bold text-xl">{headerObj?.label ?? "Home"}</h2>
        <div></div>
        <div className="w-8 h-8 cursor-pointer">
          <Image src={avatar} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
