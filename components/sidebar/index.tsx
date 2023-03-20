import Image from "next/image";
import React from "react";
import logoImg from "../../public/assets/logo.svg";
import SidebarLink from "../sidebarlink";

export interface LinkProp {
  label: string;
  icon: string;
  link: string;
}

const links: LinkProp[] = [
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
    link: "/settings",
  },
  {
    label: "Governance",
    icon: "Cpu",
    link: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="h-screen bg-white w-[230px] pl-4 pt-10 space-y-12">
      <div>
        <Image src={logoImg} alt="logo" />
      </div>
      <div className="space-y-2">
        {links.map((link) => (
          <SidebarLink key={link.label} link={link} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
